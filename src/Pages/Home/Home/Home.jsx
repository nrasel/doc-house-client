import { Helmet } from "react-helmet-async";
import Service from "../../Service/Service";
import Banner from "./Banner/Banner";
const Home = () => {
  return (
    <div className="text-3xl">
      <Helmet>
        <title>DOC HOUSE | HOME</title>
      </Helmet>
      <Banner />
      <Service />
    </div>
  );
};

export default Home;
