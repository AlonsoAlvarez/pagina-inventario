import { useState } from "react";
import ProductoContext from "./productoContext";

export default function ProductoProvider({children}) {
    const [ramas, setRamas] = useState(null)
    const [producto, setProducto] = useState(null)

    return (
        <ProductoContext.Provider value={{ramas, setRamas, producto, setProducto}}>
            {children}
        </ProductoContext.Provider>
    )
}