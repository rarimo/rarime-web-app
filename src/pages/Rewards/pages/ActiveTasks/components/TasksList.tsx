import { Stack, Typography, useTheme } from '@mui/material'

export default function TasksList() {
  const { palette } = useTheme()

  return (
    <Stack
      p={6}
      spacing={6}
      bgcolor={palette.background.light}
      border={1}
      borderColor={palette.additional.layerBorder}
      borderRadius={4}
    >
      <Typography variant='subtitle3'>Active tasks</Typography>
    </Stack>
  )
}
