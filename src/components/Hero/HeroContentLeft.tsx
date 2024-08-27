import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import classes from './HeroContentLeft.module.css';

export function HeroContentLeft() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      
      {/* Header Section */}
      <div className={classes.header}>
      <div className={classes.logo}>Serene <span className="minds">MINDS</span></div>
        <div className={classes.menu}>
          <a href="#">Features</a>
          <a href="#">Integrations</a>
          <a href="#">Testimonials</a>
          <a href="#">Pricing</a>
        </div>
        <div className={classes.authButtons}>
          <button className={classes.loginButton}>Log in</button>
          <button className={classes.signupButton}>Sign up</button>
        </div>
      </div>

      <Container className={classes.container} size="md">
        <Title className={classes.title}>A fully featured React components library</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever – Mantine includes
          more than 120 customizable components and hooks to cover you in any situation
        </Text>

        <div className={classes.buttonGroup}>
          <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
            Get started
          </Button>
          <Button variant="outline" size="xl" radius="xl" className={classes.controlInverse}>
            Log in
          </Button>
        </div>
      </Container>
    </div>
  );
}