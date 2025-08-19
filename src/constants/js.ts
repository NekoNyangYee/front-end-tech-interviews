import type { ListItemProps } from "../type";

export const JS_LISTS: ListItemProps[] = [
  {
    id: "1",
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function-scoped, let and const are block-scoped. const cannot be reassigned.",
    difficulty: 2,
    importance: 3,
  },
  {
    id: "2",
    question: "Explain the concept of closures in JavaScript.",
    answer:
      "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
    difficulty: 3,
    importance: 4,
  },
  {
    id: "3",
    question: "What are Promises in JavaScript?",
    answer:
      "Promises are objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value.",
    difficulty: 2,
    importance: 5,
  },
];
