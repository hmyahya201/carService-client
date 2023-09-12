import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
const Login = () => {
   const {loginUser} = useContext(AuthContext)
   const HandleLoginUser = event=>{
         event.preventDefault()
         const form = event.target
         const email = form.email.value;
         const password = form.password.value;
         loginUser(email, password)
         .then(result=>{
            const user = result.user;
            form.reset()
            alert("your Logingit branch -M main is success")
         })
         .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)

          });
   }
   return (
      <div className='text-center'>
         <div className="bg-base-200 text-center">
         <h1 className="text-5xl font-bold py-6">Login now!</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 my-6 place-items-center">
               <div className='ms-8'>
                  <img src={loginImg} alt="" />
               </div>
               <div className="card lg:w-full h-full mb-8 max-w-sm shadow-2xl bg-base-100 me-8">
                  <div className="card-body">
                     <form onSubmit={HandleLoginUser}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Login</button>
                     </div>
                     </form>
                     <p>New in this website? Please <Link to='/signup' className='font-bold text-purple-600'>Sign Up</Link></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;