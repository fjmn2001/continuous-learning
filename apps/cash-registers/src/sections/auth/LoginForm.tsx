import { useState } from "react";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (email !== "fjmn2001@gmail.com") {
      setError(true);
      setSuccess(false);

      return;
    }

    if (password !== "123456") {
      setError(true);
      setSuccess(false);

      return;
    }

    setError(false);
    setSuccess(true);
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src="/vite.svg" alt="logo" />
            Cash Registers
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="text"
                    id={"email"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username@company.com"
                    required
                    {...register("email")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id={"password"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Type your password"
                    {...register("password")}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-colors duration-300 bg-primary-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 hover:bg-primary-700 focus:bg-primary-500"
                >
                  Iniciar sesión
                </button>
                {error && <h1 style={{ color: "white" }}>Error</h1>}
                {success && <h1 style={{ color: "white" }}>Success</h1>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
