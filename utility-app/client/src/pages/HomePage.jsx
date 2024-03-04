import { nanoid } from "nanoid";
import HomePageCard from "../components/HomePageCard";
import { HOMEPAGE_CARD_MAPPING } from "../constants";

const HomePage = () => {
  return (
    <div className="p-6 w-[96%] mx-auto bg-base-300 rounded-xl">
      <h1 className="text-2xl">Home</h1>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {HOMEPAGE_CARD_MAPPING.map(({ title }) => {
          return <HomePageCard key={nanoid()} cardTitle={title} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
