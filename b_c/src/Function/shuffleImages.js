// src/Function/shuffleImages.js
import { shuffle } from "lodash";

function importAll(r) {
  return r.keys().map(r);
}

// 이미지 디렉토리 내 모든 이미지를 가져옵니다.
const images = importAll(
  require.context("../images", false, /\.(png|jpe?g|svg)$/)
);

export const getRandomImages = (num = 4) => {
  const shuffledImages = shuffle(images);
  return shuffledImages.slice(0, num);
};
