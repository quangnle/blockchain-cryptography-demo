import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectDisplayLayout } from '@/store/slices/layoutSlice';
import Github from '@/assets/images/icon/github.svg';

const Footer = () => {
  const { t } = useTranslation();
  const { footer } = useSelector(selectDisplayLayout);
  if (!footer) {
    return null;
  }
  return (
    <div id="footer">
      <div className="socials">
        <a
          href="https://github.com/hvchien216"
          rel="noreferrer"
          target="_blank"
        >
          <Github className="img github" />
        </a>
      </div>
      <h3>
        {t('footer.copy_right')} - Version: {process.env.VERSION}
      </h3>
    </div>
  );
};

export default Footer;
