import { fetchImage } from "./fetch-image";
import { connection } from "next/server";

export default async function Home() {
    // (2) ビルド時にfetchImageの結果が固定されないようにする
  await connection();
  // (3) APIから画像を取得
  const image = await fetchImage();
  return <div>猫画像予定地</div>;
}