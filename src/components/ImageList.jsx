import Images from "./Images";

const ImageList = ({ allImages }) => {
    return (
        <div className="mt-10 text-center">
            <h3 className="text-3xl font-bold mb-5">ImageList</h3>

            {!allImages.length ? (
                <p className="text-center text-red-500">does not any image</p>
            ) : (
                <div className="grid grid-cols-12 gap-5 w-full">
                    {allImages.map((image) => (
                        <Images
                            key={image.id}
                            alt={image.alt_description}
                            url={image.urls.thumb}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export { ImageList };
