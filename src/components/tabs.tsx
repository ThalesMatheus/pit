import Image from "next/image";
import wallpaper from "../images/logo.png";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "@mui/material";
import svg from "../images/undraw_book_reading_re_fu2c.svg";
import cape from "../images/surf.jpg";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const InDivider = styled.div`
  .container-about {
    position: relative;
   
  }
`;
export default function DefaultCard({ svg, text }: { svg: React.ReactNode; text: string }){
  return (
    <>
      <InDivider>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="container-about w-full mr-[20%]  flex justify-center items-center h-[20rem]"
        >
          <div className="controller w-full flex justify-center mt-[3%] items-center h-full">
            <Image
              src={svg}
              style={{
                maxHeight: "100%",
                maxWidth: "40%",
                marginRight: "10%",
              }}
            ></Image>
            <div className="text-content flex flex-col w-[25rem]">
              {text}
              <div
                className="button-trate flex justify-end"
                style={{ width: "100%" }}
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "green" }}
                >
                  Contained
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </InDivider>
    </>
  );
}
