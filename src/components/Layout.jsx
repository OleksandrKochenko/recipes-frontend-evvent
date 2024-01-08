import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader';
import { useSelector } from 'react-redux';

export const Layout = () => {
  const isLoading = useSelector(state => state.auth.isLoading); // ---- !
  console.log(isLoading);

  return (
    <main>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {isLoading && <Loader />}
    </main>
  );
};
