import { useState } from 'react'
import './App.css'
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import React from 'react'
import ParentComponent from './component/Parentcomponent';
import Todolist from './component/Todolist';
import Booklist from './component/BookList';
import MovieList from './component/MovieList';
function App() {

return (
// <>
// <div>
// <Hello/>
// <Welcome/>
// </div>
// </>
<div>
<h1>  </h1>
<Todolist/>
<MovieList/>
<Booklist/>
 <Hello/>
 <Welcome/>
 
{/* <h1>React Props Example</h1>
<ParentComponent/> */}
</div>
)
}

export default App;