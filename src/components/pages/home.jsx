import { LinksBlock } from 'components/elements/links-block';
import { UserActionBlock } from 'components/elements/user-action-block';

export const Home = () => {
  return (
    <div className="pt-2 flex flex-col items-center justify-between h-full">
      <h1 className="text-2xl ">Welcome to Recipes App!</h1>
      <div className="flex w-3/4 justify-between">
        <div className="text-left w-2/5">
          <p>
            This is a pet-project developed in order to complete a test
            assignment.{' '}
          </p>
          <p>
            Only authorized users are allowed to perform CRUD Operations. Please
            register or log in to use this App.
          </p>
        </div>
        <p className="text-left w-2/5">
          BackEnd API of the project is placed on free instance web-service.{' '}
          <br />
          It could be spinned down with inactivity, so you may probably wait for
          first loading more then usually.
        </p>
      </div>
      <UserActionBlock />
      <LinksBlock />
    </div>
  );
};
