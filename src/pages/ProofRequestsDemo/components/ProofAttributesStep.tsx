import { zodResolver } from '@hookform/resolvers/zod'
import { Button, FormControl, IconButton, Stack, Tooltip } from '@mui/material'
import { ZkPassport } from '@rarimo/zk-passport'
import { useCallback, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { config } from '@/config'
import { countries } from '@/constants/countries'
import { Icons } from '@/constants/icons'
import { ErrorHandler } from '@/services/error-handler'
import { UiIcon, UiSelect, UiSwitch, UiTextField } from '@/ui'

import StepView from './StepView'

const zkPassport = new ZkPassport(config.API_URL)

const formSchema = z.object({
  uniqueness: z.boolean(),
  minimumAge: z.union([z.number().int().positive(), z.nan()]).optional(),
  nationality: z.string().optional(),
  nationalityCheck: z.boolean(),
  eventId: z.string().nonempty(),
})

type FormValues = z.infer<typeof formSchema>

export default function ProofAttributesStep({
  userId,
  onSubmit,
}: {
  userId: string
  onSubmit: (verificationLink: string) => void
}) {
  const [isFormDisabled, setIsFormDisabled] = useState(false)

  const generateRandomEventId = useCallback(() => {
    // string of 20 random digits but not started from 0
    return (
      (Math.floor(Math.random() * 9) + 1).toString() +
      Array.from({ length: 19 }, () => Math.floor(Math.random() * 10)).join('')
    )
  }, [])

  const { formState, control, register, handleSubmit, setValue } = useForm({
    mode: 'onTouched',
    defaultValues: {
      uniqueness: false,
      minimumAge: 18,
      nationality: '',
      nationalityCheck: false,
      eventId: generateRandomEventId(),
    },
    resolver: zodResolver(formSchema),
  })

  const submit: SubmitHandler<FormValues> = useCallback(
    async formData => {
      setIsFormDisabled(true)

      try {
        const verificationLink = await zkPassport.requestVerificationLink(userId, {
          ageLowerBound: formData.minimumAge,
          uniqueness: formData.uniqueness,
          nationality: formData.nationality,
          eventId: formData.eventId,
          nationalityCheck: formData.nationalityCheck,
        })

        onSubmit(verificationLink)
      } catch (error) {
        ErrorHandler.process(error)
      }

      setIsFormDisabled(false)
    },
    [userId, onSubmit],
  )

  return (
    <StepView title='Step 1/3' subtitle='Create verification request for the proof'>
      <Stack component='form' spacing={4} onSubmit={handleSubmit(submit)}>
        <FormControl>
          <UiSwitch {...register('uniqueness')} label='Uniqueness' disabled={isFormDisabled} />
        </FormControl>
        <FormControl>
          <UiSwitch
            {...register('nationalityCheck')}
            label='Reveal Nationality'
            disabled={isFormDisabled}
          />
        </FormControl>

        <FormControl>
          <UiTextField
            {...register('minimumAge', { valueAsNumber: true })}
            type='number'
            label='Minimum Age'
            errorMessage={formState.errors.minimumAge?.message}
            disabled={isFormDisabled}
          />
        </FormControl>

        <Controller
          name='nationality'
          control={control}
          render={({ field }) => (
            <UiSelect
              {...field}
              native
              label='Nationality'
              options={[
                { value: '', label: 'Select your country' },
                ...countries.map(country => ({
                  value: country.code,
                  label: `${country.name} ${country.flag}`,
                })),
              ]}
              errorMessage={formState.errors.nationality?.message}
              disabled={isFormDisabled}
            />
          )}
        />

        <FormControl>
          <UiTextField
            {...register('eventId')}
            label='Event ID'
            placeholder=''
            slotProps={{
              input: {
                endAdornment: (
                  <Tooltip enterDelay={300} title='Generate random event ID'>
                    <IconButton
                      color='secondary'
                      onClick={() => setValue('eventId', generateRandomEventId())}
                    >
                      <UiIcon name={Icons.ResetLeftLine} size={5} />
                    </IconButton>
                  </Tooltip>
                ),
              },
            }}
            errorMessage={formState.errors.eventId?.message}
            disabled={isFormDisabled}
          />
        </FormControl>

        <Button disabled={isFormDisabled} type='submit'>
          {isFormDisabled ? 'Requesting...' : 'Request Verification'}
        </Button>
      </Stack>
    </StepView>
  )
}
