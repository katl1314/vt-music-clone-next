import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min); // 오름차순
  max = Math.floor(max); // 내림차순
  // 특정 범위 내 랜덤값을 가져온다.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
