import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader';
import { useSelector } from 'react-redux';

export const Layout = () => {
  const isLoading = useSelector(state => state.auth.isLoading); // ---- !
  console.log('isLoading', isLoading);

  return (
    <main className="bg-gray-900 flex h-screen flex-col items-center justify-between pt-20 pb-2 ">
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {isLoading && <Loader />}
    </main>
  );
};
