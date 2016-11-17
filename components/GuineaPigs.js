var React = require('react');

var GuineaPigs = React.createClass({
  render: function () {
    var src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
});
/*functional stateless component which is the same as the last one;
function GuineaPigs(props){
  var src = props.src;
  return (
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src={src} />
    </div>
  );
}
*/

module.exports = GuineaPigs;