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

        let category;

        if (req.method === "GET") {

            switch (req.query.categoryId) {
                case "cpu":
                    category = "CPU";
                    break;
                case "motherboard":
                    category = "Motherboard";
                    break;
                case "ram":
                    category = "RAM";
                    break;
                case "psu":
                    category = "Power Supply Unit";
                    break;
                case "storage":
                    category = "Storage Device";
                    break;
                case "monitor":
                    category = "Monitor";
                    break;
                case "other":
                    category = "Others";
                    break;
                default:
                    category = "CPU";
            }

            const product = await productsCollection.find({ category }).toArray();

            res.send({ message: "success", category, data: product });
        }

    } finally {
    }
}

export default run;