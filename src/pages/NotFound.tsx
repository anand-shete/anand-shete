import { SmoothScroll } from "@/components/common";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleAlert } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex h-screen max-w-screen items-center justify-center text-center">
      <SmoothScroll />
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="flex flex-row justify-center text-2xl">
            <CircleAlert className="relative top-1 mr-2 text-red-600" />
            Page Not Found
          </CardTitle>
          <CardDescription>Sorry, the page you're looking for doesn't exist.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="max-w-xl">
            The page you're trying to access is either moved or doesn't exist. Please check the URL
            or go{" "}
            <Link to="/" className="underline">
              back to the homepage
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
