// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  OrgGroupCreatedRequest,
  OrgGroupRequest,
  OrgGroupRequestStatuses,
  OrgsStatuses,
} from '@/api/modules/orgs'

export const DUMMY_ORG_GROUP_REQUESTS: OrgGroupRequest[] = [
  {
    id: '9d6a5063-684e-4ab4-b49a-82cdceadf63f',
    type: 'requests',
    org_id: '3a798290-caf1-496a-a7e5-4db32551b13d',
    group_id: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
    user_did: 'did:iden3:tP2Yx51N98d7E5M84SGnyzmaGWqRz4oUcHQSGAgyg',
    credential_requests: [
      {
        credential_schema:
          'https://ipfs.rarimo.com/ipfs/QmcMsGMDZKqPByB6h4edZaWHj64q9tbvSdxdLVZX56mGUc',
        credential_subject: {
          id: '3a798290-caf1-496a-a7e5-4db32551b13d',
          type: 'EmployeePosition',
          position: '',
          groupID: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
        },
        type: '',
        expiration: '',
        mt_proof: true,
        signature_proof: true,
      },
    ],
    status: {
      name: 'created',
      value: OrgGroupRequestStatuses.Created,
    },
    created_at: '2021-08-12T14:00:00Z',
    updated_at: '2021-08-12T13:00:00Z',
    organization: {
      id: '3a798290-caf1-496a-a7e5-4db32551b13d',
      type: 'organizations',
      did: 'did:iden3:readonly:tUDjWxnVJNi7t3FudukqrUcNwF5KVGoWgim5pp2jV',
      domain: 'organization-domain.com',
      metadata: {
        logoUrl: 'https://logo.url',
        name: 'Organization Name',
        description: 'Organization Description',
      },
      status: {
        name: 'unverified',
        value: OrgsStatuses.Verified,
      },
      verification_code: '6A4GSfUNKwM9hHuZVg4aUw==',
      issued_claims_count: '0',
      members_count: '1',
      created_at: '2021-08-12T12:00:00Z',
      updated_at: '2021-08-12T13:00:00Z',
    },
  },
  {
    id: '9d6a5063-684e-4ab4-b49a-82cdceadf63f',
    type: 'requests',
    org_id: '3a798290-caf1-496a-a7e5-4db32551b13d',
    group_id: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
    user_did: 'did:iden3:tP2Yx51N98d7E5M84SGnyzmaGWqRz4oUcHQSGAgyg',
    credential_requests: [
      {
        credential_schema:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json',
        credential_subject: {
          id: '3a798290-caf1-496a-a7e5-4db32551b13d',
          type: 'KYCAgeCredential',
          KYCAgeCredential: '1704810332',
          groupID: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
        },
        type: '',
        expiration: '',
        mt_proof: true,
        signature_proof: false,
      },
    ],
    status: {
      name: 'created',
      value: OrgGroupRequestStatuses.Created,
    },
    created_at: '2021-08-12T14:00:00Z',
    updated_at: '2021-08-12T13:00:00Z',
    organization: {
      id: '3a798290-caf1-496a-a7e5-4db32551b13d',
      type: 'organizations',
      did: 'did:iden3:readonly:tUDjWxnVJNi7t3FudukqrUcNwF5KVGoWgim5pp2jV',
      domain: 'organization-domain.com',
      metadata: {
        logoUrl: 'https://logo.url',
        name: 'Organization Name',
        description: 'Organization Description',
      },
      status: {
        name: 'unverified',
        value: OrgsStatuses.Verified,
      },
      verification_code: '6A4GSfUNKwM9hHuZVg4aUw==',
      issued_claims_count: '0',
      members_count: '1',
      created_at: '2021-08-12T12:00:00Z',
      updated_at: '2021-08-12T13:00:00Z',
    },
  },
  {
    id: '9d6a5063-684e-4ab4-b49a-82cdceadf63f',
    type: 'requests',
    org_id: '3a798290-caf1-496a-a7e5-4db32551b13d',
    group_id: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
    user_did: 'did:iden3:tP2Yx51N98d7E5M84SGnyzmaGWqRz4oUcHQSGAgyg',
    credential_requests: [
      {
        credential_schema:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json',
        credential_subject: {
          id: '3a798290-caf1-496a-a7e5-4db32551b13d',
          type: 'KYCAgeCredential',
          KYCAgeCredential: '1704810332',
          groupID: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
        },
        type: '',
        expiration: '',
        mt_proof: true,
        signature_proof: false,
      },
    ],
    status: {
      name: 'created',
      value: OrgGroupRequestStatuses.Created,
    },
    created_at: '2021-08-12T14:00:00Z',
    updated_at: '2021-08-12T13:00:00Z',
    organization: {
      id: '3a798290-caf1-496a-a7e5-4db32551b13d',
      type: 'organizations',
      did: 'did:iden3:readonly:tUDjWxnVJNi7t3FudukqrUcNwF5KVGoWgim5pp2jV',
      domain: 'organization-domain.com',
      metadata: {
        logoUrl: 'https://logo.url',
        name: 'Organization Name',
        description: 'Organization Description',
      },
      status: {
        name: 'unverified',
        value: OrgsStatuses.Verified,
      },
      verification_code: '6A4GSfUNKwM9hHuZVg4aUw==',
      issued_claims_count: '0',
      members_count: '1',
      created_at: '2021-08-12T12:00:00Z',
      updated_at: '2021-08-12T13:00:00Z',
    },
  },
  {
    id: '9d6a5063-684e-4ab4-b49a-82cdceadf63f',
    type: 'requests',
    org_id: '3a798290-caf1-496a-a7e5-4db32551b13d',
    group_id: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
    user_did: 'did:iden3:tP2Yx51N98d7E5M84SGnyzmaGWqRz4oUcHQSGAgyg',
    credential_requests: [
      {
        credential_schema:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json',
        credential_subject: {
          id: '3a798290-caf1-496a-a7e5-4db32551b13d',
          type: 'KYCAgeCredential',
          KYCAgeCredential: '1704810332',
          groupID: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
        },
        type: '',
        expiration: '',
        mt_proof: true,
        signature_proof: false,
      },
    ],
    status: {
      name: 'approved',
      value: OrgGroupRequestStatuses.Approved,
    },
    created_at: '2021-08-12T14:00:00Z',
    updated_at: '2021-08-12T13:00:00Z',
    organization: {
      id: '3a798290-caf1-496a-a7e5-4db32551b13d',
      type: 'organizations',
      did: 'did:iden3:readonly:tUDjWxnVJNi7t3FudukqrUcNwF5KVGoWgim5pp2jV',
      domain: 'organization-domain.com',
      metadata: {
        logoUrl: 'https://logo.url',
        name: 'Organization Name',
        description: 'Organization Description',
      },
      status: {
        name: 'unverified',
        value: OrgsStatuses.Verified,
      },
      verification_code: '6A4GSfUNKwM9hHuZVg4aUw==',
      issued_claims_count: '0',
      members_count: '1',
      created_at: '2021-08-12T12:00:00Z',
      updated_at: '2021-08-12T13:00:00Z',
    },
  },
  {
    id: '9d6a5063-684e-4ab4-b49a-82cdceadf63f',
    type: 'requests',
    org_id: '3a798290-caf1-496a-a7e5-4db32551b13d',
    group_id: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
    user_did: 'did:iden3:tP2Yx51N98d7E5M84SGnyzmaGWqRz4oUcHQSGAgyg',
    credential_requests: [
      {
        credential_schema:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json',
        credential_subject: {
          id: '3a798290-caf1-496a-a7e5-4db32551b13d',
          type: 'KYCAgeCredential',
          KYCAgeCredential: '1704810332',
          groupID: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
        },
        type: '',
        expiration: '',
        mt_proof: true,
        signature_proof: false,
      },
    ],
    status: {
      name: 'submitted',
      value: OrgGroupRequestStatuses.Submitted,
    },
    created_at: '2021-08-12T14:00:00Z',
    updated_at: '2021-08-12T13:00:00Z',
    organization: {
      id: '3a798290-caf1-496a-a7e5-4db32551b13d',
      type: 'organizations',
      did: 'did:iden3:readonly:tUDjWxnVJNi7t3FudukqrUcNwF5KVGoWgim5pp2jV',
      domain: 'organization-domain.com',
      metadata: {
        logoUrl: 'https://logo.url',
        name: 'Organization Name',
        description: 'Organization Description',
      },
      status: {
        name: 'unverified',
        value: OrgsStatuses.Verified,
      },
      verification_code: '6A4GSfUNKwM9hHuZVg4aUw==',
      issued_claims_count: '0',
      members_count: '1',
      created_at: '2021-08-12T12:00:00Z',
      updated_at: '2021-08-12T13:00:00Z',
    },
  },
  {
    id: '9d6a5063-684e-4ab4-b49a-82cdceadf63f',
    type: 'requests',
    org_id: '3a798290-caf1-496a-a7e5-4db32551b13d',
    group_id: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
    user_did: 'did:iden3:tP2Yx51N98d7E5M84SGnyzmaGWqRz4oUcHQSGAgyg',
    credential_requests: [
      {
        credential_schema:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json',
        credential_subject: {
          id: '3a798290-caf1-496a-a7e5-4db32551b13d',
          type: 'KYCAgeCredential',
          KYCAgeCredential: '1704810332',
          groupID: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
        },
        type: '',
        expiration: '',
        mt_proof: true,
        signature_proof: false,
      },
    ],
    status: {
      name: 'submitted',
      value: OrgGroupRequestStatuses.Submitted,
    },
    created_at: '2021-08-12T14:00:00Z',
    updated_at: '2021-08-12T13:00:00Z',
    organization: {
      id: '3a798290-caf1-496a-a7e5-4db32551b13d',
      type: 'organizations',
      did: 'did:iden3:readonly:tUDjWxnVJNi7t3FudukqrUcNwF5KVGoWgim5pp2jV',
      domain: 'organization-domain.com',
      metadata: {
        logoUrl: 'https://logo.url',
        name: 'Organization Name',
        description: 'Organization Description',
      },
      status: {
        name: 'unverified',
        value: OrgsStatuses.Verified,
      },
      verification_code: '6A4GSfUNKwM9hHuZVg4aUw==',
      issued_claims_count: '0',
      members_count: '1',
      created_at: '2021-08-12T12:00:00Z',
      updated_at: '2021-08-12T13:00:00Z',
    },
  },
  {
    id: '9d6a5063-684e-4ab4-b49a-82cdceadf63f',
    type: 'requests',
    org_id: '3a798290-caf1-496a-a7e5-4db32551b13d',
    group_id: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
    user_did: 'did:iden3:tP2Yx51N98d7E5M84SGnyzmaGWqRz4oUcHQSGAgyg',
    credential_requests: [
      {
        credential_schema:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json',
        credential_subject: {
          id: '3a798290-caf1-496a-a7e5-4db32551b13d',
          type: 'KYCAgeCredential',
          KYCAgeCredential: '1704810332',
          groupID: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
        },
        type: '',
        expiration: '',
        mt_proof: true,
        signature_proof: false,
      },
    ],
    status: {
      name: 'filled',
      value: OrgGroupRequestStatuses.Filled,
    },
    created_at: '2021-08-12T14:00:00Z',
    updated_at: '2021-08-12T13:00:00Z',
    organization: {
      id: '3a798290-caf1-496a-a7e5-4db32551b13d',
      type: 'organizations',
      did: 'did:iden3:readonly:tUDjWxnVJNi7t3FudukqrUcNwF5KVGoWgim5pp2jV',
      domain: 'organization-domain.com',
      metadata: {
        logoUrl: 'https://logo.url',
        name: 'Organization Name',
        description: 'Organization Description',
      },
      status: {
        name: 'unverified',
        value: OrgsStatuses.Verified,
      },
      verification_code: '6A4GSfUNKwM9hHuZVg4aUw==',
      issued_claims_count: '0',
      members_count: '1',
      created_at: '2021-08-12T12:00:00Z',
      updated_at: '2021-08-12T13:00:00Z',
    },
  },
  {
    id: '9d6a5063-684e-4ab4-b49a-82cdceadf63f',
    type: 'requests',
    org_id: '3a798290-caf1-496a-a7e5-4db32551b13d',
    group_id: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
    user_did: 'did:iden3:tP2Yx51N98d7E5M84SGnyzmaGWqRz4oUcHQSGAgyg',
    credential_requests: [
      {
        credential_schema:
          'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json',
        credential_subject: {
          id: '3a798290-caf1-496a-a7e5-4db32551b13d',
          type: 'KYCAgeCredential',
          KYCAgeCredential: '1704810332',
          groupID: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
        },
        type: '',
        expiration: '',
        mt_proof: true,
        signature_proof: false,
      },
    ],
    status: {
      name: 'filled',
      value: OrgGroupRequestStatuses.Filled,
    },
    created_at: '2021-08-12T14:00:00Z',
    updated_at: '2021-08-12T13:00:00Z',
    organization: {
      id: '3a798290-caf1-496a-a7e5-4db32551b13d',
      type: 'organizations',
      did: 'did:iden3:readonly:tUDjWxnVJNi7t3FudukqrUcNwF5KVGoWgim5pp2jV',
      domain: 'organization-domain.com',
      metadata: {
        logoUrl: 'https://logo.url',
        name: 'Organization Name',
        description: 'Organization Description',
      },
      status: {
        name: 'unverified',
        value: OrgsStatuses.Verified,
      },
      verification_code: '6A4GSfUNKwM9hHuZVg4aUw==',
      issued_claims_count: '0',
      members_count: '1',
      created_at: '2021-08-12T12:00:00Z',
      updated_at: '2021-08-12T13:00:00Z',
    },
  },
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DUMMY_CREATED_REQUEST: OrgGroupCreatedRequest = {
  id: '9d6a5063-684e-4ab4-b49a-82cdceadf63f',
  type: 'invitations-email',
  org_id: '3a798290-caf1-496a-a7e5-4db32551b13d',
  group_id: '6c8c1a69-177e-4754-a4e1-d4a7dbf561e8',
  email: 'yopta@gmail.com',
  req_id: '9d6a5063-684e-4ab4-b49a-82cdceadf63f',
  created_at: '2021-08-12T14:00:00Z',
  request: DUMMY_ORG_GROUP_REQUESTS[0],
  claim_id: '',
}
