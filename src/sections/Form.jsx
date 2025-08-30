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
import { useForm } from "@formspree/react";
import { RefreshCw } from "lucide-react";

export default function Form() {
  const [state, handleSubmit, reset] = useForm("mblogeld");

  if (state.submitting) {
    return (
      <Card className="max-w-screen h-[80vh] flex items-center justify-center p-6 md:p-10">
        <RefreshCw className="h-10 w-10 animate-spin" />
      </Card>
    );
  }

  if (state.succeeded) {
    return (
      <div className="max-w-screen flex h-[80vh] items-center justify-center p-6 md:p-10">
        <Card className="my-30 w-[60vw] text-center shadow-2xl hover:scale-103 transition-all">
          <CardHeader>
            Thank you for the message. I have received it and will respond to
            you shortly!
          </CardHeader>
        </Card>
      </div>
    );
  }
  return (
    <div className="max-w-screen flex items-center justify-center p-6 md:p-10">
      <Card className="my-30 w-[60vw] text-center shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Me</CardTitle>
          <CardDescription>Enter your message below</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-5" onSubmit={handleSubmit}>
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
            <Button type="submit" disabled={state.submitting}>
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
