import React, { useState } from 'react'

const AddBtnComponent = ({onAdd}) => {

	const [newTodo, setNewTodo] = useState('')

	const addList = () =>{
		onAdd(newTodo)
		setNewTodo("")
	}

	const onEnter = (e) =>{
		if (e.key === 'Enter'){
			addList();
		}
		
	}

	return (
		<div>
			<input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyPress={(e) =>onEnter(e)}/>
			<button onClick={addList}>ADD</button>
		</div>
	)
}

export default AddBtnComponent
