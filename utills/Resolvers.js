const resolvers = {
    Query: {
        Allasset: () => {          
            const query = knex.select('*').from("public").from('asset');
            return query.then(data=>{
              return data;
            });
        },
        Asset: async(_,{uuid}) => {          
          const query = knex.select('*').from("public").from('asset').where({uuid: uuid});
          return query.then(data=>{
            return data[0];
          });
        }
    }
};
module.exports = resolvers;