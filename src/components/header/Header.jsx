import React, { useState } from 'react';
import "./header.scss";
import axios from '../../api';

import { NavLink } from 'react-router-dom';
import Modal from '../modal/Modal';

import { IoClose } from "react-icons/io5";

import { useGetInputValuen } from '../../hooks/useGetInputValue';

const initialState = {
  UserName: "",
  password: ""
}

const initialStates = {
  UserName: "",
  password: ""
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegistar, setIsRegistar] = useState(false);

  const {formData , handlechange , setFormData} = useGetInputValuen(initialState)
  // const {formData , handlechange , setFormData} = useGetInputValuen(initialStates)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = e => {
    e.preventDefault()
    axios
      .post("/auth/sign-in", formData)
      .then(res => {
          localStorage.setItem("x-auth-token", res.data.data.token)
          localStorage.setItem("user-data", JSON.stringify(res.data.data.user))
      })
    setFormData(initialState)
    console.log(formData);

  }

    const handleLogins = e => {
    e.preventDefault()
    setFormData(initialStates)
    console.log(formData);
  }


  const [formDatas,setFormDatas] = useState(initialStates )

    const handlechanges =  e =>{
        const {name , value} = e.target
        setFormDatas(prev=> ({...prev , [name]: value}) )
    }

  return (
    <>
      <header id='navbar' className='navbar header'>
        <nav className="container nav">
          <a href="#">
            {/* <img src={logo} alt="Logo" /> */}
            <svg width="140" height="40" viewBox="0 0 140 40" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.5294 14.2118C31.5294 18.8819 28.7623 22.9082 24.7793 24.7351C26.4612 23.3496 27.5322 21.248 27.5322 18.896C27.5322 14.7642 24.2259 11.4042 20.112 11.3205C20.0574 11.3167 20.0075 11.3167 19.9529 11.3167C19.8983 11.3167 19.8485 11.3167 19.7939 11.3205C18.2673 11.4033 17.0588 12.6663 17.0588 14.2108V28.6814C17.0588 33.4748 13.1699 37.3638 8.37646 37.3638V14.2118C8.37646 7.81928 13.5605 2.63528 19.9529 2.63528C26.3454 2.63528 31.5294 7.81928 31.5294 14.2118Z" fill="#fff"/>
              <path d="M21.9992 16.2582C23.1294 15.128 23.1294 13.2956 21.9992 12.1654C20.8689 11.0351 19.0365 11.0351 17.9063 12.1654C16.7761 13.2956 16.7761 15.128 17.9063 16.2582C19.0365 17.3884 20.8689 17.3884 21.9992 16.2582Z" fill="#fff"/>
              <path d="M56.4259 22.82V19.98H59.0459C59.5526 19.98 59.9859 19.88 60.3459 19.68C60.7192 19.48 61.0059 19.2 61.2059 18.84C61.4059 18.4667 61.5059 18.04 61.5059 17.56C61.5059 17.0533 61.4059 16.62 61.2059 16.26C61.0059 15.8867 60.7192 15.6067 60.3459 15.42C59.9859 15.22 59.5526 15.12 59.0459 15.12H56.4259V12.28H58.8859C60.1259 12.28 61.1859 12.4867 62.0659 12.9C62.9592 13.3133 63.6392 13.9 64.1059 14.66C64.5859 15.42 64.8259 16.3333 64.8259 17.4V17.72C64.8259 18.76 64.5859 19.6667 64.1059 20.44C63.6392 21.2 62.9592 21.7867 62.0659 22.2C61.1859 22.6133 60.1259 22.82 58.8859 22.82H56.4259ZM53.5459 27V12.28H56.8259V27H53.5459ZM71.189 27.38C70.2557 27.38 69.429 27.22 68.709 26.9C68.0023 26.58 67.409 26.1533 66.929 25.62C66.4623 25.0733 66.1023 24.4667 65.849 23.8C65.609 23.12 65.489 22.4267 65.489 21.72V21.32C65.489 20.5867 65.609 19.8867 65.849 19.22C66.1023 18.54 66.4623 17.9333 66.929 17.4C67.3957 16.8667 67.9757 16.4467 68.669 16.14C69.3757 15.82 70.1757 15.66 71.069 15.66C72.2423 15.66 73.229 15.9267 74.029 16.46C74.8423 16.98 75.4623 17.6667 75.889 18.52C76.3157 19.36 76.529 20.28 76.529 21.28V22.36H66.829V20.54H74.589L73.549 21.38C73.549 20.7267 73.4557 20.1667 73.269 19.7C73.0823 19.2333 72.8023 18.88 72.429 18.64C72.069 18.3867 71.6157 18.26 71.069 18.26C70.509 18.26 70.0357 18.3867 69.649 18.64C69.2623 18.8933 68.969 19.2667 68.769 19.76C68.569 20.24 68.469 20.8333 68.469 21.54C68.469 22.1933 68.5623 22.7667 68.749 23.26C68.9357 23.74 69.229 24.1133 69.629 24.38C70.029 24.6467 70.549 24.78 71.189 24.78C71.7757 24.78 72.2557 24.6667 72.629 24.44C73.0023 24.2133 73.2557 23.9333 73.389 23.6H76.329C76.169 24.3333 75.8557 24.9867 75.389 25.56C74.9223 26.1333 74.3357 26.58 73.629 26.9C72.9223 27.22 72.109 27.38 71.189 27.38ZM78.2495 27V16.04H80.7895V20.74H80.7295C80.7295 19.1933 81.0561 18 81.7095 17.16C82.3761 16.32 83.3361 15.9 84.5895 15.9H85.0095V18.66H84.2095C83.3295 18.66 82.6495 18.9 82.1695 19.38C81.6895 19.8467 81.4495 20.5267 81.4495 21.42V27H78.2495ZM90.4274 27.34C88.8674 27.34 87.6474 27.02 86.7674 26.38C85.8874 25.74 85.4208 24.84 85.3674 23.68H88.2074C88.2608 24.0267 88.4674 24.34 88.8274 24.62C89.2008 24.8867 89.7541 25.02 90.4874 25.02C91.0474 25.02 91.5074 24.9267 91.8674 24.74C92.2408 24.54 92.4274 24.26 92.4274 23.9C92.4274 23.58 92.2874 23.3267 92.0074 23.14C91.7274 22.94 91.2274 22.8 90.5074 22.72L89.6474 22.64C88.3274 22.5067 87.3341 22.14 86.6674 21.54C86.0141 20.94 85.6874 20.1733 85.6874 19.24C85.6874 18.4667 85.8808 17.82 86.2674 17.3C86.6541 16.78 87.1874 16.3867 87.8674 16.12C88.5608 15.8533 89.3474 15.72 90.2274 15.72C91.6408 15.72 92.7808 16.0333 93.6474 16.66C94.5141 17.2733 94.9674 18.1667 95.0074 19.34H92.1674C92.1141 18.98 91.9274 18.68 91.6074 18.44C91.2874 18.1867 90.8141 18.06 90.1874 18.06C89.6941 18.06 89.3008 18.1533 89.0074 18.34C88.7141 18.5267 88.5674 18.78 88.5674 19.1C88.5674 19.4067 88.6941 19.64 88.9474 19.8C89.2008 19.96 89.6141 20.0733 90.1874 20.14L91.0474 20.22C92.3941 20.3667 93.4408 20.74 94.1874 21.34C94.9341 21.94 95.3074 22.7467 95.3074 23.76C95.3074 24.4933 95.1074 25.1333 94.7074 25.68C94.3074 26.2133 93.7408 26.6267 93.0074 26.92C92.2741 27.2 91.4141 27.34 90.4274 27.34ZM102.321 27.38C101.361 27.38 100.507 27.2333 99.7607 26.94C99.0141 26.6333 98.3807 26.22 97.8607 25.7C97.3541 25.18 96.9674 24.5867 96.7007 23.92C96.4341 23.24 96.3007 22.5267 96.3007 21.78V21.32C96.3007 20.56 96.4341 19.84 96.7007 19.16C96.9807 18.4667 97.3807 17.86 97.9007 17.34C98.4341 16.82 99.0741 16.4133 99.8207 16.12C100.567 15.8133 101.401 15.66 102.321 15.66C103.267 15.66 104.107 15.8133 104.841 16.12C105.587 16.4133 106.221 16.82 106.741 17.34C107.261 17.86 107.661 18.4667 107.941 19.16C108.221 19.84 108.361 20.56 108.361 21.32V21.78C108.361 22.5267 108.227 23.24 107.961 23.92C107.694 24.5867 107.301 25.18 106.781 25.7C106.274 26.22 105.647 26.6333 104.901 26.94C104.154 27.2333 103.294 27.38 102.321 27.38ZM102.321 24.68C102.947 24.68 103.467 24.5467 103.881 24.28C104.294 24.0133 104.607 23.64 104.821 23.16C105.047 22.68 105.161 22.1467 105.161 21.56C105.161 20.9333 105.047 20.3867 104.821 19.92C104.594 19.44 104.267 19.06 103.841 18.78C103.427 18.5 102.921 18.36 102.321 18.36C101.734 18.36 101.227 18.5 100.801 18.78C100.374 19.06 100.047 19.44 99.8207 19.92C99.6074 20.3867 99.5007 20.9333 99.5007 21.56C99.5007 22.1467 99.6074 22.68 99.8207 23.16C100.034 23.64 100.354 24.0133 100.781 24.28C101.207 24.5467 101.721 24.68 102.321 24.68ZM110.194 27V16.04H112.734V20.74H112.554C112.554 19.62 112.694 18.6867 112.974 17.94C113.267 17.1933 113.707 16.6333 114.294 16.26C114.881 15.8867 115.594 15.7 116.434 15.7H116.574C117.854 15.7 118.827 16.12 119.494 16.96C120.174 17.7867 120.514 19.0467 120.514 20.74V27H117.314V20.56C117.314 19.9733 117.141 19.4933 116.794 19.12C116.447 18.7467 115.981 18.56 115.394 18.56C114.794 18.56 114.307 18.7533 113.934 19.14C113.574 19.5133 113.394 20.0067 113.394 20.62V27H110.194ZM129.461 27V23.76H128.921V20.24C128.921 19.68 128.788 19.26 128.521 18.98C128.254 18.7 127.828 18.56 127.241 18.56C126.948 18.56 126.561 18.5667 126.081 18.58C125.601 18.5933 125.108 18.6133 124.601 18.64C124.094 18.6667 123.634 18.6933 123.221 18.72V16.02C123.528 15.9933 123.888 15.9667 124.301 15.94C124.714 15.9133 125.141 15.8933 125.581 15.88C126.021 15.8667 126.434 15.86 126.821 15.86C127.941 15.86 128.881 16.02 129.641 16.34C130.414 16.66 131.001 17.1467 131.401 17.8C131.801 18.44 132.001 19.2667 132.001 20.28V27H129.461ZM125.961 27.28C125.174 27.28 124.481 27.14 123.881 26.86C123.294 26.58 122.834 26.18 122.501 25.66C122.168 25.1267 122.001 24.4933 122.001 23.76C122.001 22.96 122.208 22.3067 122.621 21.8C123.034 21.28 123.614 20.9 124.361 20.66C125.108 20.4067 125.968 20.28 126.941 20.28H129.281V22.06H126.921C126.361 22.06 125.928 22.2 125.621 22.48C125.328 22.7467 125.181 23.1133 125.181 23.58C125.181 24.02 125.328 24.38 125.621 24.66C125.928 24.9267 126.361 25.06 126.921 25.06C127.281 25.06 127.601 25 127.881 24.88C128.174 24.7467 128.414 24.5267 128.601 24.22C128.788 23.9133 128.894 23.4867 128.921 22.94L129.681 23.74C129.614 24.5 129.428 25.14 129.121 25.66C128.828 26.18 128.414 26.58 127.881 26.86C127.361 27.14 126.721 27.28 125.961 27.28ZM134.456 27V12.4H137.676V27H134.456ZM133.156 14.76V12.4H137.676V14.76H133.156Z" fill="#fff"/>
            </svg>
          </a>
          <ul className="nav__list">
            <li className="nav__item"><NavLink to={"/"} className="nav__link">Home</NavLink></li>
            <li className="nav__item"><a href='#' className="nav__link">User</a></li>
            <li className="nav__item"><a href='#' className="nav__link">Projact</a></li>
            <li className="nav__item"><a href='#' className="nav__link">Contact me</a></li>
            <li className="nav__item"><NavLink to={"/admin"} className="nav__link">Admin panel</NavLink></li>
          </ul>
          <ul className="nav__list">
            <li className="nav__item"><button onClick={()=> setIsLogin(true)} className='download'>Log in</button></li>
            <li className="nav__item"><button onClick={()=> setIsRegistar(true)} className='download'>Registar</button></li>
          </ul>

          <div id="navbar-responsive" className={isOpen ? 'open' : ''}>
            <ul className="res__nav__list">
              <a className="nav__logo__link" href="#">
                {/* <img src={logo} alt="Logo" /> */}
                <svg width="140" height="40" viewBox="0 0 140 40" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.5294 14.2118C31.5294 18.8819 28.7623 22.9082 24.7793 24.7351C26.4612 23.3496 27.5322 21.248 27.5322 18.896C27.5322 14.7642 24.2259 11.4042 20.112 11.3205C20.0574 11.3167 20.0075 11.3167 19.9529 11.3167C19.8983 11.3167 19.8485 11.3167 19.7939 11.3205C18.2673 11.4033 17.0588 12.6663 17.0588 14.2108V28.6814C17.0588 33.4748 13.1699 37.3638 8.37646 37.3638V14.2118C8.37646 7.81928 13.5605 2.63528 19.9529 2.63528C26.3454 2.63528 31.5294 7.81928 31.5294 14.2118Z" fill="#fff"/>
                  <path d="M21.9992 16.2582C23.1294 15.128 23.1294 13.2956 21.9992 12.1654C20.8689 11.0351 19.0365 11.0351 17.9063 12.1654C16.7761 13.2956 16.7761 15.128 17.9063 16.2582C19.0365 17.3884 20.8689 17.3884 21.9992 16.2582Z" fill="#fff"/>
                  <path d="M56.4259 22.82V19.98H59.0459C59.5526 19.98 59.9859 19.88 60.3459 19.68C60.7192 19.48 61.0059 19.2 61.2059 18.84C61.4059 18.4667 61.5059 18.04 61.5059 17.56C61.5059 17.0533 61.4059 16.62 61.2059 16.26C61.0059 15.8867 60.7192 15.6067 60.3459 15.42C59.9859 15.22 59.5526 15.12 59.0459 15.12H56.4259V12.28H58.8859C60.1259 12.28 61.1859 12.4867 62.0659 12.9C62.9592 13.3133 63.6392 13.9 64.1059 14.66C64.5859 15.42 64.8259 16.3333 64.8259 17.4V17.72C64.8259 18.76 64.5859 19.6667 64.1059 20.44C63.6392 21.2 62.9592 21.7867 62.0659 22.2C61.1859 22.6133 60.1259 22.82 58.8859 22.82H56.4259ZM53.5459 27V12.28H56.8259V27H53.5459ZM71.189 27.38C70.2557 27.38 69.429 27.22 68.709 26.9C68.0023 26.58 67.409 26.1533 66.929 25.62C66.4623 25.0733 66.1023 24.4667 65.849 23.8C65.609 23.12 65.489 22.4267 65.489 21.72V21.32C65.489 20.5867 65.609 19.8867 65.849 19.22C66.1023 18.54 66.4623 17.9333 66.929 17.4C67.3957 16.8667 67.9757 16.4467 68.669 16.14C69.3757 15.82 70.1757 15.66 71.069 15.66C72.2423 15.66 73.229 15.9267 74.029 16.46C74.8423 16.98 75.4623 17.6667 75.889 18.52C76.3157 19.36 76.529 20.28 76.529 21.28V22.36H66.829V20.54H74.589L73.549 21.38C73.549 20.7267 73.4557 20.1667 73.269 19.7C73.0823 19.2333 72.8023 18.88 72.429 18.64C72.069 18.3867 71.6157 18.26 71.069 18.26C70.509 18.26 70.0357 18.3867 69.649 18.64C69.2623 18.8933 68.969 19.2667 68.769 19.76C68.569 20.24 68.469 20.8333 68.469 21.54C68.469 22.1933 68.5623 22.7667 68.749 23.26C68.9357 23.74 69.229 24.1133 69.629 24.38C70.029 24.6467 70.549 24.78 71.189 24.78C71.7757 24.78 72.2557 24.6667 72.629 24.44C73.0023 24.2133 73.2557 23.9333 73.389 23.6H76.329C76.169 24.3333 75.8557 24.9867 75.389 25.56C74.9223 26.1333 74.3357 26.58 73.629 26.9C72.9223 27.22 72.109 27.38 71.189 27.38ZM78.2495 27V16.04H80.7895V20.74H80.7295C80.7295 19.1933 81.0561 18 81.7095 17.16C82.3761 16.32 83.3361 15.9 84.5895 15.9H85.0095V18.66H84.2095C83.3295 18.66 82.6495 18.9 82.1695 19.38C81.6895 19.8467 81.4495 20.5267 81.4495 21.42V27H78.2495ZM90.4274 27.34C88.8674 27.34 87.6474 27.02 86.7674 26.38C85.8874 25.74 85.4208 24.84 85.3674 23.68H88.2074C88.2608 24.0267 88.4674 24.34 88.8274 24.62C89.2008 24.8867 89.7541 25.02 90.4874 25.02C91.0474 25.02 91.5074 24.9267 91.8674 24.74C92.2408 24.54 92.4274 24.26 92.4274 23.9C92.4274 23.58 92.2874 23.3267 92.0074 23.14C91.7274 22.94 91.2274 22.8 90.5074 22.72L89.6474 22.64C88.3274 22.5067 87.3341 22.14 86.6674 21.54C86.0141 20.94 85.6874 20.1733 85.6874 19.24C85.6874 18.4667 85.8808 17.82 86.2674 17.3C86.6541 16.78 87.1874 16.3867 87.8674 16.12C88.5608 15.8533 89.3474 15.72 90.2274 15.72C91.6408 15.72 92.7808 16.0333 93.6474 16.66C94.5141 17.2733 94.9674 18.1667 95.0074 19.34H92.1674C92.1141 18.98 91.9274 18.68 91.6074 18.44C91.2874 18.1867 90.8141 18.06 90.1874 18.06C89.6941 18.06 89.3008 18.1533 89.0074 18.34C88.7141 18.5267 88.5674 18.78 88.5674 19.1C88.5674 19.4067 88.6941 19.64 88.9474 19.8C89.2008 19.96 89.6141 20.0733 90.1874 20.14L91.0474 20.22C92.3941 20.3667 93.4408 20.74 94.1874 21.34C94.9341 21.94 95.3074 22.7467 95.3074 23.76C95.3074 24.4933 95.1074 25.1333 94.7074 25.68C94.3074 26.2133 93.7408 26.6267 93.0074 26.92C92.2741 27.2 91.4141 27.34 90.4274 27.34ZM102.321 27.38C101.361 27.38 100.507 27.2333 99.7607 26.94C99.0141 26.6333 98.3807 26.22 97.8607 25.7C97.3541 25.18 96.9674 24.5867 96.7007 23.92C96.4341 23.24 96.3007 22.5267 96.3007 21.78V21.32C96.3007 20.56 96.4341 19.84 96.7007 19.16C96.9807 18.4667 97.3807 17.86 97.9007 17.34C98.4341 16.82 99.0741 16.4133 99.8207 16.12C100.567 15.8133 101.401 15.66 102.321 15.66C103.267 15.66 104.107 15.8133 104.841 16.12C105.587 16.4133 106.221 16.82 106.741 17.34C107.261 17.86 107.661 18.4667 107.941 19.16C108.221 19.84 108.361 20.56 108.361 21.32V21.78C108.361 22.5267 108.227 23.24 107.961 23.92C107.694 24.5867 107.301 25.18 106.781 25.7C106.274 26.22 105.647 26.6333 104.901 26.94C104.154 27.2333 103.294 27.38 102.321 27.38ZM102.321 24.68C102.947 24.68 103.467 24.5467 103.881 24.28C104.294 24.0133 104.607 23.64 104.821 23.16C105.047 22.68 105.161 22.1467 105.161 21.56C105.161 20.9333 105.047 20.3867 104.821 19.92C104.594 19.44 104.267 19.06 103.841 18.78C103.427 18.5 102.921 18.36 102.321 18.36C101.734 18.36 101.227 18.5 100.801 18.78C100.374 19.06 100.047 19.44 99.8207 19.92C99.6074 20.3867 99.5007 20.9333 99.5007 21.56C99.5007 22.1467 99.6074 22.68 99.8207 23.16C100.034 23.64 100.354 24.0133 100.781 24.28C101.207 24.5467 101.721 24.68 102.321 24.68ZM110.194 27V16.04H112.734V20.74H112.554C112.554 19.62 112.694 18.6867 112.974 17.94C113.267 17.1933 113.707 16.6333 114.294 16.26C114.881 15.8867 115.594 15.7 116.434 15.7H116.574C117.854 15.7 118.827 16.12 119.494 16.96C120.174 17.7867 120.514 19.0467 120.514 20.74V27H117.314V20.56C117.314 19.9733 117.141 19.4933 116.794 19.12C116.447 18.7467 115.981 18.56 115.394 18.56C114.794 18.56 114.307 18.7533 113.934 19.14C113.574 19.5133 113.394 20.0067 113.394 20.62V27H110.194ZM129.461 27V23.76H128.921V20.24C128.921 19.68 128.788 19.26 128.521 18.98C128.254 18.7 127.828 18.56 127.241 18.56C126.948 18.56 126.561 18.5667 126.081 18.58C125.601 18.5933 125.108 18.6133 124.601 18.64C124.094 18.6667 123.634 18.6933 123.221 18.72V16.02C123.528 15.9933 123.888 15.9667 124.301 15.94C124.714 15.9133 125.141 15.8933 125.581 15.88C126.021 15.8667 126.434 15.86 126.821 15.86C127.941 15.86 128.881 16.02 129.641 16.34C130.414 16.66 131.001 17.1467 131.401 17.8C131.801 18.44 132.001 19.2667 132.001 20.28V27H129.461ZM125.961 27.28C125.174 27.28 124.481 27.14 123.881 26.86C123.294 26.58 122.834 26.18 122.501 25.66C122.168 25.1267 122.001 24.4933 122.001 23.76C122.001 22.96 122.208 22.3067 122.621 21.8C123.034 21.28 123.614 20.9 124.361 20.66C125.108 20.4067 125.968 20.28 126.941 20.28H129.281V22.06H126.921C126.361 22.06 125.928 22.2 125.621 22.48C125.328 22.7467 125.181 23.1133 125.181 23.58C125.181 24.02 125.328 24.38 125.621 24.66C125.928 24.9267 126.361 25.06 126.921 25.06C127.281 25.06 127.601 25 127.881 24.88C128.174 24.7467 128.414 24.5267 128.601 24.22C128.788 23.9133 128.894 23.4867 128.921 22.94L129.681 23.74C129.614 24.5 129.428 25.14 129.121 25.66C128.828 26.18 128.414 26.58 127.881 26.86C127.361 27.14 126.721 27.28 125.961 27.28ZM134.456 27V12.4H137.676V27H134.456ZM133.156 14.76V12.4H137.676V14.76H133.156Z" fill="#fff"/>
                </svg>
              </a>
              <li className="res__nav__item"><NavLink to={"/"} className="res__nav__link">Home</NavLink></li>
              <li className="res__nav__item"><a href="#services" className="res__nav__link">About Me</a></li>
              <li className="res__nav__item"><a href="#Услуги" className="res__nav__link">Skills</a></li>
              <li className="res__nav__item"><a href="#software" className="res__nav__link">Project</a></li>
              <li className="res__nav__item"><a href="#carusel" className="res__nav__link">Contact me</a></li>
              <a href='https://www.canva.com/design/DAGDikASBa4/aRTZiSWHzXZZpFJ0SZwiNg/edit' className="res-download">
                <p>Log in</p>
              </a>
            </ul>
            <button id="navbar-close" onClick={toggleNavbar}>
              <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
            </button>
          </div>
          <button id="navbar-open" onClick={toggleNavbar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="24" width="24" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          </button>
        </nav>
      </header>
      {
        isLogin ? 
      <Modal close= {setIsLogin}>
        <div className='modal__header'>
          <h2>Log in</h2>
          <p onClick={()=> setIsLogin(false)}><IoClose/></p>
        </div>
        <form onSubmit={handleLogin} action="">
          <input value={formData.UserName} onChange={handlechange} type="text" name='UserName' placeholder='username'/>
          <input value={formData.password} onChange={handlechange} type="text" name='password' placeholder='password' />
          <button>Submit</button>
        </form>
      </Modal> 
      : 
      <></>
      }

      {
        isRegistar ? 
      <Modal close= {setIsRegistar}>
        <div className='modal__header'>
          <h2>Registar</h2>
          <p onClick={()=> setIsRegistar(false)}><IoClose/></p>
        </div>
        <form onSubmit={handleLogins} action="">
          <input value={formDatas.UserName} onChange={handlechanges} type="text" name='UserName' placeholder='username'/>
          <input value={formDatas.password} onChange={handlechanges} type="text" name='password' placeholder='password' />
          <input type="text" placeholder='password' />
          <input type="text" placeholder='password' />
          <input type="text" placeholder='password' />
          <button>Submit</button>
        </form>
      </Modal> 
      : 
      <></>
      }
    </>
  );
}

export default Header;