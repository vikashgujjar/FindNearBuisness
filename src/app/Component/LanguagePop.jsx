import React from "react";
import { RxCross1 } from "react-icons/rx";

const stateLanguages = [
  { state: "Andhra Pradesh", language: "Telugu" },
  { state: "Arunachal Pradesh", language: "English" },
  { state: "Assam", language: "Assamese" },
  { state: "Bihar", language: "Hindi" },
  { state: "Chhattisgarh", language: "Hindi" },
  { state: "Goa", language: "Konkani" },
  { state: "Gujarat", language: "Gujarati" },
  { state: "Haryana", language: "Hindi" },
  { state: "Himachal Pradesh", language: "Hindi" },
  { state: "Jharkhand", language: "Hindi" },
  { state: "Karnataka", language: "Kannada" },
  { state: "Kerala", language: "Malayalam" },
  { state: "Madhya Pradesh", language: "Hindi" },
  { state: "Maharashtra", language: "Marathi" },
  { state: "Manipur", language: "Meitei (Manipuri)" },
  { state: "Meghalaya", language: "English" },
  { state: "Mizoram", language: "Mizo" },
  { state: "Nagaland", language: "English" },
  { state: "Odisha", language: "Odia" },
  { state: "Punjab", language: "Punjabi" },
  { state: "Rajasthan", language: "Hindi" },
  { state: "Sikkim", language: "Nepali" },
  { state: "Tamil Nadu", language: "Tamil" },
  { state: "Telangana", language: "Telugu" },
  { state: "Tripura", language: "Bengali" },
  { state: "Uttar Pradesh", language: "Hindi" },
  { state: "Uttarakhand", language: "Hindi" },
  { state: "West Bengal", language: "Bengali" },
];

console.log(stateLanguages.length);

const onlyLanguages = stateLanguages.map((item) => item.language);
const singleLanguages = [...new Set(onlyLanguages)];

export default function LanguagePop({ setLangPop }) {
  return (
    <div className="fixed z-[9999999] inset-0 bg-black/50 flex justify-center items-center px-4">
      <div className="w-full h-[400px] relative max-w-md lg:max-w-xl bg-white rounded-xl shadow-lg overflow-y-auto p-6">
        <button
          onClick={() => setLangPop(false)}
          className="text-xl text-gray-700 absolute right-4 top-4"
        >
          <RxCross1 />
        </button>
        <h2 className="text-lg font-semibold mb-4">Select a State Language</h2>
        <ul className="space-y-2 text-sm">
          {singleLanguages.map((language, index) => (
            <li
              key={index}
              className="flex justify-between items-center border p-2 rounded hover:bg-gray-100"
            >
              {/* <span>{item.state}</span> */}
              <span className="text-gray-600 font-medium">{language}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
