import React from 'react';
import Swipeable from 'react-swipeable';

class Destination extends React.Component{ 
     
  swiping(e, deltaX, deltaY, absX, absY, velocity) {
 //   console.log("User is swiping...", e, deltaX, deltaY, absX, absY, velocity)
  }
 
  swipingLeft(e, absX) {
//    console.log("Swipe Left...", e, absX)
  }
 
  swiped(e, deltaX, deltaY, isFlick, velocity) {
//    console.log("Swiped...", e, deltaX, deltaY, isFlick, velocity);
    console.log("DESTINATION WAS SWIPPED")

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
            TO 74TH AND ROOSEVELT
            </div></Swipeable>
        )
    }
}

export default Destination