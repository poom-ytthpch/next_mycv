"use client";

type Props = {
  handleSetTheme: () => string;
  theme: string;
};
const MenuBar = ({ handleSetTheme , theme }: Props) => {
  return (
    <div className="flex justify-center">
      <button
        className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
        onClick={() =>handleSetTheme()}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default MenuBar;
