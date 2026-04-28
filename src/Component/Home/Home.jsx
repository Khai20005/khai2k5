import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <div>
        <img src='https://bizweb.dktcdn.net/100/022/044/themes/895031/assets/slider_1.jpg?1753153258463' alt='logo' className='img-navbar' />
      </div>
      <div className='image-container'>
        <Link to='/'>
          <img src='https://bizweb.dktcdn.net/100/022/044/themes/895031/assets/banner2_1.jpg?1753153258463' about='logo' />
        </Link>
        <Link to='/'>
          <img src='https://bizweb.dktcdn.net/100/022/044/themes/895031/assets/banner2_2.jpg?1753153258463' alt='logo' />
        </Link>
      </div>
      <div className="home-banner" style={
        { textAlign: 'center', padding: '20px', fontSize: '24px', color: '#333', marginTop: '40px', fontWeight: 'bold', backgroundColor: '#f8f8f8' }
      }>
        <h2>ĐƯỢC ƯA THÍCH NHẤT</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          ❦
        </div>
      </div>
    </div>
  )
}

export default Home;
