import { useState } from "react";
import Task from "../../../models/task";

interface Props {
    task: Task;
}

const Note = (prop: Props) => {
    const { task } = prop;
    const [background, color] = task.color.split(":");
    const [isEditing, setIsEditing] = useState(true);
    if (!isEditing) {
        return (<div className="md:w-6/12 md:pr-4 my-3 w-full">
            <div className="w-full text-white p-6 cursor-pointer rounded" style={{ background: background, color: color }}>
                <h1 className="text-xl font-bold">{task.title}</h1>
            </div>
        </div>);
    } else {
        return (
            <div className="fixed top-0 left-0 py-12 px-36 bg-gray-900 w-screen h-screen z-50">
                <input type="text"
                    className="w-full leading-none pb-2 pl-2 mb-6 focus:outline-none focus:shadow-outline text-gray-200 bg-transparent text-3xl font-bold border-b-2 border-gray-600"
                    placeholder="Title" id="search" />
                <textarea className="w-full h-5/6 bg-transparent text-gray-200 leading-none pl-2 focus:outline-none focus:shadow-outline">

                </textarea>
            </div>
        )
    }
}

export default Note;