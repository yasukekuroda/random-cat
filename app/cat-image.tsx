"use client";

import { useState } from "react";
import { fetchImage, Image } from "./fetch-image";
import styles from "./page.module.css";

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
      <div className={styles.page}>
        <button onClick={refreshImage} className={styles.button}>
          うんち
        </button>
        <div className={styles.frame}>
          {imageUrl && <img src={imageUrl} className={styles.img} />}
        </div>
      </div>
    );
}