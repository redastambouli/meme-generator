import face from '/src/assets/Cry-Laugh-Emoji.png';

const Header = () => {
    return (
        <header className="header">
            <img
                src={face}
                className='header--image'
            />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='Header--project' style={{ display: 'none' }}>React Course - Project 3</h4>
        </header>
    )
}

export default Header;