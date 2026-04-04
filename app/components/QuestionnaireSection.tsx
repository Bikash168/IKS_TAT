"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────────────── */
type Lang = "en" | "od";
type Category = "caretaker" | "audience";
type QuestionType = "choice" | "likert" | "text" | "multi";

interface Question {
  en: string;
  od: string;
  type: QuestionType;
  optionsEn?: string[];
  optionsOd?: string[];
}

interface Section {
  titleEn: string;
  titleOd: string;
  questions: Question[];
}

/* ─────────────────────────────────────────────────────────────────────────
   DATA — CARETAKER (Mahanta)
───────────────────────────────────────────────────────────────────────── */
const caretakerSections: Section[] = [
  {
    titleEn: "Section A: Basic Information",
    titleOd: "ଅନୁଛେଦ–A: ମୌଳିକ ସୂଚନା",
    questions: [
      {
        en: "1. Name of the Tungi:",
        od: "1. ଟୁଙ୍ଗିର ନାମ:",
        type: "text",
      },
      {
        en: "2. Village / Gram Panchayat:",
        od: "2. ଗାଁ / ଗ୍ରାମ ପଞ୍ଚାୟତ:",
        type: "text",
      },
      {
        en: "3. Year of Establishment of the Tungi:",
        od: "3. ଟୁଙ୍ଗି ପ୍ରତିଷ୍ଠା ବର୍ଷ:",
        type: "choice",
        optionsEn: ["Before 1950", "1950–1975", "1976–2000", "After 2000", "Not sure"],
        optionsOd: ["୧୯୫୦ ପୂର୍ବରୁ", "୧୯୫୦–୧୯୭୫", "୧୯୭୬–୨୦୦୦", "୨୦୦୦ ପରେ", "ନିଶ୍ଚିତ ନୁହେଁ"],
      },
      {
        en: "4. Your Role in the Tungi:",
        od: "4. ଟୁଙ୍ଗି ସହିତ ଆପଣଙ୍କର ଭୂମିକା:",
        type: "choice",
        optionsEn: ["Caretaker", "Owner", "Priest / Reader", "Committee Member", "Other"],
        optionsOd: ["ସେବକ / ଦେଖାଶୁଣାକାରୀ", "ମାଲିକ", "ପୁଜାରୀ / ପାଠକ", "କମିଟି ସଦସ୍ୟ", "ଅନ୍ୟ"],
      },
      {
        en: "5. How long have you been associated with this Tungi?",
        od: "5. କେତେ ସମୟ ଧରି ଆପଣ ଏହି ଟୁଙ୍ଗି ସହିତ ଜଡ଼ିତ?",
        type: "choice",
        optionsEn: ["Less than 5 years", "5–10 years", "11–20 years", "More than 20 years"],
        optionsOd: ["୫ ବର୍ଷରୁ କମ୍", "୫–୧୦ ବର୍ଷ", "୧୧–୨୦ ବର୍ଷ", "୨୦ ବର୍ଷରୁ ଅଧିକ"],
      },
    ],
  },
  {
    titleEn: "Section B: Operations and Practices",
    titleOd: "ଅନୁଛେଦ–B: କାର୍ଯ୍ୟପ୍ରଣାଳୀ ଓ ପ୍ରଚଳନ",
    questions: [
      {
        en: "6. How often are Bhagabata readings conducted in this Tungi?",
        od: "6. ଏଠି କେତେବେଳେ ଭାଗବତ ପାଠ ହୁଏ?",
        type: "choice",
        optionsEn: ["Daily", "Weekly", "Monthly", "Occasionally", "Rarely"],
        optionsOd: ["ପ୍ରତିଦିନ", "ପ୍ରତି ସପ୍ତାହ", "ପ୍ରତି ମାସ", "କେବେ କେବେ", "ବହୁତ କମ୍"],
      },
      {
        en: "7. Who usually leads the Bhagabata readings?",
        od: "7. ଭାଗବତ ପାଠ ସାଧାରଣତଃ କିଏ କରନ୍ତି?",
        type: "choice",
        optionsEn: ["Elderly community member", "Trained religious scholar", "Rotational village members", "External resource person"],
        optionsOd: ["ଗାଁର ବୃଦ୍ଧ ଲୋକ", "ପଢ଼ାଲେଖା ଧାର୍ମିକ ବ୍ୟକ୍ତି", "ପାଳିକ୍ରମେ ଗାଁ ଲୋକ", "ବାହାର ଲୋକ"],
      },
      {
        en: "8. Is there a fixed schedule for Tungi activities?",
        od: "8. ଟୁଙ୍ଗି କାମ ପାଇଁ ନିଶ୍ଚିତ ଦିନ ଓ ସମୟ ଅଛି କି?",
        type: "choice",
        optionsEn: ["Yes", "No", "Varies by occasion"],
        optionsOd: ["ହଁ", "ନା", "ଅବସର ଅନୁସାରେ"],
      },
      {
        en: "9. Average number of participants per session:",
        od: "9. ପ୍ରତ୍ୟେକ ପାଠରେ ସାଧାରଣତଃ କେତେ ଲୋକ ଆସନ୍ତି?",
        type: "choice",
        optionsEn: ["Less than 10", "10–20", "21–50", "More than 50"],
        optionsOd: ["୧୦ ଜଣରୁ କମ୍", "୧୦–୨୦ ଜଣ", "୨୧–୫୦ ଜଣ", "୫୦ ଜଣରୁ ଅଧିକ"],
      },
      {
        en: "10. Which groups regularly participate? (Tick all that apply)",
        od: "10. ନିୟମିତ ଭାବେ କେଉଁ ଗୋଷ୍ଠୀ ଅଂଶଗ୍ରହଣ କରନ୍ତି? (ସମସ୍ତ ଲାଗୁଥିବା ✔️ ଦିଅନ୍ତୁ)",
        type: "multi",
        optionsEn: ["Children", "Youth", "Adults", "Elderly"],
        optionsOd: ["ଶିଶୁ", "ଯୁବକ / ଯୁବତୀ", "ପ୍ରୌଢ଼", "ବୃଦ୍ଧ"],
      },
    ],
  },
  {
    titleEn: "Section C: Inclusiveness and Participation",
    titleOd: "ଅନୁଛେଦ–C: ସମାବେଶ ଓ ଅଂଶଗ୍ରହଣ",
    questions: [
      {
        en: "11. Do people from all caste groups participate in this Tungi?",
        od: "11. ସମସ୍ତ ଜାତିର ଲୋକ ଟୁଙ୍ଗିକୁ ଆସନ୍ତି କି?",
        type: "choice",
        optionsEn: ["Yes", "No", "With some social restrictions"],
        optionsOd: ["ହଁ", "ନା", "କିଛି ନିୟମ ଥାଏ"],
      },
      {
        en: "12. Are women allowed and encouraged to participate?",
        od: "12. ମହିଳାମାନେ ଟୁଙ୍ଗିକୁ ଆସିପାରନ୍ତି କି?",
        type: "choice",
        optionsEn: ["Yes, actively encouraged", "Allowed but limited", "Rare participation", "Not allowed"],
        optionsOd: ["ହଁ, ଭଲଭାବେ ଉତ୍ସାହ ଦିଆଯାଏ", "ଆସନ୍ତି, କିନ୍ତୁ କମ୍", "ବହୁତ କମ୍ ଆସନ୍ତି", "ଆସିବାକୁ ମନା"],
      },
      {
        en: "13. Are youth involved in managing or organizing Tungi activities?",
        od: "13. ଯୁବମାନେ ଟୁଙ୍ଗି କାମରେ ସାହାଯ୍ୟ କରନ୍ତି କି?",
        type: "choice",
        optionsEn: ["Yes", "No", "Occasionally"],
        optionsOd: ["ହଁ", "ନା", "କେବେ କେବେ"],
      },
      {
        en: "14. Are non-Hindus allowed to attend or observe Tungi activities?",
        od: "14. ଅନ୍ୟ ଧର୍ମର ଲୋକ ଟୁଙ୍ଗିକୁ ଆସିପାରନ୍ତି କି?",
        type: "choice",
        optionsEn: ["Yes", "No", "Depends on occasion"],
        optionsOd: ["ହଁ", "ନା", "ଅବସର ଅନୁସାରେ"],
      },
    ],
  },
  {
    titleEn: "Section D: Social and Educational Role",
    titleOd: "ଅନୁଛେଦ–D: ସାମାଜିକ ଓ ଶିକ୍ଷାମୂଳକ ଭୂମିକା",
    questions: [
      {
        en: "15. Does the Tungi promote moral and ethical values in the community?",
        od: "15. ଟୁଙ୍ଗି ଗାଁରେ ଭଲ ଚାଲଚଳନ ଓ ନୀତିଶିକ୍ଷା ଦେଉଛି କି?",
        type: "choice",
        optionsEn: ["Yes", "No", "To some extent"],
        optionsOd: ["ହଁ", "ନା", "କିଛି ମାତ୍ରାରେ"],
      },
      {
        en: "16. Are current social issues discussed during readings or gatherings?",
        od: "16. ଭାଗବତ ପାଠ ସମୟରେ ଆଜିର ସମସ୍ୟା ବିଷୟରେ କଥା ହୁଏ କି?",
        type: "choice",
        optionsEn: ["Regularly", "Sometimes", "Rarely", "Never"],
        optionsOd: ["ନିୟମିତ", "କେବେ କେବେ", "ବହୁତ କମ୍", "କେବେ ନୁହେଁ"],
      },
      {
        en: "17. Has the Tungi helped in resolving community disputes?",
        od: "17. ଗାଁର ଝଗଡ଼ା–ବିବାଦ ସମାଧାନରେ ଟୁଙ୍ଗି ସାହାଯ୍ୟ କରିଛି କି?",
        type: "choice",
        optionsEn: ["Yes", "No", "Not applicable"],
        optionsOd: ["ହଁ", "ନା", "ଲାଗୁ ହୁଏ ନାହିଁ"],
      },
    ],
  },
  {
    titleEn: "Section E: Festivals and Events",
    titleOd: "ଅନୁଛେଦ–E: ପର୍ବପର୍ବାଣି ଓ କାର୍ଯ୍ୟକ୍ରମ",
    questions: [
      {
        en: "18. Which festivals are celebrated in the Tungi? (Tick all that apply)",
        od: "18. ଟୁଙ୍ଗିରେ କେଉଁ କେଉଁ ପର୍ବ ପାଳିତ ହୁଏ? (ସମସ୍ତ ✔️ ଦିଅନ୍ତୁ)",
        type: "multi",
        optionsEn: ["Janmastami", "Indu Purnima", "Kartika Purnima", "Other"],
        optionsOd: ["ଜନ୍ମାଷ୍ଟମୀ", "ଇନ୍ଦୁ ପୂର୍ଣ୍ଣିମା", "କାର୍ତ୍ତିକ ପୂର୍ଣ୍ଣିମା", "ଅନ୍ୟ"],
      },
      {
        en: "19. Are cultural programs organized during festivals?",
        od: "19. ପର୍ବ ସମୟରେ ନାଟକ, ଭଜନ, ସଂସ୍କୃତି କାର୍ଯ୍ୟକ୍ରମ ହୁଏ କି?",
        type: "choice",
        optionsEn: ["Yes", "No"],
        optionsOd: ["ହଁ", "ନା"],
      },
      {
        en: "20. Do people from nearby villages attend these events?",
        od: "20. ଆଖପାଖ ଗାଁର ଲୋକ ଆସନ୍ତି କି?",
        type: "choice",
        optionsEn: ["Yes", "No", "Occasionally"],
        optionsOd: ["ହଁ", "ନା", "କେବେ କେବେ"],
      },
      {
        en: "21. Is financial support collected from the community for Tungi activities?",
        od: "21. ଟୁଙ୍ଗି କାମ ପାଇଁ ଗାଁ ଲୋକ ଟଙ୍କା ଦିଅନ୍ତି କି?",
        type: "choice",
        optionsEn: ["Yes", "No"],
        optionsOd: ["ହଁ", "ନା"],
      },
    ],
  },
  {
    titleEn: "Section F: Infrastructure and Challenges",
    titleOd: "ଅନୁଛେଦ–F: ଟୁଙ୍ଗିର ଅବସ୍ଥା ଓ ସମସ୍ୟା",
    questions: [
      {
        en: "22. Present condition of the Tungi building:",
        od: "22. ଟୁଙ୍ଗି ଘରର ଅବସ୍ଥା କେମିତି?",
        type: "choice",
        optionsEn: ["Very good", "Good", "Average", "Poor", "Very poor"],
        optionsOd: ["ବହୁତ ଭଲ", "ଭଲ", "ମଧ୍ୟମ", "ଖରାପ", "ବହୁତ ଖରାପ"],
      },
      {
        en: "23. Does the Tungi require renovation or repair?",
        od: "23. ଟୁଙ୍ଗି ମରାମତି ଦରକାର କି?",
        type: "choice",
        optionsEn: ["Yes (urgent)", "Yes (minor)", "No"],
        optionsOd: ["ହଁ, ତୁରନ୍ତ", "ହଁ, ସାଧାରଣ", "ନା"],
      },
      {
        en: "24. What are the major challenges faced by this Tungi?",
        od: "24. ଟୁଙ୍ଗିର ପ୍ରମୁଖ ସମସ୍ୟା କଣ?",
        type: "multi",
        optionsEn: ["Declining participation", "Lack of funds", "Lack of leadership", "Modern lifestyle influence", "Other"],
        optionsOd: ["ଲୋକ କମ୍ ଆସୁଛନ୍ତି", "ଟଙ୍କା ଅଭାବ", "ନେତୃତ୍ୱ ନାହିଁ", "ଆଧୁନିକ ଜୀବନର ପ୍ରଭାବ", "ଅନ୍ୟ"],
      },
    ],
  },
  {
    titleEn: "Section G: Future Prospects",
    titleOd: "ଅନୁଛେଦ–G: ଭବିଷ୍ୟତ ସମ୍ଭାବନା",
    questions: [
      {
        en: "25. Has participation in Tungi activities declined in recent years?",
        od: "25. ସମ୍ପ୍ରତି ବର୍ଷଗୁଡ଼ିକରେ ଟୁଙ୍ଗି କାର୍ଯ୍ୟରେ ଅଂଶଗ୍ରହଣ କମିଛି କି?",
        type: "choice",
        optionsEn: ["Yes", "No", "Remained the same"],
        optionsOd: ["ହଁ", "ନା", "ପୂର୍ବବତ୍ ରହିଛି"],
      },
      {
        en: "26. Would you support revival programs for Bhagabata Tungis?",
        od: "26. ଭାଗବତ ଟୁଙ୍ଗି ପୁନରୁତ୍ଥାନ କାର୍ଯ୍ୟକ୍ରମକୁ ଆପଣ ସମର୍ଥନ କରିବେ କି?",
        type: "choice",
        optionsEn: ["Yes", "No", "Maybe"],
        optionsOd: ["ହଁ", "ନା", "ସମ୍ଭବତଃ"],
      },
      {
        en: "27. Should Tungi traditions be integrated into school or community education?",
        od: "27. ଟୁଙ୍ଗିର ପରମ୍ପରାକୁ ସ୍କୁଲ୍ ଶିକ୍ଷା ସହିତ ଯୋଡ଼ାଯିବା ଉଚିତ କି?",
        type: "choice",
        optionsEn: ["Yes", "No"],
        optionsOd: ["ହଁ", "ନା"],
      },
      {
        en: "28. What support do you expect from government or institutions?",
        od: "28. ସରକାର କିମ୍ବା ସଂସ୍ଥାଠାରୁ କେଉଁ ସହଯୋଗ ଚାହୁଁଛନ୍ତି?",
        type: "multi",
        optionsEn: ["Financial assistance", "Infrastructure development", "Training of youth", "Documentation and research", "Other"],
        optionsOd: ["ଟଙ୍କା ସହାୟତା", "ଘର / ଢାଞ୍ଚା ଉନ୍ନତି", "ଯୁବମାନଙ୍କ ପ୍ରଶିକ୍ଷଣ", "ଲେଖାରେ ରଖିବା ଓ ଗବେଷଣା", "ଅନ୍ୟ"],
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   DATA — AUDIENCE (Participants / Community members)
───────────────────────────────────────────────────────────────────────── */
const audienceSections: Section[] = [
  {
    titleEn: "Section A: General Profile of Respondent",
    titleOd: "ଅଂଶ–A: ଉତ୍ତରଦାତାଙ୍କ ସାଧାରଣ ପରିଚୟ",
    questions: [
      {
        en: "1. What is your age group?",
        od: "1. ଆପଣଙ୍କ ବୟସ କେତେ?",
        type: "choice",
        optionsEn: ["Below 18 years", "18–30 years", "31–45 years", "46–60 years", "Above 60 years"],
        optionsOd: ["୧୮ ବର୍ଷରୁ କମ୍", "୧୮–୩୦ ବର୍ଷ", "୩୧–୪୫ ବର୍ଷ", "୪୬–୬୦ ବର୍ଷ", "୬୦ ବର୍ଷରୁ ଅଧିକ"],
      },
      {
        en: "2. Please specify your gender:",
        od: "2. ଆପଣଙ୍କ ଲିଙ୍ଗ କ'ଣ?",
        type: "choice",
        optionsEn: ["Male", "Female", "Other / Prefer not to say"],
        optionsOd: ["ପୁରୁଷ", "ନାରୀ", "ଅନ୍ୟ / କହିବାକୁ ଇଚ୍ଛା ନାହିଁ"],
      },
      {
        en: "3. What is your highest level of education?",
        od: "3. ଆପଣ କେତେ ପର୍ଯ୍ୟନ୍ତ ପଢ଼ିଛନ୍ତି?",
        type: "choice",
        optionsEn: ["No formal education", "Primary education", "Secondary education", "Higher secondary", "Graduate and above"],
        optionsOd: ["ପଢ଼ାଲେଖା ନାହିଁ", "ପ୍ରାଥମିକ", "ମାଧ୍ୟମିକ", "ଉଚ୍ଚ ମାଧ୍ୟମିକ", "ସ୍ନାତକ କିମ୍ବା ଅଧିକ"],
      },
      {
        en: "4. What is your primary occupation?",
        od: "4. ଆପଣଙ୍କ ମୁଖ୍ୟ କାମ କ'ଣ?",
        type: "choice",
        optionsEn: ["Student", "Farmer", "Self-employed", "Salaried employee", "Homemaker", "Retired", "Others"],
        optionsOd: ["ଛାତ୍ର / ଛାତ୍ରୀ", "ଚାଷୀ", "ନିଜ କାମ (ବ୍ୟବସାୟ)", "ଚାକିରି", "ଘରକାମ", "ଅବସରପ୍ରାପ୍ତ", "ଅନ୍ୟ"],
      },
      {
        en: "5. Which social category do you belong to?",
        od: "5. ଆପଣ କେଉଁ ସାମାଜିକ ବର୍ଗର?",
        type: "choice",
        optionsEn: ["General", "OBC", "SC", "ST", "Prefer not to disclose"],
        optionsOd: ["ସାଧାରଣ", "ଓବିସି", "ଏସ୍‌ସି", "ଏସ୍‌ଟି", "କହିବାକୁ ଇଚ୍ଛା ନାହିଁ"],
      },
      {
        en: "6. How long have you been associated with the Tungi?",
        od: "6. କେତେ ବର୍ଷ ହେଲା ଆପଣ ଟୁଙ୍ଗି ସହିତ ଜଡ଼ିତ?",
        type: "choice",
        optionsEn: ["Less than 1 year", "1–5 years", "6–10 years", "11–20 years", "More than 20 years"],
        optionsOd: ["୧ ବର୍ଷରୁ କମ୍", "୧–୫ ବର୍ଷ", "୬–୧୦ ବର୍ଷ", "୧୧–୨୦ ବର୍ଷ", "୨୦ ବର୍ଷରୁ ଅଧିକ"],
      },
      {
        en: "7. Where do you currently reside?",
        od: "7. ଆପଣ ଏବେ କେଉଁଠି ରହୁଛନ୍ତି?",
        type: "choice",
        optionsEn: ["Same village as the Tungi", "Nearby village", "Same block", "Same district", "Other district"],
        optionsOd: ["ଟୁଙ୍ଗି ଥିବା ସେହି ଗାଁ", "ନିକଟସ୍ଥ ଗାଁ", "ସେହି ବ୍ଲକ", "ସେହି ଜିଲ୍ଲା", "ଅନ୍ୟ ଜିଲ୍ଲା"],
      },
      {
        en: "8. How often do you visit the Tungi?",
        od: "8. ଆପଣ କେତେବେଳେ ଟୁଙ୍ଗିକୁ ଯାଆନ୍ତି?",
        type: "choice",
        optionsEn: ["Never", "Rarely", "Occasionally", "Frequently", "Very frequently"],
        optionsOd: ["କେବେ ନୁହେଁ", "ବହୁତ କମ୍", "କେବେ କେବେ", "ପ୍ରାୟ", "ବହୁତ ଥର"],
      },
    ],
  },
  {
    titleEn: "Section B: Participation and Practices at Tungi",
    titleOd: "ଅଂଶ–B: ଟୁଙ୍ଗିରେ ଅଂଶଗ୍ରହଣ ଓ ପ୍ରଚଳନ",
    questions: [
      {
        en: "9. How frequently are Bhagabata readings or discussions held in the Tungi?",
        od: "9. ଟୁଙ୍ଗିରେ ଭାଗବତ ପାଠ କେତେବେଳେ ହୁଏ?",
        type: "choice",
        optionsEn: ["Never", "Rarely", "Occasionally", "Frequently", "Very frequently"],
        optionsOd: ["କେବେ ନୁହେଁ", "ବହୁତ କମ୍", "କେବେ କେବେ", "ପ୍ରାୟ", "ବହୁତ ଥର"],
      },
      {
        en: "10. Bhagabata recitations in the Tungi are led by knowledgeable and accepted leaders.",
        od: "10. ଟୁଙ୍ଗିରେ ଭାଗବତ ପାଠ ଜଣାଶୁଣା ଓ ମାନ୍ୟତାପ୍ରାପ୍ତ ଲୋକେ କରନ୍ତି।",
        type: "likert",
      },
      {
        en: "11. The number of participants in each Tungi session is generally adequate.",
        od: "11. ପ୍ରତ୍ୟେକ ଟୁଙ୍ଗି ସଭାରେ ଲୋକ ସଂଖ୍ୟା ଠିକ୍ ଥାଏ।",
        type: "likert",
      },
      {
        en: "12. People from different age groups regularly participate in Tungi activities.",
        od: "12. ସବୁ ବୟସର ଲୋକ ଟୁଙ୍ଗି କାମରେ ଯୋଗ ଦେନ୍ତି।",
        type: "likert",
      },
      {
        en: "13. People from all caste groups participate equally in Tungi activities.",
        od: "13. ସମସ୍ତ ଜାତିର ଲୋକ ସମାନ ଭାବେ ଟୁଙ୍ଗିରେ ଯୋଗ ଦେନ୍ତି।",
        type: "likert",
      },
      {
        en: "14. Women's participation is encouraged in Tungi activities.",
        od: "14. ଟୁଙ୍ଗି କାମରେ ମହିଳାମାନଙ୍କୁ ଉତ୍ସାହ ଦିଆଯାଏ।",
        type: "likert",
      },
      {
        en: "15. Youth are actively involved in Tungi operations and decision-making.",
        od: "15. ଟୁଙ୍ଗି ଚାଲାଚଳ ଓ ନିଷ୍ପତ୍ତିରେ ଯୁବମାନେ ସକ୍ରିୟ।",
        type: "likert",
      },
      {
        en: "16. Tungi activities are open to people from other religious or social backgrounds.",
        od: "16. ଅନ୍ୟ ଧର୍ମ କିମ୍ବା ସମାଜର ଲୋକ ମଧ୍ୟ ଟୁଙ୍ଗିକୁ ଆସିପାରନ୍ତି।",
        type: "likert",
      },
      {
        en: "17. Tungi activities are held regularly at fixed times.",
        od: "17. ଟୁଙ୍ଗି କାମକାଜ ନିୟମିତ ଓ ନିଶ୍ଚିତ ସମୟରେ ହୁଏ।",
        type: "likert",
      },
      {
        en: "18. Special training is required for Bhagabata recitation.",
        od: "18. ଭାଗବତ ପାଠ କରିବାକୁ ବିଶେଷ ପ୍ରଶିକ୍ଷଣ ଦରକାର।",
        type: "likert",
      },
    ],
  },
  {
    titleEn: "Section C: Education and Social Impact",
    titleOd: "ଅଂଶ–C: ଶିକ୍ଷା ଓ ସାମାଜିକ ପ୍ରଭାବ",
    questions: [
      {
        en: "19. The Tungi teaches good conduct and ethics in the village.",
        od: "19. ଟୁଙ୍ଗି ଗାଁରେ ଭଲ ଆଚରଣ ଓ ନୀତି ଶିଖାଏ।",
        type: "likert",
      },
      {
        en: "20. Contemporary social issues are discussed at the Tungi.",
        od: "20. ଟୁଙ୍ଗିରେ ଆଜିର ସାମାଜିକ ସମସ୍ୟା ବିଷୟରେ ଆଲୋଚନା ହୁଏ।",
        type: "likert",
      },
      {
        en: "21. Tungi sessions have improved understanding among village families.",
        od: "21. ଟୁଙ୍ଗି ସଭା ଦ୍ୱାରା ଗାଁର ପରିବାରମାନଙ୍କ ମଧ୍ୟରେ ବୁଝାପଡ଼ା ବଢ଼ିଛି।",
        type: "likert",
      },
      {
        en: "22. Participation in Tungi improves communication and harmony within families.",
        od: "22. ଟୁଙ୍ଗି କାର୍ଯ୍ୟରେ ଯୋଗଦେଲେ ପରିବାରରେ କଥାବାର୍ତ୍ତା ଓ ସମ୍ମିଳନ ଭଲ ହୁଏ।",
        type: "likert",
      },
      {
        en: "23. Tungi sessions increase respect and communication among different castes.",
        od: "23. ଟୁଙ୍ଗି ସଭା ଭିନ୍ନ ଜାତିର ଲୋକଙ୍କ ମଧ୍ୟରେ ସମ୍ମାନ ଓ କଥାବାର୍ତ୍ତା ବଢ଼ାଏ।",
        type: "likert",
      },
      {
        en: "24. The Tungi has improved inter-caste relations.",
        od: "24. ଟୁଙ୍ଗି ଭିନ୍ନ ଜାତି ମଧ୍ୟରେ ସମ୍ପର୍କ ଭଲ କରିଛି।",
        type: "likert",
      },
      {
        en: "25. The Tungi has increased dialogue between elders and youth.",
        od: "25. ଟୁଙ୍ଗି ବୁଢ଼ା ଓ ଯୁବ ପିଢ଼ି ମଧ୍ୟରେ କଥାବାର୍ତ୍ତା ବଢ଼ାଇଛି।",
        type: "likert",
      },
    ],
  },
  {
    titleEn: "Section D: Festivals and Celebrations",
    titleOd: "ଅଂଶ–D: ପର୍ବପର୍ବାଣି",
    questions: [
      {
        en: "26. Festivals like Janmashtami and Indu Purnima are well celebrated at the Tungi.",
        od: "26. ଜନ୍ମାଷ୍ଟମୀ, ଇନ୍ଦୁ ପୂର୍ଣ୍ଣିମା ପରି ପର୍ବ ଟୁଙ୍ଗିରେ ଭଲଭାବେ ପାଳନ ହୁଏ।",
        type: "likert",
      },
      {
        en: "27. Bhajans, plays, and storytelling happen during festivals.",
        od: "27. ପର୍ବ ସମୟରେ ଭଜନ, ନାଟକ, କଥାକହାଣି ହୁଏ।",
        type: "likert",
      },
      {
        en: "28. People from neighboring villages also participate in these festivals.",
        od: "28. ଆଖପାଖ ଗାଁର ଲୋକ ମଧ୍ୟ ଏହି ପର୍ବରେ ଯୋଗ ଦେନ୍ତି।",
        type: "likert",
      },
      {
        en: "29. Youth actively participate in organising festivals.",
        od: "29. ପର୍ବ ଆୟୋଜନରେ ଯୁବମାନେ ସକ୍ରିୟ ଭାବେ ଯୋଗ ଦେନ୍ତି।",
        type: "likert",
      },
      {
        en: "30. Villagers contribute financially for Tungi festivals and activities.",
        od: "30. ଟୁଙ୍ଗି ପର୍ବ ଓ କାମ ପାଇଁ ଗାଁ ଲୋକ ଟଙ୍କା ସହଯୋଗ କରନ୍ତି।",
        type: "likert",
      },
    ],
  },
  {
    titleEn: "Section E: Challenges and Future Needs",
    titleOd: "ଅଂଶ–E: ସମସ୍ୟା ଓ ଆଗାମୀ ଆବଶ୍ୟକତା",
    questions: [
      {
        en: "31. Villagers' interest in the Tungi has decreased in recent years.",
        od: "31. ଗତ କିଛି ବର୍ଷରେ ଟୁଙ୍ଗି ପ୍ରତି ଗାଁ ଲୋକଙ୍କ ଆଗ୍ରହ କମିଛି।",
        type: "likert",
      },
      {
        en: "32. The Tungi currently faces challenges of people, finances, or leadership.",
        od: "32. ଟୁଙ୍ଗି ଏବେ ଲୋକ, ଟଙ୍କା କିମ୍ବା ନେତୃତ୍ୱ ସମସ୍ୟା ଭୋଗୁଛି।",
        type: "likert",
      },
      {
        en: "33. The Tungi building is in good condition for regular use.",
        od: "33. ଟୁଙ୍ଗି ଘରର ଅବସ୍ଥା ନିୟମିତ କାମ ପାଇଁ ଠିକ୍ ଅଛି।",
        type: "likert",
      },
      {
        en: "34. Tungi traditions should be included in primary school education.",
        od: "34. ଟୁଙ୍ଗିର ପରମ୍ପରା ପ୍ରାଥମିକ ପଢ଼ାରେ ଶାମିଲ ହେବା ଉଚିତ।",
        type: "likert",
      },
      {
        en: "35. Villagers are actively participating in reviving the Bhagavata Tungi.",
        od: "35. ଭାଗବତ ଟୁଙ୍ଗିକୁ ପୁନଃଜୀବନ ଦେବା କାର୍ଯ୍ୟରେ ଗାଁ ଲୋକ ସକ୍ରିୟ ଭାବେ ଯୋଗ ଦେଉଛନ୍ତି।",
        type: "likert",
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   LIKERT SCALE CONFIG
───────────────────────────────────────────────────────────────────────── */
const likertEn = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];
const likertOd = ["ସମ୍ପୂର୍ଣ୍ଣ ଅସମ୍ମତ", "ଅସମ୍ମତ", "ନିରପେକ୍ଷ", "ସମ୍ମତ", "ସମ୍ପୂର୍ଣ୍ଣ ସମ୍ମତ"];
const likertColors = [
  { bg: "#fee2e2", text: "#991b1b" },
  { bg: "#fef3c7", text: "#92400e" },
  { bg: "#f3f4f6", text: "#4b5563" },
  { bg: "#dcfce7", text: "#166534" },
  { bg: "#bbf7d0", text: "#14532d" },
];

/* ─────────────────────────────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────────────────────────────── */
function LikertRow({ lang }: { lang: Lang }) {
  const labels = lang === "en" ? likertEn : likertOd;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
      {labels.map((label, i) => (
        <span
          key={i}
          style={{
            fontSize: "0.72rem",
            padding: "3px 11px",
            borderRadius: 20,
            background: likertColors[i].bg,
            color: likertColors[i].text,
            fontWeight: 600,
            whiteSpace: "nowrap",
            fontFamily: lang === "od" ? "'Noto Sans Odia', sans-serif" : "inherit",
          }}
        >
          {i + 1}. {label}
        </span>
      ))}
    </div>
  );
}

function OptionPills({ options, lang }: { options: string[]; lang: Lang }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
      {options.map((opt, i) => (
        <span
          key={i}
          style={{
            fontSize: "0.78rem",
            padding: "4px 13px",
            borderRadius: 20,
            background: "#faf5ef",
            border: "1px solid rgba(232,100,12,0.2)",
            color: "#7a3b00",
            fontFamily: lang === "od" ? "'Noto Sans Odia', sans-serif" : "inherit",
          }}
        >
          {opt}
        </span>
      ))}
    </div>
  );
}

function MultiPills({ options, lang }: { options: string[]; lang: Lang }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
      {options.map((opt, i) => (
        <span
          key={i}
          style={{
            fontSize: "0.78rem",
            padding: "4px 13px",
            borderRadius: 20,
            background: "#eff6ff",
            border: "1px solid rgba(59,130,246,0.25)",
            color: "#1e40af",
            fontFamily: lang === "od" ? "'Noto Sans Odia', sans-serif" : "inherit",
          }}
        >
          ☐ {opt}
        </span>
      ))}
    </div>
  );
}

function QuestionItem({ q, lang, idx }: { q: Question; lang: Lang; idx: number }) {
  const qText = lang === "en" ? q.en : q.od;
  const isOdia = lang === "od";
  const opts = lang === "en" ? q.optionsEn : q.optionsOd;

  return (
    <div
      style={{
        padding: "1.1rem 0",
        borderBottom: "1px solid rgba(92,45,0,0.07)",
      }}
    >
      <p
        style={{
          fontFamily: isOdia ? "'Noto Sans Odia', 'Noto Serif Odia', sans-serif" : "inherit",
          fontSize: isOdia ? "1rem" : "0.9rem",
          color: "#3b1a00",
          fontWeight: 600,
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {qText}
      </p>

      {q.type === "text" && (
        <div
          style={{
            marginTop: 8,
            height: 28,
            borderBottom: "1.5px solid rgba(232,100,12,0.3)",
            width: "60%",
          }}
        />
      )}
      {q.type === "choice" && opts && <OptionPills options={opts} lang={lang} />}
      {q.type === "multi" && opts && <MultiPills options={opts} lang={lang} />}
      {q.type === "likert" && <LikertRow lang={lang} />}
    </div>
  );
}

function SectionBlock({ sec, lang }: { sec: Section; lang: Lang }) {
  const title = lang === "en" ? sec.titleEn : sec.titleOd;
  return (
    <div
      style={{
        marginBottom: "2rem",
        background: "#fff",
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid rgba(232,100,12,0.12)",
        boxShadow: "0 2px 12px rgba(92,45,0,0.04)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #7a3b00, #a05000)",
          padding: "0.9rem 1.75rem",
        }}
      >
        <h3
          style={{
            fontFamily: lang === "od"
              ? "'Noto Sans Odia', 'Cinzel', serif"
              : "'Cinzel', serif",
            fontSize: "0.92rem",
            color: "#fff",
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>
      <div style={{ padding: "0.5rem 1.75rem 1.25rem" }}>
        {sec.questions.map((q, qi) => (
          <QuestionItem key={qi} q={q} lang={lang} idx={qi} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   INTRO BOX
───────────────────────────────────────────────────────────────────────── */
function IntroBox({ category, lang }: { category: Category; lang: Lang }) {
  if (category === "caretaker") {
    return (
      <div
        style={{
          background: "#fff8f0",
          border: "1px solid rgba(232,100,12,0.2)",
          borderRadius: 12,
          padding: "1.5rem 2rem",
          marginBottom: "2rem",
        }}
      >
        {lang === "en" ? (
          <>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "#4A2800", lineHeight: 1.75, marginBottom: "0.5rem" }}>
              This questionnaire is part of a research study titled <em>"The Impact of Bhagabata Tungi on Social Harmony in Odisha: A Socio-Cultural Analysis."</em> Conducted by faculty and students of <strong>Trident Academy of Technology, Bhubaneswar</strong> under the <strong>IKS Institutional Internship Program–2025</strong>.
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--muted, #6b7280)" }}>
              Your participation is <strong>entirely voluntary</strong> and all responses are kept <strong>strictly confidential</strong>. There are no right or wrong answers. This questionnaire is for <strong>Caretakers / Mahanta</strong> of Bhagabata Tungis.
            </p>
          </>
        ) : (
          <>
            <p style={{ fontFamily: "'Noto Sans Odia', 'Noto Serif Odia', sans-serif", fontSize: "1rem", color: "#4A2800", lineHeight: 1.8, marginBottom: "0.5rem" }}>
              <strong>ନମସ୍କାର।</strong> ଏହି ପ୍ରଶ୍ନାବଳୀଟି <em>"ଓଡ଼ିଶାରେ ସାମାଜିକ ସମ୍ମିଳନ ଉପରେ ଭାଗବତ ଟୁଙ୍ଗିର ପ୍ରଭାବ: ଏକ ସାମାଜିକ–ସାଂସ୍କୃତିକ ଅଧ୍ୟୟନ"</em> ନାମକ ଗବେଷଣା କାମର ଏକ ଅଂଶ।
            </p>
            <p style={{ fontFamily: "'Noto Sans Odia', sans-serif", fontSize: "0.88rem", color: "var(--muted, #6b7280)", lineHeight: 1.7 }}>
              ଏହି ସର୍ଭେରେ ଆପଣଙ୍କ ଯୋଗଦାନ ସମ୍ପୂର୍ଣ୍ଣ ଇଚ୍ଛାଧୀନ। ଏହି ପ୍ରଶ୍ନାବଳୀ <strong>ଟୁଙ୍ଗି ସେବକ / ମହନ୍ତ</strong>ଙ୍କ ପାଇଁ।
            </p>
          </>
        )}
      </div>
    );
  }

  // audience
  return (
    <div
      style={{
        background: "#f0f7ff",
        border: "1px solid rgba(59,130,246,0.2)",
        borderRadius: 12,
        padding: "1.5rem 2rem",
        marginBottom: "2rem",
      }}
    >
      {lang === "en" ? (
        <>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "#1e3a5f", lineHeight: 1.75, marginBottom: "0.5rem" }}>
            This questionnaire is for <strong>community members and regular participants</strong> of Bhagabata Tungis. It is part of the research study on <em>"The Impact of Bhagabata Tungi on Social Harmony in Odisha."</em>
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--muted, #6b7280)" }}>
            Your participation is <strong>entirely voluntary</strong>. All information is confidential and for academic use only. This survey was administered to <strong>340+ respondents</strong> across <strong>12 districts of Odisha</strong>.
          </p>
        </>
      ) : (
        <>
          <p style={{ fontFamily: "'Noto Sans Odia', 'Noto Serif Odia', sans-serif", fontSize: "1rem", color: "#1e3a5f", lineHeight: 1.8, marginBottom: "0.5rem" }}>
            <strong>ନମସ୍କାର।</strong> ଏହି ପ୍ରଶ୍ନାବଳୀ <strong>ଗ୍ରାମ ସଭ୍ୟ ଓ ଟୁଙ୍ଗି ଉପସ୍ଥିତ ଲୋକ</strong>ଙ୍କ ପାଇଁ। ଏହା <em>"ଭାଗବତ ଟୁଙ୍ଗିର ସାମାଜିକ ପ୍ରଭାବ"</em> ବିଷୟକ ଗବେଷଣାର ଅଂଶ।
          </p>
          <p style={{ fontFamily: "'Noto Sans Odia', sans-serif", fontSize: "0.88rem", color: "var(--muted, #6b7280)", lineHeight: 1.7 }}>
            ଆପଣଙ୍କ ଯୋଗଦାନ ସ୍ୱେଚ୍ଛାକୃତ। ଓଡ଼ିଶାର <strong>୧୨ ଜିଲ୍ଲାରେ ୩୪୦+ ଲୋକ</strong> ଏହି ସର୍ଭେରେ ଭାଗ ନେଇଛନ୍ତି।
          </p>
        </>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   THANK YOU FOOTER
───────────────────────────────────────────────────────────────────────── */
function ThankYou({ lang }: { lang: Lang }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "1.5rem",
        background: "#fff8f0",
        borderRadius: 12,
        border: "1px solid rgba(232,100,12,0.15)",
        marginTop: "1rem",
      }}
    >
      {lang === "en" ? (
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#4A2800", fontStyle: "italic", margin: 0 }}>
          We sincerely thank you for giving your valuable time to answer these questions.
        </p>
      ) : (
        <p style={{ fontFamily: "'Noto Sans Odia', 'Noto Serif Odia', sans-serif", fontSize: "1rem", color: "#4A2800", fontStyle: "italic", margin: 0 }}>
          ଆପଣ ଆପଣଙ୍କ ମୂଲ୍ୟବାନ ସମୟ ଦେଇ ଏହି ପ୍ରଶ୍ନଗୁଡ଼ିକର ଉତ୍ତର ଦେଇଥିବାରୁ ଆମେ ହୃଦୟରୁ ଧନ୍ୟବାଦ ଜଣାଉଛୁ।
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   PILL TOGGLE BUTTON
───────────────────────────────────────────────────────────────────────── */
function PillBtn({
  active,
  onClick,
  children,
  color = "saffron",
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  color?: "saffron" | "blue";
}) {
  const activeStyle =
    color === "blue"
      ? { background: "#1d4ed8", color: "#fff", border: "1.5px solid #1d4ed8" }
      : { background: "var(--saffron, #e8640c)", color: "#fff", border: "1.5px solid var(--saffron, #e8640c)" };

  const inactiveStyle =
    color === "blue"
      ? { background: "#fff", color: "#1d4ed8", border: "1.5px solid #93c5fd" }
      : { background: "#fff", color: "var(--earth, #7a3b00)", border: "1.5px solid rgba(232,100,12,0.3)" };

  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.45rem 1.35rem",
        borderRadius: 30,
        fontSize: "0.82rem",
        fontWeight: 700,
        cursor: "pointer",
        transition: "all 0.2s",
        letterSpacing: "0.03em",
        ...(active ? activeStyle : inactiveStyle),
      }}
    >
      {children}
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────────────── */
export default function QuestionnaireTab() {
  const [category, setCategory] = useState<Category>("audience");
  const [lang, setLang] = useState<Lang>("en");

  const sections = category === "caretaker" ? caretakerSections : audienceSections;

  const categoryLabel =
    category === "caretaker"
      ? lang === "en"
        ? "Caretaker / Mahanta"
        : "ଟୁଙ୍ଗି ସେବକ / ମହନ୍ତ"
      : lang === "en"
      ? "Community Participants"
      : "ଗ୍ରାମ ସଭ୍ୟ / ଦର୍ଶକ";

  const qCount = sections.reduce((s, sec) => s + sec.questions.length, 0);

  return (
    <div style={{ animation: "fadeIn 0.4s ease" }}>

      {/* ── CONTROL STRIP ── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "2rem",
          padding: "1.1rem 1.5rem",
          background: "#fff",
          borderRadius: 14,
          border: "1px solid rgba(232,100,12,0.12)",
          boxShadow: "0 2px 10px rgba(92,45,0,0.05)",
        }}
      >
        {/* Category toggle */}
        <div>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "var(--muted, #6b7280)",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            {lang === "en" ? "Respondent Type" : "ଉତ୍ତରଦାତା ପ୍ରକାର"}
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <PillBtn
              active={category === "audience"}
              onClick={() => setCategory("audience")}
              color="saffron"
            >
              {lang === "en" ? "👥 Community Participants" : "👥 ଗ୍ରାମ ସଭ୍ୟ"}
            </PillBtn>
            <PillBtn
              active={category === "caretaker"}
              onClick={() => setCategory("caretaker")}
              color="saffron"
            >
              {lang === "en" ? "🏛️ Caretaker / Mahanta" : "🏛️ ସେବକ / ମହନ୍ତ"}
            </PillBtn>
          </div>
        </div>

        {/* Language toggle */}
        <div>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "var(--muted, #6b7280)",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            Language / ଭାଷା
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <PillBtn active={lang === "en"} onClick={() => setLang("en")} color="blue">
              🇬🇧 English
            </PillBtn>
            <PillBtn active={lang === "od"} onClick={() => setLang("od")} color="blue">
              🔤 ଓଡ଼ିଆ
            </PillBtn>
          </div>
        </div>
      </div>

      {/* ── BADGE STRIP ── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            padding: "4px 14px",
            borderRadius: 20,
            background: category === "caretaker" ? "#fef3c7" : "#dbeafe",
            color: category === "caretaker" ? "#92400e" : "#1e40af",
            border: `1px solid ${category === "caretaker" ? "#fcd34d" : "#93c5fd"}`,
          }}
        >
          {category === "caretaker" ? "🏛️" : "👥"} {categoryLabel}
        </span>
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--muted, #6b7280)",
            padding: "4px 14px",
            borderRadius: 20,
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
          }}
        >
          {qCount} {lang === "en" ? "questions" : "ପ୍ରଶ୍ନ"} · {sections.length}{" "}
          {lang === "en" ? "sections" : "ଅଂଶ"}
        </span>
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--muted, #6b7280)",
            padding: "4px 14px",
            borderRadius: 20,
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
          }}
        >
          {lang === "en" ? "🌐 English" : "🔤 ଓଡ଼ିଆ"}
        </span>
      </div>

      {/* ── INTRO ── */}
      <IntroBox category={category} lang={lang} />

      {/* ── SECTIONS ── */}
      {sections.map((sec, si) => (
        <SectionBlock key={si} sec={sec} lang={lang} />
      ))}

      {/* ── THANK YOU ── */}
      <ThankYou lang={lang} />
    </div>
  );
}