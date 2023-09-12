import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
   const [services, setServices] = useState([])
   const url = `http://localhost:3000/service`
   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => setServices(data))
   }, [url])
   return (
      <div>
         <h1>This is Services</h1>
         <div className="grid sm:grid-cols-1 lg:grid-cols-3">
            {
               services.map(service => <ServiceCard
                  key={service._id}
                  service={service}
               ></ServiceCard>)
            }
         </div>
      </div>
   );
};

export default Services;