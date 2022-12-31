import React from 'react';

export default () => {
  return (
    <div className="form-group input-group mb-3">
      <input type="email" className="form-control" placeholder="Email" />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-envelope"></span>
        </div>
      </div>
    </div>
  );
}
