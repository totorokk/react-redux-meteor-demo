import React, { Component } from 'react';
const taskHeaderComponent = ({tasks})=>(
  <header>
    <h1>Todo List ({(tasks ||[] ).length})</h1>
  </header>
)

export default  taskHeaderComponent;
