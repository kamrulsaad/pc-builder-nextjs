import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'

const BuilderCategory = ({ category }) => {

    const { products } = useSelector(state => state.builder)

    const thisCategoryProduct = products.find(product => product.category === category.name)

    console.log(thisCategoryProduct)

    return (
        <div className='w-full py-10 shadow-lg flex items-center justify-between px-10 rounded-md border-2 mb-3'>
            <h2 className="text-2xl">{category.name}</h2>
            <div>
                {
                    thisCategoryProduct ? (
                        <div className='flex gap-4'>
                            <Image src={thisCategoryProduct?.image} width={150} height={100} alt="products" />
                            <div>
                                <h3>{thisCategoryProduct?.name}</h3>
                                <p>Price: {thisCategoryProduct?.price}$</p>
                                <p>Category: {thisCategoryProduct?.category}</p>
                                <p>Status: {thisCategoryProduct?.status}</p>
                                <p>Rating: {thisCategoryProduct?.rating}</p>
                            </div>
                        </div>
                    ) : (
                        <Link href={`/builder/${category?.link}`} className="btn btn-primary btn-sm">Select</Link>
                    )
                }
            </div>
        </div>
    )
}

export default BuilderCategory