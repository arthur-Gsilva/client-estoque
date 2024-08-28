import { TiThMenu } from "react-icons/ti";
import { FaBell } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ThemeToggle } from "./theme-toggle";
import { useContext } from "react";
import { MenuContext } from "@/contexts/MenuContext";

export const Header = () => {

    const menuCtx = useContext(MenuContext)

    return(
        <header>
            <div className="w-full px-5 mx-auto  flex items-center justify-between pt-6">
                <div className="flex items-center gap-3">
                    <Button size='icon' variant='ghost' className="md:hidden" onClick={() => menuCtx?.setMenu(true)}>
                        <TiThMenu className="text-xl"/>
                    </Button>

                    <div className="flex items-center border border-gray-400 rounded p-1 pl-3 gap-2">
                        <FaBell />
                        <input className="bg-transparent border-none flex-1 outline-none w-full" placeholder="Digite Algo..."/>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="items-center gap-4 flex">
                        <ThemeToggle />
                        <FaBell className="hidden md:block"/>
                        <div className="h-4 w-[2px] bg-gray-500 hidden md:block"></div>
                        <div className="items-center gap-4 hidden md:flex">
                            <img src="/OIP.jpg" alt="Foto de perfil do usuário" className="w-10 h-10 rounded-full"/>
                            <div>Arthur Gabriel</div>
                        </div>
                    </div>
                    
                    <CiSettings className="text-xl"/>
                </div>

                
            </div>
        </header>
    )
}