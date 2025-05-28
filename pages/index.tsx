import Image from "next/image";
import Layout from "../layouts/HomepageLayout";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Grid } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import Head from "next/head";
const features = [
  {
    title: "Unlimited Storage & No Expired File",
    description: "none-expired file, unlimited storage, and many more",
    image: "/images/features/1.png",
  },
  {
    title: "Prediective Analysis",
    description:
      "suggest the career path for student based on their data using AI",
    image: "/images/features/2.png",
  },
  {
    title: "No login required for student",
    description: "student can access the classroom without login",
    image: "/images/features/3.png",
  },
  {
    title: "Gamification Learning",
    description: "encourage student to learn using gamification",
    image: "/images/features/4.png",
  },
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tatuga School</title>
        <meta
          name="description"
          content="Tatuga School is a platform that provides a variety of learning methods and materials for students."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Tatuga School" />
        <meta
          property="og:description"
          content="Tatuga School is a platform that provides a variety of learning methods and materials for students."
        />
        <meta property="og:site_name" content="Tatuga School" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/icon.svg" />

        <meta property="twitter:title" content="Tatuga School" />
        <meta
          property="twitter:description"
          content="Tatuga School is a platform that provides a variety of learning methods and materials for students."
        />

        <meta property="twitter:image" content="/icon.svg" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <header
        className="w-full min-h-96 py-5 px-20 md:px-5 flex-col lg:flex-row
       flex items-center justify-center font-Anuphan gap-2 md:gap-10 lg:gap-40 p-2"
      >
        <section className="w-96 md:w-8/12 p-2 text-center items-center  md:max-w-[30rem] flex flex-col gap-1">
          <a
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_STUDENT_CLIENT_URL}`}
            className="w-max px-2 h-10 text-white 0 hover:scale-110 transition duration-100 bg-primary-color flex items-center justify-center rounded-md"
          >
            Students Go
          </a>
          <span className="text-sm mb-5 text-gray-500">
            เข้าสู่รายวิชาสำหรับนักเรียน
          </span>
          <h3 className="font-bold text-primary-color">Tatuga School</h3>
          <h1 className="font-bold text-4xl  xl:text-6xl text-black">
            Beyond School & Classroom
          </h1>
          <p className="text-gray-500 font-medium">
            Tatuga School is a platform that provides a variety of learning
            methods and materials for students.
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
        <nav className="w-full h-full py-2 md:py-1 md:h-28 md:p-3 p-0  bg-[#F5F3FF] grid grid-cols-1 gap-5 md:grid-cols-4  xl:grid-cols-5">
          <p className="xl:col-span-2 text-base md:text-xs lg:text-base font-semibold text-center flex items-center px-10 md:px-0 ">
            With these amount of features, Tatuga School is the best choice for
            your students and your school.
          </p>
          <section className="flex col-span-1 flex-col items-center justify-center gap-1">
            <h1 className="text-4xl font-bold">1,356+</h1>
            <span>Number of School</span>
          </section>
          <section className="flex col-span-1 flex-col items-center justify-center gap-1">
            <h1 className="text-4xl font-bold">2,670+</h1>
            <span>Number of User</span>
          </section>
          <section className="flex col-span-1 flex-col items-center justify-center gap-1">
            <h1 className="text-4xl font-bold">34,155+</h1>
            <span>Number of Student</span>
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
              Tatuga School
            </h3>
            <h1 className="text-4xl text-black font-bold">Manage Your</h1>
            <h1 className="text-xl text-black font-bold">
              School, Student, Learning In One Place
            </h1>
            <p className="text-gray-500 text-sm mt-2 font-medium">
              join us and get the best experience in managing your school
            </p>
            <Link
              href="/school"
              className="w-36 h-10 hover:bg-secondary-color drop-shadow-md transition active:scale-105
               bg-primary-color text-white flex items-center justify-center rounded-md"
            >
              Learn More
            </Link>
          </div>
        </section>
        <section className="w-full p-5 md:px-10 grid gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col gap-1 justify-center items-start">
            <h1 className="text-sm text-secondary-color font-bold">Feature</h1>
            <h1 className="text-3xl font-bold">
              What you can do in Tatuga School
            </h1>
            <p className="text-gray-500 font-medium">
              assign task, create class, score student, group chat, and many
              more
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
            className="bg-transparent col-span-2 xl:col-span-3 h-96 w-full "
          >
            {features.map((feature, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" p-5 group hover:scale-105 max-w-72 transition hover:drop-shadow-md bg-white rounded-md">
                    <div className="w-full h-40 relative">
                      <Image
                        src={feature.image}
                        fill
                        alt="feature"
                        className="object-contain"
                      />
                    </div>
                    <h1 className="text-xl group-hover:text-secondary-color text-black transition font-bold mt-2">
                      {feature.title}
                    </h1>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </main>
    </Layout>
  );
}
