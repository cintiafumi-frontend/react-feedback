import React from 'react'
import './Loading.css'


function Loading() {
    return (
        <div className="loading">
            <div className="loading__loader">
                <span>{"{"}</span><span>{"}"}</span>
            </div>
        </div>
    )
}

export default Loading