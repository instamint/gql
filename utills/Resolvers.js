const knex = require("./Connection");
const resolvers = {
  Query: {
    allAssets: () => {
      const query = knex
      .from("public")
      .from("asset")
      .join("algorand_asset", function () {
        this.on(function () {
          this.on("asset.id", "=", "algorand_asset.asset_id");
        });
      })
      .select("*");

      return query.then((data) => {
        return data;
      });
    },
    asset: async (_, { hashid }) => {
      const query = knex
        .from("public")
        .from("asset")
        .join("algorand_asset", function () {
          this.on(function () {
            this.on("asset.id", "=", "algorand_asset.asset_id");
          });
        })
        .where({ instamint_asset_hashid: hashid })     
        .select("*");

        // const AllRecords = await knex
        // .from("public")
        // .from("asset")
        // .join("contract", function () {
        //   this.on(function () {
        //     this.on("asset.contract_id", "=", "contract.id");
        //   });
        // })
        // .join("chain", function () {
        //   this.on(function () {
        //     this.on("contract.chain_id", "=", "chain.id");
        //   });
        // })
        // .select("asset.*");

      // console.log(AllRecords);

      return query.then(async (data) => {
        let partyDataa;
        const [partyowner] = await knex
          .select("name")
          .from("public")
          .from("party")
          .where({ id: data[0].owner_id });
        // const [partyclient] = await knex
        //   .select("name")
        //   .from("public")
        //   .from("party")
        //   .where({ id: data[0].client_id });
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

        const partyObj = {
          owner: partyowner.name,
          //client: partyclient.name,
          custodian: partycont.name,
          issuer: partyissu.name,
        };

        data[0].parties = partyObj;

        return data[0];
      });
    },
  },
};
module.exports = resolvers;
