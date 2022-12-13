import { useState } from 'react'
import Square from './Square'

export default function App() {
	const [show, setShow] = useState<boolean>(true)

	const swap = () => setShow(!show)

	return (
		<>
			<button onClick={swap}>Swap</button>
			{show && <Square />}
		</>
	)
}
