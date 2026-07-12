/* =====================================================
   WEB DESIGN MINDSET — i18n.js
   English / French translations
   ===================================================== */

const TRANSLATIONS = {
  en: {
    /* ── Topbar ── */
    'topbar.available': 'Available for new projects',

    /* ── Nav ── */
    'nav.home':      'Home',
    'nav.services':  'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact':   'Contact',
    'nav.cta':       'Start a project',

    /* ── Index: Hero ── */
    'hero.eyebrow':   'Web Design Mindset',
    'hero.headline':  'We design websites that <span class="display-italic">convert</span>',
    'hero.sub':       'Strategy, design, and development for brands ready to grow.',
    'hero.founder':   'Founded by Junior Kouassi',
    'hero.cta1':      'Start a project',
    'hero.cta2':      'View work',
    'hero.scroll':    'Scroll',

    /* ── Index: Intro ── */
    'intro.text': 'We build <strong>high-performance websites</strong> that don\'t just look good — they work. Every pixel is intentional, every interaction deliberate. We partner with ambitious brands to turn their digital presence into their <strong>most powerful sales asset</strong>.',

    /* ── Index: Work ── */
    'work.label':    'Selected work',
    'work.heading':  'Projects that <span class="display-italic">perform</span>',
    'work.viewall':  'View all work',

    /* ── Index: Stats ── */
    'stat.projects':   'Projects shipped',
    'stat.industries': 'Industries served',
    'stat.retention':  'Client retention rate',
    'stat.conversion': 'Avg conversion lift',

    /* ── Index: Testimonials ── */
    'testimonials.label':   'What clients say',
    'testimonials.heading': 'Words that <span class="display-italic">matter</span>',

    /* ── Index: CTA block ── */
    'cta.heading': 'Ready to reach new horizons?',
    'cta.btn':     'Get in touch',

    /* ── Footer ── */
    'footer.tagline':  'We design websites that convert. Strategy, design, and development for brands ready to grow.',
    'footer.pages':    'Pages',
    'footer.services': 'Services',
    'footer.connect':  'Connect',
    'footer.copy':     '© 2026 Web Design Mindset. Founded by Junior Kouassi.',
    'footer.rights':   'All rights reserved.',

    /* ── Services page ── */
    'services.label':   'What we offer',
    'services.heading': 'What we <span class="display-italic">do</span>',
    'services.sub':     'End-to-end digital solutions for brands that want to grow. Every service is built around one goal — results.',

    's01.title': 'Web Design',
    's01.desc':  'We craft pixel-perfect, performance-driven websites built to convert visitors into customers. Every design decision is grounded in strategy and user behavior — not trends.',
    's01.d1': 'Custom design mockups',        's01.d2': 'Mobile-first responsive layouts',
    's01.d3': 'Interactive prototypes',       's01.d4': 'Design system & style guide',
    's01.d5': 'Handoff-ready assets',

    's02.title': 'Webflow Development',
    's02.desc':  'We build in Webflow — no code bloat, no developer bottleneck. Clean, maintainable builds your team can update without touching a single line of code.',
    's02.d1': 'Fully responsive Webflow build',  's02.d2': 'CMS collections setup',
    's02.d3': 'Custom interactions & animations','s02.d4': 'SEO-ready page structure',
    's02.d5': 'Client training & documentation',

    's03.title': 'Branding & Identity',
    's03.desc':  'Your brand is the first thing clients judge you by. We create visual identities that communicate authority, trust, and clarity — before you say a word.',
    's03.d1': 'Logo design & variations',         's03.d2': 'Color palette & typography system',
    's03.d3': 'Brand guidelines document',        's03.d4': 'Social media kit',
    's03.d5': 'Business card & stationery design',

    's04.title': 'SEO Optimization',
    's04.desc':  'A beautiful website no one finds is a missed opportunity. We implement technical SEO and on-page strategy to drive organic growth that compounds over time.',
    's04.d1': 'Technical SEO audit',        's04.d2': 'Keyword research & mapping',
    's04.d3': 'On-page optimization',       's04.d4': 'Schema markup',
    's04.d5': 'Core Web Vitals optimization',

    's05.title': 'Conversion Strategy',
    's05.desc':  'We analyze your user journey and remove every barrier between a visitor and a sale. Small, deliberate improvements add up to measurable revenue growth.',
    's05.d1': 'Conversion audit & heatmap review','s05.d2': 'A/B testing setup',
    's05.d3': 'Landing page optimization',        's05.d4': 'CTA & copy recommendations',
    's05.d5': 'Monthly performance reporting',

    's06.title': 'Ongoing Support',
    's06.desc':  'Launching is the beginning, not the end. We offer retainer partnerships to keep your site fast, secure, and continuously improving month over month.',
    's06.d1': 'Monthly updates & edits',  's06.d2': 'Security monitoring',
    's06.d3': 'Performance optimization', 's06.d4': 'Analytics reporting',
    's06.d5': 'Priority support & response',

    's07.title': 'Press Release',
    's07.desc':  'Get your brand published on 800+ premium media outlets in 1–2 business days. We write the article, handle full distribution, and send you the coverage report.',
    's07.d1': 'Professional article writing',
    's07.d2': 'Distribution to 800+ outlets (Package 1)',
    's07.d3': 'Globenewswire, AP News, Business Insider, Benzinga',
    's07.d4': 'CoinMarketCap, Binance Square, X Article',
    's07.d5': 'Full coverage report delivered',

    /* ── Portfolio page ── */
    'portfolio.label':   'Our work',
    'portfolio.heading': 'Selected <span class="display-italic">work</span>',
    'portfolio.sub':     'Six projects. Six brands that trusted us to build something that performs.',

    'portfolio.t.label':   'Client feedback',
    'portfolio.t.heading': 'Straight from the <span class="display-italic">source</span>',

    /* ── Contact page ── */
    'contact.label':   'Get in touch',
    'contact.heading': 'Let\'s <span class="display-italic">talk</span>',
    'contact.sub':     'Tell us about your project. We\'ll get back to you within 24 hours.',

    'form.name':        'Full name *',
    'form.name.ph':     'Your name',
    'form.email':       'Email address *',
    'form.email.ph':    'you@company.com',
    'form.company':     'Company / Brand',
    'form.company.ph':  'Your company name',
    'form.type':        'Project type *',
    'form.type.ph':     'Select a service…',
    'form.type.new':    'New website',
    'form.type.redo':   'Website redesign',
    'form.type.brand':  'Branding & Identity',
    'form.type.wf':     'Webflow development',
    'form.type.seo':    'SEO optimization',
    'form.type.other':  'Other',
    'form.budget':      'Budget range',
    'form.budget.ph':   'Select a range…',
    'form.budget.1':    'Under $2,000',
    'form.budget.2':    '$2,000 – $5,000',
    'form.budget.3':    '$5,000 – $10,000',
    'form.budget.4':    '$10,000 – $20,000',
    'form.budget.5':    '$20,000+',
    'form.message':     'Tell us about your project *',
    'form.message.ph':  'Describe your goals, timeline, and anything else that\'s relevant…',
    'form.submit':      'Send message →',

    'success.title': 'Message sent!',
    'success.sub':   'Thanks for reaching out. Junior will get back to you within 24 hours.',

    'contact.d.email':    'Email',
    'contact.d.location': 'Location',
    'contact.d.loc.val':  'Available worldwide · Remote-first',
    'contact.d.response': 'Response time',
    'contact.d.res.val':  'Within 24 hours',
    'contact.d.follow':   'Follow along',
    'contact.caption':    'Hi, I\'m Junior Kouassi',

    /* ── Press Release page ── */
    'pr.label':   'Media distribution',
    'pr.heading': 'Press <span class="display-italic">Release</span>',
    'pr.sub':     'Get your brand published across hundreds of premium media outlets. We write the article and handle full distribution — you focus on growing.',

    'pr.w1.title': 'Instant Credibility',
    'pr.w1.desc':  'Being featured on AP News, Business Insider, or CoinMarketCap signals legitimacy to every audience — investors, media, and customers alike.',
    'pr.w2.title': 'Massive Reach',
    'pr.w2.desc':  'One press release, distributed to up to 800+ outlets simultaneously. Your news reaches audiences across finance, crypto, tech, and mainstream media in a single push.',
    'pr.w3.title': 'SEO Authority',
    'pr.w3.desc':  'High-authority backlinks from major publications boost your Google ranking permanently — giving you long-term organic traffic from a single investment.',

    'pr.pricing.label':   'Pricing',
    'pr.pricing.heading': 'Choose your <span class="display-italic">package</span>',
    'pr.pricing.sub':     'Every package includes professional article writing and full distribution. No hidden fees.',

    'pr.p1.coverage': '800+ media outlets',
    'pr.p2.coverage': '350+ media outlets',
    'pr.p3.coverage': 'Crypto essentials',
    'pr.feat.writing': 'Writing of the article',
    'pr.feat.800':     '+ 800 other sites',
    'pr.feat.350':     '+ 350 other sites',
    'pr.order':        'Order Now',
    'pr.note':         'All packages include professional article writing. Delivery within 1–2 business days. <a href="contact.html">Questions? Get in touch →</a>',

    'pr.process.label':   'Process',
    'pr.process.heading': 'Simple as <span class="display-italic">three steps</span>',
    'pr.s1.title': 'You brief us',
    'pr.s1.desc':  'Share your project details, key messages, and any quotes you want included. A 15-minute conversation is all it takes.',
    'pr.s2.title': 'We write & submit',
    'pr.s2.desc':  'Our team crafts a professional, SEO-optimised press release and submits it simultaneously to every outlet in your package.',
    'pr.s3.title': 'You go live',
    'pr.s3.desc':  'Within 1–2 business days your article is live across hundreds of media outlets. We send you the full coverage report.',
  },

  fr: {
    /* ── Topbar ── */
    'topbar.available': 'Disponible pour de nouveaux projets',

    /* ── Nav ── */
    'nav.home':      'Accueil',
    'nav.services':  'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact':   'Contact',
    'nav.cta':       'Démarrer un projet',

    /* ── Index: Hero ── */
    'hero.eyebrow':   'Web Design Mindset',
    'hero.headline':  'Nous créons des sites web qui <span class="display-italic">convertissent</span>',
    'hero.sub':       'Stratégie, design et développement pour les marques prêtes à croître.',
    'hero.founder':   'Fondé par Junior Kouassi',
    'hero.cta1':      'Démarrer un projet',
    'hero.cta2':      'Voir les projets',
    'hero.scroll':    'Défiler',

    /* ── Index: Intro ── */
    'intro.text': 'Nous créons des sites web <strong>haute performance</strong> qui ne font pas que bien paraître — ils travaillent. Chaque pixel est intentionnel, chaque interaction délibérée. Nous accompagnons les marques ambitieuses pour transformer leur présence digitale en leur <strong>meilleur outil de vente</strong>.',

    /* ── Index: Work ── */
    'work.label':    'Projets sélectionnés',
    'work.heading':  'Projets qui <span class="display-italic">performent</span>',
    'work.viewall':  'Voir tous les projets',

    /* ── Index: Stats ── */
    'stat.projects':   'Projets livrés',
    'stat.industries': 'Secteurs servis',
    'stat.retention':  'Taux de fidélisation',
    'stat.conversion': 'Gain de conversion moyen',

    /* ── Index: Testimonials ── */
    'testimonials.label':   'Ce que disent nos clients',
    'testimonials.heading': 'Des mots qui <span class="display-italic">comptent</span>',

    /* ── Index: CTA block ── */
    'cta.heading': 'Prêts à atteindre de nouveaux horizons ?',
    'cta.btn':     'Nous contacter',

    /* ── Footer ── */
    'footer.tagline':  'Nous créons des sites web qui convertissent. Stratégie, design et développement pour les marques prêtes à croître.',
    'footer.pages':    'Pages',
    'footer.services': 'Services',
    'footer.connect':  'Nous suivre',
    'footer.copy':     '© 2026 Web Design Mindset. Fondé par Junior Kouassi.',
    'footer.rights':   'Tous droits réservés.',

    /* ── Services page ── */
    'services.label':   'Ce que nous proposons',
    'services.heading': 'Ce que nous <span class="display-italic">faisons</span>',
    'services.sub':     'Des solutions digitales complètes pour les marques qui veulent croître. Chaque service est conçu autour d\'un seul objectif — les résultats.',

    's01.title': 'Design Web',
    's01.desc':  'Nous créons des sites pixel-perfect, orientés performance, conçus pour convertir les visiteurs en clients. Chaque décision de design est ancrée dans la stratégie et le comportement utilisateur — pas dans les tendances.',
    's01.d1': 'Maquettes personnalisées',          's01.d2': 'Mises en page responsive mobile-first',
    's01.d3': 'Prototypes interactifs',            's01.d4': 'Système de design & charte graphique',
    's01.d5': 'Assets prêts à livrer',

    's02.title': 'Développement Webflow',
    's02.desc':  'Nous développons sur Webflow — sans surcharge de code, sans dépendance aux développeurs. Des builds propres et maintenables que votre équipe peut mettre à jour sans toucher une seule ligne de code.',
    's02.d1': 'Build Webflow 100% responsive',    's02.d2': 'Configuration des collections CMS',
    's02.d3': 'Interactions & animations custom',  's02.d4': 'Structure SEO-ready',
    's02.d5': 'Formation client & documentation',

    's03.title': 'Branding & Identité',
    's03.desc':  'Votre marque est la première chose que vos clients jugent. Nous créons des identités visuelles qui communiquent autorité, confiance et clarté — avant même que vous preniez la parole.',
    's03.d1': 'Design logo & déclinaisons',        's03.d2': 'Palette de couleurs & typographie',
    's03.d3': 'Guide de marque',                   's03.d4': 'Kit réseaux sociaux',
    's03.d5': 'Carte de visite & papeterie',

    's04.title': 'Optimisation SEO',
    's04.desc':  'Un beau site que personne ne trouve, c\'est une opportunité manquée. Nous mettons en œuvre une stratégie SEO technique et on-page pour générer une croissance organique durable.',
    's04.d1': 'Audit SEO technique',               's04.d2': 'Recherche & mapping de mots-clés',
    's04.d3': 'Optimisation on-page',              's04.d4': 'Balisage Schema',
    's04.d5': 'Optimisation Core Web Vitals',

    's05.title': 'Stratégie de Conversion',
    's05.desc':  'Nous analysons le parcours utilisateur et supprimons chaque obstacle entre un visiteur et une vente. Des améliorations ciblées qui se traduisent par une croissance mesurable.',
    's05.d1': 'Audit conversion & analyse heatmap','s05.d2': 'Mise en place A/B testing',
    's05.d3': 'Optimisation landing pages',        's05.d4': 'Recommandations CTA & copywriting',
    's05.d5': 'Reporting mensuel de performance',

    's06.title': 'Accompagnement Continu',
    's06.desc':  'Le lancement est le début, pas la fin. Nous proposons des partenariats en retainer pour maintenir votre site rapide, sécurisé et en constante amélioration.',
    's06.d1': 'Mises à jour & modifications mensuelles','s06.d2': 'Surveillance sécurité',
    's06.d3': 'Optimisation des performances',        's06.d4': 'Reporting analytics',
    's06.d5': 'Support prioritaire & réactivité',

    's07.title': 'Communiqué de presse',
    's07.desc':  'Faites publier votre marque sur 800+ médias premium en 1 à 2 jours ouvrables. Nous rédigeons l\'article, gérons la distribution et vous envoyons le rapport de couverture.',
    's07.d1': 'Rédaction professionnelle de l\'article',
    's07.d2': 'Distribution sur 800+ médias (Formule 1)',
    's07.d3': 'Globenewswire, AP News, Business Insider, Benzinga',
    's07.d4': 'CoinMarketCap, Binance Square, Article X',
    's07.d5': 'Rapport de couverture complet livré',

    /* ── Portfolio page ── */
    'portfolio.label':   'Notre travail',
    'portfolio.heading': 'Projets <span class="display-italic">sélectionnés</span>',
    'portfolio.sub':     'Six projets. Six marques qui nous ont fait confiance pour construire quelque chose qui performe.',

    'portfolio.t.label':   'Retours clients',
    'portfolio.t.heading': 'Directement à la <span class="display-italic">source</span>',

    /* ── Contact page ── */
    'contact.label':   'Prenons contact',
    'contact.heading': 'Parlons-en <span class="display-italic">ensemble</span>',
    'contact.sub':     'Parlez-nous de votre projet. Nous vous répondons sous 24 heures.',

    'form.name':        'Nom complet *',
    'form.name.ph':     'Votre nom',
    'form.email':       'Adresse email *',
    'form.email.ph':    'vous@entreprise.com',
    'form.company':     'Entreprise / Marque',
    'form.company.ph':  'Nom de votre entreprise',
    'form.type':        'Type de projet *',
    'form.type.ph':     'Choisir un service…',
    'form.type.new':    'Nouveau site web',
    'form.type.redo':   'Refonte de site',
    'form.type.brand':  'Branding & Identité',
    'form.type.wf':     'Développement Webflow',
    'form.type.seo':    'Optimisation SEO',
    'form.type.other':  'Autre',
    'form.budget':      'Budget estimé',
    'form.budget.ph':   'Sélectionner une fourchette…',
    'form.budget.1':    'Moins de 2 000 $',
    'form.budget.2':    '2 000 – 5 000 $',
    'form.budget.3':    '5 000 – 10 000 $',
    'form.budget.4':    '10 000 – 20 000 $',
    'form.budget.5':    '20 000 $+',
    'form.message':     'Parlez-nous de votre projet *',
    'form.message.ph':  'Décrivez vos objectifs, votre calendrier et tout ce qui vous semble pertinent…',
    'form.submit':      'Envoyer →',

    'success.title': 'Message envoyé !',
    'success.sub':   'Merci pour votre message. Junior vous répondra sous 24 heures.',

    'contact.d.email':    'Email',
    'contact.d.location': 'Localisation',
    'contact.d.loc.val':  'Disponible partout · 100 % remote',
    'contact.d.response': 'Délai de réponse',
    'contact.d.res.val':  'Sous 24 heures',
    'contact.d.follow':   'Nous suivre',
    'contact.caption':    'Bonjour, je suis Junior Kouassi',

    /* ── Press Release page ── */
    'pr.label':   'Distribution médias',
    'pr.heading': 'Communiqué <span class="display-italic">de presse</span>',
    'pr.sub':     'Faites publier votre marque sur des centaines de médias premium. Nous rédigeons l\'article et gérons toute la distribution — vous vous concentrez sur la croissance.',

    'pr.w1.title': 'Crédibilité immédiate',
    'pr.w1.desc':  'Être référencé sur AP News, Business Insider ou CoinMarketCap envoie un signal de légitimité à tout type d\'audience — investisseurs, médias et clients confondus.',
    'pr.w2.title': 'Portée massive',
    'pr.w2.desc':  'Un seul communiqué, distribué sur jusqu\'à 800+ médias simultanément. Votre actualité touche la finance, la crypto, la tech et les médias grand public en un seul envoi.',
    'pr.w3.title': 'Autorité SEO',
    'pr.w3.desc':  'Des backlinks provenant de publications majeures boostent votre positionnement Google durablement — un trafic organique à long terme issu d\'un seul investissement.',

    'pr.pricing.label':   'Tarifs',
    'pr.pricing.heading': 'Choisissez votre <span class="display-italic">formule</span>',
    'pr.pricing.sub':     'Chaque formule inclut la rédaction professionnelle de l\'article et la distribution complète. Sans frais cachés.',

    'pr.p1.coverage': '800+ médias',
    'pr.p2.coverage': '350+ médias',
    'pr.p3.coverage': 'Essentiels crypto',
    'pr.feat.writing': 'Rédaction de l\'article',
    'pr.feat.800':     '+ 800 autres sites',
    'pr.feat.350':     '+ 350 autres sites',
    'pr.order':        'Commander',
    'pr.note':         'Toutes les formules incluent la rédaction professionnelle. Livraison sous 1 à 2 jours ouvrables. <a href="contact.html">Des questions ? Contactez-nous →</a>',

    'pr.process.label':   'Comment ça marche',
    'pr.process.heading': 'Simple en <span class="display-italic">trois étapes</span>',
    'pr.s1.title': 'Vous nous briefez',
    'pr.s1.desc':  'Partagez les détails de votre projet, vos messages clés et les citations souhaitées. Un échange de 15 minutes suffit.',
    'pr.s2.title': 'On rédige & publie',
    'pr.s2.desc':  'Notre équipe rédige un communiqué professionnel et optimisé SEO, puis le soumet simultanément à tous les médias de votre formule.',
    'pr.s3.title': 'Vous passez en ligne',
    'pr.s3.desc':  'Sous 1 à 2 jours ouvrables, votre article est en ligne sur des centaines de médias. Nous vous envoyons le rapport de couverture complet.',
  },
};

/* ── i18n engine ─────────────────────────────────── */
function t(key) {
  const lang = window.__wdmLang || 'en';
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.en[key] || key;
}

function applyTranslations(lang) {
  window.__wdmLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('wdm-lang', lang);
  window.dispatchEvent(new CustomEvent('wdm-lang-change', { detail: { lang } }));

  /* Text content */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val !== undefined) el.textContent = val;
  });

  /* HTML content (for headlines with italic spans) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const val = t(key);
    if (val !== undefined) el.innerHTML = val;
  });

  /* Placeholders */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    const val = t(key);
    if (val !== undefined) el.placeholder = val;
  });

  /* Lang buttons: mark active */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

function initI18n() {
  const saved = localStorage.getItem('wdm-lang') || 'en';
  applyTranslations(saved);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTranslations(btn.dataset.lang));
  });
}

/* Auto-init when DOM is ready */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
