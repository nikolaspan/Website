import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Platform } from "@/components/sections/Platform";
import { Partners } from "@/components/sections/Partners";
import { Impact } from "@/components/sections/Impact";
import { BlueLife } from "@/components/sections/BlueLife";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Platform />
      <Partners />
      <Impact />
      <BlueLife />
      <CallToAction />
    </>
  );
}
