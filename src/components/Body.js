import React from 'react';
import html2canvas from 'html2canvas';


export default function Body (props) {
    
    const[meme, setMeme] = React.useState({
        upperText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/4t0m5.jpg",
        randomImageName: "Shiba Inu",
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
            randomImage: randomPic[randomNum].url,
            randomImageName: randomPic[randomNum].name
        }})) 
    }

    function handleChange(event) {
   
      setMeme((prevText => {
        return {
        ...prevText,
        [event.target.name ]: event.target.value,
    }}))

    }

    const printRef = React.useRef();

    const handleDownloadImage = async () => {
      const element = printRef.current;
    
    //   const element = document.getElementById('capture');
      const canvas = await html2canvas(element, {allowTaint: true, useCORS: true, logging: true});
  
      const data = canvas.toDataURL('image/jpg');
      const link = document.createElement('a');
  
      if (typeof link.download === 'string') {
        link.href = data;
        link.download = meme.randomImageName +'.jpg';
  
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(data);
      }
    };
 
    const modeName = props.darkMode === true ? 'light' : 'dark'

    return(
        <section className={'body ' + modeName} >
        <div className='inputs'>
         <input placeholder="Upper Text" name="upperText" onChange={handleChange} value={meme.upperText}/>
         <input placeholder="Bottom Text" name="bottomText" onChange={handleChange} value={meme.bottomText}/>
        </div>
        <button className='RandomButtom' onClick={changeRandomPic}>Get Random Image</button>
        <div className={'meme-container '+ modeName}  ref={printRef} >
        <h1 className='text upperText'>{meme.upperText}</h1>
        <img className='randompic' src={meme.randomImage} alt={meme.randomImageName} />
        <h1 className='text bottomText'>{meme.bottomText}</h1>
        </div>
        <button className='exportButtom' onClick={handleDownloadImage}>export Image</button>

        </section>
    )
}