import React from 'react';

export const LoginPage = ({history}) => {

  const handleClick = () => {
    history.replace('/');
  }

  return (
    <div className="container mt-5 text-center animate__animated animate__fadeIn">
      <h1>Login Page</h1>
      <hr />
      <button className="btn btn-outline-primary"
        onClick={handleClick}>
        Ingresar
      </button>
    </div>
  )
}
