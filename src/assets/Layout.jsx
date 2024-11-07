import { useEffect, useState } from "react"
import Footer from "../component/Footer"
import Header from "../component/header"
import Main from "../component/Main/Main"




function Layout(){
    
  
    const [theme,setTheme] = useState(false)

    const handleChange = ()=>{
        setTheme(!theme);
        localStorage.setItem('themeMode', `${!theme}`)
   
    }
   

    useEffect(()=>{
        if(localStorage.getItem('themeMode') === 'true'){
            document.documentElement.classList.add('dark')

        }else{
            document.documentElement.classList.remove('dark')
        }
        
       
    },[theme]
        
    )
   

    
   
  
    
    return (
        <div>

        
            <Header   themeChange={handleChange}/>
            <Main  />
            <Footer/>
         
      
        </div>
    )
}
export default Layout