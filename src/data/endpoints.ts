export interface Endpoint {
  method: "GET";
  path: string;
  description: string;
  group: string;
}

export const endpoints: Endpoint[] = [
  // Witnesses
  {
    method: "GET",
    path: "/witnesses",
    description: "Retrieve all witnesses with pagination and sorting",
    group: "Witnesses",
  },
  {
    method: "GET",
    path: "/witnesses/{account-name}",
    description: "Detailed info for a specific witness",
    group: "Witnesses",
  },
  {
    method: "GET",
    path: "/witnesses/{account-name}/voters",
    description: "Accounts voting for a witness",
    group: "Witnesses",
  },
  {
    method: "GET",
    path: "/witnesses/{account-name}/voters/count",
    description: "Voter count for a witness",
    group: "Witnesses",
  },
  {
    method: "GET",
    path: "/witnesses/{account-name}/votes/history",
    description: "Vote history for a witness",
    group: "Witnesses",
  },

  // Accounts
  {
    method: "GET",
    path: "/accounts/{account-name}",
    description: "Account balances and parameters",
    group: "Accounts",
  },
  {
    method: "GET",
    path: "/accounts/{account-name}/authority",
    description: "Cryptographic key authorities",
    group: "Accounts",
  },
  {
    method: "GET",
    path: "/accounts/{account-name}/proxy-power",
    description: "Delegators and vested power",
    group: "Accounts",
  },
  {
    method: "GET",
    path: "/accounts/{account-name}/comment-permlinks",
    description: "Post/comment identifiers",
    group: "Accounts",
  },
  {
    method: "GET",
    path: "/accounts/{account-name}/operations/comments/{permlink}",
    description: "Operations for a post/comment",
    group: "Accounts",
  },

  // Block Search
  {
    method: "GET",
    path: "/block-search",
    description: "Find blocks by operation type, account, time range",
    group: "Block Search",
  },

  // Transactions
  {
    method: "GET",
    path: "/transaction-statistics",
    description: "Aggregated transaction counts by day/month/year",
    group: "Transactions",
  },

  // Utility
  {
    method: "GET",
    path: "/version",
    description: "Application version",
    group: "Utility",
  },
  {
    method: "GET",
    path: "/last-synced-block",
    description: "Most recent synced block number",
    group: "Utility",
  },
  {
    method: "GET",
    path: "/input-type/{input-value}",
    description: "Determine if input is block, hash, or account",
    group: "Utility",
  },
  {
    method: "GET",
    path: "/operation-type-counts",
    description: "Histogram of operation types",
    group: "Utility",
  },
];

/** Ordered group names — determines render order */
export const groupOrder = [
  "Witnesses",
  "Accounts",
  "Block Search",
  "Transactions",
  "Utility",
] as const;
