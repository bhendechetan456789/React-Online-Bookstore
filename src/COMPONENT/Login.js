import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
  const pleaseLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user.email);
      console.log(result.user.displayName);
    } catch (error) {
      console.error('Error signing in: ', error);
    }
  };

  return (
    <div>
      <button onClick={pleaseLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
