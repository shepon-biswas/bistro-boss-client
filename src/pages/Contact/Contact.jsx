import { FaBeer, FaClock, FaFly, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Bistro Boss Restaurant</title>
      </Helmet>
      {/* Cover Section */}
      <Cover
        img={"https://i.ibb.co/bgBqy1p/banner.jpg"}
        title={"Contact Us"}
        desc={"Would You Love To Contact Us?"}
      ></Cover>
      <SectionTitle
        heading={"Our Location"}
        subHeading={"Visit Us"}
      ></SectionTitle>
      <div className="my-10 md:grid grid-cols-3 gap-8 ">
        <div className="border p-6 space-y-3 text-center">
          <div className="text-center inline-flex justify-center">
            {" "}
            <FaPhoneAlt className="w-16 h-16 text-orange-500"></FaPhoneAlt>{" "}
          </div>
          <h4 className="uppercase text-2xl font-bold">"phone"</h4>
          <span>+880160005200</span>
        </div>
        <div className="border p-6 space-y-3 text-center">
          <div className="text-center inline-flex justify-center">
            {" "}
            <FaMapMarkerAlt className="w-16 h-16 text-orange-500"></FaMapMarkerAlt>{" "}
          </div>
          <h4 className="uppercase text-2xl font-bold">"Address"</h4>
          <span>213/A, New Park Street, NY</span>
        </div>
        <div className="border p-6 space-y-3 text-center">
          <div className="text-center inline-flex justify-center">
            {" "}
            <FaClock className="w-16 h-16 text-orange-500"></FaClock>{" "}
          </div>
          <h4 className="uppercase text-2xl font-bold">"Hours"</h4>
          <span>10am-8pm</span>
        </div>
      </div>

      {/* Contact Form */}
      <SectionTitle
        heading={"Contact Us"}
        subHeading={"Send Us A Message"}
      ></SectionTitle>
      <form className="my-10 space-y-2">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Input Your Name..."
            className="input input-bordered border-orange-500 w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            placeholder="Input Your Email..."
            className="input input-bordered border-orange-500 w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Number</span>
          </label>
          <input
            type="email"
            placeholder="Input Your Number..."
            className="input input-bordered border-orange-500 w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered border-orange-500 h-24"
            placeholder="Your Message..."
          ></textarea>
        </div>
        <input className="btn btn-block mt-5 bg-orange-500 border-none" type="submit"  value={"Send Message"} />
      </form>
    </>
  );
};

export default Contact;
