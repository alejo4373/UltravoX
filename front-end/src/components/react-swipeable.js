import Swipeable from 'react-swipeable'
import React from 'react';
import BusRoute from "./BusRoute.js";
import Stuff from ".././testAPI/testAPI.js";
 
class SwipeComponent extends React.Component {
 
  swiping(e, deltaX, deltaY, absX, absY, velocity) {
    console.log("User is swiping...", e, deltaX, deltaY, absX, absY, velocity)
  }
 
  swipingLeft(e, absX) {
    console.log("Swipe Left...", e, absX)
  }
 
  swiped(e, deltaX, deltaY, isFlick, velocity) {
    console.log("Swiped...", e, deltaX, deltaY, isFlick, velocity);
    console.log(Stuff)
}
 
  swipedUp(e, deltaY, isFlick) {
    console.log("Swiped Right..", e, deltaY, isFlick)
  }
 
  render() {
    return (
      <Swipeable
        onSwiping={this.swiping}
        onSwipingLeft={this.swipingLeft}
        onSwiped={this.swiped}
        onSwipedUp={this.swipedRight} >
   <BusRoute /><br />
      </Swipeable>
    )
  }
}

export default SwipeComponent;