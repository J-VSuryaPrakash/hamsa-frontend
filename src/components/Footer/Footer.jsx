import React from 'react';

function Footer() {
  return (
    <footer className="bg-orange-950 text-white py-3">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h3 className="text-lg font-bold">&copy; HAMSA.</h3>
        <p className="text-sm text-gray-400 mt-0.5">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;