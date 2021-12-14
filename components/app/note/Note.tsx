import Task from "../../../models/task";

interface Props {
    task: Task;
}

const Note = (prop: Props) => {
    const { task } = prop;
    return (
        <div className="md:w-6/12 md:pr-4 my-3 w-full">
            <div className="w-full bg-gray-700 text-white p-6 cursor-pointer rounded" style={{ borderLeftWidth: 4, borderLeftColor: task.color, borderLeftStyle: "solid" }}>
                <h1>{task.title}</h1>
            </div>
        </div>

    )
}

export default Note;