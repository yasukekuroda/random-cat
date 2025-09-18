"use client";

import { useState } from "react";
import { fetchImage, Image } from "./fetch-image";

type CatImageProps = {
    url: string;
}

export function CatImage({ url }: CatImageProps) {
    const [imageUrl, setImageUrl] = useState(url);
    const refreshImage = async() => {
        setImageUrl(""); // 初期化.
        const image: Image = await fetchImage();
        setImageUrl(image.url);
    }

    return (
        <div>
            <button onClick={refreshImage}>他のにゃんこも見る</button>
            { imageUrl && <img src={ imageUrl } /> }
        </div>
    );
}