import React from 'react'
import { useForm } from "react-hook-form"
function ContactDetails() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit= (data) => console.log(data)
  return (
    <>
    <div className='flex justify-center pt-20 mt-10'>
        <form onSubmit={handleSubmit(onSubmit)}>
                {/* if there is a button in form, it will close the modal */}
                {/* <Link to ='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link> */}
                
                <h3 className="font-bold text-lg">Contact Us</h3>
                <div className='mt-4 space-y-2'>
                    <span>Name</span>
                    <br/>
                    <input type="text" 
                    placeholder='Enter your Name' 
                    className='w-80 px-3 py-1 border rounded-md outline-none'
                    {...register("name", { required: true })}/>
                    <br />
                    {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                </div>
                <div className='mt-4 space-y-2'>
                    <span>Email</span>
                    <br/>
                    <input type="email" 
                    placeholder='Enter your Email' 
                    className='w-80 px-3 py-1 border rounded-md outline-none'
                    {...register("email", { required: true })}/>
                    <br />
                    {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                </div>
                <div className='mt-4 space-y-2'>
                    <span>Message</span>
                    <br/>
                    <textarea
                    placeholder='Type your Message' 
                    className='w-80 px-3 py-3 border rounded-md outline-none  rows="6" cols="50"'
                    {...register("text", { required: true })} />
                    <br />
                    {errors.text && <span className='text-sm text-red-500'>This field is required</span>}

                </div>
                <div className='flex justify-around mt-4'>
                    <button className='bg-blue-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200'>
                        Submit
                    </button>
                    {/* <p>Not Registered? <Link to="/SignUp" className='underline text-blue-500 cursor-pointer'>SignUp</Link></p> */}
                </div>
                </form>

    </div>
    </>
  )
}

export default ContactDetails
