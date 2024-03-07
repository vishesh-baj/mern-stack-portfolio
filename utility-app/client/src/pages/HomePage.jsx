import { nanoid } from "nanoid";
import { HomePageCard } from "../components";
import { HOMEPAGE_CARD_MAPPING } from "../constants";
import { useQuery } from "react-query";
import { API_INSTANCE } from "../api";
import Loader from "../components/Loader";
import SectionLayout from "../layout/SectionLayout";
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
    <SectionLayout sectionTitle="Dashboard">
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </SectionLayout>
  );
};

export default HomePage;
