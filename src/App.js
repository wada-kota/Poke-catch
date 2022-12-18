import React, { useState } from 'react'
import styled from 'styled-components';
import { Logic } from './components/Logic';
import HeaderImg from './poke-header.png';

export const App = () => {
  //捕まえた数とみつけた数用 State
  const [catchCount, setCatchCount] = useState(0);
  const [findCount, setFindCount] = useState(0);

  // ポケモンデータ用（名前・画像） State
  const [pokeName, setPokeName] = useState("ピカチュウ");
  const [pokeImg, setPokeImg] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");

  //テキストボックス用 State
  const [text, setText] = useState("");

  return (
    <>
      <SHeader><SImg src={HeaderImg} alt="ヘッダーロゴ画像" /></SHeader>
      <SDiv>
        <SH2>ポケモンの名前を正しく入力してつかまえよう！</SH2>
        <SUl>
          <SLi><SSpan>ポケモンの名前はカタカナで入力しよう！（例：フシギダネ）</SSpan></SLi>
          <SLi><SSpan>名前を間違えるとポケモンは逃げてしまうよ！</SSpan></SLi>
          <SLi><SSpan>名前を入力せずにつかまえようとすると逃げてしまうよ！</SSpan></SLi>
        </SUl>
      </SDiv>
      <Logic catchCount={catchCount} setCatchCount={setCatchCount} findCount={findCount} setFindCount={setFindCount} pokeName={pokeName} setPokeName={setPokeName} pokeImg={pokeImg} setPokeImg={setPokeImg} text={text} setText={setText} />
    </>
  )
};

const SHeader = styled.header`
  height: 45px;
  width: auto;
  padding: 5px 20px;
  background-color: #FFFFCE;
`;

const SImg = styled.img`
  height: 40px;
  width: 175px;
  display: block;
`;

const SDiv = styled.div`
  width: auto;
  padding: 45px 120px 55px;
  text-align: center;
  background-color: #fafafa;
`;

const SH2 = styled.h2`
  padding-bottom: 20px;
  color: #9F4B34;
  font-size: 2.0rem;
  font-weight: 800;
`;

const SUl = styled.ul`
  width: 550px;
  margin: 0 auto;
  padding-left: 60px;
  text-align: left;
`;

const SLi = styled.li`
  margin-bottom: 10px;
  color: #9F4B34;
  font-size: 1.8rem;
`;

const SSpan = styled.span`
  color: #333333;
`;
