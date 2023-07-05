import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartminus,
  faCartPlus,
  faCartShopping,
  faHamburger,
  faList,
  faMagnifyingGlass,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import wallpaper from "../images/logo.png";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "@mui/material";
import wave from "../images/wave(1).svg";

import svg from "../images/MONTANHA.svg";
import cape from "../images/a8dr_05f3_210816.jpg";
import {BasicUsage} from "@/components/group"
import { motion } from "framer-motion";
import dog from "../images/undraw_dog_c7i6.svg";
import DefaultCard from "@/components/tabs";
import ActionAreaCard from "@/components/card";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
const HeaderStyle = styled.div`
-webkit-box-shadow: 0px 8px 19px -1px rgba(255,255,255,1);
-moz-box-shadow: 0px 8px 19px -1px rgba(255,255,255,1);
box-shadow: 0px 8px 19px -1px rgba(255,255,255,1);
`;
const Cape = styled.div``;

const Page = (props: any) => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event: any) => {
    setIsShown(current => !current);
  }
  return (
    <>
    <HeaderStyle>
    <header className="flex flex-col w-full h-[5rem] z-10 items-center relative bg-white" style={{
      
    }}>
      <div className="controller h-full w-full">

      <nav className="flex w-full items-center h-full justify-between">
        <div className="image-logo">

        </div>
        <div className="navbar-nav flex items-center justify-center">
        <div className="nav-item flex items-center flex-col justify-center">
          <Link href="/login">sexo</Link>
        </div>
        <div className="nav-item flex items-center flex-col justify-center">
          <Link href="/login">sexo</Link>
        </div>
        <div className="nav-item flex items-center flex-col justify-center">
          <button onClick={handleClick}>sexo2</button>
        </div>
        <div className="nav-item flex items-center flex-col justify-center">
          <Link href="/login">Login</Link>
        </div>
        </div>
      </nav>
      </div>
    <div className="relative z-1">
    </div>
    </header>
    </HeaderStyle>
    <div className="container-image w-full h-auto relative z-0">
      <Image src={cape}>

      </Image>
    </div>
    {isShown && (
      <div className="flex absolute">
    <BasicUsage />
      </div>
    )}

    </>
  );
};

export default Page;
