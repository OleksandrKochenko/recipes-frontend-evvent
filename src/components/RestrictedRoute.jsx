import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const location = useLocation();
  const from = location.state?.from || '/';

  return isLoggedIn ? <Navigate to={from} /> : Component;
};
