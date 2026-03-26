export const previewImage = async (
    file: File,
    setImage: (url: string) => void
) => {
    const fr = new FileReader();
    fr.onload = () => {
        if (fr.result) {
            setImage(fr.result.toString());
        }
    };
    fr.readAsDataURL(file);
};
