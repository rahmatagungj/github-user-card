import React from "react";
import { UserContext } from "../contexts/userContext";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const username = React.useRef<HTMLInputElement | null>(null);
  const { setUserData } = React.useContext(UserContext);
  const history = useHistory();

  const handleGetUser = async () => {
    setIsLoading(true);
    const toBeFind = username.current?.value;
    const user = await fetch(`https://api.github.com/users/${toBeFind}`, {
      method: "GET",
    });
    const dataJson = await user.json();
    setUserData(dataJson);
    setIsLoading(false);
    history.push(`/${username.current?.value}`);
  };

  return (
    <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 flex flex-col h-screen">
      <div className="m-auto">
        <div className="bg-white rounded-lg p-10 justify-center items-center flex flex-col">
          <h1 className="text-gray-800 font-bold uppercase mb-2">
            Github User Card
          </h1>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-gray-300 rounded-lg p-2 border-0 focus:border-0 mb-2"
            ref={username}
          />
          <button
            onClick={() => handleGetUser()}
            disabled={isLoading}
            className="bg-red-600 shadow rounded-lg p-2 text-gray-100 w-full hover:shadow-2xl hover:bg-red-500"
          >
            Buat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
