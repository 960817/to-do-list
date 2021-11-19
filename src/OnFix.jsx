import React, { useState } from 'react'

const OnFix = ({toEdit}) => {
	const [fixLetter, setFixLetter] = useState('')
	const onEnterTwo = (e) =>{
		if (e.key === "Enter"){
			toEdit(fixLetter)
		}
	}

	return (
		<div>
			<input type='text' value={fixLetter} onChange={(e)=> setFixLetter(e.target.value)} onKeyPress={onEnterTwo}/>
			<button onClick={()=> toEdit(fixLetter)}>확인</button>
		</div>
	)
}

export default OnFix
