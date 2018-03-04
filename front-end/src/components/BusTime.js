import React from 'react';
import Swipeable from 'react-swipeable';


class BusTime extends React.Component{
     
  swiping(e, deltaX, deltaY, absX, absY, velocity) {
//    console.log("User is swiping...", e, deltaX, deltaY, absX, absY, velocity)
  }
 
  swipingLeft(e, absX) {
//    console.log("Swipe Left...", e, absX)
  }
 
  swiped(e, deltaX, deltaY, isFlick, velocity) {
//    console.log("Swiped...", e, deltaX, deltaY, isFlick, velocity);
      console.log("BUSTIME WAS SWIPPED")

}
 
  swipedUp(e, deltaY, isFlick) {
//    console.log("Swiped Right..", e, deltaY, isFlick)
  }   
    render() {
        return (
            <Swipeable
            onSwiping={this.swiping}
            onSwipingLeft={this.swipingLeft}
            onSwiped={this.swiped}
            onSwipedUp={this.swipedRight} >
            <div class="Block">
            8:45
            </div></Swipeable>
        )
    }
}

export default BusTime