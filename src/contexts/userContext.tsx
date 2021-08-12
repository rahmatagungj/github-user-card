import React from "react";

const initialState = {
  login: "rahmatagungj",
  id: 30583918,
  node_id: "MDQ6VXNlcjMwNTgzOTE4",
  avatar_url: "https://avatars.githubusercontent.com/u/30583918?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/rahmatagungj",
  html_url: "https://github.com/rahmatagungj",
  followers_url: "https://api.github.com/users/rahmatagungj/followers",
  following_url:
    "https://api.github.com/users/rahmatagungj/following{/other_user}",
  gists_url: "https://api.github.com/users/rahmatagungj/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/rahmatagungj/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/rahmatagungj/subscriptions",
  organizations_url: "https://api.github.com/users/rahmatagungj/orgs",
  repos_url: "https://api.github.com/users/rahmatagungj/repos",
  events_url: "https://api.github.com/users/rahmatagungj/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/rahmatagungj/received_events",
  type: "User",
  site_admin: false,
  name: "Rahmat Agung Julians",
  company: null,
  blog: "https://rahmatagungjulians.tech",
  location: "Indonesia",
  email: null,
  hireable: true,
  bio: "Technology Enthusiast | Philosophy | Logic",
  twitter_username: "Rahmat_A_J",
  public_repos: 87,
  public_gists: 0,
  followers: 11,
  following: 1,
  created_at: "2017-07-31T03:18:02Z",
  updated_at: "2021-08-11T15:13:40Z",
};

const initialContext = {
  userData: initialState,
  setUserData: () => {},
};

interface IUserContext {
  userData: typeof initialState;
  setUserData: (userData: typeof initialState) => void;
}

export const UserContext = React.createContext<IUserContext>(initialContext);

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = React.useState(initialContext.userData);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
