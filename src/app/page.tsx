import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Promotions from "./components/Promotions";
import Unique from "./components/Unique";


export default function Home() {
  return (
    <>
      
      <Hero/>
      <Promotions />
      <Products />
      <Unique />
      <Newsletter />

    </>
  )
}