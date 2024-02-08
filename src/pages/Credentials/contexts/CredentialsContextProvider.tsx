import { W3CCredential } from '@rarimo/rarime-connector'
import { createContext, PropsWithChildren, useContext } from 'react'

import {
  groupVCsToOrgGroups,
  loadRequestsByUserDid,
  OrgGroupRequestWithClaims,
  OrgGroupVCMap,
} from '@/api/modules/orgs'
import { getIssuerDetails, IssuerDetails } from '@/api/modules/zkp'
import { useLoading, useMetamaskZkpSnapContext } from '@/hooks'

type CredentialsContextValue = {
  vcs: W3CCredential[]
  orgGroupRequests: OrgGroupRequestWithClaims[]
  groupedVCs: OrgGroupVCMap
  issuersDetails: Record<string, IssuerDetails>
}

const CredentialsContext = createContext<CredentialsContextValue>({
  vcs: [],
  orgGroupRequests: [],
  groupedVCs: [],
  issuersDetails: {},
})

export const CredentialsContextProvider = ({ children }: PropsWithChildren) => {
  // TODO:
  //  load all submitted and created requests
  //  load, parse and filter all credentials loaded from snap

  const { userDid, getCredentials } = useMetamaskZkpSnapContext()

  const {
    data: { vcs, orgGroupRequests, groupedVCs, issuersDetails },
    isLoading,
    isLoadingError,
  } = useLoading<{
    vcs: W3CCredential[]
    orgGroupRequests: OrgGroupRequestWithClaims[]
    groupedVCs: OrgGroupVCMap
    issuersDetails: Record<string, IssuerDetails>
  }>(
    {
      vcs: [],
      orgGroupRequests: [],
      groupedVCs: [],
      issuersDetails: {},
    },
    async () => {
      {
        const [orgGroupRequests, vcs] = await Promise.all([
          loadRequestsByUserDid(userDid),
          getCredentials(),
        ])

        const groupedVCs = groupVCsToOrgGroups(orgGroupRequests, vcs)

        const issuerDids = vcs.reduce((acc, vc) => {
          if (acc.includes(vc.issuer)) return acc

          return [...acc, vc.issuer]
        }, [] as string[])

        const issuersDetails = (
          await Promise.all(issuerDids.map(issuerDid => getIssuerDetails(issuerDid)))
        ).reduce((acc, issuerDetails) => {
          return {
            ...acc,
            [issuerDetails.did]: issuerDetails,
          }
        }, {})

        return { vcs, orgGroupRequests, groupedVCs, issuersDetails }
      }
    },
    {
      loadOnMount: !!userDid,
      loadArgs: [getCredentials, userDid],
    },
  )

  if (isLoading) return <></>

  if (isLoadingError) return <></>

  return (
    <CredentialsContext.Provider
      value={{
        vcs,
        orgGroupRequests,
        groupedVCs,
        issuersDetails,
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
