const knex = require("./Connection");
const resolvers = {
  Query: {
    allAssets: () => {
      const query = knex.select("*").from("public").from("asset");

      return query.then((data) => {
        return data;
      });
    },
    asset: async (_, { uuid }) => {
      const query = knex
        .select("*")
        .from("public")
        .from("asset")
        .where({ uuid: uuid });

      const AllRecords = await knex
        .from("public")
        .from("asset")
        .join("contract", function () {
          this.on(function () {
            this.on("asset.contract_id", "=", "contract.id");
          });
        })
        .join("chain", function () {
          this.on(function () {
            this.on("contract.chain_id", "=", "chain.id");
          });
        })
        .select("asset.*");

      // console.log(AllRecords);

      return query.then(async (data) => {

        let partyDataa;


        if(data[0].bidder_id == null){
          partyDataa = {name: "null"}
        }
        else{
          [partyDataa] = await knex
          .select("name")
          .from("public")
          .from("party")
          .where({ id: data[0].bidder_id });  
        }

        const [contract] = await knex
          .select("*")
          .from("public")
          .from("contract")
          .where({ id: data[0].contract_id });
        const [partyowner] = await knex
          .select("name")
          .from("public")
          .from("party")
          .where({ id: data[0].owner_id });
        const [partyclient] = await knex
          .select("name")
          .from("public")
          .from("party")
          .where({ id: data[0].client_id });
        const [partycont] = await knex
          .select("name")
          .from("public")
          .from("party")
          .where({ id: data[0].custodian_id });
        const [partyissu] = await knex
          .select("name")
          .from("public")
          .from("party")
          .where({ id: data[0].issuer_id });

        const order_book = {
          bidder_name: partyDataa.name,
          bidder_id: data[0].bidder_id,
          best_bid: data[0].best_bid,
          ask: data[0].ask,
        };
        const contractObj = {
          short_name: contract.short_name,
          address: contract.address,
          last_used_token_id: contract.last_used_tokenid,
          description: contract.description,
        };
        const partyObj = {
          owner: partyowner.name,
          client: partyclient.name,
          custodian: partycont.name,
          issuer: partyissu.name,
        };

        data[0].order_book = order_book;
        data[0].contract = contractObj;
        data[0].parties = partyObj;

        return data[0];
      });
    },
  },
};
module.exports = resolvers;
