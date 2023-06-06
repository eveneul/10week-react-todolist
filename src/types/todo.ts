export interface ITodo {
  text: string;
  id: number;
  category: "DONE" | "DOING" | "TO_DO";
}
