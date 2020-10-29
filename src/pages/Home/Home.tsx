import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import mainImg1 from '../../assets/img/main_img1.jpg';
import mainImg2 from '../../assets/img/main_img2.jpg';
import mainImg3 from '../../assets/img/main_img3.jpg';
import { Button } from '../../components';
import styles from './home.module.scss';

const Home: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.main}>
      <div className={styles.main__left}>
        <img src={mainImg1} className={styles.main__left_img1} alt="img1" />
        <img src={mainImg2} className={styles.main__left_img2} alt="img2" />
        <img src={mainImg3} className={styles.main__left_img3} alt="img3" />
      </div>
      <div className={styles.main__right}>
        <h2 className={styles.title}>YaLondonDev</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquam accusantium explicabo mollitia, ullam odio quis dolor sint porro,
          sapiente, atque ad illo eum! Deleniti, voluptates?
        </p>
        <Button className="btn__with_bg">
          <Link to="/game">Играть</Link>
        </Button>
      </div>
    </div>
  </div>
);

export default Home;
