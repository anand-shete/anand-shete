import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";

export default function Form() {
  useEffect(() => {
    console.log("var", import.meta.env.VITE_FORMSUBMIT_ID);
  });

  return (
    <div className="max-w-screen flex items-center justify-center p-6 md:p-10">
      <Card className="my-30 w-[60vw] text-center shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Me</CardTitle>
          <CardDescription>Enter your message below</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={`https://formsubmit.co/${import.meta.env.VITE_FORMSUBMIT_ID}`}
            method="POST"
            className="space-y-5"
          >
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Jhon Doe"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
