import React from 'react';
import { Navbar } from '../../style/Navbar-style';
import HomeOutlined from '../../icon/HomeOutlined.svg';
import Person from '../../icon/Person.svg';
import Alert from '../../icon/Alert.svg';
import HeartOutlined from '../../icon/HeartOutlined.svg';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar>
      <Link to="">
        <img src={HomeOutlined} alt="homeBtn" width="120%" />
      </Link>
      <Link to="">
        <img src={Alert} alt="homeBtn" width="120%" />
      </Link>
      <Link to="">
        <img src={HeartOutlined} alt="homeBtn" width="120%" />
      </Link>
      <Link to="">
        <img src={Person} alt="homeBtn" width="120%" />
      </Link>
    </Navbar>
  );
}

export default Navigation;
