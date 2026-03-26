export const moneyFormat = (price: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
    }).format(price);
};
