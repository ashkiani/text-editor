import React from 'react'
import OpenFile from "../OpenFile"

export default function Index(props) {
    const { filesData } = props
    return (
        <div>
            {filesData.map(file=> {return <OpenFile key={file.id} file={file} closeFileFunction={props.closeFileFunction} />})}
        </div>
    )
}
