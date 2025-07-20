import CategoryFeaturedSchools from "./Home/CategoryFeaturedSchools";
import ExploreSection from "./Home/ExploreSection";
import JoinSchool from "./Home/JoinSchool";
import TrendingSchools from "./Home/TrendingSchools";

export default function Home() {
  return (
    <>
      <ExploreSection/>
      <CategoryFeaturedSchools/>
      <TrendingSchools/>
      <JoinSchool/>
    </>
  );
}
