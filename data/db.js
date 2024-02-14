/*
const { MongoClient, ServerApiVersion } = require("mongodb");
// Replace the placeholder with your Atlas connection string
require("dotenv").config({ path: __dirname + "/../.variables.env" });
const uri = process.env.DATABASE;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("fear_master_api").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
*/
const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/../.variables.env" });

module.exports.run = () => {
    mongoose.set("strictQuery", false); 
    mongoose.set('useNewUrlParser', true);

    mongoose
        .connect(process.env.DATABASE)
        .then(function () {
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        })
        .catch(function (err) {
            console.log("error", err);
        })
};
//run().catch(console.dir);