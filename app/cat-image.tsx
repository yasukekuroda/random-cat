type CatImageProps = {
    url: string;
}

export function CatImage({ url }: CatImageProps) {
    return (
        <div>
            <img src={ url } />
        </div>
    );
}