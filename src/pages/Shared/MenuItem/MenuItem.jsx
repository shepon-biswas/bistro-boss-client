const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <>
      <div className="flex gap-2 items-center my-5">
        <img className="w-[120px] rounded-e-full  rounded-b-full" src={item.image} alt="item image" />
        <div>
            <h3 className="text-xl font-semibold">{name}-----------</h3>
            <p>{recipe}</p>
            
        </div>
        <span className="text-yellow-600 font-semibold">${price}</span>
      </div>
    </>
  );
};

export default MenuItem;
