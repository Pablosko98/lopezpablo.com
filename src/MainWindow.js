import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

import './MainWindow.css';

class MainWindow extends Component {
  constructor(){
    super();
    this.state={
      coordinates: [],
      valuex: '',
      valuey: ''
    }
    this.handleChangex = this.handleChangex.bind(this);
    this.handleChangey = this.handleChangey.bind(this);
    this.deleteCave = this.deleteCave.bind(this);
    this.showCave = this.showCave.bind(this);
    this.hideCave = this.hideCave.bind(this);
  }

  createCave(x, y){
    let cave = (
      <div className='circle1' id={`${x}${y}`} style={{'grid-column-start': `${x}`, 'grid-row-start': `${y}`}}></div>);
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

  deleteCave(value){
    var index = this.state.coordinates.indexOf(value);
    if (index !== -1) this.state.coordinates.splice(index, 1);
    this.forceUpdate();
  }

  showCave(value){
    let highlight = document.getElementById(value[0]+value[1]);
    highlight.classList.add('red');
  }

  hideCave(value){
    let highlight = document.getElementById(value[0]+value[1]);
    highlight.classList.remove('red');
  }

  addCave(){
    if (this.state.valuex > 20 || this.state.valuex < 1){

    } else if (this.state.valuey > 20 || this.state.valuey < 1){

    } else {
      let duplicate = false;
      let counter = 0;
      if(this.state.coordinates.length < 1){
        this.state.coordinates.push([this.state.valuex, this.state.valuey]);
        this.setState({valuey: '', valuex: ''})
      } else {
      this.state.coordinates.forEach(coord => {
        counter++;
        if(coord[0] === this.state.valuex && coord[1] === this.state.valuey){
          duplicate = true;
        }
        if(!duplicate && counter === this.state.coordinates.length){
          this.state.coordinates.push([this.state.valuex, this.state.valuey]);
          this.setState({valuey: '', valuex: ''})
          }
      });
    }
    }
  }

  handleChangex(event){
    this.setState({valuex: event.target.value});
  }

  handleChangey(event){
    this.setState({valuey: event.target.value});
  }

  populateList(){
    let list = [];
    let items = [];
    let counter= 0;
    this.state.coordinates.forEach(coord => {
      items.push(
      <ListItem onMouseEnter={() => this.showCave(coord)} onMouseLeave={() => this.hideCave(coord)}>
        <ListItemText
          primary={`${++counter}. [${coord[0]}-${coord[1]}]`}
        />
        <ListItemSecondaryAction>
                      <IconButton aria-label="Delete" onClick={() => this.deleteCave(coord)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
      </ListItem>)});
    list.push(<List className='caveList'>{items}</List>);
    return(list);

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
        <TextField
          id="standard-number"
          label="Enter x"
          type="number"
          value={this.state.valuex}
          className={'caveInputx'}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          onChange={this.handleChangex}
          InputProps={{ inputProps: { min: 1, max: 20 } }}
        />
        <TextField
          id="standard-number"
          label="Enter y"
          value={this.state.valuey}
          type="number"
          className={'caveInputy'}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          onChange={this.handleChangey}
          InputProps={{ inputProps: { min: 1, max: 20 } }}
        />
        <Button className='addCave' color="primary" variant="contained" onClick={() => this.addCave()}>Add cavern</Button>
        {this.populateList()}
        </div>
        </div>
    );
  }
}

export default MainWindow;