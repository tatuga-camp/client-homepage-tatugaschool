import Image from "next/image";
import Layout from "../layouts/HomepageLayout";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Grid } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
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
      <header className="w-full min-h-96 py-5 px-20 flex items-center justify-center font-Anuphan gap-40 p-2">
        <section className="w-full max-w-[30rem] flex flex-col gap-1">
          <h3 className="font-bold text-primary-color">Tatuga School</h3>
          <h1 className="font-bold text-6xl text-black">
            Beyond School & Classroom
          </h1>
          <p className="text-gray-500 font-medium">
            Tatuga School is a platform that provides a variety of learning
            methods and materials for students.
          </p>
        </section>
        <section className="w-96 h-96 relative">
          <Image
            onDragStart={(e) => e.preventDefault()}
            src="/images/hero.png"
            fill
            alt="hero"
          />
        </section>
      </header>
      <main className="my-20 flex flex-col gap-10 font-Anuphan">
        <nav className="w-full h-28  bg-[#F5F3FF] grid grid-cols-5">
          <p className="col-span-2 font-semibold text-center flex items-center px-40">
            With these amount of features, Tatuga School is the best choice for
            your students and your school.
          </p>
          <section className="flex col-span-1 flex-col items-center justify-center gap-1">
            <h1 className="text-4xl font-bold">100+</h1>
            <span>Number of School</span>
          </section>
          <section className="flex col-span-1 flex-col items-center justify-center gap-1">
            <h1 className="text-4xl font-bold">200+</h1>
            <span>Number of User</span>
          </section>
          <section className="flex col-span-1 flex-col items-center justify-center gap-1">
            <h1 className="text-4xl font-bold">400+</h1>
            <span>Number of Student</span>
          </section>
        </nav>
        <section className="w-full flex items-center justify-center gap-10">
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
          <div className="w-96 flex flex-col items-start justify-center gap-1">
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
        <section className="w-full p-5 px-10 grid gap-5 grid-cols-4">
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
                slidesPerView: 3,
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
            className="bg-transparent col-span-3 h-96 w-full "
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
