import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import CategoryTabCard from "../CategoryTabCard/CategoryTabCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, SetTabIndex] = useState(initialIndex)

    const [menu] = useMenu();
    const soup = menu.filter(item => item.category ==="soup");
    const dessert = menu.filter(item => item.category ==="dessert");
    const pizza = menu.filter(item => item.category ==="pizza");
    const salad = menu.filter(item => item.category ==="salad");
    const drinks = menu.filter(item => item.category ==="drinks");

  return (
    <>
        <Helmet title="Order Food | Bistro Boss Restaurent"></Helmet>
      <Cover
        img={"https://i.ibb.co/NsDzXtD/banner2.jpg"}
        title={"Order Food"}
      ></Cover>

      {/* Category Wise Tabs Section */}
      <div className="my-14">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => SetTabIndex(index)}>
          <TabList className={"text-center space-x-3"}>
            <Tab >SALAD</Tab>
            <Tab >PIZZA</Tab>
            <Tab >SOUPS</Tab>
            <Tab >DESSERTS</Tab>
            <Tab >DRINKS</Tab>

            
          </TabList>
            {/* Salad */}
          <TabPanel>
            <CategoryTabCard items={salad}></CategoryTabCard>
          </TabPanel>
          {/* Pizza */}
          <TabPanel>
          <CategoryTabCard items={pizza}></CategoryTabCard>
          </TabPanel>
          {/* Soups */}
          <TabPanel>
          <CategoryTabCard items={soup}></CategoryTabCard>
          </TabPanel>
          {/* Desserts */}
          <TabPanel>
          <CategoryTabCard items={dessert}></CategoryTabCard>
          </TabPanel>
          {/* Drinks */}
          <TabPanel>
          <CategoryTabCard items={drinks}></CategoryTabCard>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Order;
