export const LoginForm = () => {
  return (
    <>
      <h1>Login Form</h1>
      <hr />
      <form action="#">
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input type="text" id={"email"} name={"email"} />
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id={"password"} name={"password"} />
        </div>

        <div>
          <button>Iniciar sesión</button>
        </div>
      </form>
    </>
  );
};
