import React, { useState } from "react";
import Layout from "../../layouts/HomepageLayout";
import Image from "next/image";
import {
  MdFacebook,
  MdLocalPhone,
  MdOutlineChat,
  MdOutlineMail,
} from "react-icons/md";
import TawkToChat from "../../components/TawkToChat";
import SEOHead from "../../components/seo/SEOHead";
import { HomeDataLanguage } from "../../data/languages/home";
import { useGetLanguage } from "../../react-query";
const contactLists = [
  {
    title: "Email us",
    description:
      "at permlap@tatugacamp.com and we will respond as soon as possible.",
    icon: MdOutlineMail,
    type: "email",
    value: "permlap@tatugacamp.com",
  },
  {
    title: "Message us on Facebook",
    description:
      "Our facebook page is Tatuga School, you can chat with us there.",
    icon: MdFacebook,
    type: "facebook",
    value: "https://www.facebook.com/profile.php?id=61573841157485",
  },
  {
    title: "Phone us",
    description:
      "at +66 061 027 7960 please call us during office hours. 7+ GMT Bangkok Time Zone during office hours.",
    icon: MdLocalPhone,
    type: "phone",
    value: "+660610277960",
  },
  {
    title: "Chat with us on here",
    description:
      "You can chat with us here, we will respond as soon as possible.",
    icon: MdOutlineChat,
    type: "chat",
    value: "open-chat",
  },
] as const;
function Index() {
  const [triggerChat, setTriggerChat] = useState(false);
  const language = useGetLanguage();
  return (
    <Layout>
      <SEOHead
        title="Contact Us — Tatuga School"
        description={HomeDataLanguage.seo_description(language.data ?? "en")}
      />
      {triggerChat && <TawkToChat />}
      <header className="w-full md:flex-row px-5 py-10 md:items-center font-Anuphan flex justify-center flex-col gap-5">
        <section className="flex flex-col md:w-96 gap-3">
          <h1 className="text-4xl font-bold">Let&apos;s talk to us</h1>
          <h4 className="text-gray-500 font-medium text-sm">
            We are ready to help you, please choose the contact method that you
            want to use and we will respond as soon as possible.
          </h4>
        </section>
        <div className="w-40 h-40 md:w-52 md:h-52  relative">
          <Image
            src="/images/contact-us/1.png"
            fill
            alt="contact us"
            className="object-contain"
          />
        </div>
      </header>
      <main className="w-full flex justify-center">
        <div className="px-5 grid gap-5 w-full 2xl:w-9/12  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 place-items-start font-Anuphan">
          {contactLists.map((contact, index) => {
            return (
              <section
                key={index}
                className="w-full flex lg:max-w-96 flex-col gap-2 p-5 rounded-2xl bg-[#F5F3FF] "
              >
                <div className="w-full flex  justify-end h-20 ">
                  <div className="h-14 w-14 flex items-center justify-center bg-white rounded-full">
                    <contact.icon size={30} className="text-primary-color" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold ">{contact.title}</h1>
                <p className="text-gray-500 font-medium">
                  {contact.description}
                </p>
                <button
                  className="w-full h-12 hover:bg-primary-color transition active:scale-105
                 bg-secondary-color text-white rounded-2xl flex items-center justify-center"
                  onClick={() => {
                    if (contact.type === "email") {
                      window.location.href = `mailto:${contact.value}`;
                    } else if (contact.type === "facebook") {
                      window.open(contact.value, "_blank");
                    } else if (contact.type === "phone") {
                      window.location.href = `tel:${contact.value}`;
                    } else if (contact.type === "chat") {
                      setTriggerChat(true);
                    }
                  }}
                >
                  {contact.type === "email" && "Email Us"}
                  {contact.type === "facebook" && "Message Us"}
                  {contact.type === "phone" && "Call Us"}
                  {contact.type === "chat" && "Start Chattting"}
                </button>
              </section>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}

export default Index;
