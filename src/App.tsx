// import { HeaderMegaMenu } from './components/Header/HeaderMegaMenu';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { HeroContentLeft } from './components/Hero/HeroContentLeft';
import { FeaturesCards } from './components/Featureone/FeaturesCards';
import { FeaturesTitle } from './components/FeatureTwo/FeaturesTitle';
import { EmailBanner } from './components/Banner/EmailBanner';
function App() {
  return (
    <MantineProvider>
      {<HeroContentLeft/>}
      {<FeaturesCards/>}
      {<FeaturesTitle/>}
      {<EmailBanner/>}

    </MantineProvider>
  );
}

export default App;
