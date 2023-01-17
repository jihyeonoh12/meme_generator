import React from 'react';


export default function Body () {
    const[meme, setMeme] = React.useState({
        upperText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/43a45p.png",
    });

    const[randomPic, setRandomPic] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setRandomPic(data.data.memes))
    },[])

    function changeRandomPic () {
        const randomNum = Math.floor(Math.random() * randomPic.length)
        
        setMeme((prevMeme => {
            return {
            ...prevMeme,
            randomImage: randomPic[randomNum].url
        }})) 
    }

    return(
        <section className="body">
         <input placeholder="Upper Text" />
         <input placeholder="Bottom Text" />
        <button onClick={changeRandomPic}>Get Random Pic</button>
        <img src={meme.randomImage} />
        </section>
    )
}