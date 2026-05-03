import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 z-20 flex h-22 w-full flex-row items-center justify-around border-b border-white bg-slate-800 text-white">
      <NavbarMobile />
      <NavbarDesktop />
      <Button
        className="hidden cursor-pointer rounded-md px-3 py-2 md:inline-block"
        onClick={() => navigate("/games")}
        size={"lg"}
      >
        Play Games
      </Button>
    </nav>
  );
}
