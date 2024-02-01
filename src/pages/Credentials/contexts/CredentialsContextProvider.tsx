import { CircularProgress } from '@mui/material'
import { createContext, PropsWithChildren, useContext } from 'react'

import {
  groupVCsToOrgGroups,
  loadRequestsByUserDid,
  OrgGroupRequestWithClaims,
  OrgGroupVCMap,
} from '@/api/modules/orgs'
import { useLoading, useMetamaskZkpSnapContext } from '@/hooks'

type CredentialsContextValue = {
  orgGroupRequests: OrgGroupRequestWithClaims[]
  groupedVCs: OrgGroupVCMap
}

const CredentialsContext = createContext<CredentialsContextValue>({
  orgGroupRequests: [],
  groupedVCs: [],
})

export const CredentialsContextProvider = ({ children }: PropsWithChildren) => {
  // TODO:
  //  load all submitted and created requests
  //  load, parse and filter all credentials loaded from snap

  const { userDid, getCredentials } = useMetamaskZkpSnapContext()

  const {
    data: { orgGroupRequests, groupedVCs },
    isLoading,
    isLoadingError,
  } = useLoading<{
    orgGroupRequests: OrgGroupRequestWithClaims[]
    groupedVCs: OrgGroupVCMap
  }>(
    {
      orgGroupRequests: [],
      groupedVCs: [],
    },
    async () => {
      {
        const [orgGroupRequests, vcs] = await Promise.all([
          loadRequestsByUserDid(userDid),
          getCredentials(),
        ])

        const groupedVCs = groupVCsToOrgGroups(orgGroupRequests, vcs)

        return { orgGroupRequests, groupedVCs }
      }
    },
    {
      loadOnMount: !!userDid,
      loadArgs: [getCredentials, userDid],
    },
  )

  if (isLoading) return <CircularProgress color={'secondary'} />

  if (isLoadingError) return <></>

  return (
    <CredentialsContext.Provider
      value={{
        orgGroupRequests,
        groupedVCs,
      }}
    >
      {children}
    </CredentialsContext.Provider>
  )
}

export const useCredentialsContext = () => {
  return {
    ...useContext(CredentialsContext),
  }
}
