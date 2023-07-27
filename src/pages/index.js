import RootLayout from "@/components/Layouts/RootLayout"

export default function HomePage() {
  return (
    <h1>Home Page</h1>
  )
}

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}