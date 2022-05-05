import React, { Component } from 'react';
import memojiYes from '../assets/memojis/memoji-yes.png'

class About extends Component {
  render() {
    return (
      <div id="About" className="text-white w-full h-screen flex justify-center items-center flex-wrap">
        <div className="flex flex-col justify-center items-center">
          <h3 className="bg-dark-bg text-yellow-select text-center ">Sobre mim</h3>
          <p className="break-normal text-center max-w-prose text-[18px]">
            Olá, me chamo Mauricio Lopes, tenho 24 anos, moro em Serra - ES e curso Desenvolvimento Web Fullstack pela <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a>. Em meados de 2021 comecei meus estudos mais afundo com programação e estou aprendendo cada dia mais para proporcionar a melhor experiência para os usuários da internet.
          </p>
        </div>
        <img src={memojiYes} />
      </div>
    );
  }
}

export default About;