import React from 'react'

const LoadingScreen = () => {
  return (
    <div className="loading-screen" id="loadingScreen">
      <div className="loading-content">
        <div className="f1-track">
          <div className="car-loader"></div>
          <div className="track-line"></div>
        </div>
        <h2>Loading...</h2>
      </div>
    </div>
  )
}

export default LoadingScreen


