import CategorySchools from "./Home/CategorySchools";
import ExploreSection from "./Home/ExploreSection";
import FeaturedSchools from "./Home/FeaturedSchools";
import JoinSchool from "./Home/JoinSchool";
import TrendingSchools from "./Home/TrendingSchools";

export default function Home() {
  return (
    <>
      <ExploreSection/>
      <CategorySchools/>
      <FeaturedSchools/>
      <TrendingSchools/>
      <JoinSchool/>
    </>
  );
}
