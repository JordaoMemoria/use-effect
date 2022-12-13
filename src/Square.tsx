import { useEffect, useState } from 'react'

const squareStyle = {
	marginTop: 20,
	width: 200,
	height: 200,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

function Square() {
	const [counter, setCounter] = useState<number>(0)

	const click = () => {
		setCounter((prevState) => prevState + 1)
	}

	//componentDidMount
	useEffect(() => {
		console.log('componentDidMount')
	}, [])

	//componentDidUpdate
	useEffect(() => {
		console.log('componentDidUpdate')
		console.log('Counter: ', counter)
	}, [counter])

	//componentWillUnmount
	useEffect(() => {
		return () => {
			console.log('componentWillUnmount')
		}
	}, [])

	return (
		<button style={squareStyle} onClick={click}>
			Counter: {counter}
		</button>
	)
}

export default Square
