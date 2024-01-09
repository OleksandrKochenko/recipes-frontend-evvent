import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <ul className="w-full h-20 text-2xl text-blue-500 flex justify-center items-center uppercase">
      <li className="mx-6">
        <NavLink
          to={'/'}
          className={navData =>
            navData.isActive ? 'border-b border-orange-700' : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mx-6">
        <NavLink
          to={'/category'}
          className={navData =>
            navData.isActive ? 'border-b border-orange-700' : ''
          }
        >
          Category
        </NavLink>
      </li>
      <li className="mx-6">
        <NavLink
          to={'/search'}
          className={navData =>
            navData.isActive ? 'border-b border-orange-700' : ''
          }
        >
          Search
        </NavLink>
      </li>
      <li className="mx-6">
        <NavLink
          to={'/my-recipes'}
          className={navData =>
            navData.isActive ? 'border-b border-orange-700' : ''
          }
        >
          My recipes
        </NavLink>
      </li>
      <li className="mx-6">
        <NavLink
          to={'/favorite'}
          className={navData =>
            navData.isActive ? 'border-b border-orange-700' : ''
          }
        >
          Favorite
        </NavLink>
      </li>
    </ul>
  );
};
