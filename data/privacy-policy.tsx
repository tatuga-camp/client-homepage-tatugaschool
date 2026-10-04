import type { ReactNode } from "react";
import type { Language } from "../interfaces";

/**
 * Privacy policy content, one document per language. Section ids are shared
 * across languages so table-of-contents links survive a language switch.
 *
 * Markup is plain (p, h3, ul, strong, a) — the page styles it, so keep
 * Tailwind classes out of this file (it isn't in tailwind's content paths).
 *
 * The Google section must stay in line with the Google API Services User Data
 * Policy (Limited Use): Google checks it during OAuth app verification for the
 * Drive / Docs / Sheets scopes. Update its examples to match the shipped
 * features before submitting for verification.
 */

export type PolicySection = { id: string; title: string; body: ReactNode };

export type PolicyDocument = {
  seoTitle: string;
  seoDescription: string;
  title: ReactNode;
  updated: string;
  intro: ReactNode;
  summaryTitle: string;
  summary: ReactNode[];
  tocTitle: string;
  sections: PolicySection[];
};

const EMAIL = "permlap@tatugacamp.com";
const GOOGLE_POLICY_URL =
  "https://developers.google.com/terms/api-services-user-data-policy";
const GOOGLE_PERMISSIONS_URL = "https://myaccount.google.com/permissions";

const mail = <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;

