import Image from 'next/image'
import React from 'react'

const ProductDetails = ({product}) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><Image width={300} height={300} src={product?.image} alt="Product" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product?.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails