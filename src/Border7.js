import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { useStyles } from './hooks/useStyles'

const initialDeck = getDeck()
console.log(initialDeck)

function getDeck() {
    
    const suits = ['♠', '♣', '♥', '♦']
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    const deck = []
    
    suits.forEach((suit) => ranks.forEach((rank) => deck.push({ suit: suit, rank: rank })))
    return deck
}


/**
 * デッキ作成関数
 *
 * 変数宣言
 *  - suits: トランプのスーツ（マーク）のデータを持った配列
 *  - ranks: トランプのランク（数字）のデータを持った配列
 *  - deck: デッキとして返却するための空の配列
 *
 * 処理詳細
 *  - suits、ranks を使用して、 deck にトランプデータを格納する
 *  - データの形式は、suit と rank をキーに持つ Javascript オブジェクト（以下、card オブジェクト）
 *  例: { suit: "♠", rank: "A" }
 *
 *  @return {object[{suit: string, rank: string}]} deck
 *
 */


/**
 * ランクの数値取得関数
 *
 * 処理詳細
 *  - 引数として 文字列 rank を取り、対応する数値を返却する
 *  例： "A" → 1 を返却、"J" → 11 を返却、"5" → 5 を返却
 * 　　（"A", "J", "Q", "K" 以外のときは数値に変換して返却する
 *
 * ※数値変換の際には、Number(string)を用いる
 *
 * @param {string} rank
 * @return {number} Number(rank)
 */
function getRankNum(rank) {}

/**
 * Border7 コンポーネント
 *
 * 処理概要
 *  Border7 ゲームの画面を作成する
 *  カードを並べる PlayArea コンポーネントと、その下にゲーム進行のためのメッセージ出力とボタンを配置する
 *
 * 処理詳細
 *  - style 設定のため、定数 classes を宣言して、useStyles() hook を使用して初期化する
 *
 *  - useState() で以下の state を定義する
 *     - deck 初期値: getDeck() で作成した配列 deck
 *     - card 初期値： getCard() で取得した card オブジェクト
 *     - isWin 初期値： null
 *     - answered 初期値： false
 *     - isGameFinished 初期値： false
 *     - winCount 初期値：0
 *     - loseCount 初期値：0
 *
 * 関数定義
 *  getCard()
 *  checkOver()
 *  check7()
 *  checkUnder()
 *  next()
 *  getButtons()
 *  getMessage()
 *
 */
