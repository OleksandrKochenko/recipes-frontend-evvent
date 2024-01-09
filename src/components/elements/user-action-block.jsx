import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import { Button } from './button';
import { logOut } from '../../redux/auth/operations';

export const UserActionBlock = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleClick = link => {
    navigate(link);
  };

  const handleLogOut = async () => {
    try {
      await dispatch(logOut());
      Notiflix.Notify.success('User logged out');
    } catch (error) {
      Notiflix.Notify.error(error.message);
    }
  };

  return (
    <div className="max-w-3xl w-full items-center justify-between font-mono text-sm lg:flex">
      <Button
        title="Register"
        onClick={() => handleClick('/signup')}
        disabled={isLoggedIn}
      />
      <Button
        title="Log In"
        onClick={() => handleClick('/signin')}
        disabled={isLoggedIn}
      />
      <Button title="Log Out" onClick={handleLogOut} disabled={!isLoggedIn} />
    </div>
  );
};
