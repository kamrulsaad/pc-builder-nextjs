import RootLayout from '@/components/Layouts/RootLayout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const ProductDetailsPage = ({ product }) => {
    return (
        <>
            <Head>
                <title>{product?.name}</title>
            </Head>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><Image width={300} height={300} src={product?.image} alt="Product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product?.name}</h2>
                    <p>{product?.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailsPage

ProductDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}

export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:3000/api/products`)
    const product = await res.json()

    const paths = product.data.map((product) => ({
        params: { productId: product._id },
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
    const { productId } = params
    const res = await fetch(`http://localhost:3000/api/products/${productId}`)
    const product = await res.json()

    return {
        props: {
            product: product.data,
        },
    }
}