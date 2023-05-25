import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card/Index"
import { ProductDetail } from "../../Components/ProductDetail"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Home =() => {

  const context = useContext(ShoppingCartContext)

  const renderView = () => {
  
      if ( context.filteredItems?.length > 0 ) {
        return (
          context.filteredItems?.map(item => (
            <Card
              data={item}
              key={item.id}
              />
          ))       
          )
      } else {
        return (
          <p> We don´t have anything </p>
        )
      }
    
  }

  return (
    <Layout >
      <div className="flex w-80 justify-center items-center relative mb-4">
            <h1 className="font-medium text-xl ">Home</h1>
      </div>
      <input 
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(e) => context.setSearchByTitle(e.target.value)} />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
        {renderView()}
      </div>
      <ProductDetail/>
    </Layout>
    )
  }
  
  export { Home }
  