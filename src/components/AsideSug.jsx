import React from "react";
import Stories from "./Stories";

export default function AsideSug() {
    return(
        <div className="h-screen bg-gray-300">
            <div>
                <h2>Stories</h2>
                <div>
                    <Stories />
                </div>
                <h2>Suggestions</h2>
                <div>
                    <div>
                        <img src="https://placehold.co/50" alt="User" className="rounded-full"/>
                        <p>John Doe</p>
                    </div>
                    <div>
                        <img src="https://placehold.co/50" alt="User" className="rounded-full"/>
                        <p>Jane Doe</p>
                    </div>
                    <div>
                        <img src="https://placehold.co/50" alt="User" className="rounded-full"/>
                        <p>John Smith</p>
                    </div>
                </div>
            </div>
        </div>
    )
}