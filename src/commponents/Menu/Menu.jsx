import { MenuCategories } from "../menuCategories/MenuCategories";
import MenuPost from "../menuPost/MenuPost";
import styles from "./Menu.module.css";

export const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false} />
      <h2 className={styles.subtitle}>{"All the category"}</h2>
      <h1 className={styles.title}>Category</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>{"With pictur profile"}</h2>
      <h1 className={styles.title}>Editor Pick</h1>
      <MenuPost withImage={true} />
    </div>
  );
};
export default Menu;
