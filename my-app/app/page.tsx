import MyInfo from "./components/MyInfo/MyInfo";
import { MyLogo } from "./components/MyInfo/MyLogo";
import WhatiDo from "./components/MyInfo/WhatiDo";
import Resume from "./components/Resume/Resume";



export default async function Home() {



  return (
    <main className="p-5  sm:p-12">
      <MyLogo />
      <MyInfo />
      <WhatiDo />
      <Resume />
    </main>
  );
}
