import React, { useState, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    const toggleLinks = () => {
        setShowLinks(!showLinks)
    }

    const linksStyles = {
        height: showLinks ?
            `${linksRef.current.getBoundingClientRect().height}px` : '0px'
    }

    return <nav>
        <div className="nav-center">
            <div className="nav-header">
                <img className="logo" src={logo} alt="logo" />
                <button
                    className="nav-toggle"
                    type='button'
                    onClick={toggleLinks}>
                    <FaBars />
                </button>
            </div>
            <div className="links-container"
                ref={linksContainerRef}
                style={linksStyles}>
                <ul className="links"
                    ref={linksRef}>
                    {links.map((link) => {
                        const { id, url, text } = link
                        return <li key={id}>
                            <a href={url}>
                                {text}
                            </a>
                        </li>
                    })}
                </ul>
            </div>
            <ul className="social-icons">
                {social.map((socialIcon) => {
                    const { id, url, icon } = socialIcon
                    return <li key={id} className='social-icon'>
                        <a href={url}>
                            {icon}
                        </a>
                    </li>
                })}
            </ul>
        </div>
    </nav>
}

export default Navbar
