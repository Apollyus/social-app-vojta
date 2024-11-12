import React from "react";

export default function AsideNav() {
    return (
        <aside className="flex flex-col items-center gap-4 bg-gray-100 py-5 px-5 h-screen">
            <div className="flex justify-center">
                <img src="https://placehold.co/100" alt="Logo" className="rounded-full "/>
                <img src="https://placehold.co/100" alt="User icon" className="rounded-full -ml-5"/>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
                <p className="text-sm text-gray-400">@johndoe</p>
            </div>
            <ul className="flex flex-col w-full justify-center items-center font-semibold">
                <li>
                    <a className="w-44 hover:bg-gray-400 rounded-xl p-1 px-2 flex justify-start gap-6 items-center" href="#">
                        <img src="https://placehold.co/20" alt="Icon" className=""/>
                        Feed
                    </a>
                </li>
                <li>
                    <a className="hover:bg-gray-400 rounded-xl p-2 px-4 flex" href="#">
                        <img src="https://placehold.co/20" alt="Icon" className=""/>
                        Messages
                    </a>
                </li>
                <li>
                    <a className="hover:bg-gray-400 rounded-xl p-2 px-4 " href="#">
                        <img src="https://placehold.co/20" alt="Icon" className=""/>
                        Forums
                    </a>
                </li>
                <li>
                    <a className="hover:bg-gray-400 rounded-xl p-2 px-4 " href="#">
                        <img src="https://placehold.co/20" alt="Icon" className=""/>
                        Friends
                    </a>
                </li>
                <li>
                    <a className="hover:bg-gray-400 rounded-xl p-2 px-4 " href="#">
                        <img src="https://placehold.co/20" alt="Icon" className=""/>
                        Media
                    </a>
                </li>
                <li>
                    <a className="hover:bg-gray-400 rounded-xl p-2 px-4 " href="#">
                        <img src="https://placehold.co/20" alt="Icon" className=""/>
                        Settings
                    </a>
                </li>
            </ul>
        </aside>
    )
}