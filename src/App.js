import { useEffect, useState } from 'react';
import AddBtnComponent from './AddBtnComponent';
import './App.css';
import MyListsComponent from './MyListsComponent';

function App() {

	const [todo,setTodo] = useState([])
	const [isRender, setIsRender] = useState(false)

	const forAdd = (letter) =>{
		setTodo([...todo, {id : todo.length, note : letter, status: false}])
	}
	const forDelete = (taskId) =>{
		setTodo(todo.filter(id => id.id !== taskId))
	}
	const plzFix = (task, text)=>{
		setTodo([
			...todo.map((want) => {
				if (want.id === task.id){
					return {...want, note : text}
				} else {
					return want
				}
			})
		])}
	const saveData = () =>{
		window.localStorage.setItem('myList', JSON.stringify(todo))
	}


	useEffect(() => {
		if (isRender){
			saveData();
			console.log('saveData')
		} else {
			setIsRender(true)
		}
	},[todo]);

	const loadData = ()=> {
		setTodo(JSON.parse(window.localStorage.getItem('myList')))	
	}
	const onChecked = (e, task)=>{
		setTodo([
			...todo.map((t) => {
				if (t.id === task.id){
					return {...t, status : e}
				} else{
					return t
				}
			})
		])
	}
	
	useEffect(()=> {
		loadData();
		console.log('loadData')
	},[])
	

  return (
    <div className="App">
      <h1>My to-do-list</h1>
			{todo.map((task) => <MyListsComponent key={task.id} value={task} onDelete={() => forDelete(task.id)} plzFix={(text) => plzFix(task, text)} func={(e)=> onChecked(e, task)}/>)}
			<AddBtnComponent onAdd={forAdd}/>
    </div>
  );
}

export default App;
