import React from 'react';

const CoverImage: React.FC = () => {
  return (
    <div style={{ position: 'relative', marginBottom: '20px' }}>
      <img
        src="https://img.freepik.com/free-photo/top-view-female-hands-work-computer-blue-background_169016-18179.jpg?w=1380&t=st=1703163957~exp=1703164557~hmac=a70a922edaab783b405ca78c2083d2a8e133d877751cdad71991d2f28722dbad"
        alt="Full Screen Image"
        style={{ width: '100%', height: '600px', objectFit: 'cover', maxWidth: '100%' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0, 0, 0, 0.7)',
          padding: '40px',
          borderRadius: '8px',
          color: '#fff',
          textAlign: 'center',
          width:'80%',
          fontSize:'30px'
        }}
      >
        <h2>Welcome to Blog Page</h2>
      </div>
    </div>
  );
};

export default CoverImage;