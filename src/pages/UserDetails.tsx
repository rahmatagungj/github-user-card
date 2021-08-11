import React from "react";
import UserCard from "../components/UserCard";
import { UserContext } from "../contexts/userContext";
import { Redirect } from "react-router-dom";

const UserDetails = () => {
  const { userData } = React.useContext(UserContext);

  return (
    <>
      {!userData && <Redirect to="/" />}
      <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 flex flex-col h-screen">
        <div className="m-auto">
          <UserCard>
            <div className="flex flex-col items-center">
              <img
                src={userData?.avatar_url}
                alt={userData?.login}
                className="w-full rounded-lg"
              />
              <h1 className="text-gray-800 font-bold capitalize text-lg md:text-xl  my-2">
                {userData?.name}
              </h1>
              <h2 className="text-gray-800 font-medium capitalize text-lg mb-2 text-center">
                {userData?.bio}
              </h2>
              <div className="flex flex-row items-center">
                <div className="bg-yellow-500 py-1 px-3 text-gray-100 rounded mr-2 text-center text-sm md:text-lg">
                  {userData?.public_repos} Repositori
                </div>
                <div className="bg-green-500 py-1 px-3 text-gray-100 rounded mx-2 text-center text-sm md:text-lg">
                  {userData?.followers} Pengikut
                </div>
                <div className="bg-pink-500 py-1 px-3 text-gray-100 rounded mx-2 text-center text-sm md:text-lg">
                  {userData?.following} Mengikuti
                </div>
              </div>
            </div>
          </UserCard>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
