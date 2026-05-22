import { Language } from "../../interfaces";

export const updatesLanguageData = {
  pageTitle: (language: Language) => {
    switch (language) {
      case "en":
        return "What's New";
      case "th":
        return "อัปเดตล่าสุด";
      default:
        return "What's New";
    }
  },
  pageSubtitle: (language: Language) => {
    switch (language) {
      case "en":
        return "Latest features, fixes, and news from Tatuga School";
      case "th":
        return "ฟีเจอร์ใหม่ การแก้ไข และข่าวสารจาก Tatuga School";
      default:
        return "Latest features, fixes, and news from Tatuga School";
    }
  },
  filterAll: (language: Language) => {
    switch (language) {
      case "en":
        return "All";
      case "th":
        return "ทั้งหมด";
      default:
        return "All";
    }
  },
  filterFeature: (language: Language) => {
    switch (language) {
      case "en":
        return "Feature";
      case "th":
        return "ฟีเจอร์";
      default:
        return "Feature";
    }
  },
  filterFix: (language: Language) => {
    switch (language) {
      case "en":
        return "Fix";
      case "th":
        return "การแก้ไข";
      default:
        return "Fix";
    }
  },
  filterNews: (language: Language) => {
    switch (language) {
      case "en":
        return "News";
      case "th":
        return "ข่าวสาร";
      default:
        return "News";
    }
  },
  filterAnnouncement: (language: Language) => {
    switch (language) {
      case "en":
        return "Announcement";
      case "th":
        return "ประกาศ";
      default:
        return "Announcement";
    }
  },
  empty: (language: Language) => {
    switch (language) {
      case "en":
        return "No updates yet. Check back soon!";
      case "th":
        return "ยังไม่มีอัปเดต กลับมาดูใหม่เร็ว ๆ นี้!";
      default:
        return "No updates yet. Check back soon!";
    }
  },
  emptyFiltered: (language: Language) => {
    switch (language) {
      case "en":
        return "No updates match this filter.";
      case "th":
        return "ไม่มีอัปเดตที่ตรงกับตัวกรองนี้";
      default:
        return "No updates match this filter.";
    }
  },
  readMore: (language: Language) => {
    switch (language) {
      case "en":
        return "Read more →";
      case "th":
        return "อ่านเพิ่มเติม →";
      default:
        return "Read more →";
    }
  },
  backToNews: (language: Language) => {
    switch (language) {
      case "en":
        return "← Back to all updates";
      case "th":
        return "← กลับไปหน้าอัปเดตทั้งหมด";
      default:
        return "← Back to all updates";
    }
  },
} as const;
