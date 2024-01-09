import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMyRecipes } from '../../redux/api/operations';
import { RecipesList } from 'components/elements/recipes-list';

export const MyRecipesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyRecipes());
  }, [dispatch]);

  return (
    <>
      <RecipesList />
    </>
  );
};
