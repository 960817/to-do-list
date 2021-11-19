import React, { useEffect, useState } from 'react'
import OnFix from './OnFix'


const MyListsComponent = ({value, onDelete, plzFix, func}) => {

	const [onEdit, setOnEdit] = useState(false)

	const onCheck = (e)=>{
		func(e.target.checked)
	}

	const toEdit = (text) =>{
		plzFix(text)
		setOnEdit(false)
	}

	return onEdit ? <OnFix toEdit = {(text) => toEdit(text)}/> : (
		<div>
			<input type="checkbox" checked={value.status} onClick={onCheck}/>
			<span className={value.status ? 'list checked' : 'list'} >{value.note}</span>
			<button onClick={onDelete}  >X</button>
			<button onClick={() => setOnEdit(true)}>수정</button>
		</div>
	)
}

export default MyListsComponent
