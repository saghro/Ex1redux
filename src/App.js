
import { connect ,useSelector } from 'react-redux';
import './App.css';

function App(props) {
  const num = useSelector(data =>data.num)
  return (
    <div className="App">
      <div>{num}</div>
      <div>
          <button onClick={props.inc}>Incrementer</button>
          <button onClick={props.dec}>Decrementer</button>
          <button onClick={props.reset}>Reset</button>
      </div>
    </div>
  );
}
const mapDispatchToProps =(dispatch) =>{
  return{
    inc:() => dispatch({type:"Incrementer"}),
    dec:() => dispatch({type:"Decrementer"}),
    reset : () =>dispatch({type:"Reset"})
  }
}


export default connect(null,mapDispatchToProps) (App);
