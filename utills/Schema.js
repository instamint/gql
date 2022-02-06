const { gql } = require('apollo-server');

const typeDefs = gql`
  type asset {
        b2bcross_referenceid: Float,
        uuid: String,
        created_at: String,
        active: Boolean,
        ask: String,
        best_bid: String,
        block_explorerurl: String,
        ipfs_meta_dataurl: String,
        metadata: String,
        mint_completed_status: Boolean,
        mint_requestjson: String,
        tokenid: Int,
        transaction_receiptjson: String,
        bidder_id: Float,
        client_id: Float,
        contract_id: Float,
        custodian_id: Float,

  }
  type Query {
    allAssets: [asset],
    Asset(uuid: String): asset,
  }
`;

module.exports = typeDefs;