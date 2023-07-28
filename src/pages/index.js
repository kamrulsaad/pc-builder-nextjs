import RootLayout from "@/components/Layouts/RootLayout"
import ProductCard from "@/components/UI/ProductCard"
import Head from "next/head"
import Image from "next/image"

export default function HomePage({ products }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <div className="hero min-h-[calc(100vh-80px)] shadow-xl">
          <div className="hero-content w-full flex-col lg:flex-row-reverse">
            <Image width={700} height={500} src="/assets/monitor/monitor2.jpeg" className="max-w-sm rounded-lg"  alt=""/>
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold">Welcome</h1>
              <p className="py-6">
                Your favourite place for all your tech need
              </p>
            </div>
          </div>
        </div>
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

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const shuffledData = [...data.data];

  shuffleArray(shuffledData);

  const randomData = shuffledData.slice(0, 6);

  return {
    props: {
      products: randomData,
    },
  };
};


