
import CallUs from '../../../components/CallUs/CallUs';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Feature from '../Feature/Feature';
import PopularMenu from '../PopularMenu/PopularMenu';
import Recommended from '../Recommended/Recommended';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Category></Category>
            <Feature></Feature>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Recommended></Recommended>
        </div>
    );
};

export default Home;