import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/home';
import { SignIn } from './pages/signin';
import { NotFound } from './pages/not-found';
import { SignUp } from './pages/signup';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
