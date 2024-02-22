import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthContext } from '../AuthContext'
import { useAuth } from './useAuth'
import { useNavigate } from 'react-router-dom'

export default function Form() {

   let {handleRegister}=useContext(AuthContext)

 const auth =useAuth()


    const schema = yup
  .object({
    email: yup.string().required('email is requierd').email(),
    password:yup.string().required('password is requierd'),
    name:yup.string().required('name is required'),
    rePassword:yup.string().required('password is requierd'),
    phone:yup.number().required('phone is required'),
 
  })
  
  function onSubmit(data ){
    console.log(data)
    
    const {email,name,password,rePassword,phone}= data
    handleRegister({email,name,password,rePassword,phone})
  }

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode:'onBlur',
        resolver:yupResolver(schema)
      })

      


     


  return <>

<div className='d-flex justify-content-center vh-100'>
<form className='mt-5 py-5 w-50' onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input {...register("email")} name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {errors.email ? <p className='alert alert-danger'>{errors.email?.message}</p>:''}
   
  </div>
  <div className="form-group">
    <label className='mt-3' for="exampleInputPassword1">Password</label>
    <input {...register("password")} name='password' type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    {errors.password ? <p className='alert alert-danger'>{errors.password?.message}</p>:''}
  </div>
  <div className="form-group">
    <label className='mt-3' for="exampleInputName">Name</label>
    <input {...register("name")} name='name' type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    {errors.password ? <p className='alert alert-danger'>{errors.name?.message}</p>:''}
  </div>
  <div className="form-group">
    <label className='mt-3' for="exampleInputRePassword1">rePassword</label>
    <input {...register("rePassword")} name='rePassword' type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    {errors.rePassword ? <p className='alert alert-danger'>{errors.rePassword?.message}</p>:''}
  </div>
  <div className="form-group">
    <label className='mt-3' for="exampleInputPhone">phone</label>
    <input {...register("phone")} name='phone' type="number" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    {errors.phone ? <p className='alert alert-danger'>{errors.phone?.message}</p>:''}
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
