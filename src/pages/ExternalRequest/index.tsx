import { ButtonBase, Paper, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { QRCode } from 'react-qrcode-logo'
import { useLocation } from 'react-router-dom'

import RarimeAppBadges from '@/components/RarimeAppBadges'
import { config } from '@/config'
import { isMobile } from '@/utils/device'

export default function ExternalRequest() {
  const location = useLocation()
  const rarimeLink = `rarime://external${location.search}`

  const openRarimeLink = () => {
    if (isMobile()) {
      window.location.href = rarimeLink
    }
  }

  useEffect(() => {
    if (isMobile()) {
      window.location.href = config.DEFERRED_DEEP_LINK
    }
  }, [])

  return (
    <Paper component={Stack} justifyContent='center' alignItems='center' gap={4}>
      <Typography variant='h6'>Scan with RariMe App</Typography>
      <ButtonBase onClick={openRarimeLink}>
        <QRCode value={rarimeLink} size={200} />
      </ButtonBase>
      <RarimeAppBadges spacing={4} />
    </Paper>
  )
}
