import imageCompression from "browser-image-compression";

export const compressImage = async (file: File) => {
    const options = {
        maxSizeMB: 0.3,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
    };

    const compressedFile = await imageCompression(file, options);
    return new File([compressedFile], file.name);
};
