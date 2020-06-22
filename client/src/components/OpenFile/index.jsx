import React, { useState } from 'react'

export default function Index(props) {
    const [content, setContent] = useState({ initialContent: props.file.content, currentContent: props.file.content });
    function handleChange(event) {
        const { value } = event.target;
        setContent({ initialContent: props.file.content, currentContent: value });
    }
    function saveClick() {
        alert("Saving content for " + props.file.id);
    }
    if (content.currentContent === content.initialContent) {
        return (
            <div>
                <div className="border" style={{ height: '250px', backgroundColor: 'yellow' }}>This is the opened file! {props.file.id}
                    <button key={props.id} className="float-right" onClick={() => props.closeFileFunction(props.file)}>Close</button>
                    <div>
                        <textarea name="content" className="w-100" value={content.currentContent} onChange={handleChange} />
                    </div>
                </div>
            </div>

        )
    }
    else {
        return (
            <div>
                <div className="border" style={{ height: '250px', backgroundColor: 'yellow' }}>This is the opened file! {props.file.id}
                    <button key={props.id} className="float-right" onClick={() => props.closeFileFunction(props.file)}>Close</button>
                    <div>
                        <textarea name="content" className="w-100" value={content.currentContent} onChange={handleChange} />
                    </div>
                    <div>
                        <button onClick={saveClick}>Save</button>
                    </div>
                </div>
            </div>

        )
    }
}