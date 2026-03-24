import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-5">
      <div className="container mx-auto text-white">
        <div className="flex justify-between">
          {/* Other content... */}
          <div className="space-y-8">
            <a href="/watch-sermons">Watch Sermons</a>
            <a href="/give-online">Give Online</a>
          </div>
          {/* Other content... */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
