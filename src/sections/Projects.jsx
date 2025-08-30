import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NavLink } from "react-router";
import { motion } from "motion/react";

export default function ProjectsSection() {
  return (
    <div className="mt-40 flex min-h-[50vh] flex-col items-center justify-center overflow-hidden border-t-2 bg-slate-300">
      <motion.h1
        className="mx-10 mt-20 text-center text-5xl"
        initial={{ scale: 0.5, rotate: -10 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>
      <div className="max-w-screen m-10 mb-20 grid min-h-fit grid-rows-3 gap-10 *:transition-all *:hover:scale-105 lg:row-span-1  lg:grid-rows-1">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Attendance Management System
            </CardTitle>
            <CardDescription>Feb - Mar 2024</CardDescription>
          </CardHeader>
          <CardContent className="text-justify">
            A full-stack web application built using React.js, Node.js,
            Express.js, and MongoDB. It enables teachers to generate
            <b> QR codes </b> for attendance marking, while students can
            <b> scan these codes </b> to record their presence. The system
            ensures secure authentication using <b> JWT</b>, real-time
            attendance tracking and role-based access control.
          </CardContent>
          <CardFooter className="mx-auto">
            <NavLink
              to="https://attendance-management-system-rose.vercel.app/"
              target="_blank"
            >
              <Button>Try it Out</Button>
            </NavLink>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Blogify</CardTitle>
            <CardDescription>Jan - Feb 2024</CardDescription>
          </CardHeader>
          <CardContent className="text-justify">
            A dynamic and feature-rich blogging platform built with the MERN
            stack. It allows users to create, edit, and manage blogs with ease.
            It integrates the <b> TinyMCE editor </b>for rich text editing and
            utilizes <b> AWS S3 </b> buckets for secure image storage. User
            authentication is implemented using <b> JSON Web Tokens </b> to
            ensure a secure and seamless experience.
          </CardContent>
          <CardFooter className="mx-auto">
            <NavLink to="https://blogify-one-ruby.vercel.app/" target="_blank">
              <Button>Try it Out</Button>
            </NavLink>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Skynet</CardTitle>
            <CardDescription>June - July 2024</CardDescription>
          </CardHeader>
          <CardContent className="text-justify">
            Skynet is a witty and responsive Discord bot that helps automate
            tasks, provide information, and serve as a digital sidekick — built
            using Node.js and deployed using Docker. It runs as a background
            worker and integrates with external APIs to provide rich,
            conversational responses.
          </CardContent>
          <CardFooter className="mx-auto">
            <NavLink to="https://discord.com/invite/ZDQfRSN3" target="_blank">
              <Button>Try it Out</Button>
            </NavLink>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
