import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// 클래스 병합 => 중복되는 클래스가 여러개 들어오면 마지막에 들어오는 놈으로 머지
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

export function getRandomElementFromArray<T>(arr: T[]): T {
  const length = arr.length;

  return arr[getRandomInt(0, length - 1)];
}

// chunk array
export function getChunkArray<T>(arr: T[], size: number) {
  // 청크할 길이가 배열 길이보다 크면 원본 배열을 반환합니다.
  if (arr.length < size) return [arr];

  // 청크 할 길이가 배열 길이보다 작으면 길이만큼 청크합니다.
  const chunkArray = []; // [[1,2,3,4], [5,6,7,8], [9, 10]]
  let start = 0;
  let last = size;
  while (true) {
    let chunk = arr.slice(start, last);

    if (chunk.length < 1) break;

    chunkArray.push(chunk);
    let tmp = last;
    last += size;
    start = tmp;
  }

  return chunkArray;
}
