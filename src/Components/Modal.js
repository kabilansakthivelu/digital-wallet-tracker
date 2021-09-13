import React from 'react'

const Modal = (props) => {
    return (
        <div className="border-2 w-52 sm:w-72 md:w-80 lg:w-96 h-16 rounded-xl p-2 flex items-center justify-center bg-blue-500 text-white border-white md:text-lg lg:text-xl">
            <h2 className="text-center">{props.message}</h2>
        </div>
    )
}

export default Modal
