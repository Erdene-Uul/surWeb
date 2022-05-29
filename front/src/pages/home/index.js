import Cover from "../../components/cover";
import AboutUs from "../../components/aboutUs";
import Goals from "../../components/goal";
import CommonQuestions from "../../components/CommonQuestions";

const Home = (props) => {
  return (
    <div className="">
      <Cover sideBar={props.sideBar} toggleSideBar={props.toggleSideBar} />
      <AboutUs />
      <Goals />
      <CommonQuestions />
    </div>
  );
};

export default Home;
