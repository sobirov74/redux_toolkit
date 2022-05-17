import Header from "../../components/Header/Header";
import { useAppSelector } from "../../redux/hooks";
import Catalogue from "../Catalogue/Catalogue";

const MainPage = () => {
  // const { data } = useAppSelector((state) => state.product);
  // console.log(typeof data);
  return (
    <>
      <Header />
      <main>
        <Catalogue />
      </main>
    </>
  );
};

export default MainPage;
