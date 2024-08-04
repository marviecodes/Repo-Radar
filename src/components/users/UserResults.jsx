import Spinner from "../layouts/Spinner";
import UserItem from "./UserItem";
import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

const UserResults = () => {
  const { users, isLoading } = useContext(GithubContext);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

export default UserResults;
