import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '../Form/useAuth'
import { AuthContext } from '../AuthContext'

export default function LoginForm() {

    const auth= useAuth()

    let {handleLogin}=useContext(AuthContext)

   

    const schema = yup
    .object({
      email: yup.string().required('email requierd').email(),
      password:yup.string().required('email requierd'),
  
      
    })



    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode:'onBlur',
        resolver:yupResolver(schema)
      })


      function onSubmit(data){

        console.log(data)

        let {email,password}=data
        // auth.login({email,password})
        handleLogin({email,password})
       

      }
  return <>

<div className='d-flex justify-content-center vh-100'>
<form className='mt-5 py-5 w-50' onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group my-3">
    <label for="exampleInputEmail1">Email address</label>
    <input {...register("email")} name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {errors.email ? <p className='alert alert-danger'>{errors.email?.message}</p>:''}
   
  </div>
  <div className="form-group mt-3">
    <label for="exampleInputPassword1">Password</label>
    <input {...register("password")} name='password' type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    {errors.password ? <p className='alert alert-danger'>{errors.password?.message}</p>:''}
  </div>
 
  
 
  {/* <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
  
  
  </>
}
