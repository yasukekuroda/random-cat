import { fetchImage } from "./fetch-image";
import { connection } from "next/server";

export default async function Home() {
  // await connection();
  const image = await fetchImage();
  console.log("🚀 ~ Home ~ image:", image.url);
  return <div>猫画像予定地aa</div>;
}