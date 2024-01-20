import Menu from "@/commponents/Menu/Menu";
import CardList from "@/commponents/cardList/cardList";
import CategoryList from "@/commponents/categoryList/categoryList";
import Featured from "@/commponents/featured/Featured";
import styles from "./homepage.module.css";
import SocialLink from "@/commponents/SocialLink/SocialLink";
import TravelPicture from "@/commponents/travelPicture/travelPicture";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <SocialLink />
      <CategoryList />
      <TravelPicture />
      
      
      <div className={styles.content}>
        <CardList />
        <Menu />
        
      </div>
    </div>
  );
}
