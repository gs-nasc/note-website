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
    },
    getRandomNotesColor: () => {
        const colors = [
            {
                color: "#26547c",
                text: "#fff"
            },
            {
                color: "#ef476f",
                text: "#fff"
            },
            {
                color: "#ffd166",
                text: "#000"
            },
            {
                color: "#06d6a0",
                text: "#000"
            },
            {
                color: "#118ab2",
                text: "#fff"
            },
            {
                color: "#073b4c",
                text: "#fff"
            },
            {
                color: "#ff5e57",
                text: "#fff"
            },
            {
                color: "#ffc6ff",
                text: "#000"
            }
        ];

        return colors[Math.floor(Math.random() * colors.length)];
    }
}

export default theme;