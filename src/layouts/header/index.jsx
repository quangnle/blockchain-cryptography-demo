import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Link, useLocation } from 'react-router-dom';
import { selectDisplayLayout } from '@/store/slices/layoutSlice';
import { goURL } from '@/helpers/route';

import webpackImg from '@/assets/images/webpack.png';

export const HEADERS = [
  {
    name: 'hash',
    href: '/hash',
    label: 'Hash'
  },
  {
    name: 'nonce',
    href: '/nonce',
    label: 'Nonce'
  },
  {
    name: 'chain',
    href: '/chain',
    label: 'Chain'
  },
  {
    name: 'merkle-tree',
    href: '/merkle-tree',
    label: 'Merkle tree'
  },
  {
    name: 'patricia-tree',
    href: '/patricia-tree',
    label: 'Patricia tree'
  },
  {
    name: 'bloom-filter',
    href: '/bloom-filter',
    label: 'Bloom filter'
  },
  {
    name: 'ceasar',
    href: '/ceasar',
    label: 'Ceasar'
  },
  {
    name: 'rsa',
    href: '/rsa',
    label: 'RSA'
  },
  {
    name: 'digital-signature',
    href: '/digital-signature',
    label: 'Digital signature'
  },
  {
    name: 'interactive-zkp',
    href: '/interactive-zkp',
    label: 'Interactive ZKP'
  },
  {
    name: 'noninteractive-zkp',
    href: '/noninteractive-zkp',
    label: 'Non-Interactive ZKP'
  }
];

const Header = () => {
  const layout = useSelector(selectDisplayLayout);
  const [openMobile, setOpenMobile] = useState();
  const [section, setSection] = useState(HEADERS[0]);
  const location = useLocation();

  useEffect(() => {
    const sectionIndex = HEADERS.findIndex(h => h.href === location.pathname);
    const newSection = sectionIndex != -1 ? HEADERS[sectionIndex] : HEADERS[0];
    setSection(() => newSection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!layout.header) {
    return null;
  }
  return (
    <>
      <header className="header fixed">
        <div className="logo-header">
          <div onClick={() => goURL('/')} className="box-img-flex">
            <img width={40} src={webpackImg} alt="" />
            <h4>React-Webpack</h4>
          </div>
        </div>
        <div className="menu">
          <ul>
            {HEADERS.map(item => (
              <li
                onClick={() => setSection(item)}
                key={item.name}
                className={section.name === item.name ? 'active' : ''}
              >
                <Link to={item.href}>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a
          onClick={() => setOpenMobile(true)}
          className="btn-menu-mobile"
          href="#"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </header>

      <div className={`mobile-menu ${openMobile ? 'show' : ''}`}>
        <div className="m-menu__title">
          <a
            onClick={() => setOpenMobile(false)}
            href="#"
            className="m-menu-close"
          >
            +
          </a>
        </div>
        <ul>
          {HEADERS.map(item => (
            <li key={item.name}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`overlay-menu ${openMobile ? 'active' : ''}`}></div>
    </>
  );
};

export default Header;
