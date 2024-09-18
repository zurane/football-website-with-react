import React from 'react';
import NavigationBar from './NavigationBar';

export default function Layout({ children }) {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
}
