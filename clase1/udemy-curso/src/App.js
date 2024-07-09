import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import ConditionalSection from './sections/conditional';


//const Hello = (props) => <h2>{props.title}</h2>;

class Hello extends Component{
  render(){
    return  <h2>{this.props.title}</h2>;
  }
}

class Text extends Component{
  render(){
    const {
      arrayOfNumber,
      multiply,
      objectWithInfo,
      title
    }  = this.props;
    
    //const textoSegundoBool = isActivate? 'On':'Off';
    const mappedNumbers = arrayOfNumber.map(multiply);
    return( 
    <div>
      {title}
      <p>{mappedNumbers.join(', ')}</p>
      <p>{objectWithInfo.key}</p>
    </div> 
    )   
  }
}

class Tittle extends Component{
  render(){
    return <h1>{this.props.text}</h1>
  }
}

Tittle.defaultProps={
  text:"Titulo por defecto"
}

class Contador extends Component{
  constructor(props){
    super(props)
    this.state = {contador:this.props.contadorInicial}
    setInterval(() =>{
      this.setState({contador:this.state.contador + 1})
    },1000)
  }
  render(){
    
    return <ContadorNumero numero={this.state.contador}/>
  }
}

Contador.defaultProps = {
  contadorInicial:0
}

class ContadorNumero extends Component{
  render(){
    return <span>{this.props.numero}</span>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ConditionalSection />
        <Contador contadorInicial={100}/>
        <Tittle text='Otro Titulo'/>
        <Hello title="Hello from props"/>
        <Text 
          arrayOfNumber={[2,3,19]}
          isActivate 
          number={2} 
          multiply = {(number => number * 4)}
          objectWithInfo={{key:'first value',key2:'otherValue'}}
          text='Texto en string' 
          title={<h1>Este es el titulo</h1>}
          />
        <h3>Vamos a aprender React</h3>
        <p>Hola mundo, estoy usando React</p>
        <strong>Esto es un strong</strong>
      </header>
    </div>
  );
}

export default App;
