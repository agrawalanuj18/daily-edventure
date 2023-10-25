import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey!</b> Discover the Edventure Awaiting You!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Daily Edventure - The Blogging Website</h1>
          <p className={styles.postDesc}>
          Where education meets adventure. At Daily Edventure, we believe learning is a thrilling journey. Delve into enlightening articles, riveting tales, and thought-provoking insights that make every day an educational escapade. Your quest for knowledge just got more exciting.
          </p>
          {/* <button className={styles.button}>Read More</button> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
