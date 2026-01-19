import React from "react";
import { Announcement } from "../../sanity/sanity.types";
import {
  CiCircleInfo,
  CiFaceFrown,
  CiFaceSmile,
  CiWarning,
} from "react-icons/ci";
import { PortableText } from "@portabletext/react";

type AnnouncementNavbarProps = {
  announcement: Announcement;
};
function AnnouncementNavbar({ announcement }: AnnouncementNavbarProps) {
  return (
    <nav
      className={`w-full border-l-8  
        ${announcement.type === "warning" ? "border-orange-600  bg-orange-200" : announcement.type === "success" ? "border-green-600  bg-green-200" : announcement.type === "info" ? "border-blue-600  bg-blue-200" : announcement.type === "error" && "border-red-600  bg-red-200"} 
         h-16 gap-2  flex px-5 items-center justify-start`}
    >
      <div
        className={`w-10 h-10 flex items-center justify-center text-xl  rounded-full ring-1 
             ${announcement.type === "warning" ? "text-orange-600  ring-orange-600" : announcement.type === "success" ? "text-green-600  ring-green-600" : announcement.type === "info" ? "text-blue-600  ring-blue-600" : announcement.type === "error" && "text-red-600  ring-red-600"} 
            `}
      >
        {announcement.type === "warning" ? (
          <CiWarning />
        ) : announcement.type === "success" ? (
          <CiFaceSmile />
        ) : announcement.type === "info" ? (
          <CiCircleInfo />
        ) : (
          announcement.type === "error" && <CiFaceFrown />
        )}
      </div>
      <h1
        className={`font-bold 
        ${announcement.type === "warning" ? "text-orange-600" : announcement.type === "success" ? "text-green-600 " : announcement.type === "info" ? "text-blue-600  " : announcement.type === "error" && "text-red-600"} 
        `}
      >
        {announcement.title}
      </h1>
      <div
        className={`w-0.5 h-3/5 bg-red-400
          ${announcement.type === "warning" ? "bg-orange-400" : announcement.type === "success" ? "bg-green-400 " : announcement.type === "info" ? "bg-blue-400  " : announcement.type === "error" && "bg-red-400"} 
        `}
      ></div>
      <p
        className={` w-9/12  h-full flex items-center justify-start overflow-auto
              ${announcement.type === "warning" ? "text-orange-600" : announcement.type === "success" ? "text-green-600 " : announcement.type === "info" ? "text-blue-600  " : announcement.type === "error" && "text-red-600"} 
            `}
      >
        {announcement.description && (
          <PortableText value={announcement.description} />
        )}
      </p>
    </nav>
  );
}

export default AnnouncementNavbar;
