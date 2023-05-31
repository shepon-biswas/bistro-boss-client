import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
    return (
        <>
        <Helmet>
                <title>Our Menu | Bistro Boss Restaurant</title>
            </Helmet>
            <Cover 
            img={'https://i.ibb.co/f9Tx2zJ/banner3.jpg'}
            title={"Our Shop"}
            desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit laboriosam veritatis quas quam atque eius."}
            
            ></Cover>

        </>
    );
};

export default Menu;