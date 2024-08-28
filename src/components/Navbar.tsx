import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useContext } from "react";
import { MenuContext } from "@/contexts/MenuContext";
import { Button } from "./ui/button";
import { TiThMenu } from "react-icons/ti";

export const Navbar = () => {

    const menuCtx = useContext(MenuContext)

    return(
        <div className="border-r-2 absolute top-0 left-[-500px] bottom-0 bg-secondary transition-all delay-300 md:static" style={{left: menuCtx?.menu === true ? '0' : ''}}>
            <div className="p-5">
                <div className="font-extrabold text-2xl mb-8 pl-2 flex items-center gap-4">ESTOQUE
                <Button size='icon' variant='ghost' className="md:hidden" onClick={() => menuCtx?.setMenu(false)}>
                        <TiThMenu className="text-xl"/>
                </Button>
                </div>

                <nav className="
                        [&>div]:flex [&>div]:gap-4 [&>div]:items-center [&>div]:text-xl [&>div]:cursor-pointer [&>div:hover]:bg-primary [&>div]:p-2 [&>div]:rounded-md
                        flex flex-col gap-6"
                    >
                    <div>
                        <MdOutlineSpaceDashboard />
                        Dashboard
                    </div>
                    <div>
                        <FaBox />
                        Estoque
                    </div>
                    <div>
                        <AiOutlineProduct />
                        Produtos
                    </div>
                    <div>
                        <FaRegUser />
                        Usuários
                    </div>
                    <div>
                        <IoSettingsOutline />
                        Configurações
                    </div>
                    <div>
                        <RiMoneyDollarCircleLine />
                        Despesas
                    </div>
                </nav>
            </div>
        </div>
    )
}