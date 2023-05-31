
import { Helmet } from 'react-helmet-async';
import CallUs from '../../../components/CallUs/CallUs';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Feature from '../Feature/Feature';
import PopularMenu from '../PopularMenu/PopularMenu';
import Recommended from '../Recommended/Recommended';
import SpecialItem from '../SpecialItem/SpecialItem';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Home | Bistro Boss Restaurant</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Feature></Feature>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Recommended></Recommended>
            <SpecialItem></SpecialItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;