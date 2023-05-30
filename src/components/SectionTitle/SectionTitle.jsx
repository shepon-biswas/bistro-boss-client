
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-10">
            <p className="text-yellow-600 my-4">{subHeading}</p>
            <h3 className="uppercase text-3xl font-bold border-y-4 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;