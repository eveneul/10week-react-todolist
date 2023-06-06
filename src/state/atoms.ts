import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark", // 먼저 키 만들어 주기
  default: false,
});
