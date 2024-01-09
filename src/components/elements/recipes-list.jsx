import { useSelector } from 'react-redux';

export const RecipesList = () => {
  const recipes = useSelector(state => state.api.recipes);
  return (
    <div>
      <p className="text-orange-600">Found {recipes.total} recipes</p>
      <ul>
        {recipes.recipes.map(el => {
          return (
            <li key={el._id}>
              <div>{el.title}</div>
              <div>{el.description}</div>
              <img src={el.thumb} alt={el.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
