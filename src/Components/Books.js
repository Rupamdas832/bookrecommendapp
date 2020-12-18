import React from 'react'

export default function Books({book1, book2}) {

    return (
        <div className="books">
            <h4>{book1}</h4>
            <h4>{book2}</h4>
        </div>
    )
}
