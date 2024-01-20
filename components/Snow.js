import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'
import s from "./Snow.module.css"

//Component used to display snowfall
export default function Snow() {
    const [showChild, setShowChild] = useState(false);
    // Wait until after client-side hydration to show, SnowFall component has useLayoutEffect which gives react hydration warning so this is needed
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        // You can show some kind of placeholder UI here
        return null;
    }

    return (
        <div className={s.container}>
            <Snowfall/>
        </div>
    )
  }