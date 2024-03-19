"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './card.module.css';
import { useRouter } from 'next/navigation'; // Import useRouter hook from Next.js

const Card = ({ data }) => {
  const { id, date, category, title, description, imageUrl } = data;
  const router = useRouter(); // Initialize useRouter hook

  const handleDetailsClick = (id) => {
    router.push(`/ReadMore/${id}`); // Use router.push for navigation
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={title}
          layout="responsive" objectFit="cover" objectPosition="center"
          
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>{date} -</span>
          <span className={styles.category}>{category}</span>
        </div>
        <Link href={`/posts/${id}`}>
          <h1 className={styles.title}>{title}</h1>
        </Link>
        <p className={styles.description}>{description}</p>
        <p className={styles.link} onClick={() => handleDetailsClick(id)}>
          Read More
        </p>
      </div>
    </div>
  );
};

export default Card;
