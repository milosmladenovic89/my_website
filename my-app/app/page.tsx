import MyInfo from "./components/MyInfo";
import { MyLogo } from "./components/MyLogo";

export default async function Home() {

  return (
    <main className="p-5  sm:p-12">
      <MyLogo />
      <MyInfo />
      <div className="border border-white h-80 w-full my-5"></div>
      <div className="border border-white h-80 w-full"></div>
    </main>
  );
}
