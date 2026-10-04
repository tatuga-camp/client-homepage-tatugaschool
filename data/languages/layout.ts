import { Language } from "./subscription";

/** Copy shared by the navbar and footer on every page. */
export const LayoutDataLanguage = {
  nav_pricing: (language: Language) => {
    switch (language) {
      case "en":
        return "Pricing";
      case "th":
        return "ราคา";
      default:
        return "Pricing";
    }
  },
  nav_news: (language: Language) => {
    switch (language) {
      case "en":
        return "News";
      case "th":
        return "ข่าวสาร";
      default:
        return "News";
    }
  },
  nav_guide: (language: Language) => {
    switch (language) {
      case "en":
        return "User guide";
      case "th":
        return "คู่มือการใช้งาน";
      default:
        return "User guide";
    }
  },
  nav_contact: (language: Language) => {
    switch (language) {
      case "en":
        return "Contact";
      case "th":
        return "ติดต่อเรา";
      default:
        return "Contact";
    }
  },
  nav_sign_in: (language: Language) => {
    switch (language) {
      case "en":
        return "Sign in";
      case "th":
        return "เข้าสู่ระบบ";
      default:
        return "Sign in";
    }
  },
  nav_sign_up: (language: Language) => {
    switch (language) {
      case "en":
        return "Sign up free";
      case "th":
        return "สมัครใช้งานฟรี";
      default:
        return "Sign up free";
    }
  },
  nav_go_school: (language: Language) => {
    switch (language) {
      case "en":
        return "Go to my school";
      case "th":
        return "ไปที่โรงเรียนของฉัน";
      default:
        return "Go to my school";
    }
  },
  nav_open_menu: (language: Language) => {
    switch (language) {
      case "en":
        return "Open menu";
      case "th":
        return "เปิดเมนู";
      default:
        return "Open menu";
    }
  },
  nav_close_menu: (language: Language) => {
    switch (language) {
      case "en":
        return "Close menu";
      case "th":
        return "ปิดเมนู";
      default:
        return "Close menu";
    }
  },
  nav_home: (language: Language) => {
    switch (language) {
      case "en":
        return "Tatuga School home";
      case "th":
        return "หน้าแรก Tatuga School";
      default:
        return "Tatuga School home";
    }
  },
  footer_tagline: (language: Language) => {
    switch (language) {
      case "en":
        return "Classroom management for Thai teachers, made by Tatuga Camp in Nakhon Ratchasima.";
      case "th":
        return "แพลตฟอร์มจัดการชั้นเรียนสำหรับครูไทย พัฒนาโดยทาทูก้าแคมป์ จังหวัดนครราชสีมา";
      default:
        return "Classroom management for Thai teachers.";
    }
  },
  footer_product: (language: Language) => {
    switch (language) {
      case "en":
        return "Product";
      case "th":
        return "ผลิตภัณฑ์";
      default:
        return "Product";
    }
  },
  footer_support: (language: Language) => {
    switch (language) {
      case "en":
        return "Support";
      case "th":
        return "ช่วยเหลือ";
      default:
        return "Support";
    }
  },
  footer_account: (language: Language) => {
    switch (language) {
      case "en":
        return "Account";
      case "th":
        return "บัญชี";
      default:
        return "Account";
    }
  },
  footer_privacy: (language: Language) => {
    switch (language) {
      case "en":
        return "Privacy policy";
      case "th":
        return "นโยบายความเป็นส่วนตัว";
      default:
        return "Privacy policy";
    }
  },
  footer_about: (language: Language) => {
    switch (language) {
      case "en":
        return "About Tatuga Camp";
      case "th":
        return "เกี่ยวกับทาทูก้าแคมป์";
      default:
        return "About Tatuga Camp";
    }
  },
  footer_students: (language: Language) => {
    switch (language) {
      case "en":
        return "Students: open your class";
      case "th":
        return "นักเรียนเข้าห้องเรียน";
      default:
        return "Students: open your class";
    }
  },
  footer_copyright: (language: Language, year: number) => {
    switch (language) {
      case "th":
        return `© ${year} ห้างหุ้นส่วนจำกัด ทาทูก้าแคมป์ สงวนลิขสิทธิ์`;
      case "en":
      default:
        return `© ${year} Tatuga Camp LP. All rights reserved.`;
    }
  },
} as const;
