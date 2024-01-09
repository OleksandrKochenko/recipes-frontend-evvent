import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  const location = useLocation();

  return shouldRedirect ? (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  ) : (
    Component
  );
};
