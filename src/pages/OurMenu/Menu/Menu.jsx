import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category ==="offered");
    const dessert = menu.filter(item => item.category ==="dessert");
    const pizza = menu.filter(item => item.category ==="pizza");
    const salad = menu.filter(item => item.category ==="salad");
    const soup = menu.filter(item => item.category ==="soup");
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
            {/* Offered Items */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Tody's Offfer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* Desserets Items */}
            <MenuCategory items={dessert} title={"dessert"} coverImg={"https://i.ibb.co/b5q59nW/dessert-bg.jpg"}></MenuCategory>
            {/* Pizza Items */}
            <MenuCategory items={pizza} title={"pizza"} coverImg={"https://i.ibb.co/b5q59nW/dessert-bg.jpg"}></MenuCategory>
            {/* Salad items */}
            <MenuCategory items={salad} title={"salad"} coverImg={"https://i.ibb.co/VCLLP7Q/salad-bg.jpg"}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} coverImg={"https://i.ibb.co/D9phNnZ/banner.jpg"}></MenuCategory>

        </>
    );
};

export default Menu;