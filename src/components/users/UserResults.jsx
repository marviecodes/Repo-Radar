import { useEffect, useState } from "react";
import Spinner from "../layouts/Spinner";

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Get user data
  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data = await res.json();
    setUsers(data);
    setisLoading(false);
  };

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <h3>{user.login}</h3>
        ))}
      </div>
    );
  }
};

export default UserResults;
