"use client";

type Props = {
  handleSetTheme: () => string;
  theme: string;
  onScrollToSkill: () => void;
  onScrollToProject: () => void;
};
const MenuBar = ({
  handleSetTheme,
  theme,
  onScrollToSkill,
  onScrollToProject,
}: Props) => {
  const menu = [
    {
      name: "SKILLS",
      click: onScrollToSkill,
    },
    {
      name: "PROJECTS",
      click: onScrollToProject,
    },
    {
      name: "CONTACT",
    },
  ];

  return (
    <div className="flex justify-center ">
      <div className="flex md:flex-row flex-col w-full md:w-auto mb-2 md:mb-0 items-center justify-around border-3 border-gray-300 dark:border-gray-600 p-2 rounded-2xl ">
        {menu.map((item, index) => (
          <button
            key={index}
            onClick={item.click}
            disabled={!item.click}
            className="cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 px-6 py-2 rounded-full font-semibold mr-2"
          >
            {item.name}
          </button>
        ))}

        <button
          className="p-2 w-10 bg-gray-200 dark:bg-gray-700  rounded-full cursor-pointer"
          onClick={() => handleSetTheme()}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
