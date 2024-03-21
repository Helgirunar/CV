import React from 'react'

const Header = ({darkMode, toggleDarkMode}) => {
  return (
		<div id="header" style={{backgroundColor: '#2465B4', height: '5vh', width: '100%', minHeight: '60px'}}>
			<div className="centerContainer" style={{height: '5vh', margin: 'auto', display: 'flex', position: 'relative'}}>
				<div className="text-2xl" style={{color:'white', marginTop: 'auto', marginBottom: 'auto'}}>Helgi Rúnar Jóhannesson</div>
				<div onClick={toggleDarkMode} style={{position: 'absolute', right: '25px', display: 'flex', flexFlow: 'column', height:'5vh', gap: '9px', cursor: 'pointer'}}>
					{/* <div style={{color: darkMode ? 'white' : 'white'}}>DarkMode</div> */}
					<div style={{height: '17.5px', width: '35px', borderRadius: '25px', display: 'flex', alignContent: 'center', position: 'relative', margin: 'auto', backgroundColor: '#E7E7E7'}}>
						<div style={{ position:'absolute', height: '16.5px', width: '16.5px', borderRadius:'25px', backgroundColor: darkMode ? '#404040' : 'gray', marginTop: '0.5px', marginLeft: '1.25px', left: darkMode ? '0px' : "14.5px", transition: 'all 0.3s ease-in 0s'}}>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Header;