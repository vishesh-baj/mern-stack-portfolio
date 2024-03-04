import { nanoid } from "nanoid";
import HomePageCard from "../components/HomePageCard";
import { HOMEPAGE_CARD_MAPPING } from "../constants";
import { useQuery } from "react-query";
import { API_INSTANCE } from "../api";
import Loader from "../components/Loader";
const HomePage = () => {
  const fetchCounts = async () => {
    const response = await API_INSTANCE.get("counts/get-counts");
    return response.data;
  };

  const { data: fetchedCountsData, isLoading } = useQuery(
    "counts",
    fetchCounts
  );

  return (
    <div className="bg-base-300 rounded-xl mx-4">
      <h1 className="text-2xl mx-8 py-4">Home</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-6">
          <div className="grid grid-cols-4 gap-4 mt-4">
            {HOMEPAGE_CARD_MAPPING.map(({ title, color }, idx) => {
              return (
                <HomePageCard
                  key={nanoid()}
                  cardTitle={title}
                  cardColor={color}
                  count={fetchedCountsData?.counts[idx]}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
