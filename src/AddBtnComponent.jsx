import React, { useState } from 'react'

const AddBtnComponent = ({ onAdd }) => {

	const [letter, setLetter] = useState('')

	const AddList = () =>{
		onAdd(letter);
		setLetter('')
	}
	const onEnter = (e) =>{
		if (e.key === 'Enter'){
			AddList();
		}
	}
	
	return (
		<div>
			<input value={letter} onChange={(e) => setLetter(e.target.value)} placeholder='할일 작성'onKeyPress={onEnter}/>
			<button onClick={AddList}>Add</button>
		</div>
	)
}

export default AddBtnComponent
