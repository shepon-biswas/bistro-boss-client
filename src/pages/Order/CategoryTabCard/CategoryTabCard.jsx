
import FoodCard from '../../Shared/FoodCard/FoodCard';

const CategoryTabCard = ({items}) => {
    return (
        <>
           <div className="my-10 md: grid grid-cols-3 gap-5">
            {
                items.map(item => <FoodCard
                key={item._id}
                item={item}
                ></FoodCard>)
            }
            </div>
        </>
    );
};

export default CategoryTabCard;