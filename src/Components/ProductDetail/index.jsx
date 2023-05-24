import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import "./ProductDetail.css"

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext)
    const detail = context.productToShow
    
    return (
        
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon 
                        className="h-6 w-6 text-black cursor-pointer"
                        onClick={() => context.closeProductDetail()}/>
                </div>

            </div>
            <figure className='px-6'>
                <img 
                    className='w-full h-full rounded-lg' 
                    src={detail.images[1]} 
                    alt={detail.title}/>
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${detail.price}</span>
                <span className='font-medium text-md'>${detail.title}</span>
                <span className='font-light text-sm'>${detail.description}</span>
            </p>
        </aside>
        
    )
}

export {ProductDetail}