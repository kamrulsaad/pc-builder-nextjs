import RootLayout from '@/components/Layouts/RootLayout'
import ProductDetails from '@/components/UI/ProductDetails'
import React from 'react'

const ProductDetailsPage = ({ product }) => {
    return (
        < ProductDetails product={product} />)
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