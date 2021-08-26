import React from 'react'
import { Button, Grid } from 'semantic-ui-react'

const ActivityLogTracker = () => {
  
  const handleClick = () => {
    debugger
    // find what it is and then execute
  }
  
  return (
    <Grid.Column width={10}>
        <Button onClick={handleClick} id="start">Start</Button>
        <Button id="stop">Stop</Button>
        <Button id="commit">Commit</Button>
        <Button id="discard">Discard</Button>
    </Grid.Column>
  )
}

export default ActivityLogTracker