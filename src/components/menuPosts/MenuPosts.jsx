import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="https://dailyedventure.com/posts/drake-bay-costa-rica-a-hidden-paradise-awaiting-your-discovery" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
          Drake Bay, Costa Rica: A Hidden Paradise Awaiting Your Discovery
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Daily Edventure</span>
            {/* <span className={styles.date}> - 10.03.2023</span> */}
          </div>
        </div>
      </Link>
      <Link href="https://dailyedventure.com/posts/the-future-is-here-navigating-the-virtual-and-augmented-realms-of-gaming" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>
            Coding
          </span>
          <h3 className={styles.postTitle}>
          The Future is Here: Navigating the Virtual and Augmented Realms of Gaming.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Daily Edventure</span>
            {/* <span className={styles.date}> - 10.03.2023</span> */}
          </div>
        </div>
      </Link>
      <Link href="https://dailyedventure.com/posts/easy-to-make-and-healthy-recipes-for-busy-professionals" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
          Easy-to-Make and Healthy Recipes for Busy Professionals.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Daily Edventure</span>
            {/* <span className={styles.date}> - 10.03.2023</span> */}
          </div>
        </div>
      </Link>
      <Link href="https://dailyedventure.com/posts/navigating-the-minds-labyrinth-strategies-for-mental-wellness-in-a-digital-age" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.style}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
          Navigating the Mind Labyrinth: Strategies for Mental Wellness in a Digital Age.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Daily Edventure</span>
            {/* <span className={styles.date}> - 10.03.2023</span> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
