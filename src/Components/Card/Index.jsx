import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

const Card = (props) => {

    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        context.setCount(context.count +1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        console.log(context.cartProducts)
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if ( isInCart ) {
            return (
            <div 
                className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
            >
                <CheckIcon
                className="h-6 w-6 text-white"
                        
                    />
            </div>

            )
        } else {
            return (
            <div 
                className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                onClick={(event) => addProductsToCart(event, props.data)}
            >
                <PlusIcon
                    className="h-6 w-6 text-black"   
                />
            </div>
            )
        }

       
    }

    return (
        <div
         className='bg-white cursor-pointer w-56 h-60 rounded-lg'
         onClick={() => showProduct(props.data)}
         >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{props.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={props.data.images[1]} alt={props.data.title}/>
                {renderIcon(props.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{props.data.title}</span>
                <span className="text-lg font-medium">$ {props.data.price}</span>
            </p>
        </div>
    )
}

export {Card}