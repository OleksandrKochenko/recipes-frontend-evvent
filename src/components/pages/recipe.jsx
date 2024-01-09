import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from '../../redux/api/operations';

export const RecipePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipeById(id));
  }, [dispatch, id]);

  const recipe = useSelector(store => store.api.currentRecipe);

  return (
    <div className="w-[700px] rounded-lg shadow bg-gray-800 border-2 border-gray-700  ">
      <div className="w-full rounded-lg border border-gray-500 h-fit overflow-hidden">
        <img src={recipe.thumb} alt="recipe.title" />
      </div>
      <h1 className="m-2 text-2xl font-bold w-fit">{recipe.title}</h1>
      <p className="mb-3 mx-2 text-justify text-sm font-light text-gray-400 w-[90%]">
        {recipe.description}
      </p>
      <h3 className="m-2 text-md font-bold w-fit">Instruction:</h3>
      <p className="mb-3 mx-2 text-justify text-sm font-light text-gray-400 w-[90%]">
        {recipe.instructions}
      </p>
      <div>
        <h3 className="m-2 text-md font-bold w-fit">Ingredients:</h3>
        <ul>
          {recipe.ingredients?.map(el => {
            return (
              <li
                key={el._id}
                className="my-2 mx-6 flex justify-start items-center text-sm"
              >
                <div className="w-34 mr-10">
                  <img
                    src={el.id.img}
                    alt={el.id.name}
                    width={80}
                    height={80}
                  />
                </div>
                <p className="w-60">{el.id.name}</p>
                <p>{el.measure}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
