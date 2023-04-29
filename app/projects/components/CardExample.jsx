"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
 
export default function Example({name, author, year, imgSrc, logo}) {

  return (
    <Card
      shadow={false}
      className="relative grid min-h-screen m-auto w-full items-end justify-center overflow-hidden text-center md:w-1/3"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgSrc})`
        }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {name}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          {year}<br/>{author}
        </Typography>
        <Avatar
          size="xxl"
          variant="circular"
          alt="candice wu"
          className="border-2 border-white"
          src={logo}
        />
      </CardBody>
    </Card>
  );
}