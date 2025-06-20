import { FormControl, FormHelperText, FormLabel, MenuItem, Select, Stack } from '@mui/material'
import { ComponentProps, ReactNode, useId, useMemo } from 'react'

import { Icons } from '@/constants/icons'

import UiIcon from './UiIcon'

type Props = Omit<ComponentProps<typeof Select<string>>, 'error'> & {
  options: {
    value: string
    label: string
    adornmentLeft?: ReactNode
    adornmentRight?: ReactNode
  }[]
  errorMessage?: string
}

export default function UiSelect({ options, label, errorMessage, ref, ...rest }: Props) {
  const id = useId()
  const labelId = useMemo(() => rest.labelId ?? `${id}-label`, [id, rest.labelId])

  return (
    <FormControl fullWidth error={!!errorMessage}>
      {label && (
        <FormLabel id={labelId} sx={{ mb: 2 }}>
          {label}
        </FormLabel>
      )}

      <Select
        {...rest}
        ref={ref}
        id={id}
        labelId={labelId}
        value={rest.value || ''}
        IconComponent={() => <UiIcon name={Icons.CarretDown} size={4} sx={{ mr: 4 }} />}
      >
        {options.map(({ value, label, adornmentLeft, adornmentRight }, idx) =>
          rest.native ? (
            <option key={idx} value={value}>
              {label}
            </option>
          ) : (
            <MenuItem key={idx} value={value}>
              <Stack
                direction='row'
                spacing={1}
                flex={1}
                alignItems='center'
                justifyContent='flex-start'
                typography='body3'
              >
                {adornmentLeft}
                {label}
                {adornmentRight}
              </Stack>
            </MenuItem>
          ),
        )}
      </Select>

      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  )
}
