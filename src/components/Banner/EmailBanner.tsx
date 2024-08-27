import { Text, Title, Image } from '@mantine/core';
import image from './image.svg';
import classes from './EmailBanner.module.css';

export function EmailBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>
          More <span className={classes.highlight}>features</span> coming soon...
        </Title>
        <Text fw={500} fz="lg" mb={5}>
          We are working to ship new features!
        </Text>
        <Text fz="sm" c="dimmed">
          We are working on adding Explore Section. This Explore section will help professionals to keep themselves updated on what's happening in the industry in India and around the world.
        </Text>
        <ul className={classes.featureList}>
          <li>Read blogs</li>
          <li>Read news & articles</li>
          <li>Read research papers</li>
          <li>Watch podcasts</li>
          <li>Follow other professionals</li>
          <li>Tranfer your case to other professionals</li>
        </ul>
      </div>
      <Image src={image} className={classes.image} />
    </div>
  );
}

