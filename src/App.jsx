import Nav from "./components/Nav";
import {
  Hero,
  PopularProduct,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";

const App = () => {
  return (
    <>
      {/* <h1>heeloo </h1> */}
      <main className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProduct />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;


// https://github.com/adrianhajdin/nike_landing_page