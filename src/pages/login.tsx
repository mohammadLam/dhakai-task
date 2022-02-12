import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginResponse from '../interface/login-response';
import DeviceIdResponse from '../interface/device-response';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    username: 'rajib2@gmail.com',
    password: '123456'
  });

  // login function
  const login = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // get device id
      const getDeviceId = await fetch(
        'https://devapi.dhakai.com/api/v2/deviceuid',
        {
          method: 'GET'
        }
      );

      // convert response to json
      const deviceUuid: DeviceIdResponse = await getDeviceId.json();

      // request body
      const body = {
        auth: {
          email: auth.username,
          deviceUuid: deviceUuid.result.deviceUuid
        },
        password: auth.password
      };

      // make a post request with the login data
      const response = await fetch(
        'https://devapi.dhakai.com/api/v2/login-buyer',
        {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(body)
        }
      );

      // get the response body
      const data: LoginResponse = await response.json();
      if (data.message === 'SUCCESS') {
        const { token, refreshToken, expiresAt } = data.result;
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('expiresAt', expiresAt);

        // navigate to home page
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <form
          className='border bg-white shadow px-10 py-5 rounded-xl'
          onSubmit={login}>
          <h1 className='text-4xl font-bold text-primary mb-5'>
            Sign in to Account
          </h1>

          <div className='mb-3'>
            <p>Usrname</p>
            <input
              value={auth.username}
              onChange={event =>
                setAuth({ ...auth, username: event.target.value })
              }
              type='text'
              className='px-5 py-2 border-2 border-green-400 rounded-lg w-full outline-none'
            />
          </div>

          <div className='mb-3'>
            <p>Password</p>
            <input
              value={auth.password}
              type='password'
              className='px-5 py-2 border-2 border-green-400 rounded-lg w-full outline-none'
              onChange={event =>
                setAuth({ ...auth, password: event.target.value })
              }
            />
          </div>

          <button className='px-5 py-2 bg-primary text-white font-bold rounded'>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
