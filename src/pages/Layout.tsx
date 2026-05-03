import { Loader } from "@/components/common";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router";

const Layout = () => {
  const { key } = useLocation();

  return (
    <Suspense fallback={<Loader />} key={key}>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
