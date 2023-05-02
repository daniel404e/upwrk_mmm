import languageJson from "../../data/languages.json";
import skillJson from "../../data/skills.json";

export const REFINEMENT_ATTRIBUTES = {
  language: "documentdata.profiledata.profilelanguage.content",
  gender: "documentdata.personalinfo.gender",
  social: "documentdata.profiledata.verified_socials",
  verification: "documentdata.profiledata.verified",
  category: "documentdata.profiledata.profileskills.name",
};

export const SOCIAL_MEDIA_LIST = [
  "facebook",
  "twitter",
  "linkedin",
  "instagram",
  "youtube",
];

export const STATIC_LANGUAGES = languageJson;
export const STATIC_CATEGORIES = skillJson.lines;

// Number Constants
export const HITS_PER_PAGE = 20;