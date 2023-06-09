import { Link } from "react-router-dom";
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
        {/* Button */}
        <div className="text-center">
        <Link to={`/order/${title}`}><button className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-500">Order Food Now</button></Link>
        </div>
      </div>
    </>
  );
};

export default MenuCategory;
