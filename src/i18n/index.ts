// src/i18n/index.ts
export const languages = {
  fr: 'Français',
  en: 'English',
};

export const defaultLang = 'fr';

export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'hero.title': "Connecteur360, le futur de l'investissement",
    // Intro
    'hero.intro': `Investir ne devrait jamais ressembler à un parcours du combattant. Trop souvent, on se perd dans un océan de données dispersées, d’analyses complexes et dans la crainte permanente de manquer la bonne opportunité.<br/><br/>
      Chez Connecteur 360 Inc., nous avons décidé de transformer radicalement cette expérience.
      Nous bâtissons l’outil que nous avons toujours rêvé d’utiliser :`,
    // Liste 1 : Fonctionnalités
    'hero.features': `
      <ul class="list-disc pl-5 space-y-1 mt-2 mb-4">
        <li>Une plateforme unique et intelligente qui dépasse la simple liste d’investissements.</li>
        <li>Un connecteur puissant entre vos objectifs de vie et les meilleures opportunités du marché.</li>
        <li>Une vision claire et globale qui vous libère du brouillard de l’incertitude.</li>
      </ul>`,
    // Transition
    'hero.impact_intro': `Avec Connecteur 360, vous gagnez enfin :`,
    // Liste 2 : Bénéfices
    'hero.impact_list': `
      <ul class="list-disc pl-5 space-y-1 mt-2 mb-4">
        <li>La clarté pour comprendre vos choix.</li>
        <li>La sérénité pour avancer avec confiance.</li>
        <li>La vision d’ensemble que mérite votre avenir financier.</li>
      </ul>`,
    // Conclusion
    'hero.outro': `Parce que l’investissement ne doit pas être une source de stress, mais un levier d’accomplissement.`,
    
    'form.email.placeholder': 'Email...',
    'form.submit': 'Rejoindre la waitlist',
    'footer.copyright': '© 2025 Connecteur inc 360.',
  },
  en: {
    'nav.home': 'Home',
    'hero.title': 'Connecteur360, the future of investment',
    // Intro translated
    'hero.intro': `Investing should never feel like an obstacle course. Too often, we get lost in an ocean of scattered data, complex analyses, and the constant fear of missing the right opportunity.<br/><br/>
      At Connecteur 360 Inc., we decided to radically transform this experience.
      We are building the tool we always dreamed of using:`,
    // Features translated
    'hero.features': `
      <ul class="list-disc pl-5 space-y-1 mt-2 mb-4">
        <li>A unique and intelligent platform that goes beyond a simple list of assets.</li>
        <li>A powerful connector between your life goals and the market's best opportunities.</li>
        <li>A clear and global vision that frees you from the fog of uncertainty.</li>
      </ul>`,
    // Transition translated
    'hero.impact_intro': `With Connecteur 360, you finally gain:`,
    // Benefits translated
    'hero.impact_list': `
      <ul class="list-disc pl-5 space-y-1 mt-2 mb-4">
        <li>The clarity to understand your choices.</li>
        <li>The serenity to move forward with confidence.</li>
        <li>The overview your financial future deserves.</li>
      </ul>`,
    // Conclusion translated
    'hero.outro': `Because investing should not be a source of stress, but a lever for accomplishment.`,

    'form.email.placeholder': 'Email...',
    'form.submit': 'Join the waitlist',
    'footer.copyright': '© 2025 Connecteur inc 360.',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}