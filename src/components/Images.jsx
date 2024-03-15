const Images = ({ alt, url }) => {
    return (
        <div className="size-52 rounded-lg col-span-3 overflow-hidden">
            <img
                src={url}
                alt={alt}
                className="size-full object-cover transition-transform hover:scale-110"
            />
        </div>
    );
};

export default Images;
