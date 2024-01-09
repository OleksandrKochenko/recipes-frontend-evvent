import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import { FormField } from './form-field';
import { Button } from './button';
import { logIn, register } from '../../redux/auth/operations';

export const UserForm = ({ title, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const submitData = async () => {
      try {
        if (type === 'signin') {
          await dispatch(logIn(data));
          Notiflix.Notify.success('User logged in');
        } else {
          await dispatch(register(data));
          Notiflix.Notify.success('New user registered');
          navigate('/signin');
        }
      } catch (error) {
        Notiflix.Notify.error(error.message);
      }
    };
    submitData();
  };

  return (
    <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          {title}
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          {type === 'signup' && (
            <FormField
              name="name"
              title="Your name"
              placeholder="John Johnson"
              required
            />
          )}
          <FormField
            name="email"
            title="Your email"
            placeholder="name@company.com"
            required
          />
          <FormField
            name="password"
            title="Password"
            placeholder="••••••••"
            required
          />
          <div className="flex justify-center">
            <Button
              type="submit"
              title={type === 'signin' ? 'Sign In' : 'Sign Up'}
            />
          </div>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            {type === 'signin'
              ? 'Don’t have an account yet?'
              : 'Already have an account?'}{' '}
            <Link
              to={type === 'signin' ? '/signup' : '/signin'}
              className="font-medium text-blue-500 hover:underline dark:text-blue-500"
            >
              {type === 'signin' ? 'Sign Up' : 'Sign In'}
            </Link>
          </p>
          <div className="flex justify-center m-0">
            <Link
              to="/"
              className="font-medium text-sm text-blue-500 hover:underline dark:text-blue-500"
            >
              Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
