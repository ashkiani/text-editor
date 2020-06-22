import React from 'react'

export default function index(props) {
    return (
        <div>
            <div className="border" style={{ height: '250px', backgroundColor: 'yellow' }}>This is the opened file! {props.file.id}
                <button key={props.id} className="float-right" onClick={() => props.closeFileFunction(props.file)}>Close</button>
                <div>
                    {props.file.content}
                </div>
            </div>
        </div>

    )
}
