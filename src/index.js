import {
  useEffect,
  useState
} from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function ColorCounter(counter) {
  const color = "counterBlue"
  if (counter <= 12) {
    return "counterRed";
  } else if (counter <= 20) {
    return "counterOrange";
  }

  return color;
}



function ButtonCounter(props) {
  const [textButton, setTextButton] = useState("Start");


  const handleButton = () => {
      if (props.status === "OFF") {
        props.onSetStatus("ON");
        setTextButton("Stop");
      } else if (props.status === "ON") {
        props.onSetStatus("OFF");
        setTextButton("Start");


      }};

    return (
      <div>
        <button onClick = {handleButton} > {textButton} </button>
      </div>
    )


};



function Counter(props) {
  const [counter, setCounter] = useState(props.seconds);
  const counterType = ColorCounter(counter);
  const [status, setStatus] = useState("OFF");

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (status === "ON" && counter > 0) {
          setCounter((counter - 1).toLocaleString('en-US',
            {minimumIntegerDigits: 2, useGrouping: false}));
        }}, 1000)

    return () => clearInterval(interval);
  });


  return (
    <div className = { counterType } > { counter }
      <p> SECONDES </p>
      <ButtonCounter status={status} onSetStatus={setStatus}/>
    </div>
  );

}



function App() {


  return (
    <div className = "app" >
      <Counter seconds = {40}/>
      <Counter seconds = {45}/>
      <Counter seconds = {50}/>
    </div>
  )
}


// ========================================

ReactDOM.render( < App / > , document.getElementById('root'));
