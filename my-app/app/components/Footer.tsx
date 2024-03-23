import Link from "next/link";
import { MyLogo } from "./MyInfo/MyLogo";


export default function Footer() {

    return (
        <div className="mt-40 text-center">
            <p className=" text-5xl text-white text-center">Let's chat</p>

            <span className="border-gray-700 border-t border-b-0 w-1/4 md:w-1/5 mt-40 inline-block text-center"></span>


           

            <div className="text-white mt-20">
                    <Link className="mx-1" href={'/about'}>About</Link>
                    <Link className="mx-1" href={'/home'}>Home</Link>
                    <Link className="mx-1" href={'/work'}>Work</Link>
            </div>

            <div className="mt-20 text-gray-400">
                <p>© All rights reserved MilosMladenovic</p>
            </div>

        </div>
    )
}
