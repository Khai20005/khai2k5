import React from 'react';
import './Staticimage.css';
import { Link } from 'react-router-dom';
const Staticimage = () => {

    return (
        <div className='static-container'>
            <div>
                <div className="static-image">
                    <Link to='/'>
                        <img
                            src="https://bizweb.dktcdn.net/100/022/044/themes/895031/assets/banner_1.jpg?1753153258463"
                            alt="Rượu vang"
                            className="ruouvang  "
                        />
                    </Link>
                    <Link to='/'>
                        <img
                            src='https://bizweb.dktcdn.net/100/022/044/themes/895031/assets/banner_2.jpg?1753153258463'
                            alt='Rượu vang'
                            className='ruouvang'
                        />
                    </Link>
                </div>

                <div className='sake-static-image'>
                    <Link to='/'>
                        <img
                            src='https://bizweb.dktcdn.net/100/022/044/themes/895031/assets/banner_3.jpg?1753153258463'
                            alt='Rượu vang'
                            className='ruouvangsake'
                        />
                    </Link>
                    <Link to='/'>
                        <img
                            src='https://bizweb.dktcdn.net/100/022/044/themes/895031/assets/banner_4.jpg?1753153258463 '
                            alt='Rượu vang'
                            className='ruouvangsake'
                        />
                    </Link>
                </div>
            </div>

            <div>
                <Link to='/'>
                    <img
                        src='https://bizweb.dktcdn.net/100/022/044/themes/895031/assets/banner_5.jpg?1753153258463'
                        alt='Rượu vang'
                        className='ruouvangchivas'
                    />
                </Link>
            </div>
        </div>
    );
}

export default Staticimage;
