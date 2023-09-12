import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Checkout = () => {
   const {user} = useContext(AuthContext)
   const service = useLoaderData()
   const { _id, price, title, service_id, img } = service

   const handleOrder = event=>{
      event.preventDefault()
      const form = event.target
      const name = form.name.value
      const email = form.email.value
      const date = form.date.value
      const price = form.price.value
      const order = {name, email, date, price, service_id, service:title, img}

         fetch("http://localhost:3000/bookings", {
            method: "POST",
            headers:{
               'content-type':'application/json'
            },
            body: JSON.stringify(order)
         })
         .then(res=>res.json())
         .then(data=>{
            if(data.insertedId){
               alert("Your booking is successful")
            }
         })
   }
   return (
      <div className="card-body">
         <form onSubmit={handleOrder}>
            <div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" placeholder="name" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Date</span>
                  </label>
                  <input type="date" name="date" className="input input-bordered" />
                  <label className="label">
                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Due Amount</span>
                  </label>
                  <input type="text" name="price" defaultValue={"$"+price} className="input input-bordered" />
               </div>
            </div>
            <div className="form-control mt-6">
               <button type='submit' className="btn btn-primary">Confirm Order</button>
            </div>
         </form>
      </div>
   );
};

export default Checkout;