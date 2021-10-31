const LoginIn = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginIn;


