import React, { useState }  from 'react'

export default function Index(props) {
    const [content, setContent] = useState([props.file.content]);
    function handleChange(event) {
        const { value } = event.target;
        setContent(value);
    }
    return (
        <div>
            <div className="border" style={{ height: '250px', backgroundColor: 'yellow' }}>This is the opened file! {props.file.id}
                <button key={props.id} className="float-right" onClick={() => props.closeFileFunction(props.file)}>Close</button>
                <div>
                    <textarea id="noter-text-area" name="textarea" value={content} onChange={handleChange} />
                </div>
            </div>
        </div>

    )
}
