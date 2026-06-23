import Image from "next/image";
import Layout from "../layouts/HomepageLayout";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Grid } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { useGetUser } from "../react-query/user";
import { useGetLanguage } from "../react-query";
import { HomeDataLanguage } from "../data/languages/home";
import SEOHead from "../components/seo/SEOHead";
import StructuredData from "../components/seo/StructuredData";

export default function Home() {
  const user = useGetUser();
  const language = useGetLanguage();

  const features = [
    {
      title: HomeDataLanguage.features_rubic_grading_title(
        language.data ?? "en",
      ),
      description: HomeDataLanguage.features_rubic_grading_desc(
        language.data ?? "en",
      ),
      image: "/images/features/rubic.avif",
    },
    {
      title: HomeDataLanguage.features_line_chat_bot(language.data ?? "en"),
      description: HomeDataLanguage.features_line_chat_bot_desc(
        language.data ?? "en",
      ),
      image: "/images/features/6.png",
    },
    {
      title: HomeDataLanguage.features_unlimited_teaching_materials(
        language.data ?? "en",
      ),
      description: HomeDataLanguage.features_unlimited_teaching_materials_desc(
        language.data ?? "en",
      ),
      image: "/images/features/5.png",
    },

    {
      title: HomeDataLanguage.features_predictive_analysis_title(
        language.data ?? "en",
      ),
      description: HomeDataLanguage.features_predictive_analysis_desc(
        language.data ?? "en",
      ),
      image: "/images/features/2.png",
    },
    {
      title: HomeDataLanguage.features_no_login_title(language.data ?? "en"),
      description: HomeDataLanguage.features_no_login_desc(
        language.data ?? "en",
      ),
      image: "/images/features/3.png",
    },
    {
      title: HomeDataLanguage.features_unlimited_storage_title(
        language.data ?? "en",
      ),
      description: HomeDataLanguage.features_unlimited_storage_desc(
        language.data ?? "en",
      ),
      image: "/images/features/1.png",
    },
    {
      title: HomeDataLanguage.features_gamification_title(
        language.data ?? "en",
      ),
      description: HomeDataLanguage.features_gamification_desc(
        language.data ?? "en",
      ),
      image: "/images/features/4.png",
    },
  ];

  const sponsors = [
    {
      title: "TedFund",
      description: HomeDataLanguage.tedfund_desc(language.data ?? "en"),
      image: "/images/sponsors/tedfund1.png",
    },
    {
      title: "NRRU UBI",
      description: HomeDataLanguage.nrru_ubi_desc(language.data ?? "en"),
      image: "/images/sponsors/nrru-ubi.png",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title={HomeDataLanguage.seo_title(language.data ?? "en")}
        description={HomeDataLanguage.seo_description(language.data ?? "en")}
      />
      <StructuredData descriptionTh={HomeDataLanguage.seo_description("th")} />
      <aside
        className="w-full bg-orange-100 border-b-2 border-orange-400 px-4 py-3 text-center text-sm md:text-base font-Anuphan text-orange-900"
        aria-label="migration notice"
      >
        <strong>
          {HomeDataLanguage.migration_banner(language.data ?? "en")}
        </strong>
      </aside>
      <header
        className="w-full min-h-96 py-5 px-20 md:px-5 flex-col lg:flex-row
       flex items-center justify-center font-Anuphan gap-2 md:gap-10 lg:gap-40 p-2"
      >
        <section className="w-96 md:w-8/12 p-2 text-center items-center  md:max-w-[30rem] flex flex-col gap-1">
          <a
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_STUDENT_CLIENT_URL}`}
            className="w-max px-2 h-10 text-white 0 hover:scale-110 transition duration-100 bg-primary-color flex items-center justify-center rounded-2xl"
          >
            {HomeDataLanguage.students_go(language.data ?? "en")}
          </a>
          <span className="text-sm mb-5 text-gray-500">
            {HomeDataLanguage.student_go_desc(language.data ?? "en")}
          </span>
          <h3 className="font-bold text-primary-color">
            {HomeDataLanguage.tatuga_school(language.data ?? "en")}
          </h3>
          <h1 className="font-bold text-4xl  xl:text-6xl text-black">
            {HomeDataLanguage.title(language.data ?? "en")}
          </h1>
          <p className="text-gray-500 font-medium">
            {HomeDataLanguage.description(language.data ?? "en")}
          </p>
        </section>
        <section className="w-80 md:w-[30rem] md:h-72  lg:w-[40rem] lg:h-60  xl:w-[28rem] h-80 xl:h-60 relative">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/aZ8dskE93ZA?si=k8evOLwOk-Su0j-o"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
      </header>
      <main className="my-20 flex flex-col gap-10 font-Anuphan">
        <nav
          className="w-full h-full py-2 md:py-1 md:h-28 md:p-3 p-0 bg-orange-500 text-white
         grid grid-cols-1 gap-5 md:grid-cols-4  xl:grid-cols-5"
        >
          <p className="xl:col-span-2 text-base md:text-xs lg:text-base font-semibold text-center flex items-center px-10 md:px-0 ">
            {HomeDataLanguage.nav_text(language.data ?? "en")}
          </p>
          <section className="flex col-span-1 flex-col items-center justify-center gap-1">
            <h1 className="text-4xl font-bold">2,568+</h1>
            <span>{HomeDataLanguage.number_school(language.data ?? "en")}</span>
          </section>
          <section className="flex col-span-1 flex-col items-center justify-center gap-1">
            <h1 className="text-4xl font-bold">4,161+</h1>
            <span>{HomeDataLanguage.number_user(language.data ?? "en")}</span>
          </section>
          <section className="flex col-span-1 flex-col items-center justify-center gap-1">
            <h1 className="text-4xl font-bold">74,594+</h1>
            <span>
              {HomeDataLanguage.number_student(language.data ?? "en")}
            </span>
          </section>
        </nav>
        <section className="w-full flex items-center md:flex-row flex-col justify-center gap-10">
          <div
            onDragStart={(e) => e.preventDefault()}
            className="w-80 h-96 relative"
          >
            <Image
              src="/images/school-hero_01.png"
              className="object-contain"
              fill
              alt="feature1"
            />
          </div>
          <div className="w-80 md:w-96 flex flex-col items-start justify-center gap-1">
            <h3 className="text-sm font-bold text-secondary-color">
              {HomeDataLanguage.tatuga_school(language.data ?? "en")}
            </h3>
            <h1 className="text-4xl text-black font-bold">
              {HomeDataLanguage.manage_your(language.data ?? "en")}
            </h1>
            <h1 className="text-xl text-black font-bold">
              {HomeDataLanguage.manage_desc(language.data ?? "en")}
            </h1>
            <p className="text-gray-500 text-sm mt-2 font-medium">
              {HomeDataLanguage.join_us(language.data ?? "en")}
            </p>
            <Link
              href={
                user.data && user.data.favoritSchool
                  ? `${process.env.NEXT_PUBLIC_MAIN_CLIENT_URL}/school/${user.data.favoritSchool}`
                  : `${process.env.NEXT_PUBLIC_MAIN_CLIENT_URL}`
              }
              className="w-36 h-10 hover:bg-secondary-color drop-shadow-md transition active:scale-105
               bg-primary-color text-white flex items-center justify-center rounded-2xl"
            >
              {HomeDataLanguage.learn_more(language.data ?? "en")}
            </Link>
          </div>
        </section>
        <section className="w-full p-5 md:px-10 grid gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col gap-1 justify-center items-start">
            <h1 className="text-sm text-orange-500 font-bold">
              {HomeDataLanguage.feature(language.data ?? "en")}
            </h1>
            <h1 className="text-3xl text-primary-color font-bold">
              {HomeDataLanguage.what_you_can_do(language.data ?? "en")}
            </h1>
            <p className="text-gray-500 text-sm">
              {HomeDataLanguage.feature_desc(language.data ?? "en")}
            </p>
          </div>
          <Swiper
            slidesPerView={3}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            grabCursor={true}
            modules={[Pagination, Autoplay]}
            className="bg-transparent col-span-2 xl:col-span-3 h-80 w-full "
          >
            {features.map((feature, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" p-5 hover:bg-orange-500 hover:text-white group border-2 border-black h-full max-w-72 transition hover:drop-shadow-md bg-white rounded-2xl">
                    <div className="w-full h-40 relative">
                      <Image
                        src={feature.image}
                        fill
                        alt="feature"
                        className="object-contain"
                      />
                    </div>
                    <h1 className="text-xl text-orange-500 group-hover:text-white  transition font-bold mt-2">
                      {feature.title}
                    </h1>
                    <p className="text-gray-500 group-hover:text-white  ">
                      {feature.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
        <section className="w-full p-5 md:px-10 grid gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col gap-1 justify-center items-start">
            <h1 className="text-sm text-orange-500 font-bold">
              {HomeDataLanguage.sponsors(language.data ?? "en")}
            </h1>
            <h1 className="text-3xl text-primary-color font-bold">
              {HomeDataLanguage.beloved_sponsors(language.data ?? "en")}
            </h1>
            <p className="text-gray-500 text-sm">
              {HomeDataLanguage.sponsors_desc(language.data ?? "en")}
            </p>
          </div>
          <Swiper
            slidesPerView={3}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            grabCursor={true}
            modules={[Pagination, Autoplay]}
            className="bg-transparent col-span-2 xl:col-span-3 h-80 w-full "
          >
            {sponsors.map((feature, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" p-5 hover:bg-orange-500 hover:text-white group border-2 border-black h-full max-w-72 transition hover:drop-shadow-md bg-white rounded-2xl">
                    <div className="w-full h-40 relative">
                      <Image
                        src={feature.image}
                        fill
                        alt="feature"
                        className="object-contain"
                      />
                    </div>
                    <h1 className="text-xl text-orange-500 group-hover:text-white  transition font-bold mt-2">
                      {feature.title}
                    </h1>
                    <p className="text-gray-500 group-hover:text-white  ">
                      {feature.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
        <section className="w-full px-4 md:px-10 py-12 bg-white font-Anuphan max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-color mb-8 text-center">
            {HomeDataLanguage.hero_h1_seo(language.data ?? "en")}
          </h1>
          <div className="grid gap-8 md:grid-cols-2">
            <article>
              <h2 className="text-xl font-bold text-orange-500 mb-2">
                {HomeDataLanguage.keyword_attendance_h2(language.data ?? "en")}
              </h2>
              <p className="text-gray-700">
                {HomeDataLanguage.keyword_attendance_body(
                  language.data ?? "en",
                )}
              </p>
            </article>
            <article>
              <h2 className="text-xl font-bold text-orange-500 mb-2">
                {HomeDataLanguage.keyword_assignment_h2(language.data ?? "en")}
              </h2>
              <p className="text-gray-700">
                {HomeDataLanguage.keyword_assignment_body(
                  language.data ?? "en",
                )}
              </p>
            </article>
            <article>
              <h2 className="text-xl font-bold text-orange-500 mb-2">
                {HomeDataLanguage.keyword_classroom_h2(language.data ?? "en")}
              </h2>
              <p className="text-gray-700">
                {HomeDataLanguage.keyword_classroom_body(language.data ?? "en")}
              </p>
            </article>
            <article>
              <h2 className="text-xl font-bold text-orange-500 mb-2">
                {HomeDataLanguage.keyword_activities_h2(language.data ?? "en")}
              </h2>
              <p className="text-gray-700">
                {HomeDataLanguage.keyword_activities_body(
                  language.data ?? "en",
                )}{" "}
                <a
                  href="https://tatugacamp.com/"
                  className="text-primary-color underline"
                >
                  tatugacamp.com
                </a>
              </p>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
