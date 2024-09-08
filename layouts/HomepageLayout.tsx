import type { ReactNode } from "react";
import HomepageNavbar from "../components/navbars/HomepageNavbar";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <section>
      <HomepageNavbar />
      {children}
    </section>
  );
}

export default Layout;
