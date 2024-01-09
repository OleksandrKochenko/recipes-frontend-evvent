import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/api/operations';

export const CategoryList = ({ currentCategory, getCategoryName }) => {
  const dispatch = useDispatch();

  const categories = useSelector(state => state.api.categories);

  const activeStile = 'border-b border-orange-700';

  const onCategoryClick = e => {
    getCategoryName(e.target.textContent);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <ul className="w-full flex justify-between cursor-pointer capitalize">
      <li
        key={'all'}
        className={currentCategory === 'all' ? activeStile : ''}
        onClick={onCategoryClick}
      >
        all
      </li>
      {categories.map(el => {
        return (
          <li
            key={el._id}
            className={currentCategory === el.name ? activeStile : ''}
            onClick={onCategoryClick}
          >
            {el.name}
          </li>
        );
      })}
    </ul>
  );
};
