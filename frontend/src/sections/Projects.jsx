import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectsSection() {
  return (
    <>
      <h1 className="text-5xl text-center mt-20 mb-10">Projects</h1>
      <div className="min-h-[75vh] max-w-screen flex flex-col lg:flex-row items-center xl:space-x-20 border">
        <Card className="mx-10 my-5 relative hover:scale-110 transition">
          <CardHeader>
            <CardTitle className="text-2xl">
              Attendance Management System
            </CardTitle>
            <CardDescription>Feb - Mar 2024</CardDescription>
          </CardHeader>
          <CardContent>
            A full-stack attendance management system tracking student
            attendance and generating reports, built with Node.js, Express, and
            MongoDB for database administration, featuring EJS for dynamic
            front-end rendering.
          </CardContent>
          <CardFooter>
            <Button>View Project</Button>
            <Button>Source Code</Button>
          </CardFooter>
        </Card>
        <Card className="mx-10 my-5 relative hover:scale-110 transition">
          <CardHeader>
            <CardTitle className="text-2xl">
              Attendance Management System
            </CardTitle>
            <CardDescription>Feb - Mar 2024</CardDescription>
          </CardHeader>
          <CardContent>
            A full-stack attendance management system tracking student
            attendance and generating reports, built with Node.js, Express, and
            MongoDB for database administration, featuring EJS for dynamic
            front-end rendering.
          </CardContent>
          <CardFooter>
            <Button>View Project</Button>
            <Button>Source Code</Button>
          </CardFooter>
        </Card>
        <Card className="mx-10 my-5 relative hover:scale-110 transition">
          <CardHeader>
            <CardTitle className="text-2xl">
              Attendance Management System
            </CardTitle>
            <CardDescription>Feb - Mar 2024</CardDescription>
          </CardHeader>
          <CardContent>
            A full-stack attendance management system tracking student
            attendance and generating reports, built with Node.js, Express, and
            MongoDB for database administration, featuring EJS for dynamic
            front-end rendering.
          </CardContent>
          <CardFooter>
            <Button>View Project</Button>
            <Button>Source Code</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
