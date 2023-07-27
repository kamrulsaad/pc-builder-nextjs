import RootLayout from "@/components/Layouts/RootLayout"
import ProductCard from "@/components/UI/ProductCard"
import Head from "next/head"

export default function HomePage() {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <div>
          <h2 className="text-2xl text-center">Featured Products</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-10">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
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

