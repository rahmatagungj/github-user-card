const UserCard: React.FC = ({ children }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-lg p-3 m-auto">
      {children}
    </div>
  );
};

export default UserCard;
