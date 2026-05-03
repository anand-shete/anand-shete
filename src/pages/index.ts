import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Games = lazy(() => import("./Games"));
const Contact = lazy(() => import("./Contact me"));
const NotFound = lazy(() => import("./NotFound"));
const Layout = lazy(() => import("./Layout"));

export { Home, Games, Contact, Layout, NotFound };
