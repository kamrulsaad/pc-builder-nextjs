import RootLayout from '@/components/Layouts/RootLayout'
import BuilderCategory from '@/components/UI/BuilderCategory'
import { displayCategories } from '@/constants'
import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'

const BuilderPage = () => {

    const { products } = useSelector(state => state.builder)

    return (
        <>
            <Head>
                <title>Builder</title>
            </Head>
            <div className='my-10'>
                <button disabled={products?.length < 5} className='btn btn-sm mb-4 block ml-auto btn-primary'>Complete build</button>
                {
                    displayCategories.map((category, index) => <BuilderCategory key={index} category={category} />)
                }
            </div>
        </>
    )
}

export default BuilderPage

BuilderPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}