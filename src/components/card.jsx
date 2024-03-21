import React from 'react';

const Card = ({ title, style, darkMode, children }) => {
  return (
    <div className={darkMode ? 'dms dmb' : 'lms lmb'} style={{...style, borderRadius: '8px', padding: '12px', margin: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
		<div style={{fontSize: '20px', marginBottom: title ? '8px' : '0px'}}>{title}</div>
      {children}
    </div>
  );
}

export default Card;