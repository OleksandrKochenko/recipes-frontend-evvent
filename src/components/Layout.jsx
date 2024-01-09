import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader';
import { useSelector } from 'react-redux';
import { NavBar } from './elements/nav-bar';

export const Layout = () => {
  const isLoading = useSelector(state => state.auth.isLoading); // ---- !
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <div className="h-screen ">
      {isLoggedIn && (
        <header className="fixed top-0 left-0 w-screen bg-gray-900">
          <NavBar />
        </header>
      )}
      <main className="bg-gray-900 flex h-full flex-col items-center justify-between pt-20 pb-2 ">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        {isLoading && <Loader />}
      </main>
    </div>
  );
};
