
const ServiceCard = ({ service }) => {
   console.log("service", service)
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
                  <button className="btn btn-accent">Accent</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServiceCard;