// src/i18n/index.ts
export const languages = {
  fr: 'Français',
  en: 'English',
  es: 'Español', // Ajout de l'espagnol
};

export const defaultLang = 'fr';

export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'hero.title': "Connecteur360, le futur de l'investissement",
    'hero.intro': `Investir ne devrait jamais ressembler à un parcours du combattant. Trop souvent, on se perd dans un océan de données dispersées, d’analyses complexes et dans la crainte permanente de manquer la bonne opportunité.<br/><br/>
      Chez Connecteur 360 Inc., nous avons décidé de transformer radicalement cette expérience.
      Nous bâtissons l’outil que nous avons toujours rêvé d’utiliser :`,
    'hero.features': `
      <ul class="list-disc pl-5 space-y-1 mt-2 mb-4">
        <li>Une plateforme unique et intelligente qui dépasse la simple liste d’investissements.</li>
        <li>Un connecteur puissant entre vos objectifs de vie et les meilleures opportunités du marché.</li>
        <li>Une vision claire et globale qui vous libère du brouillard de l’incertitude.</li>
      </ul>`,
    'hero.impact_intro': `Avec Connecteur 360, vous gagnez enfin :`,
    'hero.impact_list': `
      <ul class="list-disc pl-5 space-y-1 mt-2 mb-4">
        <li>La clarté pour comprendre vos choix.</li>
        <li>La sérénité pour avancer avec confiance.</li>
        <li>La vision d’ensemble que mérite votre avenir financier.</li>
      </ul>`,
    'hero.outro': `Parce que l’investissement ne doit pas être une source de stress, mais un levier d’accomplissement.`,
    
    // Formulaire
    'form.lastname': 'Nom',
    'form.firstname': 'Prénom',
    'form.country': 'Pays de résidence',
    'form.email.placeholder': 'Email...',
    'form.submit': 'Rejoindre la waitlist',
    'footer.copyright': '© 2025 Connecteur inc 360.',
  },
  en: {
    'nav.home': 'Home',
    'hero.title': 'Connecteur360, the future of investment',
    'hero.intro': `Investing should never feel like an obstacle course. Too often, we get lost in an ocean of scattered data, complex analyses, and the constant fear of missing the right opportunity.<br/><br/>
      At Connecteur 360 Inc., we decided to radically transform this experience.
      We are building the tool we always dreamed of using:`,
    'hero.features': `
      <ul class="list-disc pl-5 space-y-1 mt-2 mb-4">
        <li>A unique and intelligent platform that goes beyond a simple list of assets.</li>
        <li>A powerful connector between your life goals and the market's best opportunities.</li>
        <li>A clear and global vision that frees you from the fog of uncertainty.</li>
      </ul>`,
    'hero.impact_intro': `With Connecteur 360, you finally gain:`,
    'hero.impact_list': `
      <ul class="list-disc pl-5 space-y-1 mt-2 mb-4">
        <li>The clarity to understand your choices.</li>
        <li>The serenity to move forward with confidence.</li>
        <li>The overview your financial future deserves.</li>
      </ul>`,
    'hero.outro': `Because investing should not be a source of stress, but a lever for accomplishment.`,

    // Form
    'form.lastname': 'Last name',
    'form.firstname': 'First name',
    'form.country': 'Country of residence',
    'form.email.placeholder': 'Email...',
    'form.submit': 'Join the waitlist',
    'footer.copyright': '© 2025 Connecteur inc 360.',
  },
  es: {
    'nav.home': 'Inicio',
    'hero.title': 'Connecteur360, el futuro de la inversión',
    'hero.intro': `Invertir nunca debería parecer una carrera de obstáculos. Con demasiada frecuencia, nos perdemos en un mar de datos dispersos, análisis complejos y el miedo constante a perder la oportunidad adecuada.<br/><br/>
      En Connecteur 360 Inc., hemos decidido transformar radicalmente esta experiencia.
      Estamos construyendo la herramienta que siempre soñamos usar:`,
    'hero.features': `
      <ul class="list-disc pl-5 space-y-1 mt-2 mb-4">
        <li>Una plataforma única e inteligente que va más allá de una simple lista de activos.</li>
        <li>Un potente conector entre sus objetivos de vida y las mejores oportunidades del mercado.</li>
        <li>Una visión clara y global que le libera de la niebla de la incertidumbre.</li>
      </ul>`,
    'hero.impact_intro': `Con Connecteur 360, por fin gana:`,
    'hero.impact_list': `
      <ul class="list-disc pl-5 space-y-1 mt-2 mb-4">
        <li>La claridad para entender sus opciones.</li>
        <li>La serenidad para avanzar con confianza.</li>
        <li>La visión de conjunto que merece su futuro financiero.</li>
      </ul>`,
    'hero.outro': `Porque la inversión no debe ser una fuente de estrés, sino una palanca de realización.`,

    // Formulario ES
    'form.lastname': 'Apellidos',
    'form.firstname': 'Nombre',
    'form.country': 'País de residencia',
    'form.email.placeholder': 'Correo electrónico...',
    'form.submit': 'Unirse a la lista de espera',
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