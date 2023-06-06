import { atom } from "recoil";
import { ITodo } from "../types/todo";

export const isDarkAtom = atom({
  key: "isDark", // 먼저 키 만들어 주기
  default: true,
});

export const todoState = atom<ITodo[]>({
  key: "todoList",
  default: [],
});
