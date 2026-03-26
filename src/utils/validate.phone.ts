export const validatePhone = (phone: string): boolean => {
    return (
        phone.trim() !== "" &&
        ((phone.charAt(0) == "0" && phone.length == 10) ||
            ((phone.charAt(0) == "9" || phone.charAt(0) == "7") &&
                phone.length == 9)) &&
        !isNaN(Number(phone))
    );
};

export const preparePhone = (phone: string): boolean => {
    return (
        phone.trim() === "" ||
        !(
            (phone[0] == "0" && phone.length == 10) ||
            ((phone[0] == "9" || phone[0] == "7") && phone.length == 9)
        )
    );
};
