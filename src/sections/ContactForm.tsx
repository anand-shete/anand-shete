import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@formspree/react";
import { RefreshCw } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mblogeld");

  if (state.submitting) {
    return (
      <Card className="flex h-[80vh] max-w-screen items-center justify-center p-6 md:p-10">
        <RefreshCw className="h-10 w-10 animate-spin" />
      </Card>
    );
  }

  if (state.succeeded) {
    return (
      <div className="flex max-w-screen items-center justify-center p-6 md:p-10">
        <Card className="w-[60vw] text-center shadow-2xl">
          <CardHeader>
            Thank you for the message. I have received it and will respond to you shortly!
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex max-w-screen flex-col items-center justify-center p-6 md:p-10">
      <h1 className="text-2xl font-bold text-slate-800">Contact Me</h1>
      <p className="pt-2 text-sm text-slate-600">
        Have a project in mind or just want to say hi? Feel free to drop a message!
      </p>
      <Card className="mt-10 mb-20 w-[60vw] text-left shadow-lg">
        <CardHeader></CardHeader>
        <CardContent>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" placeholder="Jhon Doe" required />
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
              <Textarea
                id="message"
                name="message"
                className="pb-20"
                placeholder="Your message..."
              />
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
