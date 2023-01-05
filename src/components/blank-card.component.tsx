import React from "react";

interface BlankCardProps {}

const BlankCard: React.FC<BlankCardProps> = (props: BlankCardProps) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.text}>Nothing to show</h2>
      <h3 style={styles.text}>Click on any button below</h3>
    </div>
  );
};

export default BlankCard;

const styles: { container: React.CSSProperties; text: React.CSSProperties } = {
  container: {
    height: 190,
    width: 450,
    backgroundColor: "#74b9ff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: "#fff" },
};
