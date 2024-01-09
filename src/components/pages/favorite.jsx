import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFavorites } from '../../redux/api/operations';
import { RecipesList } from 'components/elements/recipes-list';

export const FavoritePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <>
      <RecipesList />
    </>
  );
};
