import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";
import TopBar from "../../components/TopBar/TopBar";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <TopBar />
      <Featured type="" />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
