var React = require('react');

var Sibling = React.createClass({
  render: function () {
    var name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
});

module.exports = Sibling;

/*

Let's review. Follow each step in the code editor:

1.A stateful component class defines a function that calls this.setState. (Parent.js, lines 11-15)
2.The stateful component passes that function down to a stateless component. (Parent.js, line 20)
3.That stateless component class defines a function that calls the passed-down function, 
  and that can take an event object as an argument. (Child.js, lines 4-7)
4.The stateless component class uses this new function as an event handler. (Child.js, line 14)
5.When an event is detected, the parent's state updates. (A user selects a new dropdown menu item)
6.The stateful component class passes down its state, distinct from the ability to change its state,
   to a different stateless component. (Parent.js, line 21)
7.That stateless component class receives the state and displays it. (Sibling.js, lines 8-10)
8.An instance of the stateful component class is rendered. One stateless child component displays the state, 
  and a different stateless child component displays a way to change the (Parent.js, lines 27-30)
9.This pattern occurs in React all the time! The more that you see it, the more that its elegance will become clear.

Being introduced to this pattern is your first step towards understanding how React apps fit together! 
You'll get more practice using it throughout this course, as well as in the course after this one.

*/