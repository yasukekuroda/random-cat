import { fetchImage } from "./fetch-image";
import { CatImage } from "./cat-image"; 
import { connection } from "next/server";

// サーバーコンポーネントである.

export default async function Home() {
  await connection();
  const image = await fetchImage();
  return (
    <>
      <CatImage url={image.url} />
      <div>猫画像予定地</div>
    </>
);
}