import React, { useState } from 'react'



const MyListItem = ({text, onDelete, onFix}) => {

	const [className1, setClassName1] = useState('list')

	const mayI = (e) => {
		e.target.checked ? setClassName1('list checked') : setClassName1('list')
	}

	

	return (
		<div>
			<input className='my-list' type='checkBox' onClick={(e) => mayI(e)}/>
			<span className={className1}>{text}</span>
			<button onClick={onDelete}>X</button>
			<button onClick={onFix}>수정</button>
		</div>
	)
}

export default MyListItem
