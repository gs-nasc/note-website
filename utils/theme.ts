const theme = {
    colors :  ["#ef4444", "#34d399", "#3b82f6", "#4f46e5", "#7c3aed", "#db2777", "#f59e0b", "#1f2937"],
    randomColor: () => {
        return theme.colors[Math.floor(Math.random() * theme.colors.length)];
    },
    setColors: (colors: string[]) => {
        theme.colors = colors;
    },
    getUserColor: () => {
        return localStorage.getItem("userColor") || theme.randomColor();
    }
}

export default theme;