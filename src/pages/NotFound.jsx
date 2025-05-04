import { Footer, Navbar } from "@/components/common";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-screen flex items-center justify-center">
      <Card className="my-40 w-[60vw] text-center shadow-2xl shadow-black/60">
        <CardHeader>
          <CardTitle className="flex flex-row justify-center text-2xl">
            <CircleAlert className="relative top-1 mr-1 text-red-600" />
            Page Not Found
          </CardTitle>
          <CardDescription>
            Sorry, the page you're looking for doesn't exist.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            The page you're trying to access is either moved or doesn't exist.
            Please check the URL or go back to the homepage.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