export default function Border7() {
  /**
   * card オブジェクト取得関数
   *
   * 処理概要
   *  state deck から card オブジェクト要素を取得する
   *
   * 処理詳細
   *  - 定数 index を宣言し、0 から デッキ枚数 までのランダムな整数を代入する
   *  - state deck から定数 index の値を使用して要素（card オブジェクト）を取得する
   *  - 取得した要素は削除し、state deck を更新する
   *
   * ランダムな数値を取得する際には以下を用いる
   * Math.floor(Math.random() * ランダムに取得したい数値の最大値)
   * 例： 0 から 10 までのランダムな数値を取得したい
   * 　　Math.floor(Math.random() * 10);
   *
   * state deck を更新する際は、イミュータブルに更新する
   *
   * 参考：
   *  React.js チュートリアル：　「イミュータビリティは何故重要なのか」
   *  https://ja.reactjs.org/tutorial/tutorial.html#why-immutability-is-important
   *
   * @return {object} cardObj
   */
  function getCard() {}

  /**
   * カードの数値チェック Over
   *
   * 処理概要
   *  カードを一枚引き、その結果に従って以下の state を更新する
   *   - state card
   *   - state winCount または loseCount
   *   - state answered
   *   - state isWin
   *
   * 処理詳細
   *  - 定数 _card を宣言し、getCard() を使用して初期化する
   *  - state card を _card の値で更新する
   *
   *  - カードの数が、7より大きい場合
   *     - state isWin を true に更新する
   *  - カードの数が、7より小さい場合
   *     - state isWin を false に更新する
   *
   *  - state isWin が true の場合
   *     - state winCount の値を +1 する
   *  - state isWin が false の場合
   *     - state loseCount の値を +1 する
   *
   *  - state answered を true に更新する
   *
   */
  function checkOver() {}

  /**
   * カードの数値チェック ７
   *
   * 処理概要
   *  カードを一枚引き、その結果に従って以下の state を更新する
   *   - state card
   *   - state winCount または loseCount
   *   - state answered
   *   - state isWin
   *
   * 処理詳細
   *  - 定数 _card を宣言し、getCard() を使用して初期化する
   *  - state card を _card の値で更新する
   *
   *  - カードの数が、7の場合
   *     - state isWin を true に更新する
   *  - カードの数が、7でない場合
   *     - state isWin を false に更新する
   *
   *  - state isWin が true の場合
   *     - state winCount の値を +1 する
   *  - state isWin が false の場合
   *     - state loseCount の値を +1 する
   *
   *  - state answered を true に更新する
   *
   */
  function check7() {}

  /**
   * カードの数値チェック Under
   *
   * 処理概要
   *  カードを一枚引き、その結果に従って以下の state を更新する
   *   - state card
   *   - state winCount または loseCount
   *   - state answered
   *   - state isWin
   *
   * 処理詳細
   *  - 定数 _card を宣言し、getCard() を使用して初期化する
   *  - state card を _card の値で更新する
   *
   *  - カードの数が、7より小さい場合
   *     - state isWin を true に更新する
   *  - カードの数が、7より大きい場合
   *     - state isWin を false に更新する
   *
   *  - state isWin が true の場合
   *     - state winCount の値を +1 する
   *  - state isWin が false の場合
   *     - state loseCount の値を +1 する
   *
   *  - state answered を true に更新する
   *
   */
  function checkUnder() {}

  /* 
  // for debug
  useEffect(() => {
    console.log(deck);
  }, [deck]);
 */

  /**
   * ゲーム進行関数
   *
   * 処理概要
   *  - next ボタン, finish ボタンが押されたときの処理を行う
   *
   * 処理詳細
   *  - state deck の長さが 0 の場合
   *     - satate isGameFinished を true に更新する
   *  - それ以外の場合
   *     - state card の値を null に更新する
   *     - state answered の値を false に更新する
   *
   */
  function next() {}

  /**
   * ボタンコンポーネント取得関数
   *
   * 処理概要
   * state answered の値に従って、ボタンコンポーネントを返却する
   *
   * 処理詳細
   *  - state answered が true の場合
   *     - ゲーム進行ボタンコンポーネント GameProgressButton を返却する
   *       ※ props には以下の関数、値を設定する
   *        - onClickNext: next()
   *        - isTheLastGame: deck.length が 0 かどうか
   *
   *  - state answered が false の場合
   *     - Border7 ボタンコンポーネント Border7Buttons を返却する
   *       ※ props には以下の関数を設定する
   *        - onClickOver: chechOver()
   *        - onClick7: check7()
   *        - onClickUnder: checkUnder()
   *
   * 参考
   * props に関数を渡す際に、関数名の後に () を付けるかどうかでどのような違いがあるかについては以下のサイトを参照して理解を深めてください
   *  React.js ドキュメント：　「コンポーネントに関数を渡す」
   *  https://ja.reactjs.org/docs/faq-functions.html
   *  React.js チュートリアル：　「インタラクティブなコンポーネントを作る」の「補足」
   *  https://ja.reactjs.org/tutorial/tutorial.html#making-an-interactive-component
   *
   * @return {component} <GameProgressButton /> or <Border7Buttons />
   */
  function getButtons() {}

  /**
   * メッセージ取得関数
   *
   * 処理概要
   *  - 現在のゲーム進行に従って、画面に表示するメッセージコンポーネントを返却する
   *
   * 処理詳細
   *  - state isGameFinished が true の場合
   *     - 'Thank you for playing!', `Win: ${winCount} Lose: ${loseCount}` を配列に追加する
   *  - state answered が true かつ isWin が true の場合
   *     - 'Win!' を配列に追加する
   *  - state answered が true かつ isWin が false の場合
   *     - 'Lose!' を配列に追加する
   *  - それ以外の場合
   *     - 'Over or Under?' を配列に追加する
   *
   * @return {component} <Message />
   */
  function getMessage() {}

  /**
   * Border7 コンポーネント返却
   *
   * 返却内容
   *  - PlayArea コンポーネント
   *    ※ props には以下の値を設定する
   *     - card: state card
   *
   *  - getMessage() から返却される Message コンポーネント
   *
   *  - state isGameFinished が false の場合
   *     - getButtons() から返却されるボタンコンポーネント
   *
   */
  return (
    <Box>
      {/* PlayArea コンポーネント */}
      <Box /* className={classes.messageArea} */>
        {/* getMessage() から返却されるコンポーネント */}
        {/* getButtons() から返却されるコンポーネント */}
      </Box>
    </Box>
  )
}
