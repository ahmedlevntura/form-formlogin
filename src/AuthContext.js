import { createContext } from "react";
// import { register } from "./Form/register";
import { endpointLogin, endpointRegister } from "./endpoint";

import toast from "react-hot-toast";
import { baseUrl } from "./Form/postResource";
import { login , register } from "./services";




const defaultProvider={
    register : () => Promise.resolve(),
    login : ()=>  Promise.resolve(),
}

export let AuthContext=createContext(defaultProvider)



export function AuthContextProvider({children}){

    // let nav =useNavigate()
   

    function handleRegister(params){

        // same params but for know this is data
        let userData={
            email:params.email,
            password:params.password,
            name:params.name,
            rePassword:params.rePassword,
            phone:params.phone

        }

        register(endpointRegister,userData,
        (success)=>{
            console.log(success)
            toast.success(success.message)
        
           
          
        },
        (fail)=>{
            console.log(fail)
            toast.error(fail.data.message)
           
        }
        )

    


    }


    function handleLogin (params){
        let userData = {
            email : params.email,
            password : params.password
          }

          login(endpointLogin,userData,
            (success)=>{
                console.log(success.message)
                toast.success('user created')
                localStorage.setItem('Newtoken',success.token)
            },
            (fail)=>{
                console.log(fail)
                toast.error(fail.data.message)
            }
            )

            
            
    }

    

    // const values={
    //     register:handleRegister,
    //     login:handleLogin

    //   }


    return <AuthContext.Provider value={{handleLogin,handleRegister}}>
        {children}
    </AuthContext.Provider>
}

