import { VerificationStatus, ZkPassport } from '@rarimo/zk-passport'
import { useCallback, useEffect, useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { config } from '@/config'

import IntroStep from './components/IntroStep'
import ProofAttributesStep from './components/ProofAttributesStep'
import QrCodeStep from './components/QrCodeStep'
import VerificationStatusStep from './components/VerificationStatusStep'

enum DemoStep {
  Intro,
  ProofAttributes,
  QrCode,
  VerificationStatus,
}

const zkPassport = new ZkPassport(config.API_URL)

export default function ProofRequestsDemo() {
  const [verificationLink, setVerificationLink] = useState('')
  const [step, setStep] = useState<DemoStep>(DemoStep.Intro)
  const [userId, setUserId] = useState<string>(uuid().toString())
  const pollInterval = useRef<number>(-1)
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>('not_verified')

  const checkVerificationStatus = useCallback(async () => {
    try {
      const status = await zkPassport.getVerificationStatus(userId)
      if (status !== 'not_verified') {
        setVerificationStatus(status)
        setStep(DemoStep.VerificationStatus)
      }
    } catch (error) {
      console.error(error)
    }
  }, [userId])

  useEffect(() => {
    if (step === DemoStep.QrCode) {
      pollInterval.current = window.setInterval(checkVerificationStatus, 5000)
    } else {
      pollInterval.current = -1
      window.clearInterval(pollInterval.current)
    }

    return () => {
      window.clearInterval(pollInterval.current)
    }
  }, [step, checkVerificationStatus])

  switch (step) {
    case DemoStep.Intro:
      return <IntroStep onStart={() => setStep(DemoStep.ProofAttributes)} />
    case DemoStep.ProofAttributes:
      return (
        <ProofAttributesStep
          userId={userId}
          onSubmit={verificationLink => {
            setVerificationLink(verificationLink)
            setStep(DemoStep.QrCode)
          }}
        />
      )
    case DemoStep.QrCode:
      return <QrCodeStep link={verificationLink} />
    case DemoStep.VerificationStatus:
      return (
        <VerificationStatusStep
          status={verificationStatus}
          onRetry={() => {
            setVerificationStatus('not_verified')
            setUserId(uuid().toString())
            setVerificationLink('')
            setStep(DemoStep.Intro)
          }}
        />
      )
  }
}
