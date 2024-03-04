import { nanoid } from "nanoid";
import HomePageCard from "../components/HomePageCard";
import { HOMEPAGE_CARD_MAPPING } from "../constants";
import { useQuery } from "react-query";
import { API_INSTANCE } from "../api";
const HomePage = () => {
  const fetchCounts = async () => {
    const response = await API_INSTANCE.get("counts/get-counts");
    return response.data;
  };

  const {
    data: fetchedCountsData,
    isLoading,
    errors,
  } = useQuery("counts", fetchCounts, {
    onSuccess: (data) => {
      console.log("COUNTS DATA: ", data);
    },
  });

  return (
    <div className="p-6 w-[96%] mx-auto bg-base-300 rounded-xl">
      <h1 className="text-2xl">Home</h1>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          HOMEPAGE_CARD_MAPPING.map(({ title, color }, idx) => {
            return (
              <HomePageCard
                key={nanoid()}
                cardTitle={title}
                cardColor={color}
                count={fetchedCountsData && fetchedCountsData.counts[idx]}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default HomePage;
