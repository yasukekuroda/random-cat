export type Image = {
     url: string;
}

/**
 * APIから画像を取得する関数
 */
export async function fetchImage(): Promise<Image> {
     const res = await fetch("https://api.thecatapi.com/v1/images/search");
     const images: unknown = await res.json();
     if (!isImageArray(images)) {
          throw new Error("APIのレスポンスが不正です");
     }

     if (!images[0]) {
          throw new Error("画像が見つかりません");
     }

     const image: Image = images[0];
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