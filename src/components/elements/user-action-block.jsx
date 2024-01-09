import { useSelector } from 'react-redux';
import { Button } from './button';
import { useNavigate } from 'react-router-dom';

export const UserActionBlock = () => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log('isLoggedIn', isLoggedIn);

  const handleClick = link => {
    navigate(link);
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
      <Button
        title="Log Out"
        onClick={() => console.log('clicked')}
        disabled={!isLoggedIn}
      />
    </div>
  );
};
