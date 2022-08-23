import { signInWithGoogle } from '../firebase';

const Login = () => {
  return (
    <div className="pt-32 text-center">
      <button onClick={signInWithGoogle}>Login With Google</button>
    </div>
  );
};

export default Login;
