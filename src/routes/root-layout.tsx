import React from 'react';

const RootLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Welcome to the App</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
