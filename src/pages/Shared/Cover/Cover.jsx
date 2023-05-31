const Cover = ({img, title, desc}) => {
  return (
    <>
      <div
        className="hero h-[450px]"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl bg-white px-8 py-4 opacity-50 text-black rounded">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cover;
