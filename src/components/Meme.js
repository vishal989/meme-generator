import React, { useState } from 'react';
import memesData from '../memesData.js';

export default function Meme() {
  //const [memeImage, setMemeImage] = useState('');
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ihzfe.jpg"
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
    console.log(url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      {<img src={meme.randomImage} alt="" className="meme--image" />}
    </main>
  );
}
