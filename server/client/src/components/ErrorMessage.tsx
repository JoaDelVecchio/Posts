import React from "react";

const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <div className="text-red-600 font-medium mt-4 text-center">{error}</div>
  );
};

export default ErrorMessage;
