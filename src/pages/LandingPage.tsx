import { Hero } from '../components/Hero';
import { WhatIsEventa } from '../components/WhatIsEventa';
import { WhoIsEventaFor } from '../components/WhoIsEventaFor';
import { CoreCapabilities } from '../components/CoreCapabilities';
import { Billing } from '../components/Billing';
import { About } from '../components/About';

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <WhatIsEventa />
      <WhoIsEventaFor />
      <CoreCapabilities />
      <Billing />
      <About />
    </>
  );
};
