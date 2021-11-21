import React from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from '@/components';
import i18n from '@/i18n';
import ViIcon from '@/assets/images/icon/vi.svg';
import EnIcon from '@/assets/images/icon/en.svg';
import HomeTag from './components/tag';

const keywords = [
  { label: 'React.js' },
  { color: '#84c6e8', label: 'Webpack 5' },
  { color: '#764abc', label: 'Redux' },
  { color: '#f5da55', label: 'Babel' },
  { color: '#15c213', label: 'jest' },
  { color: '#e94949', label: 'react-router' },
  { color: '#bf4080', label: 'sass' },
  { color: '#764abc', label: 'redux-thunk' },
  { color: '#2b037a', label: 'pm2' }
];

const languageOptions = [
  {
    label: (
      <div className="lang-item">
        <ViIcon width={14} /> <span>&nbsp;&nbsp;</span> Vietnamese
      </div>
    ),
    value: 'vi'
  },
  {
    label: (
      <div className="lang-item">
        <EnIcon width={14} />
        <span>&nbsp;&nbsp;</span> English
      </div>
    ),
    value: 'en'
  }
];

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="row home">
      <div className="container">
        {/* <img className="banner" src={Banner} /> */}
        <Select
          defaultValue={i18n.language}
          className="select-language"
          onChange={option => {
            i18n.changeLanguage(option.value);
          }}
          options={languageOptions}
        />
        <div className="title">{t('home.title')}</div>
        <div>
          <div className="keywords">
            <i>
              {t('home.keywords')}:
              {keywords.map(key => (
                <HomeTag color={key.color} label={key.label} key={key.label} />
              ))}
            </i>
          </div>
        </div>
        <div className="author">
          {t('home.created_by')} 🚀{'  '}
          <a href="#">Chiến Anubis</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
