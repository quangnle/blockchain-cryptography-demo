import languages from '../languages';
import home from './home.json';
import footer from './footer.json';

const mergeResource = {
  home,
  footer
};

export const langs = Object.keys(languages);

const resources = {};

Object.keys(languages).map(lang => {
  Object.keys(mergeResource).map(fileName => {
    resources[lang] = {
      translation: {
        ...resources[lang]?.translation,
        [fileName]: mergeResource[fileName][lang]
      }
    };
  });
});

export default resources;
