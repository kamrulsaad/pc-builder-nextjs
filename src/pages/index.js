import RootLayout from "@/components/Layouts/RootLayout"
import Image from "next/image"

export default function HomePage({ products }) {

  console.log(products)

  return (
    <div>
      {
        products.map(product => <div key={product.name}>
          <h1>{product.name}</h1>
          <Image src={product.image} width={200} height={200}  alt=""/>
        </div>)
      }
    </div>
  )
}

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}

export const getServerSideProps = async () => {

  const res = await fetch('http://localhost:5000/products')
  const products = await res.json()

  return {
    props: {
      products
    }
  }
}
