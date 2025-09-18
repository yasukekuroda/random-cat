"use server"; // 常にサーバーで動作させる. サーバーサイドコンポーネントとする.

import { CAT_API_KEY } from "./env";

export type Image = {
     url: string;
}

/**
 * APIから画像を取得する関数
 */
export async function fetchImage(): Promise<Image> {
     // const res = await fetch("https://api.thecatapi.com/v1/images/search");
     const res = await fetch("https://api.thecatapi.com/v1/images/search", {
         headers: { "x-api-key": CAT_API_KEY }, // 追加
     });
     const images: unknown = await res.json();
     if (!isImageArray(images)) {
          throw new Error("APIのレスポンスが不正です");
     }

     if (!images[0]) {
          throw new Error("画像が見つかりません");
     }

     const image: Image = images[0];
     console.log("fetchImage: 画像情報を取得しました", image);
     return image;
}

function isImageArray(value: unknown): value is Image[] {
     if (!Array.isArray(value)) {
          return false;
     }

     if (!value.every(isImage)) {
          return false;
     }

     return true;
}
function isImage(value: unknown): value is Image {
     if (typeof value !== "object" || value === null) {
          return false;
     }

     if (!("url" in value)) {
          return false;
     }

     if (typeof (value as Image).url !== "string") {
          return false;
     }

     return true;
}