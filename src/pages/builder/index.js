import RootLayout from '@/components/Layouts/RootLayout'
import BuilderCategory from '@/components/UI/BuilderCategory'
import { displayCategories } from '@/constants'
import Head from 'next/head'
import React from 'react'

const BuilderPage = () => {
    return (
        <>
            <Head>
                <title>Builder</title>
            </Head>
            <div className='mt-10'>
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