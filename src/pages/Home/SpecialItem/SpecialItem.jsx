import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import '../SpecialItem/SpecialItem.css'

const SpecialItem = () => {
  return (
    <>
      <div className="special-item-container text-white my-10 py-5 bg-fixed ">
        <div>
            <SectionTitle
                subHeading={"check it out"}
                heading={"Special Item"}            
            ></SectionTitle>
        </div>
        <div className="flex items-center justify-center md:gap-x-10 p-14">
          <div>
            <img
              className="h-52 w-full object-cover rounded-md "
              src="https://i.ibb.co/KXGdWXb/featured.jpg"
              alt="special item image"
            />
          </div>
          <div className="space-y-2">
            <h5> March 20, 2023</h5>
            <h4 className="text-xl font-bold">Where Can I Get Some?</h4>
            <p  className="w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vero
              repellat natus error doloremque optio!
            </p>
            <button className="btn btn-primary"> Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialItem;
