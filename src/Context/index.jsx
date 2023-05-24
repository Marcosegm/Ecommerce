import { createContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {

    // Shopping cart - Increment quantity
    const [count, setCount] = useState(0);

    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen ] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

     //Checkout side menu - Open/Close
     const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen ] = useState(false)
     const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
     const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
      })

    // Shopping Cart - Add products to cart 
    const [cartProducts, setCartProducts] = useState([])

      // Shopping Cart - order
      const [order, setOrder] = useState([])

      // Get Products 
      const [items, setItems] = useState(null);
      useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
      }, [])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount, 
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext, ShoppingCartProvider}