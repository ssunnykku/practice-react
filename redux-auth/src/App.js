import { useSelector, useDispatch } from 'react-redux';
import { login, logout, loginOrNot } from './redux/authSlice';
import { changeLoginStatus } from './redux/loginStatusSlice';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const loginStatus = useSelector((state) => state.loginStatus);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginOrNot());
  };

  const find = loginStatus.find((a) => {
    return a.id == Number(isLoggedIn);
  });

  return (
    <div>
      <div>
        <p>{find.status}</p>
        <button onClick={handleLogin}>{find.button}</button>
      </div>
    </div>
  );
}

export default App;
