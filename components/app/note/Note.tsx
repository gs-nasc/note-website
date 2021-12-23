import { useState } from "react";
import Task from "../../../models/task";
import { XIcon, SaveIcon } from "@heroicons/react/solid";

interface Props {
    task: Task;
}

const Note = (prop: Props) => {
    const { task } = prop;
    const [background, color] = task.color.split(":");
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const [isEditing, setIsEditing] = useState(false);
    if (!isEditing) {
        return (<div className="md:w-6/12 md:pr-4 my-3 w-full">
            <div className="w-full text-white p-6 cursor-pointer rounded" style={{ background: background, color: color }} onClick={() => setIsEditing(true)}>
                <h1 className="text-xl font-bold">{task.title}</h1>
            </div>
        </div>);
    } else {
        return (
            <div className="md:w-6/12 md:pr-4 my-3 w-full">
                <div className="w-full text-white p-6 cursor-pointer rounded" style={{ background: background, color: color }}>
                    <h1 className="text-xl font-bold">{task.title}</h1>
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center" style={{background: "rgba(0,0,0,0.7)"}}>
                    <div className="fixed top-0 md:top-auto md:left-auto pt-12 px-3 md:py-12 md:px-36 bg-gray-800 w-screen h-screen md:w-7/12 md:h-5/6 z-50 md:rounded-xl">
                        <input type="text" className="w-full leading-none pb-2 md:pl-2 mb-6 focus:outline-none focus:shadow-outline text-gray-200 bg-transparent text-3xl font-bold border-b-2" style={{ borderColor: background }}
                            placeholder="Title" id="search" value={title} />
                        <textarea className="w-full h-5/6 bg-transparent text-gray-200 font-medium text-xl leading-none md:pl-2 focus:outline-none focus:shadow-outline md:border-b-2" style={{ borderColor: background }} placeholder="Type something..." value={description}>
                        </textarea>
                        <div className="absolute top-3 right-3 md:right-5 md:top-5">
                            <div className="bg-red-600 rounded-full w-6 h-6 mr-2 flex items-center justify-center cursor-pointer" onClick={() => setIsEditing(false)}>
                                <XIcon className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Note;