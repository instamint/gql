const { gql } = require("apollo-server");

const typeDefs = gql`
  type orderbook {
    bidder_name: String
    bidder_id: Float
    best_bid: Float
    ask: String
  }
  type contrct {
    short_name: String
    address: String
    last_used_token_id: Float
    description: String
  }
  type party {
    owner: String
    client: String
    custodian: String
    issuer: String
  }
  type asset {
    b2bcross_referenceid: Float
    uuid: String
    created_at: String
    active: Boolean
    ask: String
    best_bid: String
    block_explorerurl: String
    ipfs_meta_dataurl: String
    metadata: String
    mint_completed_status: Boolean
    mint_requestjson: String
    tokenid: Int
    transaction_receiptjson: String
    order_book: orderbook
    contract: contrct
    parties: party
    bidder_id: Float
    client_id: Float
    contract_id: Float
    custodian_id: Float
  }
  type Query {
    allAssets: [asset]
    asset(uuid: String): asset
  }
`;

module.exports = typeDefs;
