import React from 'react';
import styles from 'theOtherComponent.module.scss';
import { useDarkmodeContext } from './darkmodeContextProvider';

const CanAccessToDarkmodeContext: React.FC = () => {

	// 
	const { useDarkmode, setUseDarkmode } = useDarkmodeContext();
	return (
	
		// toggling the className by value of useDarkmode boolean
		<div className={useDarkmode ? styles.darkStyle : styles.ligthStyle}>
		
			// toggling the state of useDarkmode
			<button onClick={() => setUseDarkmode(!useDarkmode)}>
				Toggle darkmode
			</button>
			{/* ... some other things*/}
		</div>
	)
}

export default CanAccessToDarkmodeContext;
