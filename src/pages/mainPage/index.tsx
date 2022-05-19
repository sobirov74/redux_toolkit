import { FC } from "react";
import Catalogue from "pages/catalogue";

interface Props {}
const MainPage: FC<Props> = () => {
  return (
    <main>
      <Catalogue />
    </main>
  );
};

export default MainPage;
