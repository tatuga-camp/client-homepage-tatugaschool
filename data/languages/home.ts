import { Language } from "./subscription";
import type { PaidPlan } from "../../utils/payingSchools";

export const HomeDataLanguage = {
  tatuga_school: (language: Language) => {
    switch (language) {
      case "en":
        return "Tatuga School";
      case "th":
        return "Tatuga School";
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
        return "Former Tatuga Class user? We moved to Tatuga School. Sign up to continue.";
      case "th":
        return "ผู้ใช้งาน Tatuga Class เดิม เราย้ายมาที่ Tatuga School แล้ว ลงทะเบียนใช้งานต่อได้ที่นี่";
      default:
        return "Former Tatuga Class user? We moved to Tatuga School.";
    }
  },

  // Hero
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
  hero_sub: (language: Language) => {
    switch (language) {
      case "en":
        return "Take attendance, set and grade work, and remind students on LINE, all in one place. Free to start.";
      case "th":
        return "เช็คชื่อ สั่งงาน ให้คะแนน และทวงงานนักเรียนผ่าน LINE ได้ครบในที่เดียว เริ่มใช้ได้ฟรี";
      default:
        return "Take attendance, set and grade work, and remind students on LINE, all in one place.";
    }
  },
  cta_sign_up: (language: Language) => {
    switch (language) {
      case "en":
        return "Sign up free";
      case "th":
        return "สมัครใช้งานฟรี";
      default:
        return "Sign up free";
    }
  },
  cta_go_school: (language: Language) => {
    switch (language) {
      case "en":
        return "Go to my school";
      case "th":
        return "ไปที่โรงเรียนของฉัน";
      default:
        return "Go to my school";
    }
  },
  cta_students: (language: Language) => {
    switch (language) {
      case "en":
        return "Student? Open your class";
      case "th":
        return "นักเรียน? เข้าห้องเรียนที่นี่";
      default:
        return "Student? Open your class";
    }
  },
  paid_schools_label: (language: Language) => {
    switch (language) {
      case "en":
        return "Schools on a paid plan right now";
      case "th":
        return "โรงเรียนที่ใช้แผนแบบชำระเงินอยู่ตอนนี้";
      default:
        return "Schools on a paid plan right now";
    }
  },
  paid_schools_list_label: (language: Language) => {
    switch (language) {
      case "en":
        return "Schools that pay for Tatuga School";
      case "th":
        return "โรงเรียนที่ชำระค่าบริการ Tatuga School";
      default:
        return "Schools that pay for Tatuga School";
    }
  },
  plan_name: (language: Language, plan: PaidPlan) => {
    switch (language) {
      case "th":
        return { BASIC: "พื้นฐาน", PREMIUM: "พรีเมียม", ENTERPRISE: "องค์กร" }[
          plan
        ];
      case "en":
      default:
        return { BASIC: "Basic", PREMIUM: "Premium", ENTERPRISE: "Enterprise" }[
          plan
        ];
    }
  },
  plan_badge: (language: Language, plan: PaidPlan) => {
    switch (language) {
      case "th":
        return `แผน${HomeDataLanguage.plan_name("th", plan)}`;
      case "en":
      default:
        return `${HomeDataLanguage.plan_name("en", plan)} plan`;
    }
  },
  plan_count: (language: Language, plan: PaidPlan, count: number) => {
    const n = count.toLocaleString("en-US");
    switch (language) {
      case "th":
        return `${HomeDataLanguage.plan_name("th", plan)} ${n} แห่ง`;
      case "en":
      default:
        return `${n} ${HomeDataLanguage.plan_name("en", plan)}`;
    }
  },

  // Usage numbers, typeset as one sentence. `strong` parts are the figures.
  proof_sentence: (language: Language) => {
    switch (language) {
      case "th":
        return [
          { text: "โรงเรียน " },
          { text: "4,094", strong: true },
          { text: " แห่ง ผู้ใช้งาน " },
          { text: "5,133", strong: true },
          { text: " คน และนักเรียน " },
          { text: "112,480", strong: true },
          { text: " คน ใช้ Tatuga School อยู่แล้ว" },
        ];
      case "en":
      default:
        return [
          { text: "4,094", strong: true },
          { text: " schools, " },
          { text: "5,133", strong: true },
          { text: " users and " },
          { text: "112,480", strong: true },
          { text: " students already use Tatuga School." },
        ];
    }
  },

  // Features
  features_heading: (language: Language) => {
    switch (language) {
      case "en":
        return "What you can do in Tatuga School";
      case "th":
        return "สิ่งที่คุณทำได้ใน Tatuga School";
      default:
        return "What you can do in Tatuga School";
    }
  },
  features_intro: (language: Language) => {
    switch (language) {
      case "en":
        return "Tools for attendance, assignments, grading and keeping every student on track.";
      case "th":
        return "เครื่องมือสำหรับเช็คชื่อ สั่งงาน ให้คะแนน และติดตามนักเรียนทุกคนให้ไม่หลุด";
      default:
        return "Tools for attendance, assignments, grading and keeping every student on track.";
    }
  },
  features_rubric_title: (language: Language) => {
    switch (language) {
      case "en":
        return "Rubric grading with AI";
      case "th":
        return "ให้คะแนนแบบรูบริกด้วย AI";
      default:
        return "Rubric grading with AI";
    }
  },
  features_rubric_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "Set clear, detailed scoring criteria for each assignment, and let AI help you assess every student's work against them.";
      case "th":
        return "กำหนดเกณฑ์การให้คะแนนได้ละเอียดและชัดเจนในแต่ละงาน แล้วให้ AI ช่วยประเมินงานของนักเรียนแต่ละคนตามเกณฑ์นั้น";
      default:
        return "Set clear, detailed scoring criteria and let AI help you assess student work.";
    }
  },
  features_line_title: (language: Language) => {
    switch (language) {
      case "en":
        return "Reminders through the LINE chat bot";
      case "th":
        return "ทวงงานนักเรียนผ่าน LINE Chat Bot";
      default:
        return "Reminders through the LINE chat bot";
    }
  },
  features_line_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "Connect a subject to LINE. Students get reminded about work that's due and can ask for their scores, and you hear about every submission.";
      case "th":
        return "เชื่อมรายวิชากับ LINE แจ้งเตือนนักเรียนเมื่อมีงานที่ต้องส่ง นักเรียนสอบถามคะแนนได้เอง และครูรู้ทันทีเมื่อมีการส่งงาน";
      default:
        return "Connect a subject to LINE for reminders, scores and submission alerts.";
    }
  },
  features_materials_title: (language: Language) => {
    switch (language) {
      case "en":
        return "Over 400 free teaching materials";
      case "th":
        return "สื่อการสอนฟรีมากกว่า 400 รายการ";
      default:
        return "Over 400 free teaching materials";
    }
  },
  features_materials_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "Ready-to-use materials for your lessons, with more added every month.";
      case "th":
        return "สื่อการสอนพร้อมใช้สำหรับบทเรียนของคุณ และมีเพิ่มใหม่ทุกเดือน";
      default:
        return "Ready-to-use materials, with more added every month.";
    }
  },
  features_predictive_title: (language: Language) => {
    switch (language) {
      case "en":
        return "Predictive analysis";
      case "th":
        return "การวิเคราะห์เชิงทำนาย";
      default:
        return "Predictive analysis";
    }
  },
  features_predictive_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "AI suggests career paths for each student based on their learning data.";
      case "th":
        return "AI แนะนำเส้นทางอาชีพให้นักเรียนแต่ละคนจากข้อมูลการเรียนของนักเรียน";
      default:
        return "AI suggests career paths for each student based on their learning data.";
    }
  },
  features_no_login_title: (language: Language) => {
    switch (language) {
      case "en":
        return "No login for students";
      case "th":
        return "นักเรียนไม่ต้องล็อกอิน";
      default:
        return "No login for students";
    }
  },
  features_no_login_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "Students open their class straight away, without creating an account or remembering a password.";
      case "th":
        return "นักเรียนเข้าห้องเรียนได้ทันที ไม่ต้องสมัครบัญชีหรือจำรหัสผ่าน";
      default:
        return "Students open their class without creating an account.";
    }
  },
  features_storage_title: (language: Language) => {
    switch (language) {
      case "en":
        return "Unlimited storage, files that never expire";
      case "th":
        return "พื้นที่ไม่จำกัด ไฟล์ไม่มีวันหมดอายุ";
      default:
        return "Unlimited storage, files that never expire";
    }
  },
  features_storage_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "Keep every assignment, submission and material for as long as you need them on paid plans.";
      case "th":
        return "เก็บงาน ไฟล์ที่นักเรียนส่ง และสื่อการสอนไว้ได้นานเท่าที่ต้องการในแผนแบบชำระเงิน";
      default:
        return "Keep every file for as long as you need on paid plans.";
    }
  },
  features_gamification_title: (language: Language) => {
    switch (language) {
      case "en":
        return "Learning that feels like a game";
      case "th":
        return "การเรียนรู้แบบเกม";
      default:
        return "Learning that feels like a game";
    }
  },
  features_gamification_desc: (language: Language) => {
    switch (language) {
      case "en":
        return "Points and rewards encourage students to keep learning and handing in their work.";
      case "th":
        return "คะแนนสะสมและรางวัลช่วยกระตุ้นให้นักเรียนอยากเรียนและส่งงานอย่างสม่ำเสมอ";
      default:
        return "Points and rewards encourage students to keep learning.";
    }
  },

  // Video
  video_heading: (language: Language) => {
    switch (language) {
      case "en":
        return "Watch a quick tour";
      case "th":
        return "ดูวิดีโอแนะนำการใช้งาน";
      default:
        return "Watch a quick tour";
    }
  },
  video_play: (language: Language) => {
    switch (language) {
      case "en":
        return "Play the video tour";
      case "th":
        return "เล่นวิดีโอแนะนำ";
      default:
        return "Play the video tour";
    }
  },

  // Testimonials
  testimonials_heading: (language: Language) => {
    switch (language) {
      case "en":
        return "What teachers say about Tatuga School";
      case "th":
        return "เสียงจากคุณครูที่ใช้ Tatuga School";
      default:
        return "What teachers say about Tatuga School";
    }
  },
  rating_label: (language: Language, rating: number) => {
    switch (language) {
      case "th":
        return `ให้คะแนน ${rating} จาก 5`;
      case "en":
      default:
        return `Rated ${rating} out of 5`;
    }
  },

  // SEO articles
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
        return "Run your online classroom from any device. Classroom management built for Thai teachers.";
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
        return "Browse hundreds of introduction activities and classroom games on our sister site,";
      case "th":
        return "ค้นหากิจกรรมแนะนำตัวและกิจกรรมในห้องเรียนจำนวนมาก รวมถึงการ์ดเกมเพื่อการเรียนรู้ บนเว็บไซต์พี่น้องของเรา";
      default:
        return "Browse activities on our sister site,";
    }
  },

  // Sponsors
  sponsors_heading: (language: Language) => {
    switch (language) {
      case "en":
        return "Supported by";
      case "th":
        return "ได้รับการสนับสนุนจาก";
      default:
        return "Supported by";
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

  // Closing call to action
  closing_heading: (language: Language) => {
    switch (language) {
      case "en":
        return "Start with the free plan today";
      case "th":
        return "เริ่มต้นใช้งานแผนฟรีได้วันนี้";
      default:
        return "Start with the free plan today";
    }
  },
  closing_body: (language: Language) => {
    switch (language) {
      case "en":
        return "Create your free account, then upgrade your school whenever you need more classes and storage.";
      case "th":
        return "สมัครใช้งานฟรี แล้วค่อยอัปเกรดโรงเรียนเมื่อต้องการห้องเรียนและพื้นที่จัดเก็บเพิ่ม";
      default:
        return "Create your free account, then upgrade whenever you need more.";
    }
  },
  compare_plans: (language: Language) => {
    switch (language) {
      case "en":
        return "Compare plans";
      case "th":
        return "เปรียบเทียบแผน";
      default:
        return "Compare plans";
    }
  },
} as const;
