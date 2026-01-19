import { Language } from "./subscription";

export const HomeDataLanguage = {
  students_go: (language: Language) => {
    switch (language) {
      case "en":
        return "Students Go";
      case "th":
        return "นักเรียนเข้าสู่ระบบ";
      default:
        return "Students Go";
    }
  },
  student_go_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "Enter student courses";
      case "th":
        return "เข้าสู่รายวิชาสำหรับนักเรียน";
      default:
        return "Enter student courses";
    }
  },
  title: (language: Language) => {
    switch (language) {
      case "en":
        return "Beyond School & Classroom";
      case "th":
        return "เหนือกว่าโรงเรียนและห้องเรียน";
      default:
        return "Beyond School & Classroom";
    }
  },
  description: (language: Language) => {
    switch (language) {
      case "en":
        return "Tatuga School is a platform that provides a variety of learning methods and materials for students.";
      case "th":
        return "Tatuga School เป็นแพลตฟอร์มที่รวบรวมวิธีการเรียนรู้และสื่อการสอนที่หลากหลายสำหรับนักเรียน";
      default:
        return "Tatuga School is a platform that provides a variety of learning methods and materials for students.";
    }
  },
  nav_text: (language: Language) => {
    switch (language) {
      case "en":
        return "With these amount of features, Tatuga School is the best choice for your students and your school.";
      case "th":
        return "ด้วยฟีเจอร์เหล่านี้ Tatuga School จึงเป็นทางเลือกที่ดีที่สุดสำหรับนักเรียนและโรงเรียนของคุณ";
      default:
        return "With these amount of features, Tatuga School is the best choice for your students and your school.";
    }
  },
  number_school: (language: Language) => {
    switch (language) {
      case "en":
        return "Number of School";
      case "th":
        return "จำนวนโรงเรียน";
      default:
        return "Number of School";
    }
  },
  number_user: (language: Language) => {
    switch (language) {
      case "en":
        return "Number of User";
      case "th":
        return "จำนวนผู้ใช้งาน";
      default:
        return "Number of User";
    }
  },
  number_student: (language: Language) => {
    switch (language) {
      case "en":
        return "Number of Student";
      case "th":
        return "จำนวนนักเรียน";
      default:
        return "Number of Student";
    }
  },
  manage_your: (language: Language) => {
    switch (language) {
      case "en":
        return "Manage Your";
      case "th":
        return "จัดการ";
      default:
        return "Manage Your";
    }
  },
  manage_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "School, Student, Learning In One Place";
      case "th":
        return "โรงเรียน นักเรียน และการเรียนรู้ ในที่เดียว";
      default:
        return "School, Student, Learning In One Place";
    }
  },
  join_us: (language: Language) => {
    switch (language) {
      case "en":
        return "join us and get the best experience in managing your school";
      case "th":
        return "มาร่วมกับเราและรับประสบการณ์ที่ดีที่สุดในการบริหารโรงเรียนของคุณ";
      default:
        return "join us and get the best experience in managing your school";
    }
  },
  learn_more: (language: Language) => {
    switch (language) {
      case "en":
        return "Learn More";
      case "th":
        return "เรียนรู้เพิ่มเติม";
      default:
        return "Learn More";
    }
  },
  feature: (language: Language) => {
    switch (language) {
      case "en":
        return "Feature";
      case "th":
        return "ฟีเจอร์";
      default:
        return "Feature";
    }
  },
  what_you_can_do: (language: Language) => {
    switch (language) {
      case "en":
        return "What you can do in Tatuga School";
      case "th":
        return "สิ่งที่คุณทำได้ใน Tatuga School";
      default:
        return "What you can do in Tatuga School";
    }
  },
  feature_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "assign task, create class, score student, group chat, and many more";
      case "th":
        return "มอบหมายงาน สร้างห้องเรียน ให้คะแนน แชทกลุ่ม และอื่นๆ อีกมากมาย";
      default:
        return "assign task, create class, score student, group chat, and many more";
    }
  },
  features_unlimited_storage_title: (language: Language) => {
    switch (language) {
      case "en":
        return "Unlimited Storage & No Expired File";
      case "th":
        return "พื้นที่จัดเก็บไม่จำกัด & ไฟล์ไม่หมดอายุ";
      default:
        return "Unlimited Storage & No Expired File";
    }
  },
  features_unlimited_storage_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "none-expired file, unlimited storage, and many more";
      case "th":
        return "ไฟล์ไม่มีวันหมดอายุ พื้นที่จัดเก็บไม่จำกัด และอื่นๆ อีกมากมาย";
      default:
        return "none-expired file, unlimited storage, and many more";
    }
  },
  features_predictive_analysis_title: (language: Language) => {
    switch (language) {
      case "en":
        return "Predictive Analysis";
      case "th":
        return "การวิเคราะห์เชิงทำนาย";
      default:
        return "Predictive Analysis";
    }
  },
  features_predictive_analysis_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "suggest the career path for student based on their data using AI";
      case "th":
        return "แนะนำเส้นทางอาชีพสำหรับนักเรียนตามข้อมูลของพวกเขาโดยใช้ AI";
      default:
        return "suggest the career path for student based on their data using AI";
    }
  },
  features_no_login_title: (language: Language) => {
    switch (language) {
      case "en":
        return "No login required for student";
      case "th":
        return "นักเรียนไม่ต้องล็อคอิน";
      default:
        return "No login required for student";
    }
  },
  features_no_login_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "student can access the classroom without login";
      case "th":
        return "นักเรียนสามารถเข้าห้องเรียนได้โดยไม่ต้องล็อคอิน";
      default:
        return "student can access the classroom without login";
    }
  },
  features_gamification_title: (language: Language) => {
    switch (language) {
      case "en":
        return "Gamification Learning";
      case "th":
        return "การเรียนรู้แบบเกม";
      default:
        return "Gamification Learning";
    }
  },
  features_gamification_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "encourage student to learn using gamification";
      case "th":
        return "กระตุ้นให้นักเรียนเรียนรู้โดยใช้เกม";
      default:
        return "encourage student to learn using gamification";
    }
  },
  sponsors: (language: Language) => {
    switch (language) {
      case "en":
        return "Sponsors";
      case "th":
        return "ผู้สนับสนุน";
      default:
        return "Sponsors";
    }
  },
  beloved_sponsors: (language: Language) => {
    switch (language) {
      case "en":
        return "Our Beloved Sponsors";
      case "th":
        return "ผู้สนับสนุนที่รักของเรา";
      default:
        return "Our Beloved Sponsors";
    }
  },
  sponsors_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "Tatuga School is proudly supported by our beloved sponsors, who more";
      case "th":
        return "Tatuga School ได้รับการสนับสนุนอย่างภูมิใจจากผู้สนับสนุนที่รักของเรา";
      default:
        return "Tatuga School is proudly supported by our beloved sponsors, who more";
    }
  },
  tedfund_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "Proof of Concept (POC) under the TED Youth Startup project";
      case "th":
        return "Proof of Concept (POC) ภายใต้โครงการยุววิสาหกิจเริ่มต้น (TED Youth Startup)";
      default:
        return "Proof of Concept (POC) under the TED Youth Startup project";
    }
  },
  nrru_ubi_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "University Business Incubator, Nakhon Ratchasima Rajabhat University";
      case "th":
        return "ศูนย์บ่มเพาะวิสาหกิจมหาวิทยาลัยราชภัฏนครราชสีมา";
      default:
        return "University Business Incubator, Nakhon Ratchasima Rajabhat University";
    }
  },
} as const;
