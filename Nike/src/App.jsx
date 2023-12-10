// import React from "react";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  SuperQuality,
  Subscibe,
} from "./sections/index";
import Nav from "./Component/Nav";
function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r wide:padding-l padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscibe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
