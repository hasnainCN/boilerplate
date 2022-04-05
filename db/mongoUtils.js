const { default: mongoose } = require('mongoose');
var db;
module.exports = {
  connectToDb: () => {
    mongoose.connect(
      'mongodb+srv://hasnainCN:Ha%40309717@cluster0.ga8nt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      (err, client) => {
        if (err) {
          return err;
        } else {
          console.log('......connected to mongoDB......');
          db = client;
          return db;
        }
      }
    );
  },
  getDb: () => {
    return db;
  },
};
