import { GetStaticProps } from "next";
import { useMemo, useState } from "react";
import HomepageLayout from "../../layouts/HomepageLayout";
import SEOHead from "../../components/seo/SEOHead";
import AnnouncementCard from "../../components/updates/AnnouncementCard";
import AnnouncementFilter, {
  FilterValue,
} from "../../components/updates/AnnouncementFilter";
import { updatesLanguageData } from "../../data/languages/updates";
import { Announcement, getAllAnnouncements } from "../../services/announcement";
import { useGetLanguage } from "../../react-query";

type Props = { announcements: Announcement[] };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const announcements = await getAllAnnouncements();
  return { props: { announcements } };
};

export default function NewsPage({ announcements }: Props) {
  const language = useGetLanguage();
  const lang = language.data ?? "en";
  const [filter, setFilter] = useState<FilterValue>("all");

  const visible = useMemo(() => {
    if (filter === "all") return announcements;
    return announcements.filter((item) => item.type === filter);
  }, [announcements, filter]);

  return (
    <HomepageLayout>
      <SEOHead
        title={`${updatesLanguageData.pageTitle(lang)} - Tatuga School`}
        description={updatesLanguageData.pageSubtitle(lang)}
      />
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 p-5 font-Anuphan md:py-10">
        <header className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-icon-color">
            {updatesLanguageData.pageTitle(lang)}
          </h1>
          <p className="text-sm text-gray-500">
            {updatesLanguageData.pageSubtitle(lang)}
          </p>
        </header>

        <AnnouncementFilter
          active={filter}
          onChange={setFilter}
          language={lang}
        />

        {visible.length === 0 && (
          <div className="rounded-2xl border-2 border-dashed border-gray-300 p-10 text-center text-gray-500">
            {filter === "all"
              ? updatesLanguageData.empty(lang)
              : updatesLanguageData.emptyFiltered(lang)}
          </div>
        )}

        {visible.length > 0 && (
          <div className="flex flex-col gap-4">
            {visible.map((announcement) => (
              <AnnouncementCard
                key={announcement._id}
                announcement={announcement}
                language={lang}
              />
            ))}
          </div>
        )}
      </main>
    </HomepageLayout>
  );
}
