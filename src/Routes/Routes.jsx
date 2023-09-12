import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home";
import Services from "../Page/Services/Services";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import Checkout from "../CheckOut/Checkout";
import PrivateRoute from "../PrivateRout/PrivateRoute";
import Bookings from "../Page/Bookings/Bookings";
const router = createBrowserRouter([
          {
            path: "/",
            element: <Main></Main>,
            children: [
                    {
                     path: '/',
                     element: <Home></Home>
                    },
                    {
                     path: 'service',
                     element: <Services></Services>
                    },
                    {
                     path:'login',
                     element: <Login></Login>
                    },
                    {
                     path: "signup",
                     element: <SignUp></SignUp>
                    },
                    {
                     path: 'checkout/:id',
                     element: <PrivateRoute><Checkout></Checkout>,</PrivateRoute>,
                     loader: ({params})=>fetch(`http://localhost:3000/service/${params.id}`),
                    },
                    {
                     path: "bookings",
                     element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
                    },
            ]
          },
        ]);

        export default router