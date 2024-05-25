import React from 'react';


function Login() {
  return (
    <div className="formulario-login">
      <div className="login">
        <div className="centralizar">
          <div className="imgen">
            <img src="/imagens/LogoFeiraGreen.png" alt="Logo Feira Green" />
          </div>

          <label htmlFor="uname">
            <b>Nome de usuário</b>
          </label>
          <input
            type="text"
            placeholder="Insira o nome de usuário"
            name="uname"
            required
          />

          <label htmlFor="psw" className="local-senha">
            <b>Senha</b>
          </label>
          <input
            type="password"
            placeholder="Insira a senha"
            name="psw"
            required
          />

          <button type="submit">Entrar</button>
          <a href="/">Esqueceu a senha?</a>
          <a href="/">Criar uma conta</a>
        </div>
      </div>
    </div>
  );
}

export default Login;