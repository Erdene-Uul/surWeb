import Cover from "../../components/cover";
import AboutUs from "../../components/aboutUs";
import Goals from "../../components/goal";

const Home = (props) => {
  return (
    <div className="">
      <Cover sideBar={props.sideBar} toggleSideBar={props.toggleSideBar} />
      <AboutUs />
      <Goals />
    </div>
  );
};

export default Home;
