import type { ReactNode } from "react";
import HomepageNavbar from "../components/navbars/HomepageNavbar";
import { useQuery } from "@tanstack/react-query";
import { getLastestAnnouncementService } from "../sanity/services";
import AnnouncementNavbar from "../components/navbars/AnnouncementNavbar";
import HomepageFooter from "../components/footers/HomepageFooter";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const lastestNews = useQuery({
    queryKey: ["lastest-news"],
    queryFn: () => getLastestAnnouncementService(),
  });
  return (
    <section>
      {lastestNews.data && (
        <AnnouncementNavbar announcement={lastestNews.data} />
      )}
      <HomepageNavbar />

      {children}
      <HomepageFooter />
    </section>
  );
}

export default Layout;
