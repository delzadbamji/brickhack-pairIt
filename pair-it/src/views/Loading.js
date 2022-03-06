import React from "react";
export default function Loading() {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <img
          src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/judge_photos/001/859/014/datas/large.png"
          alt="ricky the brick"
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  innerContainer: {
    display: "flex",
    justifyContent: "center",
    background: "antiquewhite",
    padding: "50px",
    alignItems: "center",
    flexDirection: "column",
    gap: "50px"
  },
  image: {
    height: "60px",
    width: 60
  }
};
