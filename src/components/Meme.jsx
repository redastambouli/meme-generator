import React, { useState, useEffect } from "react";
//import memesData from "../../memesData";


const Meme = () => {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])


    const [allMemeImages, setAllMemeImages] = useState()

    function getMemeImage() {
        const random = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    const handleChange = (event) => {
        const { value, name, type, checked } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
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
                        onChange={handleChange}
                        name='topText'
                        value={meme.topText}

                    />

                </div>
                <div>
                    <label htmlFor="bottom-text" className="form--label">Bottom Text</label>
                    <input
                        type="text"
                        className="form--input"
                        placeholder="and take my money"
                        id="bottom-text"
                        onChange={handleChange}
                        name='bottomText'
                        value={meme.bottomText}
                    />

                </div>

                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image :)
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>

    )
}

export default Meme