// import { useContext } from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
// import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import Swal from 'sweetalert2'
// import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "./../../../Provider/AuthProvider";
import UseCart from "../../../Hooks/UseCart";

const SignUp = () => {
  //use react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile,createUserWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
     
      updateUserProfile(data.name, data.email)
      .then(() => {
         const user = result.user;
       const  savedUser ={name:user?.displayName,email:user?.email,role:'user'}
        console.log(savedUser);
       fetch("http://localhost:5000/user", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body:JSON.stringify(savedUser)
       })
       .then(res=>res.json())
       .then(data=>console.log(data))
      });
    });

  

    navigate(from, { replace: true });
  };
  const handleGoogle=()=>{
    createUserWithGoogle()
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
   
      // The signed-in user info.
      const user = result.user;
      console.log(user)
    }).catch((error) => {
      // Handle Errors here.
   
    });
  }

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          {/* here using react_hook_form and regax for validation */}
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>





              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p>
              <small>
                Already have an account <Link to="/login">Login</Link>
              </small>
            </p>
        <button onClick={handleGoogle}>Google</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
