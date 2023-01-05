import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { BlankCard, UserCard } from "../components";
import { getUser } from "../features";

const HomePage: React.FC = () => {
  const { isLoading, users, user } = useSelector(
    (state: RootState) => state.user
  );

  const dispatch = useDispatch<AppDispatch>();

  const onButtonClick = (id: number) => {
    dispatch(getUser(id));
  };

  return (
    <div style={styles.container}>
      <img src="/logo.png" alt="logo" style={styles.logo} />
      {!user && <BlankCard />}
      {user && (
        <UserCard
          avatar={user.avatar}
          firstName={user.first_name}
          lastName={user.last_name}
          email={user.email}
          isLoading={isLoading}
        />
      )}

      <div style={styles.buttonContainer}>
        <h3>Click on the buttons below to get the users info</h3>
        <div style={styles.buttonGroup}>
          {users.map((item, index) => {
            return (
              <div
                key={index}
                style={styles.button}
                onClick={() => onButtonClick(item.id)}
              >
                {item.id}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

const styles: {
  container: React.CSSProperties;
  logo: React.CSSProperties;
  buttonContainer: React.CSSProperties;
  buttonGroup: React.CSSProperties;
  button: React.CSSProperties;
} = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: { height: 60, width: 160, marginBottom: 22 },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  buttonGroup: { display: "flex", flexDirection: "row" },
  button: {
    flex: 1,
    height: 28,
    width: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0984e3",
    color: "#fff",
    margin: 12,
    cursor: "pointer",
  },
};
