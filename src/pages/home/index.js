import Header from "../../components/header";
import Cover from "../../components/cover";

const Home = (props) => {
  return (
    <div>
      <Header sideBar={props.sideBar} toggleSideBar={props.toggleSideBar} />
      <Cover />
    </div>
  );
};

export default Home;
