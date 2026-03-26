export const capitalize = (text: string): string => {
    return text
        .split(" ")
        .map(
            (t) =>
                (t.length > 0 ? t.charAt(0).toUpperCase() : "") +
                (t.length > 1 ? t.substring(1) : "")
        )
        .join(" ");
};
