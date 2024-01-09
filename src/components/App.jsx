import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout';
import { Home } from './pages/home';
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
import { NotFound } from './pages/not-found';
import { Loader } from './Loader';
import { CategoryPage } from './pages/category';
import { SearchPage } from './pages/search';
import { MyRecipesPage } from './pages/my-recipes';
import { FavoritePage } from './pages/favorite';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isLoading = useSelector(state => state.auth.isLoading);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  return isRefreshing || isLoading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/category" component={<SignIn />} />
          }
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/category" component={<SignUp />} />
          }
        />
        <Route
          path="/category"
          element={
            <PrivateRoute redirectTo="/signin" component={<CategoryPage />} />
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute redirectTo="/signin" component={<SearchPage />} />
          }
        />
        <Route
          path="/my-recipes"
          element={
            <PrivateRoute redirectTo="/signin" component={<MyRecipesPage />} />
          }
        />
        <Route
          path="/favorite"
          element={
            <PrivateRoute redirectTo="/signin" component={<FavoritePage />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
