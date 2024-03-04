const HomePageCard = ({ cardTitle, cardColor, count }) => {
  return (
    <div
      className={`col-span-4 md:col-span-1 p-4 ${cardColor} rounded-xl text-black font-semibold`}
    >
      <div className="flex justify-between">
        <h2>{cardTitle}</h2>
        <span>{count}</span>
      </div>
    </div>
  );
};

export default HomePageCard;
