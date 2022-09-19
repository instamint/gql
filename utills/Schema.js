const { gql } = require("apollo-server");

const typeDefs = gql`
  type asset {
    xref: String
    instamint_asset_hashid: String
    algorand_assetid: Int
    explorerurl: String
    created_at: String
    mint_completed_status: Boolean
    mint_requestjson: String
    senderpk: String
    clawbackpk: String
    managerpk: String
    freezepk: String
    asset_name: String
    unit_name: String
    default_frozen: Boolean
    total: String
    parties: party

  }
  type party {
    owner: String
    client: String
    custodian: String
    issuer: String
  }
  type Query {
    allAssets: [asset]
    asset(hashid: String): asset
  }
`;

module.exports = typeDefs;
