import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import NavBar from './navBar';



export default function ButtonAppBar() {


  return (
    <div className="{classes.root}">
      <AppBar position="static">
            <NavBar />
      </AppBar>
    </div>
  );
}
