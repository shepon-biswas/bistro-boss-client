import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <>
            <Carousel>
                <div>
                    <img src="https://i.ibb.co/sjwRkb0/01.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/xzbbr15/02.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/MRN5WZK/03.png" />
                </div>
            </Carousel>
        </>
    );
};

export default Banner;