import { useEffect, useState } from "react"
import Footer from "../component/Footer"
import Header from "../component/header"
import Main from "../component/Main/Main"
import initialBookData from "./data/data"




function Layout(){
    const [newObj,setNewObj] = useState([ ])
    
    const [theme,setTheme] = useState(false)
    const [data,setData] = (initialBookData())

   
    // dark mode changer function

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
     // dark mode changer function
   
    const handleAdd = (obj)=>{
        setNewObj([
            ...newObj,
            obj
        ])
    }
    
   
  
    
    return (
        <div>

        
            <Header themeChange={handleChange} newObj={newObj}/>
            <Main onAdditem={handleAdd} />
            <Footer/>
         
      
        </div>
    )
}
export default Layout