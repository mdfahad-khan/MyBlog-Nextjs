// CardList.js
import React from "react";
import Image from "next/image";
import Pagination from "../Pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import kuakata from "/public/kuakata.jpg"
import sitakunda from "/public/sitakunda3.jpg"
import syhlet from "/public/syhlet1.jpg"

// Sample data array
const postData = [
  {
    id:1,
    date: "11.02.2023",
    category: "Travel Date",
    title: "Shorty visit at Kuakata",
    description: "Kuakata, the daughter of the sea, the green land of unparalleled beauty; Located in Patuakhali district. Kuakata is the only beach in South Asia where you can stand and watch the sunrise and sunset. Undoubtedly, it is a great thing to observe the rising of the sun through the belly of the sea and the disappearance of the sun in the middle of the sea.",
    imageUrl:kuakata,
  },
  {
    id:2,
    date: "11.02.2023",
    category: "Travel",
    title: "Shorty visit at Sitakunda",
    description: "Sitakunda (সীতাকুন্ড) is an upazila in Chittagong which is currently at the peak of popularity among tourists. Fountains, mountains, Waterfalls, Beach, clouds, you can enjoy everything from here? Actually, this is the reason why innumerable tourists are going to Sitakundo every day. Some are camping while others are trekking and coming back day after day. Sitakunda has gained more popularity as it is possible to return from Dhaka, Chittagong, Feni, Comilla or any other district in Bangladesh by day trip.",
    imageUrl: sitakunda,
  },
  {
    id:3,
    date: "11.02.2023",
    category: "Travel",
    title: "Shorty visit at Syhlet",
    description: "Sylhet tour is now easier than ever with the guides provided on this website. Beautiful Sylhet City is located in north- eastern Bangladesh on the bank of River Surma Travellers can easily reach Sylhet by Air, Train or Bus, departing daily several times from and to Dhaka, as well as Chittagong.We provide tourist information to help one plan their perfect vacation in Sylhet, from maps/directions to recommending delicious restaurants and finding one perfect accommodations in Sylhet.",
    imageUrl:syhlet,
  },
  // Add more objects with different data for each Card
];

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        {postData.map((post, index) => (
          <Card key={index} data={post} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
