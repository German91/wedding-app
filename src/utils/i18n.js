import { Localization } from 'expo';
import i18n from 'i18n-js';

import localizationEN from '../../locale/en';
import localizationES from '../../locale/es';


i18n.fallbacks = true;

i18n.translations = {
  en: localizationEN,
  es: localizationES,
};

i18n.locale = Localization.locale;

export default i18n;
