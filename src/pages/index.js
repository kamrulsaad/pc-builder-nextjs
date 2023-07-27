import RootLayout from "@/components/Layouts/RootLayout"
import ProductCard from "@/components/UI/ProductCard"
import Head from "next/head"

export default function HomePage({products}) {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <div>
          <h2 className="text-2xl text-center">Featured Products</h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 my-10">
            {
              products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
          </div>
        </div>
      </main>
    </>
  )
}

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products")
  const data = await res.json()
  return {
    props: {
      products: data.data
    },
    revalidate: 10
  }
}

