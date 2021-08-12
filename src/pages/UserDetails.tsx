import React from "react";
import UserCard from "../components/UserCard";
import { UserContext } from "../contexts/userContext";
import { Redirect } from "react-router-dom";
import {
  RiGlobalLine,
  RiTwitterLine,
  RiUserLocationLine,
} from "react-icons/ri";

const FlexWithIcons: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="flex flex-row items-center">{children}</div>;
};
const UserDetails = () => {
  const { userData } = React.useContext(UserContext);

  return (
    <>
      {!userData && <Redirect to="/" />}
      <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 flex flex-col h-screen">
        <div className="m-auto">
          <UserCard>
            <div className="flex flex-col md:flex-row">
              <img
                src={userData?.avatar_url}
                alt={userData?.login}
                className="w-full rounded-lg"
              />
              <div className="flex-col p-3 md:p-0 md:px-3 items-center justify-center">
                <a
                  href={userData?.html_url}
                  title={userData?.name}
                  rel="noopener noreferrer"
                >
                  <h1 className="text-gray-800 font-bold capitalize text-lg md:text-xl mb-2 text-center md:text-left">
                    {userData?.name}
                  </h1>
                </a>
                <h2 className="text-gray-800 font-medium capitalize text-md my-2 text-center md:text-left">
                  {userData?.bio}
                </h2>
                <hr className="my-2" />
                <FlexWithIcons>
                  <RiUserLocationLine />
                  <h3 className="ml-2 text-gray-800 font-medium capitalize text-md my-2 text-center md:text-left">
                    {userData?.location}
                  </h3>
                </FlexWithIcons>
                <a
                  href={userData?.blog}
                  title={userData?.name}
                  rel="noopener noreferrer"
                >
                  <FlexWithIcons>
                    <RiGlobalLine />{" "}
                    <h4 className="ml-2 text-gray-800 font-medium text-md my-2 text-center md:text-left">
                      {userData?.blog.replace("https://", "").toLowerCase()}
                    </h4>
                  </FlexWithIcons>
                </a>
                <FlexWithIcons>
                  <RiTwitterLine />
                  <h5 className="ml-2 text-gray-800 font-medium text-md my-2 text-center md:text-left">
                    {userData?.twitter_username}
                  </h5>
                </FlexWithIcons>

                <div className="flex flex-row items-center my-2 flex-wrap md:flex-nowrap justify-center md:justify-between">
                  <div className="bg-yellow-500 py-1 px-3 text-gray-100 rounded mr-2 text-center text-sm md:text-md">
                    {userData?.public_repos} Repositori
                  </div>
                  <div className="bg-green-500 py-1 px-3 text-gray-100 rounded mx-2 text-center text-sm md:text-md">
                    {userData?.followers} Pengikut
                  </div>
                  <div className="bg-pink-500 py-1 px-3 text-gray-100 rounded mx-2 text-center text-sm md:text-md mt-2 md:mt-0">
                    {userData?.following} Mengikuti
                  </div>
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
