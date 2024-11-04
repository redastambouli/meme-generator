import React, { useState } from "react";
import memesData from "../../memesData";


const Meme = () => {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memes = allMemeImages.data.memes
        const random = Math.floor(Math.random() * memes.length)
        const url = memes[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        }))
    }

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
            <img src={meme.randomImage} className="meme--image" />
        </main>

    )
}

export default Meme