const en: PolicyDocument = {
  seoTitle: "Privacy policy — Tatuga School",
  seoDescription:
    "How Tatuga School collects, uses and protects personal data, including Google Drive, Docs and Sheets connections and AI features.",
  title: "Privacy policy",
  updated: "Last updated: 4 October 2026",
  intro: (
    <>
      <p>
        This policy explains what personal data Tatuga School collects, how we
        use it, who we share it with, and the choices and rights you have. It
        applies to tatugaschool.com, the Tatuga School web apps for teachers and
        students, and our LINE chat bot (together, the “Service”).
      </p>
      <p>
        The Service is run by Tatuga Camp Limited Partnership (ห้างหุ้นส่วนจำกัด
        ทาทูก้าแคมป์), 879 Moo 3, Pho Klang Subdistrict, Mueang Nakhon
        Ratchasima District, Nakhon Ratchasima, Thailand (“we”, “us”). We handle
        personal data in line with Thailand’s Personal Data Protection Act B.E.
        2562 (2019) (“PDPA”).
      </p>
    </>
  ),
  summaryTitle: "The short version",
  summary: [
    "We collect what we need to run your classes: account details, school details, and the student work, scores and attendance you add.",
    "We connect to your Google Drive, Docs or Sheets only after you give permission, and only for the features you use. Data from Google is never sold, never used for ads, and never used to train general AI models.",
    "We may use de-identified data, with names and other identifying details removed, to train and improve our AI features. You can opt out at any time.",
    "We never sell personal data, and we never use students’ personal data for advertising or AI training.",
    <>You can ask to see, correct, export or delete your data by emailing {mail}.</>,
  ],
  tocTitle: "On this page",
  sections: [
    {
      id: "data-we-collect",
      title: "Data we collect",
      body: (
        <>
          <p>What we collect depends on how you use the Service.</p>
          <h3>Account details</h3>
          <p>
            When a teacher or school staff member creates an account, we collect
            their first and last name, email address, phone number, profile
            photo, password and preferred language. Passwords are stored only as
            a one-way hash, never in plain text.
          </p>
          <h3>School details</h3>
          <p>
            The school’s name, description, logo, address, city, country and
            phone number, its members and their roles, and its plan and billing
            status.
          </p>
          <h3>Student and classroom data</h3>
          <p>
            Teachers, and students when they take part in a class, add
            information such as the student’s title, first and last name,
            student number, class, photo and an optional student password;
            assignments, submitted work and files; comments; scores, grades and
            rubric results; attendance; and points and skills. Students don’t
            need an email address or an account to use the Service.
          </p>
          <h3>Payments</h3>
          <p>
            Paid plans are billed through Stripe, which collects and processes
            card details. We receive a customer reference, the plan and the
            payment status, but never your full card number.
          </p>
          <h3>LINE chat bot</h3>
          <p>
            If a teacher connects a subject to our LINE chat bot, we store the
            LINE group identifier and process the messages sent to the bot so it
            can reply, for example to remind students about work that’s due or
            to answer a question about scores.
          </p>
          <h3>Support and feedback</h3>
          <p>
            Messages you send us by live chat, email, Facebook or phone,
            feedback you send from inside the app, and error reports you choose
            to send, which include technical details about what went wrong.
          </p>
          <h3>Usage and device data</h3>
          <p>
            Collected automatically when you use the Service: IP address,
            browser type and version, device type and operating system, pages
            visited, the time and date of visits, time spent on pages and other
            diagnostic data. If you turn on browser notifications, we also store
            your browser’s notification subscription.
          </p>
        </>
      ),
    },
    {
      id: "google-sign-in",
      title: "Signing in with Google",
      body: (
        <p>
          You can create an account or sign in with Google. When you do, Google
          shares your name, email address, profile photo and Google account ID
          with us. We use them only to create and secure your account. Signing
          in with Google does not give us access to your Google Drive, Docs or
          Sheets.
        </p>
      ),
    },
    {
      id: "google-workspace",
      title: "Connecting Google Drive, Docs and Sheets",
      body: (
        <>
          <p>
            Some features let you connect your Google account so you can use
            files from Google Drive, Google Docs and Google Sheets in Tatuga
            School: for example, attaching a Drive file to an assignment or
            teaching material, or opening and creating Docs and Sheets for your
            classes.
          </p>
          <ul>
            <li>
              <strong>Only with your permission.</strong> We connect only after
              you agree on Google’s consent screen, which lists exactly what
              access we’re asking for. We ask only for the access that the
              feature you’re using needs.
            </li>
            <li>
              <strong>What we access.</strong> Depending on the feature: the
              files you choose, the files the feature creates for you, and your
              basic profile (name and email) to show which account is connected.
            </li>
            <li>
              <strong>How we use it.</strong> Only to provide and improve the
              features you use that are visible in Tatuga School.
            </li>
            <li>
              <strong>What we never do.</strong> We don’t sell Google user data.
              We don’t use it for advertising, including retargeting or
              personalised ads. We don’t use it to create, train or improve
              general AI or machine-learning models. Our staff don’t read it
              unless you ask us to (for example, to help with a support
              request), it’s needed for security (such as investigating abuse),
              the law requires it, or it has been aggregated and anonymised for
              internal operations.
            </li>
            <li>
              <strong>Sharing.</strong> We transfer Google user data only to the
              service providers needed to run the feature, when the law requires
              it, or as part of a merger or acquisition with notice to you.
            </li>
            <li>
              <strong>Turning it off.</strong> You can remove our access at any
              time in your Google Account permissions at{" "}
              <a href={GOOGLE_PERMISSIONS_URL}>myaccount.google.com/permissions</a>,
              or by contacting us. After that we can no longer reach your Google
              files. Copies you saved into Tatuga School, such as attachments,
              stay until you delete them.
            </li>
          </ul>
          <p>
            Tatuga School’s use and transfer to any other app of information
            received from Google APIs will adhere to the{" "}
            <a href={GOOGLE_POLICY_URL}>Google API Services User Data Policy</a>,
            including the Limited Use requirements.
          </p>
        </>
      ),
    },
    {
      id: "how-we-use",
      title: "How we use your data",
      body: (
        <>
          <ul>
            <li>
              <strong>To provide the Service:</strong> run your school, classes
              and subjects; let students submit work and see their results; and
              send the notifications and LINE messages you set up.
            </li>
            <li>
              <strong>To manage your account and your school’s plan,</strong>{" "}
              including billing.
            </li>
            <li>
              <strong>To support you:</strong> answer your questions and fix
              problems you report.
            </li>
            <li>
              <strong>To keep the Service safe:</strong> prevent fraud, spam and
              abuse (our sign-up page uses Cloudflare Turnstile to block bots,
              for example) and protect accounts.
            </li>
            <li>
              <strong>To improve the Service:</strong> understand how features
              are used, fix bugs and build new features, including AI features
              (see “AI features and model training”).
            </li>
            <li>
              <strong>To contact you</strong> by email, phone, LINE or
              notifications about your account, security and changes to the
              Service and, unless you opt out, about news and offers from Tatuga
              School.
            </li>
            <li>
              <strong>To meet legal obligations</strong> and enforce our
              agreements.
            </li>
            <li>
              <strong>For business transfers:</strong> if we’re involved in a
              merger, sale or reorganisation, personal data may be transferred
              as part of it. We’ll tell you before your data becomes subject to a
              different privacy policy.
            </li>
          </ul>
          <p>
            Our legal bases under the PDPA are: performing our contract with you
            or your school; our legitimate interests in running, securing and
            improving the Service, where your rights don’t override them;
            complying with the law; and your consent where we ask for it, such
            as when you connect Google Drive, Docs and Sheets.
          </p>
        </>
      ),
    },
    {
      id: "ai",
      title: "AI features and model training",
      body: (
        <>
          <p>
            Tatuga School includes AI features such as rubric grading
            assistance, answers from our LINE chat bot, help filling in
            teaching-material details, and career-path suggestions.
          </p>
          <h3>When you use an AI feature</h3>
          <p>
            We send the content needed for that request, such as an assignment,
            a rubric, a student’s submitted work or a question asked in LINE, to
            our AI service provider (currently Google’s Gemini API) to produce
            the result. Teachers should review AI suggestions before relying on
            them.
          </p>
          <h3>Training and improving our AI features</h3>
          <p>
            We may use de-identified data about how the Service is used, and
            de-identified content created in it, to train, test and improve our
            AI features, for example to make rubric suggestions more accurate.
            “De-identified” means names, email addresses, student numbers,
            photos and other details that identify a person have been removed,
            and we don’t try to re-identify anyone.
          </p>
          <p>We never use the following for this purpose:</p>
          <ul>
            <li>
              data we receive from Google Drive, Docs, Sheets or any other
              Google API;
            </li>
            <li>
              students’ personal data, such as names, student numbers or photos.
            </li>
          </ul>
          <h3>Opting out</h3>
          <p>
            You can ask us to exclude your data from AI training at any time.
            School administrators can ask the same for their whole school. Email{" "}
            {mail} and we’ll stop using that data for future training. Data that
            has already been used to train a model can’t always be removed from
            that model.
          </p>
        </>
      ),
    },
    {
      id: "marketing",
      title: "Marketing",
      body: (
        <>
          <ul>
            <li>
              <strong>Usage statistics.</strong> We may publish aggregated,
              de-identified figures, such as how many schools, teachers and
              students use Tatuga School.
            </li>
            <li>
              <strong>Schools on paid plans.</strong> We may show the name, logo
              and city or province of schools on a paid plan on our website. A
              school administrator can ask us to remove their school at any
              time.
            </li>
            <li>
              <strong>Quotes and stories.</strong> We publish a person’s name,
              photo or words in testimonials or case studies only with their
              permission.
            </li>
            <li>
              <strong>Messages from us.</strong> We may email you about new
              features, tips and offers. You can ask us to stop at any time.
            </li>
          </ul>
          <p>
            We don’t sell personal data, and we never use Google user data or
            students’ personal data for marketing or advertising.
          </p>
        </>
      ),
    },
    {
      id: "sharing",
      title: "Who we share data with",
      body: (
        <>
          <p>We share personal data only as described here.</p>
          <ul>
            <li>
              <strong>Service providers</strong> that process it on our behalf
              to run parts of the Service: Google (sign-in, AI processing, and
              the Google Drive, Docs and Sheets connection), Stripe (payments),
              Cloudflare (file storage and bot protection), MongoDB Atlas
              (database), DigitalOcean (application servers), Netlify (website
              hosting), Sanity (website content), LINE (chat bot messages),
              Tawk.to (live chat) and our email delivery service.
            </li>
            <li>
              <strong>Your school.</strong> Administrators and teachers in your
              school can see the information they need to work together, such as
              members, classes and student records.
            </li>
            <li>
              <strong>Students and their families.</strong> Students can see
              their own work, scores and attendance. If a teacher shares a
              progress link, anyone with that link can see what it shows.
            </li>
            <li>
              <strong>Business transfers:</strong> as part of a merger,
              acquisition or sale of assets, with notice to you.
            </li>
            <li>
              <strong>Legal reasons:</strong> when the law or a valid request
              from a public authority requires it, or to protect the rights,
              property or safety of Tatuga School, our users or the public.
            </li>
            <li>
              <strong>With your consent</strong> for any other purpose.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "cookies",
      title: "Cookies",
      body: (
        <>
          <p>We use a small number of cookies and similar technologies.</p>
          <ul>
            <li>
              <strong>Essential cookies</strong> keep you signed in and protect
              your account. The Service can’t work without them.
            </li>
            <li>
              <strong>Preference cookies</strong> remember choices such as your
              language.
            </li>
            <li>
              <strong>Third-party features.</strong> The live chat widget
              (Tawk.to) sets cookies to keep your conversation, and our video
              tour loads from YouTube only when you press play.
            </li>
          </ul>
          <p>
            You can block or delete cookies in your browser settings, but parts
            of the Service, such as signing in, may stop working.
          </p>
        </>
      ),
    },
    {
      id: "retention",
      title: "How long we keep data",
      body: (
        <p>
          We keep personal data while your account or your school’s account is
          active, and as long as we need it for the purposes in this policy.
          When an account or school is deleted, we delete or de-identify its
          personal data within a reasonable time, unless we must keep it longer
          to meet legal, tax or accounting obligations, resolve disputes or
          enforce our agreements. Usage data is generally kept for a shorter
          time, unless we need it to keep the Service secure or to improve it.
        </p>
      ),
    },
    {
      id: "transfers",
      title: "International transfers",
      body: (
        <p>
          Some of our service providers store or process data on servers
          outside Thailand. When that happens, we take the steps the PDPA
          requires to keep your data protected, such as working only with
          providers that have appropriate safeguards.
        </p>
      ),
    },
    {
      id: "security",
      title: "Security",
      body: (
        <p>
          We protect data with measures such as encrypted connections (HTTPS),
          hashed passwords and access controls. No method of transmission or
          storage is completely secure, so we can’t guarantee absolute
          security. If a breach affects your personal data, we’ll notify you and
          the authorities as the law requires.
        </p>
      ),
    },
    {
      id: "your-rights",
      title: "Your rights",
      body: (
        <>
          <p>Under the PDPA you have the right to:</p>
          <ul>
            <li>know how your personal data is used;</li>
            <li>access your personal data and get a copy of it;</li>
            <li>
              receive your data in a commonly used electronic format, or have it
              sent to another service;
            </li>
            <li>correct data that is inaccurate or incomplete;</li>
            <li>ask us to delete or de-identify your data;</li>
            <li>ask us to restrict how we use your data;</li>
            <li>
              object to how we use your data, including for marketing and AI
              training;
            </li>
            <li>
              withdraw consent you’ve given, such as for the Google connection,
              without affecting what was done before;
            </li>
            <li>
              complain to the Office of the Personal Data Protection Committee
              (PDPC).
            </li>
          </ul>
          <p>
            You can change most account details yourself in the app. For
            anything else, email {mail}. We may need to confirm your identity,
            and we’ll reply within 30 days. For student data, we may involve the
            student’s school, which manages that data.
          </p>
        </>
      ),
    },
    {
      id: "students",
      title: "Children and students",
      body: (
        <>
          <p>
            Schools use Tatuga School to teach students, many of whom are under
            20 and therefore minors under Thai law. Student information is added
            and managed by the school and its teachers, and we process it on the
            school’s behalf to provide the Service. Schools are responsible for
            telling students and their parents or guardians how student data is
            used, and for getting consent where the law requires it.
          </p>
          <p>
            We never sell student data, never use it for advertising, and never
            use students’ personal data to train AI models. Parents or guardians
            with questions, or who want a student’s data corrected or deleted,
            can contact the student’s school or email us.
          </p>
        </>
      ),
    },
    {
      id: "other-sites",
      title: "Links to other websites",
      body: (
        <p>
          The Service may link to websites we don’t run. If you follow a
          third-party link, you’ll go to that site, and we encourage you to read
          its privacy policy. We have no control over, and take no
          responsibility for, the content, privacy policies or practices of
          third-party sites or services.
        </p>
      ),
    },
    {
      id: "changes",
      title: "Changes to this policy",
      body: (
        <p>
          We may update this policy as the Service changes. We’ll post the new
          version on this page and update the date at the top. If a change is
          significant, we’ll also tell you by email or with a notice in the
          Service before it takes effect.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact us",
      body: (
        <p>
          Questions about this policy or your data? Email {mail}, or write to
          Tatuga Camp Limited Partnership, 879 Moo 3, Pho Klang Subdistrict,
          Mueang Nakhon Ratchasima District, Nakhon Ratchasima, Thailand.
        </p>
      ),
    },
  ],
};

const th: PolicyDocument = {
  seoTitle: "นโยบายความเป็นส่วนตัว — Tatuga School",
  seoDescription:
    "วิธีที่ Tatuga School เก็บ ใช้ และคุ้มครองข้อมูลส่วนบุคคล รวมถึงการเชื่อมต่อ Google Drive, Docs, Sheets และฟีเจอร์ AI",
  // Keep the phrase together: Thai line breaking would otherwise split
  // "ความเป็นส่วนตัว" on narrow screens.
  title: (
    <>
      นโยบาย<span style={{ whiteSpace: "nowrap" }}>ความเป็นส่วนตัว</span>
    </>
  ),
  updated: "ปรับปรุงล่าสุด: 4 ตุลาคม 2569",
  intro: (
    <>
      <p>
        นโยบายนี้อธิบายว่า Tatuga School เก็บข้อมูลส่วนบุคคลอะไรบ้าง
        นำไปใช้อย่างไร เปิดเผยให้ใคร รวมถึงทางเลือกและสิทธิของคุณ
        โดยมีผลกับเว็บไซต์ tatugaschool.com เว็บแอป Tatuga School
        สำหรับครูและนักเรียน และแชทบอท LINE ของเรา (รวมเรียกว่า “บริการ”)
      </p>
      <p>
        บริการนี้ดำเนินการโดย ห้างหุ้นส่วนจำกัด ทาทูก้าแคมป์ (Tatuga Camp
        Limited Partnership) เลขที่ 879 หมู่ที่ 3 ตำบลโพธิ์กลาง
        อำเภอเมืองนครราชสีมา จังหวัดนครราชสีมา (“เรา”)
        เราดูแลข้อมูลส่วนบุคคลตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
        (“PDPA”)
      </p>
    </>
  ),
  summaryTitle: "สรุปสั้นๆ",
  summary: [
    "เราเก็บเฉพาะข้อมูลที่จำเป็นต่อการจัดการชั้นเรียน ได้แก่ ข้อมูลบัญชี ข้อมูลโรงเรียน และงาน คะแนน และการเข้าเรียนของนักเรียนที่คุณบันทึก",
    "เราเชื่อมต่อ Google Drive, Google Docs หรือ Google Sheets ของคุณเมื่อได้รับอนุญาตเท่านั้น และใช้เฉพาะกับฟีเจอร์ที่คุณใช้ ข้อมูลจาก Google จะไม่ถูกขาย ไม่ถูกใช้เพื่อโฆษณา และไม่ถูกใช้ฝึกโมเดล AI ทั่วไป",
    "เราอาจใช้ข้อมูลที่ทำให้ไม่สามารถระบุตัวตนได้แล้ว (ลบชื่อและข้อมูลที่ระบุตัวบุคคลออก) เพื่อฝึกและพัฒนาฟีเจอร์ AI ของเรา และคุณขอไม่ให้ใช้ข้อมูลของคุณได้ทุกเมื่อ",
    "เราไม่ขายข้อมูลส่วนบุคคล และไม่ใช้ข้อมูลส่วนบุคคลของนักเรียนเพื่อการโฆษณาหรือการฝึก AI",
    <>คุณขอดู แก้ไข ขอรับสำเนา หรือขอลบข้อมูลของคุณได้ทางอีเมล {mail}</>,
  ],
  tocTitle: "หัวข้อในหน้านี้",
  sections: [
    {
      id: "data-we-collect",
      title: "ข้อมูลที่เราเก็บ",
      body: (
        <>
          <p>ข้อมูลที่เราเก็บขึ้นอยู่กับวิธีที่คุณใช้บริการ</p>
          <h3>ข้อมูลบัญชี</h3>
          <p>
            เมื่อครูหรือบุคลากรของโรงเรียนสร้างบัญชี เราจะเก็บชื่อและนามสกุล
            อีเมล เบอร์โทรศัพท์ รูปโปรไฟล์ รหัสผ่าน และภาษาที่ต้องการใช้
            โดยรหัสผ่านจะถูกเก็บในรูปแบบแฮชทางเดียวเท่านั้น
            ไม่มีการเก็บเป็นข้อความธรรมดา
          </p>
          <h3>ข้อมูลโรงเรียน</h3>
          <p>
            ชื่อโรงเรียน คำอธิบาย โลโก้ ที่อยู่ เมือง ประเทศ และเบอร์โทรศัพท์
            สมาชิกและบทบาทของสมาชิก รวมถึงแผนการใช้งานและสถานะการชำระเงิน
          </p>
          <h3>ข้อมูลนักเรียนและชั้นเรียน</h3>
          <p>
            ข้อมูลที่ครู หรือนักเรียนเมื่อเข้าร่วมชั้นเรียน บันทึกลงในบริการ เช่น
            คำนำหน้า ชื่อและนามสกุล เลขที่ ห้องเรียน รูปภาพ
            และรหัสผ่านของนักเรียน (ถ้ามี) งานที่มอบหมาย งานและไฟล์ที่ส่ง
            ความคิดเห็น คะแนน เกรด และผลการประเมินตามรูบริก การเข้าเรียน
            คะแนนสะสม และทักษะ นักเรียนไม่จำเป็นต้องมีอีเมลหรือบัญชีผู้ใช้
          </p>
          <h3>การชำระเงิน</h3>
          <p>
            แผนแบบชำระเงินเรียกเก็บผ่าน Stripe
            ซึ่งเป็นผู้เก็บและประมวลผลข้อมูลบัตร เราได้รับเพียงรหัสอ้างอิงลูกค้า
            แผนที่เลือก และสถานะการชำระเงิน โดยไม่เคยได้รับหมายเลขบัตรเต็ม
          </p>
          <h3>แชทบอท LINE</h3>
          <p>
            หากครูเชื่อมรายวิชากับแชทบอท LINE ของเรา เราจะเก็บรหัสกลุ่ม LINE
            และประมวลผลข้อความที่ส่งถึงบอทเพื่อให้บอทตอบกลับได้ เช่น
            แจ้งเตือนนักเรียนเรื่องงานที่ต้องส่ง หรือตอบคำถามเรื่องคะแนน
          </p>
          <h3>การติดต่อและความคิดเห็น</h3>
          <p>
            ข้อความที่คุณส่งถึงเราผ่านแชทสด อีเมล Facebook หรือโทรศัพท์
            ความคิดเห็นที่ส่งจากในแอป และรายงานข้อผิดพลาดที่คุณเลือกส่ง
            ซึ่งมีรายละเอียดทางเทคนิคของปัญหาที่เกิดขึ้น
          </p>
          <h3>ข้อมูลการใช้งานและอุปกรณ์</h3>
          <p>
            ข้อมูลที่เก็บโดยอัตโนมัติเมื่อคุณใช้บริการ ได้แก่ IP address
            ประเภทและเวอร์ชันของเบราว์เซอร์ ประเภทอุปกรณ์และระบบปฏิบัติการ
            หน้าที่เข้าชม วันและเวลาที่เข้าชม ระยะเวลาที่อยู่ในแต่ละหน้า
            และข้อมูลวินิจฉัยอื่นๆ หากคุณเปิดการแจ้งเตือนผ่านเบราว์เซอร์
            เราจะเก็บข้อมูลการสมัครรับการแจ้งเตือนของเบราว์เซอร์นั้นด้วย
          </p>
        </>
      ),
    },
    {
      id: "google-sign-in",
      title: "การเข้าสู่ระบบด้วย Google",
      body: (
        <p>
          คุณสมัครหรือเข้าสู่ระบบด้วยบัญชี Google ได้ เมื่อใช้วิธีนี้ Google
          จะส่งชื่อ อีเมล รูปโปรไฟล์ และรหัสบัญชี Google ของคุณให้เรา
          เราใช้ข้อมูลเหล่านี้เพื่อสร้างและรักษาความปลอดภัยของบัญชีเท่านั้น
          การเข้าสู่ระบบด้วย Google ไม่ได้ทำให้เราเข้าถึง Google Drive, Google
          Docs หรือ Google Sheets ของคุณ
        </p>
      ),
    },
    {
      id: "google-workspace",
      title: "การเชื่อมต่อ Google Drive, Google Docs และ Google Sheets",
      body: (
        <>
          <p>
            บางฟีเจอร์ให้คุณเชื่อมต่อบัญชี Google เพื่อใช้ไฟล์จาก Google Drive,
            Google Docs และ Google Sheets ใน Tatuga School เช่น แนบไฟล์จาก Drive
            ในงานที่มอบหมายหรือสื่อการสอน หรือเปิดและสร้างไฟล์ Docs และ Sheets
            สำหรับชั้นเรียนของคุณ
          </p>
          <ul>
            <li>
              <strong>ต้องได้รับอนุญาตจากคุณก่อนเสมอ</strong>{" "}
              เราจะเชื่อมต่อหลังจากคุณกดยินยอมบนหน้าขอสิทธิ์ของ Google
              ซึ่งแสดงรายละเอียดสิทธิ์ที่เราขอทั้งหมด
              และเราขอเฉพาะสิทธิ์ที่ฟีเจอร์ที่คุณใช้จำเป็นต้องมีเท่านั้น
            </li>
            <li>
              <strong>ข้อมูลที่เราเข้าถึง</strong> ขึ้นอยู่กับฟีเจอร์ ได้แก่
              ไฟล์ที่คุณเลือก ไฟล์ที่ฟีเจอร์สร้างให้คุณ และข้อมูลโปรไฟล์พื้นฐาน
              (ชื่อและอีเมล) เพื่อแสดงว่าบัญชีใดเชื่อมต่ออยู่
            </li>
            <li>
              <strong>วิธีที่เราใช้ข้อมูล</strong>{" "}
              ใช้เพื่อให้บริการและปรับปรุงฟีเจอร์ที่คุณใช้งานและมองเห็นได้ใน
              Tatuga School เท่านั้น
            </li>
            <li>
              <strong>สิ่งที่เราไม่ทำ</strong> เราไม่ขายข้อมูลผู้ใช้จาก Google
              ไม่นำไปใช้เพื่อการโฆษณา รวมถึงการรีทาร์เก็ตติ้งหรือโฆษณาตามความสนใจ
              และไม่นำไปใช้สร้าง ฝึก หรือพัฒนาโมเดล AI
              หรือแมชชีนเลิร์นนิงทั่วไป เจ้าหน้าที่ของเราจะไม่อ่านข้อมูลนี้
              เว้นแต่คุณขอให้ช่วย (เช่น เพื่อแก้ปัญหาการใช้งาน)
              จำเป็นด้านความปลอดภัย (เช่น ตรวจสอบการใช้งานในทางที่ผิด)
              กฎหมายกำหนด
              หรือข้อมูลถูกรวบรวมและทำให้ไม่ระบุตัวตนแล้วเพื่อการดำเนินงานภายใน
            </li>
            <li>
              <strong>การส่งต่อข้อมูล</strong> เราส่งต่อข้อมูลผู้ใช้จาก Google
              ให้เฉพาะผู้ให้บริการที่จำเป็นต่อการทำงานของฟีเจอร์ เมื่อกฎหมายกำหนด
              หรือเป็นส่วนหนึ่งของการควบรวมหรือการเข้าซื้อกิจการโดยแจ้งให้คุณทราบ
            </li>
            <li>
              <strong>การยกเลิกการเชื่อมต่อ</strong>{" "}
              คุณยกเลิกสิทธิ์ได้ทุกเมื่อที่หน้าการอนุญาตในบัญชี Google ของคุณ{" "}
              <a href={GOOGLE_PERMISSIONS_URL}>myaccount.google.com/permissions</a>{" "}
              หรือติดต่อเรา หลังยกเลิกแล้ว เราจะเข้าถึงไฟล์ใน Google
              ของคุณไม่ได้อีก ส่วนสำเนาที่คุณบันทึกไว้ใน Tatuga School เช่น
              ไฟล์แนบ จะยังอยู่จนกว่าคุณจะลบ
            </li>
          </ul>
          <p>
            การใช้และการส่งต่อข้อมูลที่ได้รับจาก Google APIs ไปยังแอปอื่นของ
            Tatuga School จะเป็นไปตาม{" "}
            <a href={GOOGLE_POLICY_URL}>
              นโยบายข้อมูลผู้ใช้ของบริการ Google API (Google API Services User
              Data Policy)
            </a>{" "}
            รวมถึงข้อกำหนดการใช้งานแบบจำกัด (Limited Use requirements)
          </p>
        </>
      ),
    },
    {
      id: "how-we-use",
      title: "วิธีที่เราใช้ข้อมูลของคุณ",
      body: (
        <>
          <ul>
            <li>
              <strong>เพื่อให้บริการ:</strong> จัดการโรงเรียน ห้องเรียน
              และรายวิชา ให้นักเรียนส่งงานและดูผลการเรียน
              และส่งการแจ้งเตือนหรือข้อความ LINE ที่คุณตั้งค่าไว้
            </li>
            <li>
              <strong>เพื่อจัดการบัญชีและแผนการใช้งานของโรงเรียน</strong>{" "}
              รวมถึงการเรียกเก็บเงิน
            </li>
            <li>
              <strong>เพื่อช่วยเหลือคุณ:</strong>{" "}
              ตอบคำถามและแก้ไขปัญหาที่คุณแจ้ง
            </li>
            <li>
              <strong>เพื่อความปลอดภัยของบริการ:</strong> ป้องกันการฉ้อโกง สแปม
              และการใช้งานในทางที่ผิด (เช่น หน้าสมัครใช้งานใช้ Cloudflare
              Turnstile เพื่อป้องกันบอท) และปกป้องบัญชีผู้ใช้
            </li>
            <li>
              <strong>เพื่อพัฒนาบริการ:</strong> ทำความเข้าใจการใช้งานฟีเจอร์
              แก้ไขข้อผิดพลาด และสร้างฟีเจอร์ใหม่ รวมถึงฟีเจอร์ AI (ดูหัวข้อ
              “ฟีเจอร์ AI และการฝึกโมเดล”)
            </li>
            <li>
              <strong>เพื่อติดต่อคุณ</strong> ทางอีเมล โทรศัพท์ LINE
              หรือการแจ้งเตือน เกี่ยวกับบัญชี ความปลอดภัย
              และการเปลี่ยนแปลงของบริการ รวมถึงข่าวสารและข้อเสนอของ Tatuga School
              เว้นแต่คุณขอไม่รับ
            </li>
            <li>
              <strong>เพื่อปฏิบัติตามกฎหมาย</strong> และบังคับใช้ข้อตกลงของเรา
            </li>
            <li>
              <strong>เพื่อการโอนกิจการ:</strong> หากเรามีการควบรวม ขาย
              หรือปรับโครงสร้างกิจการ
              ข้อมูลส่วนบุคคลอาจถูกโอนเป็นส่วนหนึ่งของการดำเนินการนั้น
              โดยเราจะแจ้งให้คุณทราบก่อนที่ข้อมูลจะอยู่ภายใต้นโยบายความเป็นส่วนตัวฉบับอื่น
            </li>
          </ul>
          <p>
            ฐานทางกฎหมายตาม PDPA ที่เราใช้ ได้แก่
            การปฏิบัติตามสัญญากับคุณหรือโรงเรียนของคุณ
            ประโยชน์โดยชอบด้วยกฎหมายในการดำเนินงาน รักษาความปลอดภัย
            และพัฒนาบริการ ซึ่งไม่ขัดกับสิทธิของคุณ การปฏิบัติตามกฎหมาย
            และความยินยอมของคุณในกรณีที่เราขอ เช่น การเชื่อมต่อ Google Drive,
            Google Docs และ Google Sheets
          </p>
        </>
      ),
    },
    {
      id: "ai",
      title: "ฟีเจอร์ AI และการฝึกโมเดล",
      body: (
        <>
          <p>
            Tatuga School มีฟีเจอร์ AI เช่น ผู้ช่วยให้คะแนนตามรูบริก
            การตอบคำถามของแชทบอท LINE การช่วยกรอกรายละเอียดสื่อการสอน
            และการแนะนำเส้นทางอาชีพ
          </p>
          <h3>เมื่อคุณใช้ฟีเจอร์ AI</h3>
          <p>
            เราจะส่งเนื้อหาที่จำเป็นสำหรับคำขอนั้น เช่น งานที่มอบหมาย รูบริก
            งานที่นักเรียนส่ง หรือคำถามที่ถามใน LINE ไปยังผู้ให้บริการ AI ของเรา
            (ปัจจุบันคือ Gemini API ของ Google) เพื่อสร้างผลลัพธ์
            ครูควรตรวจสอบคำแนะนำจาก AI ก่อนนำไปใช้
          </p>
          <h3>การฝึกและพัฒนาฟีเจอร์ AI ของเรา</h3>
          <p>
            เราอาจใช้ข้อมูลการใช้งานบริการและเนื้อหาที่สร้างในบริการ
            ซึ่งทำให้ไม่สามารถระบุตัวตนได้แล้ว เพื่อฝึก ทดสอบ และพัฒนาฟีเจอร์ AI
            ของเรา เช่น ทำให้คำแนะนำการให้คะแนนตามรูบริกแม่นยำขึ้น
            “ไม่สามารถระบุตัวตนได้” หมายถึงได้ลบชื่อ อีเมล เลขที่นักเรียน รูปภาพ
            และข้อมูลอื่นที่ระบุตัวบุคคลออกแล้ว
            และเราจะไม่พยายามระบุตัวบุคคลกลับคืน
          </p>
          <p>เราจะไม่ใช้ข้อมูลต่อไปนี้เพื่อการนี้</p>
          <ul>
            <li>
              ข้อมูลที่ได้รับจาก Google Drive, Google Docs, Google Sheets หรือ
              Google API อื่นๆ
            </li>
            <li>ข้อมูลส่วนบุคคลของนักเรียน เช่น ชื่อ เลขที่ หรือรูปภาพ</li>
          </ul>
          <h3>การขอไม่ให้ใช้ข้อมูล</h3>
          <p>
            คุณขอให้เราไม่นำข้อมูลของคุณไปใช้ฝึก AI ได้ทุกเมื่อ
            ผู้ดูแลโรงเรียนขอเช่นเดียวกันสำหรับข้อมูลของทั้งโรงเรียนได้
            โดยส่งอีเมลถึง {mail}{" "}
            แล้วเราจะหยุดใช้ข้อมูลนั้นในการฝึกครั้งต่อๆ ไป ทั้งนี้
            ข้อมูลที่ถูกใช้ฝึกโมเดลไปแล้วอาจไม่สามารถลบออกจากโมเดลนั้นได้เสมอไป
          </p>
        </>
      ),
    },
    {
      id: "marketing",
      title: "การตลาด",
      body: (
        <>
          <ul>
            <li>
              <strong>สถิติการใช้งาน</strong>{" "}
              เราอาจเผยแพร่ตัวเลขภาพรวมที่ไม่ระบุตัวตน เช่น จำนวนโรงเรียน ครู
              และนักเรียนที่ใช้ Tatuga School
            </li>
            <li>
              <strong>โรงเรียนที่ใช้แผนแบบชำระเงิน</strong> เราอาจแสดงชื่อ โลโก้
              และเมืองหรือจังหวัดของโรงเรียนที่ใช้แผนแบบชำระเงินบนเว็บไซต์ของเรา
              ผู้ดูแลโรงเรียนขอให้นำชื่อโรงเรียนออกได้ทุกเมื่อ
            </li>
            <li>
              <strong>คำรับรองและเรื่องราวจากผู้ใช้</strong> เราจะเผยแพร่ชื่อ
              รูปภาพ หรือคำพูดของบุคคลในคำรับรองหรือกรณีศึกษา
              เมื่อได้รับอนุญาตจากบุคคลนั้นเท่านั้น
            </li>
            <li>
              <strong>ข่าวสารจากเรา</strong> เราอาจส่งอีเมลแนะนำฟีเจอร์ใหม่
              เคล็ดลับ และข้อเสนอต่างๆ และคุณขอให้เราหยุดส่งได้ทุกเมื่อ
            </li>
          </ul>
          <p>
            เราไม่ขายข้อมูลส่วนบุคคล และไม่ใช้ข้อมูลผู้ใช้จาก Google
            หรือข้อมูลส่วนบุคคลของนักเรียนเพื่อการตลาดหรือการโฆษณา
          </p>
        </>
      ),
    },
    {
      id: "sharing",
      title: "การเปิดเผยข้อมูล",
      body: (
        <>
          <p>เราเปิดเผยข้อมูลส่วนบุคคลเฉพาะในกรณีต่อไปนี้</p>
          <ul>
            <li>
              <strong>ผู้ให้บริการ</strong>{" "}
              ที่ประมวลผลข้อมูลแทนเราเพื่อให้บริการบางส่วน ได้แก่ Google
              (การเข้าสู่ระบบ การประมวลผล AI และการเชื่อมต่อ Google Drive, Docs
              และ Sheets) Stripe (การชำระเงิน) Cloudflare
              (การจัดเก็บไฟล์และการป้องกันบอท) MongoDB Atlas (ฐานข้อมูล)
              DigitalOcean (เซิร์ฟเวอร์แอปพลิเคชัน) Netlify (โฮสต์เว็บไซต์)
              Sanity (เนื้อหาเว็บไซต์) LINE (ข้อความแชทบอท) Tawk.to (แชทสด)
              และผู้ให้บริการส่งอีเมลของเรา
            </li>
            <li>
              <strong>โรงเรียนของคุณ</strong>{" "}
              ผู้ดูแลและครูในโรงเรียนเดียวกันเห็นข้อมูลที่จำเป็นต่อการทำงานร่วมกัน
              เช่น สมาชิก ห้องเรียน และข้อมูลนักเรียน
            </li>
            <li>
              <strong>นักเรียนและครอบครัว</strong> นักเรียนเห็นงาน คะแนน
              และการเข้าเรียนของตนเอง หากครูแชร์ลิงก์ความคืบหน้า
              ผู้ที่มีลิงก์จะเห็นข้อมูลที่ลิงก์นั้นแสดง
            </li>
            <li>
              <strong>การโอนกิจการ</strong> เป็นส่วนหนึ่งของการควบรวม
              การเข้าซื้อกิจการ หรือการขายทรัพย์สิน โดยแจ้งให้คุณทราบ
            </li>
            <li>
              <strong>เหตุผลทางกฎหมาย</strong>{" "}
              เมื่อกฎหมายหรือหน่วยงานของรัฐร้องขออย่างถูกต้อง
              หรือเพื่อปกป้องสิทธิ ทรัพย์สิน หรือความปลอดภัยของ Tatuga School
              ผู้ใช้ หรือสาธารณะ
            </li>
            <li>
              <strong>เมื่อได้รับความยินยอมจากคุณ</strong> สำหรับวัตถุประสงค์อื่น
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "cookies",
      title: "คุกกี้",
      body: (
        <>
          <p>เราใช้คุกกี้และเทคโนโลยีที่คล้ายกันเท่าที่จำเป็น</p>
          <ul>
            <li>
              <strong>คุกกี้ที่จำเป็น</strong>{" "}
              ช่วยให้คุณเข้าสู่ระบบค้างไว้และปกป้องบัญชีของคุณ
              บริการไม่สามารถทำงานได้หากไม่มีคุกกี้ประเภทนี้
            </li>
            <li>
              <strong>คุกกี้การตั้งค่า</strong> จดจำตัวเลือกของคุณ เช่น ภาษา
            </li>
            <li>
              <strong>ฟีเจอร์จากบุคคลที่สาม</strong> วิดเจ็ตแชทสด (Tawk.to)
              ใช้คุกกี้เพื่อเก็บบทสนทนาของคุณ
              และวิดีโอแนะนำการใช้งานจะโหลดจาก YouTube เมื่อคุณกดเล่นเท่านั้น
            </li>
          </ul>
          <p>
            คุณบล็อกหรือลบคุกกี้ได้ในการตั้งค่าเบราว์เซอร์ แต่บางส่วนของบริการ
            เช่น การเข้าสู่ระบบ อาจใช้งานไม่ได้
          </p>
        </>
      ),
    },
    {
      id: "retention",
      title: "ระยะเวลาการเก็บข้อมูล",
      body: (
        <p>
          เราเก็บข้อมูลส่วนบุคคลไว้ตราบที่บัญชีของคุณหรือของโรงเรียนยังใช้งานอยู่
          และเท่าที่จำเป็นตามวัตถุประสงค์ในนโยบายนี้ เมื่อบัญชีหรือโรงเรียนถูกลบ
          เราจะลบหรือทำให้ข้อมูลส่วนบุคคลไม่สามารถระบุตัวตนได้ภายในระยะเวลาที่เหมาะสม
          เว้นแต่ต้องเก็บไว้นานกว่านั้นเพื่อปฏิบัติตามกฎหมาย ภาษี หรือบัญชี
          เพื่อระงับข้อพิพาท หรือเพื่อบังคับใช้ข้อตกลงของเรา
          ข้อมูลการใช้งานโดยทั่วไปจะถูกเก็บไว้ในระยะเวลาที่สั้นกว่า
          เว้นแต่จำเป็นต่อความปลอดภัยหรือการพัฒนาบริการ
        </p>
      ),
    },
    {
      id: "transfers",
      title: "การโอนข้อมูลไปต่างประเทศ",
      body: (
        <p>
          ผู้ให้บริการบางรายของเราจัดเก็บหรือประมวลผลข้อมูลบนเซิร์ฟเวอร์นอกประเทศไทย
          ในกรณีนี้ เราจะดำเนินการตามที่ PDPA
          กำหนดเพื่อให้ข้อมูลของคุณได้รับการคุ้มครอง เช่น
          เลือกใช้เฉพาะผู้ให้บริการที่มีมาตรการคุ้มครองข้อมูลที่เหมาะสม
        </p>
      ),
    },
    {
      id: "security",
      title: "ความปลอดภัยของข้อมูล",
      body: (
        <p>
          เราปกป้องข้อมูลด้วยมาตรการต่างๆ เช่น การเชื่อมต่อแบบเข้ารหัส (HTTPS)
          การเก็บรหัสผ่านแบบแฮช และการควบคุมสิทธิ์การเข้าถึง อย่างไรก็ตาม
          ไม่มีวิธีส่งหรือจัดเก็บข้อมูลใดที่ปลอดภัยได้ทั้งหมด
          เราจึงไม่สามารถรับประกันความปลอดภัยได้อย่างสมบูรณ์
          หากเกิดเหตุละเมิดที่กระทบต่อข้อมูลส่วนบุคคลของคุณ
          เราจะแจ้งคุณและหน่วยงานที่เกี่ยวข้องตามที่กฎหมายกำหนด
        </p>
      ),
    },
    {
      id: "your-rights",
      title: "สิทธิของคุณ",
      body: (
        <>
          <p>ตาม PDPA คุณมีสิทธิ</p>
          <ul>
            <li>ได้รับแจ้งว่าข้อมูลส่วนบุคคลของคุณถูกนำไปใช้อย่างไร</li>
            <li>เข้าถึงและขอรับสำเนาข้อมูลส่วนบุคคลของคุณ</li>
            <li>
              ขอรับข้อมูลในรูปแบบอิเล็กทรอนิกส์ที่ใช้กันทั่วไป
              หรือขอให้ส่งต่อไปยังบริการอื่น
            </li>
            <li>ขอแก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่ครบถ้วน</li>
            <li>ขอให้ลบ หรือทำให้ข้อมูลไม่สามารถระบุตัวตนได้</li>
            <li>ขอให้ระงับการใช้ข้อมูล</li>
            <li>คัดค้านการใช้ข้อมูล รวมถึงเพื่อการตลาดและการฝึก AI</li>
            <li>
              ถอนความยินยอมที่เคยให้ไว้ เช่น การเชื่อมต่อกับ Google
              โดยไม่กระทบสิ่งที่ได้ทำไปก่อนหน้า
            </li>
            <li>
              ร้องเรียนต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.)
            </li>
          </ul>
          <p>
            คุณแก้ไขข้อมูลบัญชีส่วนใหญ่ได้เองในแอป สำหรับคำขออื่นๆ
            ส่งอีเมลถึง {mail} เราอาจต้องยืนยันตัวตนของคุณ
            และจะตอบกลับภายใน 30 วัน สำหรับข้อมูลนักเรียน
            เราอาจประสานกับโรงเรียนซึ่งเป็นผู้ดูแลข้อมูลนั้น
          </p>
        </>
      ),
    },
    {
      id: "students",
      title: "เด็กและนักเรียน",
      body: (
        <>
          <p>
            โรงเรียนใช้ Tatuga School เพื่อการเรียนการสอน
            นักเรียนจำนวนมากมีอายุต่ำกว่า 20 ปี
            ซึ่งถือเป็นผู้เยาว์ตามกฎหมายไทย
            ข้อมูลนักเรียนถูกบันทึกและดูแลโดยโรงเรียนและครู
            และเราประมวลผลข้อมูลนั้นแทนโรงเรียนเพื่อให้บริการ
            โรงเรียนมีหน้าที่แจ้งนักเรียนและผู้ปกครองให้ทราบถึงการใช้ข้อมูลนักเรียน
            และขอความยินยอมในกรณีที่กฎหมายกำหนด
          </p>
          <p>
            เราไม่ขายข้อมูลนักเรียน ไม่ใช้เพื่อการโฆษณา
            และไม่ใช้ข้อมูลส่วนบุคคลของนักเรียนในการฝึกโมเดล AI
            ผู้ปกครองที่มีคำถาม หรือต้องการแก้ไขหรือลบข้อมูลของนักเรียน
            ติดต่อโรงเรียนของนักเรียนหรือส่งอีเมลถึงเราได้
          </p>
        </>
      ),
    },
    {
      id: "other-sites",
      title: "ลิงก์ไปยังเว็บไซต์อื่น",
      body: (
        <p>
          บริการของเราอาจมีลิงก์ไปยังเว็บไซต์ที่เราไม่ได้ดำเนินการ
          เมื่อคุณคลิกลิงก์ของบุคคลที่สาม คุณจะถูกนำไปยังเว็บไซต์นั้น
          และเราแนะนำให้อ่านนโยบายความเป็นส่วนตัวของเว็บไซต์นั้น
          เราไม่มีอำนาจควบคุมและไม่รับผิดชอบต่อเนื้อหา นโยบายความเป็นส่วนตัว
          หรือแนวปฏิบัติของเว็บไซต์หรือบริการของบุคคลที่สาม
        </p>
      ),
    },
    {
      id: "changes",
      title: "การเปลี่ยนแปลงนโยบายนี้",
      body: (
        <p>
          เราอาจปรับปรุงนโยบายนี้เมื่อบริการมีการเปลี่ยนแปลง
          โดยจะเผยแพร่ฉบับใหม่บนหน้านี้และปรับวันที่ด้านบน
          หากเป็นการเปลี่ยนแปลงสำคัญ
          เราจะแจ้งให้คุณทราบทางอีเมลหรือประกาศในบริการก่อนมีผลบังคับใช้
        </p>
      ),
    },
    {
      id: "contact",
      title: "ติดต่อเรา",
      body: (
        <p>
          หากมีคำถามเกี่ยวกับนโยบายนี้หรือข้อมูลของคุณ ส่งอีเมลถึง {mail}{" "}
          หรือส่งจดหมายถึง ห้างหุ้นส่วนจำกัด ทาทูก้าแคมป์ เลขที่ 879 หมู่ที่ 3
          ตำบลโพธิ์กลาง อำเภอเมืองนครราชสีมา จังหวัดนครราชสีมา
        </p>
      ),
    },
  ],
};

export const privacyPolicy: Record<Language, PolicyDocument> = { en, th };
