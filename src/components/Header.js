import React, { useEffect, useState } from 'react';
// import './Header.css';

const Header = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger the animation on mount
    setIsAnimated(true);
  }, []);

  return (
    <header className={`header ${isAnimated ? 'animated' : ''}`}>
      <div className="header-content">
        <h1 className="header-title">Your Global News!</h1>
        {/* <p className="header-subtitle">Stay up-to-date with the latest news and headlines</p> */}
      </div>
    </header>
  );
};

export default Header;