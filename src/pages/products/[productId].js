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
                    <p>Description: {product?.description}</p>
                    <p>Category: {product?.category}</p>
                    <p>Status: {product?.status}</p>
                    <p>Price: {product?.price}$</p>
                    <p>Features:</p>
                    <ul className='pl-4'>
                        {
                            product.features.map((feature, index) => <li key={index}>{feature}</li>)
                        }
                    </ul>
                    <p>Individual Rating: {product?.individualRating}/5</p>
                    <p>Average Rating: {product?.rating}/5</p>
                    <p>Reviews:</p>
                    <ul className='pl-4'>
                        {
                            product.reviews.map((review, index) => <li key={index}>{review.name} - {review.comment}</li>)
                        }
                    </ul>
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