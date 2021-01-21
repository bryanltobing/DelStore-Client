import LoginBody from 'components/Login/LoginBody';
import LoginHeader from 'components/Login/LoginHeader';
import React from 'react';

const Login = () => {
  const { MainContainer, SubContainer } = classes;
  return (
    <div className={MainContainer}>
      <div className={SubContainer}>
        <LoginHeader />
        <LoginBody />
      </div>
    </div>
  );
};

const classes = {
  MainContainer:
    'min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8',
  SubContainer: 'max-w-md w-full space-y-8',
};

export default Login;
