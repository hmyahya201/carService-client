import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home";
import Services from "../Page/Services/Services";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";

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
                    }
            ]
          },
        ]);

        export default router