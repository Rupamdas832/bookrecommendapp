import React from 'react'
import datas from "../Data/books.json"
export default function Genre({setBook1, setBook2}) {

    const setData = (data) => {
        setBook1(data.a)
        setBook2(data.b)
    }
    return (
        <div className="genre">
            <h2>Select a Genre</h2>
            <div className="genreBtns">
            {datas.map((data,index) => {
                return <button key={index} onClick={() => setData(data)} className="btn">{data.genre}</button>
            })}
            </div>
        </div>
    )
}
