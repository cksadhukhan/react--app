import React from "react";
import Skeleton from "react-loading-skeleton";

interface UserCardProps {
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  isLoading: boolean;
}

const UserCard: React.FC<UserCardProps> = (props: UserCardProps) => {
  const { firstName, lastName, avatar, email, isLoading } = props;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="avatar" style={styles.avatar} />
      <div>
        <h2 style={styles.name}>
          {isLoading ? <Skeleton /> : `${firstName} ${lastName}`}
        </h2>
        <h3 style={styles.email}>{isLoading ? <Skeleton /> : email}</h3>
      </div>
    </div>
  );
};

export default UserCard;

const styles = {
  container: {
    height: 190,
    width: 450,
    backgroundColor: "#74b9ff",
    display: "flex",
  },
  avatar: { height: 150, width: 150, margin: 20 },
  name: { color: "#fff", fontSize: "18" },
  email: { color: "#fff", fontSize: "12" },
};
