export const getLocation = (
    showPosition: (position: GeolocationPosition) => void,
    error: () => void
) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, error);
    }
};
