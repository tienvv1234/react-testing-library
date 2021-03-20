import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
	const regex = '/\B([A-Z]\B/g';
	// return colorName.replace(regex, ' $1');
	return colorName.replace(/([A-Z])/g, ' $1').trim();
}

function App() {
	const [buttonColor, setButtonColor] = useState('red');
	const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
	const [disabled, setDisabled] = useState(false);

	return (
		<div className='App'>
			<button
				style={{backgroundColor: disabled ? 'gray' : buttonColor}}
				onClick={() => setButtonColor(newButtonColor)}
				disabled={disabled}
			>
				Change to {newButtonColor}
			</button>
			<input
				type='checkbox'
				id='disable-button-checkbox'
				defaultChecked={disabled}
				aria-checked={disabled}
				onChange={(e) => setDisabled(e.target.checked)}
			/>
			<label htmlFor="disable-button-checkbox">Disable button</label>
		</div>
	);
}

export default App;
