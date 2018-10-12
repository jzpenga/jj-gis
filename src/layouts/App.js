import React,{Component} from 'react';
import Header from './Header';
import LeftTree from './LeftTree';
import RightOption from './RightOption';
import BottomInfo from './BottomInfo';
import Map from "./Map";
import style from './index.css'

class App extends Component{
  render(){
    return (
      <div className={style.app}>
        <Header/>
        <LeftTree/>
        <RightOption/>
        <BottomInfo/>
        <Map/>
      </div>
    );
  }
}

export default App;
