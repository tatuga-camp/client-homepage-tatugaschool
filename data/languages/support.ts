import { Language } from "./subscription";

export const SupportDataLanguage = {
  seo_title: (language: Language) => {
    switch (language) {
      case "en":
        return "Contact us — Tatuga School";
      case "th":
        return "ติดต่อเรา — Tatuga School";
      default:
        return "Contact us — Tatuga School";
    }
  },
  title: (language: Language) => {
    switch (language) {
      case "en":
        return "Talk to the Tatuga School team";
      case "th":
        return "ติดต่อทีม Tatuga School";
      default:
        return "Talk to the Tatuga School team";
    }
  },
  subtitle: (language: Language) => {
    switch (language) {
      case "en":
        return "Questions about your account, your school's plan or a feature? Pick whichever way suits you.";
      case "th":
        return "มีคำถามเรื่องบัญชี แผนของโรงเรียน หรือการใช้งานฟีเจอร์ เลือกช่องทางที่สะดวกได้เลย";
      default:
        return "Questions about your account, your school's plan or a feature?";
    }
  },
  chat_label: (language: Language) => {
    switch (language) {
      case "en":
        return "Fastest reply";
      case "th":
        return "ตอบกลับเร็วที่สุด";
      default:
        return "Fastest reply";
    }
  },
  chat_title: (language: Language) => {
    switch (language) {
      case "en":
        return "Chat with us here";
      case "th":
        return "แชทกับเราได้ที่นี่";
      default:
        return "Chat with us here";
    }
  },
  chat_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "A chat window opens on this page. Leave a message even if we're offline, and we'll reply as soon as we can.";
      case "th":
        return "หน้าต่างแชทจะเปิดขึ้นบนหน้านี้ ฝากข้อความไว้ได้แม้ทีมงานออฟไลน์ แล้วเราจะตอบกลับโดยเร็วที่สุด";
      default:
        return "A chat window opens on this page.";
    }
  },
  chat_cta: (language: Language) => {
    switch (language) {
      case "en":
        return "Start a chat";
      case "th":
        return "เริ่มแชท";
      default:
        return "Start a chat";
    }
  },
  chat_loading: (language: Language) => {
    switch (language) {
      case "en":
        return "Opening chat…";
      case "th":
        return "กำลังเปิดแชท…";
      default:
        return "Opening chat…";
    }
  },
  other_ways: (language: Language) => {
    switch (language) {
      case "en":
        return "Other ways to reach us";
      case "th":
        return "ช่องทางอื่นๆ";
      default:
        return "Other ways to reach us";
    }
  },
  email_title: (language: Language) => {
    switch (language) {
      case "en":
        return "Email";
      case "th":
        return "อีเมล";
      default:
        return "Email";
    }
  },
  email_note: (language: Language) => {
    switch (language) {
      case "en":
        return "Best for billing, invoices and anything with attachments.";
      case "th":
        return "เหมาะสำหรับเรื่องการชำระเงิน ใบเสร็จ หรือเรื่องที่ต้องแนบไฟล์";
      default:
        return "Best for billing and anything with attachments.";
    }
  },
  email_cta: (language: Language) => {
    switch (language) {
      case "en":
        return "Send email";
      case "th":
        return "ส่งอีเมล";
      default:
        return "Send email";
    }
  },
  copy: (language: Language) => {
    switch (language) {
      case "en":
        return "Copy";
      case "th":
        return "คัดลอก";
      default:
        return "Copy";
    }
  },
  copied: (language: Language) => {
    switch (language) {
      case "en":
        return "Copied";
      case "th":
        return "คัดลอกแล้ว";
      default:
        return "Copied";
    }
  },
  facebook_title: (language: Language) => {
    switch (language) {
      case "en":
        return "Facebook";
      case "th":
        return "Facebook";
      default:
        return "Facebook";
    }
  },
  facebook_note: (language: Language) => {
    switch (language) {
      case "en":
        return "Message the Tatuga School page.";
      case "th":
        return "ส่งข้อความถึงเพจ Tatuga School";
      default:
        return "Message the Tatuga School page.";
    }
  },
  facebook_cta: (language: Language) => {
    switch (language) {
      case "en":
        return "Message us";
      case "th":
        return "ส่งข้อความ";
      default:
        return "Message us";
    }
  },
  phone_title: (language: Language) => {
    switch (language) {
      case "en":
        return "Phone";
      case "th":
        return "โทรศัพท์";
      default:
        return "Phone";
    }
  },
  phone_number: (language: Language) => {
    switch (language) {
      case "en":
        return "+66 61 027 7960";
      case "th":
        return "061 027 7960";
      default:
        return "+66 61 027 7960";
    }
  },
  phone_note: (language: Language) => {
    switch (language) {
      case "en":
        return "During office hours, Bangkok time (GMT+7).";
      case "th":
        return "ในเวลาทำการ (เวลาประเทศไทย)";
      default:
        return "During office hours, Bangkok time (GMT+7).";
    }
  },
  phone_cta: (language: Language) => {
    switch (language) {
      case "en":
        return "Call";
      case "th":
        return "โทร";
      default:
        return "Call";
    }
  },
  guide_title: (language: Language) => {
    switch (language) {
      case "en":
        return "User guide";
      case "th":
        return "คู่มือการใช้งาน";
      default:
        return "User guide";
    }
  },
  guide_note: (language: Language) => {
    switch (language) {
      case "en":
        return "Step-by-step help for setting up your school, classes and subjects.";
      case "th":
        return "วิธีใช้งานทีละขั้นตอน ตั้งแต่สร้างโรงเรียน ห้องเรียน ไปจนถึงรายวิชา";
      default:
        return "Step-by-step help for setting up your school.";
    }
  },
  guide_cta: (language: Language) => {
    switch (language) {
      case "en":
        return "Open guide";
      case "th":
        return "เปิดคู่มือ";
      default:
        return "Open guide";
    }
  },
  privacy_note: (language: Language) => {
    switch (language) {
      case "en":
        return "Want to know how we handle your data, or ask us to delete it?";
      case "th":
        return "อยากรู้ว่าเราดูแลข้อมูลของคุณอย่างไร หรือต้องการให้ลบข้อมูล";
      default:
        return "Want to know how we handle your data?";
    }
  },
  privacy_link: (language: Language) => {
    switch (language) {
      case "en":
        return "Read our privacy policy";
      case "th":
        return "อ่านนโยบายความเป็นส่วนตัว";
      default:
        return "Read our privacy policy";
    }
  },
} as const;
