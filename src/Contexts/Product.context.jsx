import React, {useState, useEffect, useContext, createContext} from 'react';

const ProductContext = createContext({
    products: [],
});

export const useProducts = () => useContext(ProductContext)

export default function ProductContextProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5174/products.json')
        .then((response) => response.json())
        .then((result) => {
            if(result.success) {
                setProducts(result.data);
            }
        }).catch((err) => console.log(err))
    }, []);


    return <ProductContext.Provider value={{
        products
    }}>
        {children}     
    </ProductContext.Provider>
}