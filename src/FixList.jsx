import React, { useState } from 'react'

const FixList = ({func}) => {

	const [fixed, setFixed] = useState('')

	const fixingBtn = () =>{
		
	}
	

	return (
		<div>
			<input type='text' value={fixed} onChange={(e) => setFixed(e.target.value)} />
			<button onClick={fixingBtn}>확인</button>
		</div>
	)
}

export default FixList
