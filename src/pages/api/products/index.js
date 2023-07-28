const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
    "mongodb+srv://pcbuilder:lIHDo4WA1leTtHbA@cluster0.lsigos1.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run(req, res) {
    try {
        await client.connect();
        const productsCollection = client.db("pc-builder").collection("products");

        if (req.method === "GET") {
            const products = await productsCollection.find().toArray();
            res.send({ message: "success", data: products });
        }

    } finally {
    }
}

export default run;