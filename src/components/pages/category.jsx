import { CategoryList } from 'components/elements/category-list';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from '../../redux/api/operations';
import { RecipesList } from 'components/elements/recipes-list';

export const CategoryPage = () => {
  const [category, setCategory] = useState('all');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes({ category }));
  }, [dispatch, category]);

  return (
    <>
      <CategoryList currentCategory={category} getCategoryName={setCategory} />
      <RecipesList />
    </>
  );
};
