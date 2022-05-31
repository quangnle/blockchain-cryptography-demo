import React from 'react';

import { useHistory } from 'react-router-dom';
import { Select } from '@/components';
import i18n from '@/i18n';
import ViIcon from '@/assets/images/icon/vi.svg';
import Logo from '@/assets/images/logo.svg';

const languageOptions = [
  {
    label: (
      <div className="lang-item">
        <ViIcon width={14} /> <span>&nbsp;&nbsp;</span> Hash
      </div>
    ),
    value: '/hash'
  },
  {
    label: (
      <div className="lang-item">
        <ViIcon width={14} />
        <span>&nbsp;&nbsp;</span> Nonce
      </div>
    ),
    value: '/nonce'
  },
  {
    label: (
      <div className="lang-item">
        <ViIcon width={14} />
        <span>&nbsp;&nbsp;</span> Chain
      </div>
    ),
    value: '/chain'
  },
  {
    label: (
      <div className="lang-item">
        <ViIcon width={14} />
        <span>&nbsp;&nbsp;</span> Merkle tree
      </div>
    ),
    value: '/merkle-tree'
  },
  {
    label: (
      <div className="lang-item">
        <ViIcon width={14} />
        <span>&nbsp;&nbsp;</span> Patricia tree
      </div>
    ),
    value: '/patricia-tree'
  },
  {
    label: (
      <div className="lang-item">
        <ViIcon width={14} />
        <span>&nbsp;&nbsp;</span> Bloom filter
      </div>
    ),
    value: '/bloom-filter'
  },
  {
    label: (
      <div className="lang-item">
        <ViIcon width={14} />
        <span>&nbsp;&nbsp;</span> Caesar
      </div>
    ),
    value: '/caesar'
  },
  {
    label: (
      <div className="lang-item">
        <ViIcon width={14} />
        <span>&nbsp;&nbsp;</span> RSA
      </div>
    ),
    value: '/rsa'
  },
  {
    label: (
      <div className="lang-item">
        <ViIcon width={14} />
        <span>&nbsp;&nbsp;</span> Digital signature
      </div>
    ),
    value: '/digital-signature'
  },
  {
    label: (
      <div className="lang-item">
        <ViIcon width={14} />
        <span>&nbsp;&nbsp;</span> Interactive ZKP
      </div>
    ),
    value: '/interactive-zkp'
  },
  {
    label: (
      <div className="lang-item">
        <ViIcon width={14} />
        <span>&nbsp;&nbsp;</span> Interactive ZKP
      </div>
    ),
    value: '/noninteractive-zkp'
  }
];

const Home = () => {
  const history = useHistory();
  return (
    <div className="row home">
      <div className="container">
        <Logo className="banner" />
        <div className="title">Features</div>
        <Select
          defaultValue={i18n.language}
          className="select-language"
          onChange={option => {
            history.push(option.value);
          }}
          options={languageOptions}
        />
      </div>
    </div>
  );
};

export default Home;
