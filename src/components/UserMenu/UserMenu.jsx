import { HiUser } from 'react-icons/hi';

const UserMenu = ({ name }) => {
  return (
    <div>
      <p>
        <HiUser /> {name}
      </p>
    </div>
  );
};

export default UserMenu;
