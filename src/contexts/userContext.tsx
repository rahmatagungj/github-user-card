import React from "react";

type UserContextProps = {
  userData: any;
  setUserData: (userData: any) => void;
};

export const UserContext = React.createContext<UserContextProps>({
  userData: [],
  setUserData: () => {},
});

const UserProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = React.useState<typeof UserContext>();

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
