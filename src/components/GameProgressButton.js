import React from 'react'
import { Box, Button } from '@material-ui/core'

/**
 * ゲーム進行ボタンコンポーネント
 *
 * 処理概要
 *  - ゲームを進めるためのボタンを作成する
 *
 * 処理詳細
 *  - Button コンポーネントの onClick プロパティに props.onClickNext を設定する
 *
 *  - props.isTheLastGame の値に従って、ボタンの名称を設定する
 *     - props.isTheLastGame が true の場合
 *        - "FINISH"
 *  - props.isTheLastGame が false の場合
 *     - "NEXT"
 *
 * CHALLENGE TASK!!
 * キーボード操作で、ボタンのクリックイベントを発火できるようにする
 *
 * NEXT ボタンが表示されているとき、N キーが押されたらクリックイベントを発火
 * FINISH ボタンが表示されているとき、F キーが押されたらクリックイベントを発火
 * （Enter キーが押されたらクリックイベントを発火するようにしてもよい）
 *
 * useEffect hook を使用して、コンポーネントがマウントされたタイミングで イベントリスナーを登録してください
 * なお、このコンポーネントがアンマウントされた場合はイベントを監視する必要がなくなりますので、登録したイベントリスナーは削除してください
 *
 * 参考：
 * React.js フック API リファレンス：　「useEffect」
 * https://ja.reactjs.org/docs/hooks-reference.html#useeffect
 *
 * @param {*} props
 */
export default function GameProgressButton(props) {
  return (
    <Box mt={1}>
      <Button variant="contained" /* onClick={props.onClickNext} */>{/* FINISH or NEXT */}</Button>
    </Box>
  )
}
