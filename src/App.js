import React from 'react';
import { useState } from 'react/cjs/react.development';
import AddBtnComponent from './AddBtnComponent';
import './App.css';
import FixList from './FixList';
import MyListItem from './MyListItem'
function App() {

	const [todo,setTodo] = useState([{id : 0 , note : '알고리즘 공부'}])

	const onAdd = (newTodo) =>{
		setTodo([...todo,
			{id : Date.now(), note : newTodo}])
	}

	const onDelete = (vl) => {
		setTodo([...todo.filter(el => el.id !== vl.id)])
	}

	

	const onFix = (e)=>{
		e.val ? e.val = false : e.val = true
		if (e.val){
			
		}
	}
	
  return (
		<>
    	<header>
				<h1>오늘 할일</h1>
			</header>
			<AddBtnComponent onAdd={onAdd}/>
			{todo.map(function(task) {
				return <MyListItem text={task.note} key={task} onDelete={() => onDelete(task)} onFix ={(e)=> onFix(e)}/>
			})}
		</>
  );
}

export default App;
