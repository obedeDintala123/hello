import "../../assents/style/output.css";
import Article from "./Article";
import { CriaSuaPublicacao } from "./CriaSuaPublicacao";
const Main = () => {
  return (
    <main className="bg-[#F2F4F7] w-full h-screen mt-20">
      <Article>
       <CriaSuaPublicacao />
      </Article>
    </main>
  );
};

export default Main;
