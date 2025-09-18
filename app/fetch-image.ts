// APIから画像を取得する関数
export async function fetchImage() {
     const res = await fetch("https://api.thecatapi.com/v1/images/search");
     const images = await res.json();
     return images[0];
}