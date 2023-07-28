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
            const product = await productsCollection.findOne({ _id: req.query.productId });
            res.send({ message: "success", data: product });
        }

    } finally {
    }
}

export default run;