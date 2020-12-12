import Page from "./page";
import sonhosData from "../data/sonhos.json";

const Home = () => <Page sonhosData={sonhosData} pageName='sonhos' />;
export default Home;
