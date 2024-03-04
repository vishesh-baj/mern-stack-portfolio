const HomePageCard = ({ cardTitle, cardColor }) => {
  return (
    <div
      className={`col-span-4 md:col-span-1 p-4 ${cardColor} rounded-xl text-black font-semibold`}
    >
      {cardTitle}
    </div>
  );
};

export default HomePageCard;
