import React, { useEffect } from 'react'
import { Box, Button } from '@material-ui/core'

export default function Border7Buttons(props) {
  useEffect(() => {
    function click(event) {
      switch (event.key) {
        case 'o':
          props.onClickOver()
          break
        case '7':
          props.onClick7()
          break
        case 'u':
          props.onClickUnder()
          break
        default:
          break
      }
    }
    document.body.addEventListener('keydown', click, {
      passive: false,
    })
    return () => {
      document.body.removeEventListener('keydown', click, {
        passive: false,
      })
    }
  }, [])
  return (
    <Box display="flex" flexDirection="row" justifyContent="center" mt={1}>
      <Box mx={1}>
        <Button variant="contained" onClick={props.onClickOver}>
          OVER
        </Button>
      </Box>
      <Box mx={1}>
        <Button variant="contained" onClick={props.onClickOver}>
          7
        </Button>
      </Box>
      <Box mx={1}>
        <Button variant="contained" onClick={props.onClickOver}>
          UNDER
        </Button>
      </Box>
    </Box>
  )
}
