import { useState } from "react"
import styles from './Navbar.module.css'

export function Navbar({name,links}){
    return (
        <nav className={styles.container}>      
            <h1>{name}</h1>
            <ul>
                {links.map((link)=>( <li key={link}><a href="/">{link}</a></li>))}
            </ul>
            <button >asdsadsasa</button>
        </nav>
    )
}
