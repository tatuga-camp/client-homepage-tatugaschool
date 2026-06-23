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
        return "จัดการการสอนของคุณให้สนุกและมีประสิทธิภาพ";
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
  features_unlimited_teaching_materials: (language: Language) => {
    switch (language) {
      case "en":
        return "Over 400 Teaching Materials For Free!";
      case "th":
        return "สื่อการสอนมากกว่า 400 รายการฟรี!";
      default:
        return "Over 400 Teaching Materials For Free!";
    }
  },
  features_unlimited_teaching_materials_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "over 400 teaching materials for free, and more added every month";
      case "th":
        return "สื่อการสอนมากกว่า 400 รายการฟรี และมีการเพิ่มขึ้นทุกเดือน";
      default:
        return "over 400 teaching materials for free, and more added every month";
    }
  },
  features_line_chat_bot: (language: Language) => {
    switch (language) {
      case "en":
        return "Connect your subject with LINE Chat Bot";
      case "th":
        return "ทวงงานนักเรียนผ่าน LINE Chat Bot";
      default:
        return "Connect your subject with LINE Chat Bot";
    }
  },
  features_line_chat_bot_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "Get notified about student assignment submission, score update, and more through LINE Chat Bot";
      case "th":
        return "ทวงงานนักเรียนผ่าน LINE Chat Bot แจ้งเตือนนักเรียนเมื่อมีงานที่ต้องส่ง สอบถามคะแนน และอื่นๆ อีกมากมายผ่าน LINE Chat Bot";
      default:
        return "Get notified about student assignment submission, score update, and more through LINE Chat Bot";
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
  features_rubic_grading_title: (language: Language) => {
    switch (language) {
      case "en":
        return "AI Rubic Grading";
      case "th":
        return "การให้คะแนนแบบรูบริก";
      default:
        return "AI Rubic Grading";
    }
  },
  features_rubic_grading_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "Grade student assignment using rubic grading system";
      case "th":
        return "ให้คะแนนงานนักเรียนโดยใช้ระบบการให้คะแนนแบบรูบริก ที่ครูสามารถกำหนดเกณฑ์การให้คะแนนได้อย่างละเอียด และชัดเจน โดยใช้ AI ช่วยในการประเมินผลการเรียนรู้ของนักเรียนอย่างมีประสิทธิภาพ";
      default:
        return "Grade student assignment using rubic grading system";
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
  tatuga_school: (language: Language) => {
    switch (language) {
      case "en":
        return "Tatuga School";
      case "th":
        return "Tatuga School"; // Or "โรงเรียนทาทูก้า" if preferred, but usually brand names stay. SubscriptionPlan used "โรงเรียนทาทูก้า" though. Let's use that for consistency if I am sure.
      default:
        return "Tatuga School";
    }
  },
  seo_title: (language: Language) => {
    switch (language) {
      case "en":
        return "Tatuga School — Classroom Management Platform";
      case "th":
        return "เว็บไซต์จัดการชั้นเรียน Tatuga School — เช็คชื่อ ส่งงาน ห้องเรียนออนไลน์";
      default:
        return "Tatuga School";
    }
  },
  seo_description: (language: Language) => {
    switch (language) {
      case "en":
        return "Classroom management for teachers: online attendance, assignment submission, and online classroom — Tatuga School (formerly Tatuga Class).";
      case "th":
        return "แพลตฟอร์มจัดการชั้นเรียนสำหรับครูไทย เช็คชื่อออนไลน์ ส่งงานออนไลน์ บริหารห้องเรียนออนไลน์ ครบในที่เดียว — Tatuga School (อดีต Tatuga Class)";
      default:
        return "Classroom management platform — Tatuga School";
    }
  },
  migration_banner: (language: Language) => {
    switch (language) {
      case "en":
        return "Former Tatuga Class user? We moved to Tatuga School — sign up to continue.";
      case "th":
        return "ผู้ใช้งาน Tatuga Class เดิม — เราย้ายมาที่ Tatuga School แล้ว ลงทะเบียนใช้งานต่อได้ที่นี่";
      default:
        return "Former Tatuga Class user? We moved to Tatuga School.";
    }
  },
  hero_h1_seo: (language: Language) => {
    switch (language) {
      case "en":
        return "Classroom management website for modern teachers";
      case "th":
        return "เว็บไซต์จัดการชั้นเรียนสำหรับครูยุคใหม่";
      default:
        return "Classroom management website";
    }
  },
  keyword_attendance_h2: (language: Language) => {
    switch (language) {
      case "en":
        return "Online attendance — student attendance program on mobile";
      case "th":
        return "เช็คชื่อออนไลน์ — โปรแกรมเช็คชื่อนักเรียนผ่านมือถือ";
      default:
        return "Online attendance";
    }
  },
  keyword_attendance_body: (language: Language) => {
    switch (language) {
      case "en":
        return "Take attendance in seconds — no paper, no logins for students.";
      case "th":
        return "เช็คชื่อนักเรียนได้ในไม่กี่วินาที ไม่ต้องใช้กระดาษ นักเรียนไม่ต้องล็อคอิน เช็คชื่อออนไลน์ผ่านมือถือได้ทันที";
      default:
        return "Take attendance in seconds.";
    }
  },
  keyword_assignment_h2: (language: Language) => {
    switch (language) {
      case "en":
        return "Online assignment submission — with LINE notifications";
      case "th":
        return "ส่งงานออนไลน์ — รับงานนักเรียนพร้อมแจ้งเตือนทาง LINE";
      default:
        return "Online assignment submission";
    }
  },
  keyword_assignment_body: (language: Language) => {
    switch (language) {
      case "en":
        return "Students submit assignments online; teachers receive LINE chat-bot alerts on every submission.";
      case "th":
        return "นักเรียนส่งงานออนไลน์ผ่านมือถือ ครูได้รับแจ้งเตือนการส่งงานทันทีผ่าน LINE Chat Bot จัดการงานนักเรียนได้ในที่เดียว";
      default:
        return "Online assignment submission with LINE notifications.";
    }
  },
  keyword_classroom_h2: (language: Language) => {
    switch (language) {
      case "en":
        return "Online classroom — manage your classroom anywhere";
      case "th":
        return "ห้องเรียนออนไลน์ — คลาสรูมที่ครูจัดการได้ทุกที่";
      default:
        return "Online classroom";
    }
  },
  keyword_classroom_body: (language: Language) => {
    switch (language) {
      case "en":
        return "Run your online classroom from any device. Classroom (classroom) management for Thai teachers.";
      case "th":
        return "ห้องเรียนออนไลน์ที่ครูจัดการได้จากทุกอุปกรณ์ คลาสรูมยุคใหม่สำหรับครูไทย บริหารห้องเรียนได้สะดวก รวดเร็ว";
      default:
        return "Run your online classroom from anywhere.";
    }
  },
  keyword_activities_h2: (language: Language) => {
    switch (language) {
      case "en":
        return "Introduction activities and classroom activities";
      case "th":
        return "กิจกรรมแนะนำตัวและกิจกรรมในห้องเรียน";
      default:
        return "Classroom activities";
    }
  },
  keyword_activities_body: (language: Language) => {
    switch (language) {
      case "en":
        return "Browse hundreds of introduction activities and classroom games on our sister site, tatugacamp.com.";
      case "th":
        return "ค้นหากิจกรรมแนะนำตัวและกิจกรรมในห้องเรียนจำนวนมากบนเว็บไซต์พี่น้อง tatugacamp.com — แหล่งรวมกิจกรรมและการ์ดเกมเพื่อการเรียนรู้";
      default:
        return "Browse activities on tatugacamp.com.";
    }
  },
} as const;
