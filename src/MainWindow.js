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
    }
  }

  render() {
    return (
        <div>
            <h1 className='name'>PABLO LOPEZ</h1>
            <h1 className='title'>SOFTWARE DEVELOPER</h1>
        <div className="parallelogram"></div>
        <div className="rectangle"></div>
        </div>
    );
  }
}

export default MainWindow;