"use client";

type Props = {
  handleSetTheme: () => string;
  theme: string;
};
const MenuBar = ({ handleSetTheme, theme }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-around border-3 border-gray-300 dark:border-gray-600 p-2 rounded-2xl w-[200px]">
        <p className="hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer p-2 rounded-full">
            HOME
        </p>
        <button
          className="p-2 w-10 bg-gray-200 dark:bg-gray-700  rounded-full"
          onClick={() => handleSetTheme()}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
