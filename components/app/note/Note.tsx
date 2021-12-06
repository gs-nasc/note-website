interface Props {
    id: number;
    title: string;
    color: string;
}

const Note = (prop: Props) => {
    const { id, title, color } = prop;
    return (
        <div className="md:w-1/2 w-full bg-gray-700 text-white p-6 cursor-pointer rounded" style={{borderLeftWidth: 4, borderLeftColor: color, borderLeftStyle: "solid"}}>
            <h1>{title}</h1>
        </div>
    )
}

export default Note;