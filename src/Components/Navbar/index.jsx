import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const NavBar = () => {

    const activeStyle = 'underline underline-offset-4'
    const context = useContext(ShoppingCartContext)

    const NavBar1 = [
        {
            to: '/',
            text: 'All',
            className: '',
            onClick: '',
           
        },
        {
            to: '/clothes',
            text: 'Clothes',
            className: '',
            onClick: 'clothes',
           
        },
        {
            to: '/electronics',
            text: 'Electronics',
            className: '',
            onClick: 'electronics',
           
        },
        {
            to: '/furnitures',
            text: 'Furnitures',
            className: '',
            onClick: 'furnitures',
           
        },
        {
            to: '/toys',
            text: 'Toys',
            className: '',
            onClick: 'toys',
           
        },
        {
            to: '/others',
            text: 'Others',
            className: '',
            onClick: 'others',
           
        },
    ]
    
    const NavBar2 = [
        {
            to: '/my-orders',
            text: 'My Orders',
            className: '',
           
        },
        {
            to: '/my-account',
            text: 'My Account',
            className: '',
           
        },
        {
            to: '/sign-in',
            text: 'Sign In',
            className: '',
           
        },
    ]

   

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
            <ul className="flex items-center gap-3">

                <li className="font-semibold text-lg">
                    <NavLink 
                    to='/'
                    onClick={() => context.setSearchByCategory('')}
                    >
                        Shopi
                    </NavLink>
                </li>

                {NavBar1.map(link => (                    
                    <li 
                        key={link.text}
                        className={link.className}
                    >
                        <NavLink 
                            to={link.to}
                            className= {({ isActive })=> isActive ? activeStyle : undefined }
                            onClick={() => context.setSearchByCategory(link.onClick)}
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>  
            <ul className="flex items-center gap-3">

                <li className="text-black/60">
                    Marcos@gmail.com
                </li>

                {NavBar2.map(link => (
                    <li 
                        key={link.text}
                        className={link.className}
                    >
                        <NavLink 
                            to={link.to}
                            className={({ isActive })=> isActive ? activeStyle : undefined }
                        >
                            {link.text}
                        </NavLink>
                    </li>
                    
                ))}
                <li className="flex items-center">
                    <ShoppingBagIcon className="h-6 w-6 text-black"/> 
                    <div>{context.cartProducts.length}</div>
                </li>
            </ul>  
        </nav>
    )
}

export {NavBar}