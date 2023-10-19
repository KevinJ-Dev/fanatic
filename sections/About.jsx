'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| À propos de Fanatic" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Je souhaite vous présenter notre serveur,
        <span className="font-extrabold text-white"> Fanatic RolePlay. </span>
        Il s'agit d'un serveur basé aux États-Unis, que nous avons soigneusement <span className="font-extrabold text-white"> optimisé </span> pour garantir une expérience de jeu.
        Notre projet est le fruit de longs mois de travail acharné et d'investissements considérables.
        Nous avons créé une véritable communauté familiale où le rire et la bonne humeur sont toujours au rendez-vous.
        <span className="font-extrabold text-white"> Nous proposons de nombreuses fonctionnalités inédites et exclusives, </span>
        et notre serveur est en <span className="font-extrabold text-white"> constante évolution </span> avec des mises à jour hebdomadaires.
        Nous accueillons chaleureusement les nouveaux joueurs et nous sommes prêts à les initier à notre univers. Notre serveur est en accès libre.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
