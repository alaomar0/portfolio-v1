export default function ThemeToggleButton() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.contains("dark");
    // update local storage
    localStorage.setItem("theme", isDark ? "light" : "dark");
    updateTheme();
  }

  function updateTheme() {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }

  return (
    <button
      aria-label="Toggle theme color"
      onClick={() => {
        toggleTheme();
      }}
      className="size-8 cursor-pointer border-1 border-black bg-white dark:border-white dark:bg-black"
    ></button>
  );
}
