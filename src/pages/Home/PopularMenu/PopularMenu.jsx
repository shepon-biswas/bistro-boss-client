import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch(`menu.json`)
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === "popular");
            setMenu(popularItems)
        })
    }, [])
    return (
        <>
         <SectionTitle 
            subHeading={"Check it out"}
            heading={"from our menu"}         
         ></SectionTitle> 

         <div className='md: grid grid-cols-2 gap-x-10'>
         {
            menu.map(item => <MenuItem
            key={item._id}
            item={item}
            ></MenuItem>)
         }   
        </div>  
        </>
    );
};

export default PopularMenu;