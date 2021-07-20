import React from 'react'

export const Header = ({ tittle }) => {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{tittle}</a>
            </div>
        </nav>
    )
}
