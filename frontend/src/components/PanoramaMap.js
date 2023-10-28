import React from 'react';
import usePanorama from '../utility/usePanorama';
import '../styles/PanoramaMap.css';
import LabelSelector from './LabelSelector';
/*
    The "PanoramaMap" React component presents Google Street View in your React app.
    It uses the "usePanorama" hook to allow moving around the map using the keyboard.

    Returns:
        html div component of the map that covers the screen.
 */

function PanoramaMap() {
    const [panoRef, , setPov, setZoom] = usePanorama();
    function handleKeyDown(event) {
        // looking up/down keys
        if (event.key === 'i') {
            event.preventDefault();
            event.stopPropagation();
            console.log('i') // for debugging
            setPov((oldH, oldpP) => { return { heading: oldH, pitch: oldpP + 3 } })

        }
        else if (event.key === 'k') {
            event.preventDefault();
            event.stopPropagation();
            setPov((oldH, oldpP) => { return { heading: oldH, pitch: oldpP - 3 } })
        }
        // zoom keys
        else if (event.key === 'l') {
            event.preventDefault();
            event.stopPropagation();
            setZoom((oldZ) => { return oldZ + 1 })
        }
        else if (event.key === 'j') {
            event.preventDefault();
            event.stopPropagation();
            setZoom((oldZ) => { return oldZ - 1 })
        }
    }


    // Try adding more panorama windows.
    return (
        <div className="absolute w-full h-full -z-10" >
            <div className="mapContainer" ref={panoRef} onKeyDown={handleKeyDown} if="pano"></div>
            <LabelSelector/>
            {/* <LabelObject onClick={startAnimation}></LabelObject> */}
        </div>
    );
}

export default PanoramaMap;




