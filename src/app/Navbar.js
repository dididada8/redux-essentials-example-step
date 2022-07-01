import React from 'react'

import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <section>
                <h1>Redux 循序渐进示例</h1>

                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/">帖子列表</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}