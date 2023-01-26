import { containerProps } from "./interface"
import './container.css'

const Container = ({children}:containerProps)  =>{
    
    return (
    <div className="container">
        {children}
    </div>)
}

export default Container
