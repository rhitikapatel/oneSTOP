import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Optionally close the modal on successful login
    document.getElementById('my_modal_3')?.close();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Close Button */}
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById('my_modal_3')?.close()}
          >
            ✕
          </button>

          <h3 className="font-bold text-lg mb-4">Login</h3>

          {/* Form starts here */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div>
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 rounded-md outline-none border border-gray-300"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500 block">
                  Email is required
                </span>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 rounded-md outline-none border border-gray-300"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500 block">
                  Password is required
                </span>
              )}
            </div>

            {/* Submit and Signup */}
            <div className="flex justify-around items-center mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?{' '}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
