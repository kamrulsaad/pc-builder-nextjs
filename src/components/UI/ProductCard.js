import { setProduct } from '@/redux/app/buiderSlice'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'

const ProductCard = ({ product, builder }) => {

    const dispatch = useDispatch()

    const router = useRouter()

    const handleAddToBuilder = () => {
        dispatch(setProduct(product))
        router.push('/builder')
    }

    return (
        <div className="card md:w-96 w-80 mx-auto bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <Image src={product?.image} width={250} height={150} alt="products" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product?.name}</h2>
                <div className="badge badge-accent">{product?.category}</div>
                <p>Price: {product?.price}$</p>
                <p>Status: {product?.status}</p>
                <p>Rating: {product?.rating}</p>
                <div className="card-actions">
                    {
                        builder ? (
                            <button onClick={handleAddToBuilder} className="btn btn-primary btn-sm">Add To Builder</button>) :
                            <Link href={`/products/${product?._id}`} className="btn btn-primary btn-sm">Details</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductCard