import React, { Component } from 'react';
import './MainWindow.css';

class MainWindow extends Component {
  constructor(){
    super();
    this.state={
      coordinates: [],
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  createCave(x, y){

    let cave = (
      <div className='circle1' style={{'grid-column-start': `${x}`, 'grid-row-start': `${y}`}}></div>);
    return cave;
  }

  populateGrid(){
    let grid = [];
    let children = [];
    let hLines = [];
    let vLines = [];
    this.state.coordinates.forEach(coord => {
      children.push(this.createCave(coord[0], coord[1]));
    })
    for (let i=1; i < 21; i++){
      hLines.push(<div className='hLine' style={{'grid-row': `${i}`}}></div>)
    }
    for (let i=1; i < 21; i++){
      vLines.push(<div className='vLine' style={{'grid-column': `${i}`}}></div>)
    }
    grid.push(<div className='gridContainer'>{hLines}{vLines}{children}</div>)
    return grid;
  }

  addCave(){
    let coords = this.state.value.split(',');
    console.log(this.state.coordinates);
    this.state.coordinates.push([parseInt(coords[0]), parseInt(coords[1])]);
    this.forceUpdate();
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <div>
            <h1 className='name'>PABLO LOPEZ</h1>
            <h1 className='title'>SOFTWARE DEVELOPER</h1>
        <div className="parallelogram"></div>
        <div className="rectangle"></div>
        <div className='grid'>
        {this.populateGrid()}
        </div>
        <input type="text" className="caveInput" onChange={this.handleChange}/>
        <button className='addCave' onClick={() => this.addCave()}>Add cave</button>
        <text className='caveList'>{
          this.state.coordinates}</text>
        </div>
    );
  }
}

export default MainWindow;