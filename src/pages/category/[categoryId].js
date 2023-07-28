import RootLayout from '@/components/Layouts/RootLayout'
import ProductCard from '@/components/UI/ProductCard'
import { categories } from '@/constants'
import Head from 'next/head'
import React from 'react'

const CategoryPage = ({ products, category }) => {
    return (
        <>
            <Head>
                <title>{category}</title>
            </Head>
            <div>
                <h2 className="text-2xl text-center">Category: {category}</h2>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 my-10">
                    {
                        products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div>
            </div>
        </>
    )
}

export default CategoryPage

CategoryPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}

export const getStaticPaths = async () => {
    const paths = categories.map((category) => ({
        params: { categoryId: category },
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
    const { categoryId } = params
    const res = await fetch(`http://localhost:3000/api/category/${categoryId}`)
    const products = await res.json()

    return {
        props: {
            products: products.data,
            category: products.category
        }
    }
}