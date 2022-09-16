const { gql } = require("apollo-server");

const typeDefs = gql`
  type asset {
    xref: String
    hashid: String
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

  }
  type Query {
    allAssets: [asset]
    asset(hashid: String): asset
  }
`;

module.exports = typeDefs;
