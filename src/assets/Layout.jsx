import Footer from "../component/Footer"
import Header from "../component/header"
import Main from "../component/Main/Main"
import { ShoppingCartModal } from "../component/ShoppingCartModal"


function Layout(){
    return (
        <div className="bg-[#171923]">

        
            <Header/>
            <Main/>
            <Footer/>
         
      
        </div>
    )
}
export default Layout