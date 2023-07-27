import RootLayout from "@/components/Layouts/RootLayout"

export default function HomePage() {

  return (
    <div>
      Hello
    </div>
  )
}

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}

