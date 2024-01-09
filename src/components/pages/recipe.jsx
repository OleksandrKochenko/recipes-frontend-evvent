import { useParams } from 'react-router-dom';

export const RecipePage = () => {
  const { id } = useParams();
  console.log('id', id);
  return <div>Recipe Page under construction</div>;
};
