import React from 'react'

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded h-full">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - Create and design by Rafał. </p>
            </aside>
        </footer>
    )
}

export default Footer