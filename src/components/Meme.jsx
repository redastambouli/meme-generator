import React, { useState } from "react";
import memesData from "../../memesData";

const Meme = () => {

    function getMemeImage() {
        const memes = memesData.data.memes
        const random = Math.floor(Math.random() * memes.length)
        const url = memes[random].url
        setMemeImage(url)
    }

    const [memeImage, setMemeImage] = useState('')

    return (
        <main>
            <div className="form">
                <div>
                    <label htmlFor="top-text" className="form--label">Top text</label>
                    <input
                        type="text"
                        className="form--input"
                        placeholder="Shut up"
                        id="top-text"

                    />

                </div>
                <div>
                    <label htmlFor="bottom-text" className="form--label">Bottom Text</label>
                    <input
                        type="text"
                        className="form--input"
                        placeholder="and take my money"
                        id="bottom-text"
                    />

                </div>

                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image :)
                </button>
            </div>
            <img src={memeImage} className="meme--image" />
        </main>

    )
}

export default Meme