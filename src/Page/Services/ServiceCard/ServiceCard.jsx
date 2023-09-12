import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
   const { img, price, title, _id } = service
   return (
      <div>
         <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} /></figure>
            <div className="card-body">
               <h2 className="card-title">
                 {title}
                  <div className="badge badge-secondary">NEW</div>
               </h2>
               <div className="card-actions justify-end">
                  <div className="badge badge-outline">{"$"+price}</div>
                  <Link to = {`/checkout/${_id}`}><button className="btn btn-accent">Book Now</button></Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServiceCard;