import { useState } from 'react';
import Nav from '../Navbar';

function Playlist({url, title, artist, toggleSelect}) {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelect = () => {
        setIsSelected(!isSelected);
        toggleSelect();
    };

    return (
        <>
        <div>
            <Nav />
        </div>
        <div className='cardPlaylist'>
            <img src={url} alt={title} />
            <h3>{title}</h3>
            <p>{artist}</p>
            <button className="btn-green" onClick={handleSelect}>
                {isSelected ? "Deselect" : "Select"}
            </button>
        </div>
        </>
    );
}

export default Playlist;