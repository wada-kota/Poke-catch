import React from 'react'
import styled from 'styled-components';
import BgImg from '../logic-bg.png';

export const Logic = (props) => {
  const {catchCount, setCatchCount, findCount, setFindCount, setPokeName, pokeName, setPokeImg, pokeImg, text, setText} = props;

  // API用 ランダム数字生成（1-905）
  // 画面が再描画される度に実行されている。意図的ではないが問題なし？
  const ramNum = Math.floor(Math.random() * 905);

  //ポケモン名 APIの処理
  const getName = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${ramNum}`;
    await fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      //日本語名を取得する処理（for文）
      for(let i = 0; data.names.length; i++) {
        if(data.names[i].language.name === "ja") {
          setPokeName(data.names[i].name);
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
  };

  //ポケモン画像 APIの処理
  const getImg = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ramNum}`;
    await fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setPokeImg(data.sprites.front_default)
    })
    .catch(error => {
      console.log(error)
    })
  };

  //入力値の取得（stateの更新）
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  //①みつけた数のカウントアップする
    //②textとpokeNameを照合して正しければ捕まえた数をカウントアップする
    //③textをnullで更新
    //※将来的には入力値（text）がブランクの場合は処理を行わない予定
    const catchPoke = () => {
        setFindCount((prev) => prev + 1);
        if(pokeName === text) {
          setCatchCount((prev) => prev + 1);
        }
        //Apiの実行
        getName();
        getImg();
        //入力値（text）をブランクに更新
        setText("");
      };

    //〇〇〇〇〇がとびだしてきた！
    //ポケモンの名前に応じて〇を取得・表示（for文）
    let appearText = "";
    for(let i=0; i< pokeName.length; i++) {
      appearText += "〇";
    }

  return (
    <>
      <SDiv style={{ backgroundImage: `url(${BgImg})` }}>
        <SP>あっ！　やせいの</SP>
        <SP>{appearText}が　とびだしてきた！</SP>
        <div>
          <SImg src={pokeImg} alt="ポケモン" />
          <SUl>
            <SLi>つかまえた数：{catchCount}</SLi>
            <SLi>みつけた数：{findCount}</SLi>
          </SUl>
        </div>
        <SInput type="text" placeholder='例：フシギダネ' value={text} onChange={onChangeText} />
        <SButton onClick={catchPoke}>つかまえる！</SButton>
      </SDiv>
    </>
  )
};

const SDiv = styled.div`
  height: 350px;
  width: auto;
  padding: 75px 120px 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 0;
  text-align: center;
`;

const SP = styled.p`
  width: 300px;
  margin: 0 auto 15px;
  font-size: 1.8rem;
  text-align: left;
`;

const SImg = styled.img`
  width: 175px;
  height: 175px;
  margin-right: 30px;
  display: inline-block;
  vertical-align: middle;
`;

const SUl = styled.ul`
  font-size: 1.7rem;
  list-style: none;
  display: inline-block;
  vertical-align: middle;
`;

const SLi = styled.li`
  margin-bottom: 15px;
  text-align: left;
`;

const SInput = styled.input`
  height: 30px;
  width: 150px;
  margin-top: 10px;
  margin-right: 15px;
`;

const SButton = styled.button`
  height: 35px;
  margin: 10px auto 0;
  vertical-align: middle;
`;