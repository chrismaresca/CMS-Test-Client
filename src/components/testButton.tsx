import React from "react";

const TestButton = async () => {
  const session: string = await new Promise((resolve) => setTimeout(() => resolve("the session value is hello world!"), 3000));

  return (
    <div className="bg-red-500">
      <h1>{session}</h1>
    </div>
  );
};

export { TestButton };
