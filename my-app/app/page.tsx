import MyInfo from "./components/MyInfo";
import { MyLogo } from "./components/MyLogo";
import WhatiDo from "./components/WhatiDo";


export default async function Home() {



  return (
    <main className="p-5  sm:p-12">
      <MyLogo />
      <MyInfo />
      <WhatiDo />
    </main>
  );
}
