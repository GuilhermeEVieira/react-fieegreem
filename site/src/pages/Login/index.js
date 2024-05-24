import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="formulario-login">
      <div className="login">
        <div className="centralizar">
          {/* ... other elements */}
          <Link to="/forgot-password">Esqueceu a senha?</Link> {/* Link to password reset page */}
          <Link to="/signup">Criar uma conta</Link> {/* Link to signup page */}
        </div>
      </div>
    </div>
  );
}
export default Login;