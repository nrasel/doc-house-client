import { Helmet } from "react-helmet-async";
import Service from "../../Service/Service";
import ExpertDoctor from "../ExpertDoctor/ExpertDoctor";
import PatientSays from "../PatientSays/PatientSays";
import Banner from "./Banner/Banner";
const Home = () => {
  return (
    <div className="text-3xl">
      <Helmet>
        <title>DOC HOUSE | HOME</title>
      </Helmet>
      <Banner />
      <Service />
      <PatientSays />
      <ExpertDoctor />
    </div>
  );
};

export default Home;
