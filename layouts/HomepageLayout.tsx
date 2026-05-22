import type { ReactNode } from "react";
import HomepageNavbar from "../components/navbars/HomepageNavbar";

import HomepageFooter from "../components/footers/HomepageFooter";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <section>
      <HomepageNavbar />

      {children}
      <HomepageFooter />
    </section>
  );
}

export default Layout;
