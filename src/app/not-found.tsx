"use client";

import ErrorUI from "@/components/Common/ErrorUI";

const NotFound = () => {
  return (
    <ErrorUI
      errorCode="404"
      title="Page Not Found"
      description="Oops! It looks like you've wandered into uncharted territory. The page you're searching for seems to have moved or never existed."
      imageSrc="/error/404 error.svg"
    />
  );
};

export default NotFound;
