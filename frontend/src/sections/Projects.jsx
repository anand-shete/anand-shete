import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NavLink, useNavigate } from "react-router";
import { motion } from "motion/react";

export default function ProjectsSection() {
  const navigate = useNavigate();
  return (
    <>
      <motion.h1
        className="text-5xl mx-10 text-center mt-20"
        initial={{ scale: 0.5, rotate: -5 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>
      <div className="min-h-fit max-w-screen grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 lg:row-span-1 gap-10 m-10 mb-20">
        <Card className="hover:scale-110 transition">
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
            <Button>
              <NavLink
                to="https://attendance-management-system-rose.vercel.app/"
                target="_blank"
              >
                View Project
              </NavLink>
            </Button>
          </CardFooter>
        </Card>
        <Card className="hover:scale-110 transition">
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
            <Button>
              <NavLink
                to="https://github.com/anand-shete/Blogify"
                target="_blank"
              >
                View Project
              </NavLink>
            </Button>
          </CardFooter>
        </Card>
        <Card className="hover:scale-110 transition">
          <CardHeader>
            <CardTitle className="text-2xl">URL-Shortner</CardTitle>
            <CardDescription>Feb - Mar 2024</CardDescription>
          </CardHeader>
          <CardContent className="text-justify">
            A URL Shortener built with the MERN stack to generate compact,
            shareable links. It supports custom aliases, click tracking, and
            expiration dates for links. JWT authentication ensures secure
            access, and MongoDB stores all shortened URLs. Designed for
            simplicity and efficiency.
          </CardContent>
          <CardFooter className="mx-auto">
            <Button>
              <NavLink
                to="https://github.com/anand-shete/Url-Shortner"
                target="_blank"
              >
                View Project
              </NavLink>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
