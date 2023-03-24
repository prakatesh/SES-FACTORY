import Carousel from 'react-bootstrap/Carousel';
import Image from "react-bootstrap/Image";
import sag2 from "../components/sag2.jpg"
import sago from "../components/newsag.jpg"
function Con1() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <Image className="d-block w-100" src={sago}/>
        <Carousel.Caption>
          <h3>Tapioca Starch</h3>
          <p>A grain-free flour made from cassava root. It is a starchy, slightly sweet flour that is a staple for gluten free baking.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image className="d-block w-100" src={sag2}/>
        <Carousel.Caption>
          <h3>Sago Seeds</h3>
          <p>A type of starch that's commonly extracted from a palm called Metroxylon sagu.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Con1;