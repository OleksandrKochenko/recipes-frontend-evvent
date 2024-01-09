import { Heart } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateFavorite } from '../../redux/api/operations';

export const RecipesList = ({ currentCategory }) => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.api.recipes);
  const { id: userId } = useSelector(state => state.auth.user);

  const handleFavoriteUpdate = id => {
    dispatch(updateFavorite(id));
  };

  return (
    <>
      <h1 className=" w-full text-center m-4 text-2xl ">
        Found <span className="text-orange-600">{recipes.total}</span> recipes
      </h1>
      <ul className="flex flex-row gap-4 flex-wrap justify-center">
        {recipes.recipes.map(el => {
          return (
            <li
              key={el._id}
              className="max-w-sm rounded-lg shadow bg-gray-800 border-2 border-gray-700 overflow-hidden"
            >
              <img src={el.thumb} alt={el.title} />
              <div className="w-full flex justify-between items-center pr-4">
                <h3 className="m-2 text-2xl font-bold w-fit text-white border-b border-transparent hover:border-orange-600">
                  <NavLink to={`/recipe/${el._id}`}>{el.title}</NavLink>
                </h3>
                <Heart
                  color="rgba(234 88 12 )"
                  fill={
                    el.favorite.includes(userId) ? 'rgba(234 88 12 )' : 'none'
                  }
                  onMouseOver={({ target }) =>
                    (target.style.cursor = 'pointer')
                  }
                  onClick={() => handleFavoriteUpdate(el._id)}
                />
              </div>
              <p className="mb-3 mx-2 text-justify text-sm font-light text-gray-400">
                {el.description}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
