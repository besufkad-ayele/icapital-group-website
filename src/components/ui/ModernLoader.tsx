import React from "react";

const ModernLoader = () => (
  <div className="flex min-h-[200px] flex-col items-center justify-center">
    <div className="flex space-x-2">
      <span className="block h-4 w-4 animate-bounce rounded-full bg-orange-500 [animation-delay:-0.32s]" />
      <span className="block h-4 w-4 animate-bounce rounded-full bg-orange-400 [animation-delay:-0.16s]" />
      <span className="block h-4 w-4 animate-bounce rounded-full bg-orange-300" />
    </div>
    <span className="mt-4 text-lg font-semibold text-orange-500">
      Loading...
    </span>
  </div>
);

export default ModernLoader;
