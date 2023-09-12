import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import BookingCart from './BookingCart';

const Bookings = () => {
   const { user } = useContext(AuthContext);
   const [bookings, setBookings] = useState([])
   const url = `http://localhost:3000/bookings?email=${user?.email}`
   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => setBookings(data))
   }, [url])

   const handleDelete = (id) => {
      const proceed = confirm("Are you sure you want to delete your service")
      if (proceed) {
         fetch(`http://localhost:3000/bookings/${id}`, {
            method: "DELETE"
         })
            .then(res => res.json())
            .then(data => {
               if (data.deletedCount > 0) {
                  alert('Deleted sucessfully')
                  const remaning = bookings.filter(booking => booking._id !== id)
                  setBookings(remaning)
                  console.log(remaning)
               }
            })
      }
   }

   const handleUpdate = id => {
      fetch(`http://localhost:3000/bookings/${id}`, {
         method: "PATCH",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify({ status: "confirm" })
      })
         .then(res => res.json())
         .then(data => {
            if (data.modifiedCount > 0) {
               const remaining = bookings.filter(booking => booking._id !== id)
               const update = bookings.find(booking => booking._id == id)
               update.status = "confirm"
               const newBooking = [update, ...remaining]
               setBookings(newBooking)
            }
            //
         })
   }
   return (
      <div className="overflow-x-auto">
         <table className="table">
            <thead>
               <tr>
                  <th>
                  </th>
                  <th>Image</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Status</th>
               </tr>
            </thead>
            <tbody>
               {
                  bookings.map(booking => <BookingCart
                     key={booking._id}
                     booking={booking}
                     handleUpdate={handleUpdate}
                     handleDelete={handleDelete}
                  ></BookingCart>)
               }
            </tbody>
         </table>
      </div>
   );
};

export default Bookings;