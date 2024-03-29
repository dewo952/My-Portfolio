import Head from "next/head";
import Image from "next/image";
import React from "react";
import NetFlix from "../public/assets/projects/netflix.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ReactNativeSocialApp = () => {
  return (
    <>
      <Head>
        <title>React Native Social Media App</title>
        <meta name="description" content="ReactNativeSocialApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={NetFlix}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Social App</h2>
            <h3>React JS / Nodejs / MongoDB/ Firebase</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2 className="mb-2">Overview</h2>
            <p>
              MERN stack app developed using
              <span className="font-semibold text-teal-500">
                {" "}React Native, MongoDB, NodeJS and Express
              </span>. Inspired from Instagram users can connect with their friends and communicate with them using chat session, can upload pictures, can manage their profile, and etc. Currently app is in development phase and will be pushed to production soon 
              
              
            </p>

            <a href="" target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4">Live</button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React Native
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> NodeJS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> MongoDB
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> ExpressJS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Firebase
                </p>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReactNativeSocialApp;
