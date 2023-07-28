import RootLayout from '@/components/Layouts/RootLayout'
import ProductCard from '@/components/UI/ProductCard'
import React from 'react'

const CategoryPage = ({products}) => {
    return (
        <div>
            <h2 className="text-2xl text-center">Featured Products</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 my-10">
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    )
}

export default CategoryPage

CategoryPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}

