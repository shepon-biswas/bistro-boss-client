import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <>
      <div className="my-14">
        {title && <Cover img={coverImg} title={title}></Cover>}

        <div className="md: grid grid-cols-2 gap-x-10 my-10">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuCategory;
