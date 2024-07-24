import Carousel from "./Carousel";
import SlickCarousel from "./SlickCarousel";

const App = () => {
  return (
    <main>
      <Carousel />
      <h2 style={{ textAlign: 'center' }}>Slick Slider</h2>
      <SlickCarousel />
    </main>
  );
};
export default App;
