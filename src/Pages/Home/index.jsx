import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card/Index"
import { ProductDetail } from "../../Components/ProductDetail"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Home =() => {

  const context = useContext(ShoppingCartContext)

  return (
    <Layout >
      <div className="flex w-80 justify-center items-center relative mb-4">
            <h1 className="font-medium text-xl ">Home</h1>
        </div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
      {
        context.items?.map(item => (
          <Card
            data={item}
            key={item.id}
            />
        ))
      }
      </div>
      <ProductDetail/>
    </Layout>
    )
  }
  
  export { Home }
  