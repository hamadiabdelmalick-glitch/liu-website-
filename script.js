// Simple client-side translation using data-i18n attributes
(function(){
  const translations = {
    fr: {
      "header.title":"LIU Université",
      "nav.home":"Accueil",
      "nav.about":"À propos",
      "nav.programs":"Formations",
      "nav.admissions":"Admissions",
      "nav.contact":"Contact",
      "hero.heading":"Bienvenue à LIU Université",
      "hero.sub":"Excellence dans l'enseignement, la recherche et l'engagement communautaire.",
      "hero.cta":"Postuler",
      "stats.departments":"Départements",
      "stats.students":"Étudiants",
      "stats.faculty":"Corps enseignant",
      "about.heading":"À propos de LIU",
      "about.p":"LIU Université est une institution dynamique dédiée à l'excellence académique et à la réussite des étudiants.",
      "about.p2":"Nous proposons des programmes de premier cycle et des cycles supérieurs, des opportunités de recherche et une communauté solidaire.",
      "programs.heading":"Formations",
      "programs.1":"Informatique",
      "programs.1.p":"Accent fort sur l'IA, les systèmes et l'ingénierie logicielle.",
      "programs.2":"Administration des affaires",
      "programs.2.p":"Prépare au leadership dans les organisations mondiales.",
      "programs.3":"Études de l'environnement",
      "programs.3.p":"Approches interdisciplinaires de la durabilité.",
      "programs.4":"Design & Média",
      "programs.4.p":"Pratique créative avec projets réels.",
      "news.heading":"Actualités",
      "news.1.title":"LIU lance un nouveau laboratoire d'IA",
      "news.1.p":"Un nouveau laboratoire interdisciplinaire axé sur la recherche en IA responsable.",
      "news.2.title":"Bourses attribuées",
      "news.2.p":"Plus de 200 bourses attribuées aux candidats méritants.",
      "events.heading":"Événements à venir",
      "events.1":"Journée Portes Ouvertes",
      "events.2":"Salon des diplômes",
      "faculty.heading":"Portraits du corps enseignant",
      "faculty.1.name":"Dr. Alice Martin",
      "faculty.1.role":"Professeur d'informatique",
      "faculty.2.name":"Dr. Omar Khan",
      "faculty.2.role":"Professeur associé - Études de l'environnement",
      "faculty.3.name":"Dr. Maria Lopez",
      "faculty.3.role":"Chargée de cours, École de commerce",
      "admissions.heading":"Admissions",
      "admissions.p":"Découvrez les conditions d'admission, les délais et comment postuler.",
      "admissions.cta":"Commencer votre candidature",
      "contact.heading":"Contact",
      "contact.p":"Envoyez-nous un e-mail à info@liu.edu ou appelez le +1 (800) 555-0123.",
      "footer.about.title":"LIU Université",
      "footer.about.p":"Une communauté engagée dans l'apprentissage et la découverte.",
      "footer.links.title":"Liens rapides",
      "footer.contact.title":"Contact",
      "footer.contact.p":"info@liu.edu\n+1 (800) 555-0123",
      "footer.text":"© 2026 LIU Université — Tous droits réservés."
    }
  };

  // extended translation keys for new page-specific content
  Object.assign(translations.fr, {
    "about.values.1":"Excellence académique",
    "about.values.2":"Intégrité et inclusion",
    "about.values.3":"Engagement communautaire",
    "about.leadership.president":"Présidente :",
    "about.leadership.president.name":"Dr. Caroline Reed",
    "about.leadership.dean":"Provost :",
    "about.leadership.provost.name":"Dr. James Okoye",

    "programs.intro":"LIU propose un ensemble de programmes de premier cycle et de cycles supérieurs conçus pour préparer les étudiants aux carrières et à la recherche.",
    "programs.1.degree":"BSc / MSc / PhD",
    "programs.1.courses":"Programmation; Structures de données; Machine Learning; Systèmes",
    "programs.2.degree":"BBA / MBA",
    "programs.2.courses":"Comptabilité; Marketing; Stratégie; Entrepreneuriat",
    "programs.3.degree":"BA / MSc",
    "programs.3.courses":"Science du climat; Politiques; SIG; Conservation",
    "programs.4.degree":"BA / BFA",
    "programs.4.courses":"Design visuel; UX; Motion Graphics; Portfolio",
    "programs.cs.title":"Informatique — Aperçu",
    "programs.cs.desc":"Le programme d'informatique met l'accent sur la théorie fondamentale et l'expérience pratique en développement logiciel, systèmes et recherche en IA.",
    "programs.cs.courses.title":"Cours types",
    "programs.cs.course1":"Algorithmes",
    "programs.cs.course2":"Apprentissage automatique",
    "programs.cs.course3":"Systèmes d'exploitation",
    "programs.bus.title":"Administration des affaires — Aperçu",
    "programs.bus.desc":"Se concentre sur le leadership, l'analytique et l'innovation; stages et projets industriels intégrés.",

    "admissions.undergrad.title":"Admissions — Premier cycle",
    "admissions.undergrad.req":"Diplôme d'études secondaires ou équivalent",
    "admissions.undergrad.gpa":"Moyenne recommandée : 3,0+",
    "admissions.undergrad.docs":"Relevés de notes, lettre de motivation, lettres de recommandation",
    "admissions.grad.title":"Admissions — Cycles supérieurs",
    "admissions.grad.req":"Licence dans un domaine lié",
    "admissions.grad.gpa":"Moyenne recommandée : 3,2+",
    "admissions.grad.docs":"Relevés, CV, lettre de motivation, références",
    "admissions.deadlines.title":"Délais & frais",
    "admissions.deadlines.p":"Les candidatures sont acceptées en continu. Les candidats internationaux doivent candidater au moins 3 mois avant la rentrée.",
    "admissions.scholarships.title":"Bourses & aide",
    "admissions.scholarships.p":"Aide au mérite et basée sur les besoins disponible; consultez le bureau d'aide financière.",

    "contact.visit.title":"Visiter le campus",
    "contact.visit.p":"Les visites du campus sont disponibles toute l'année. Prenez rendez-vous via le lien ci-dessous.",
    "contact.visit.cta":"Planifier une visite",
    "contact.hours.title":"Horaires de bureau",
    "contact.hours.p":"Lun–Ven : 9h00 – 17h00",
    "contact.form.title":"Contactez-nous",
    "contact.form.name":"Nom",
    "contact.form.email":"E-mail",
    "contact.form.message":"Message",
    "contact.form.submit":"Envoyer le message",
    "contact.visit.prefill":"Je souhaite planifier une visite du campus.",
    "programs.intro":"LIU propose un ensemble de programmes de premier cycle et de cycles supérieurs conçus pour préparer les étudiants aux carrières et à la recherche.",
    "programs.1.degree":"BSc / MSc / PhD",

  });

  // Schedule-visit button: smooth-scroll to form, prefill date/message and focus
  function attachScheduleVisit(){
    const scheduleBtn = document.getElementById('schedule-visit-btn');
    const contactForm = document.getElementById('contact-form');
    if(!scheduleBtn || !contactForm) return;
    scheduleBtn.addEventListener('click', function(e){
      e.preventDefault();
      // smooth scroll
      contactForm.scrollIntoView({behavior:'smooth', block:'center'});

      // prefill date if empty (set to 7 days from now)
      const dateInput = contactForm.querySelector('#visit-date');
      if(dateInput && !dateInput.value){
        const d = new Date();
        d.setDate(d.getDate() + 7);
        dateInput.value = d.toISOString().slice(0,10);
      }

      // prefill message if empty
      const message = contactForm.querySelector('#message');
      const lang = localStorage.getItem(STORAGE_KEY) || DEFAULT;
      if(message && message.value.trim() === ''){
        if(lang === 'fr'){
          message.value = translations.fr['contact.visit.prefill'] || 'Je souhaite planifier une visite du campus.';
        } else {
          message.value = 'I would like to schedule a campus visit.';
        }
      }

      // focus name input
      const name = contactForm.querySelector('#name');
      if(name) name.focus();
    });
  }

  const STORAGE_KEY = 'liu-lang';
  const DEFAULT = 'en';

  function applyTranslations(lang){
    const nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach(node => {
      const key = node.getAttribute('data-i18n');
      if(lang === 'en'){
        // restore original English text
        const orig = window.__liu_original && window.__liu_original[key];
        if(orig !== undefined) node.textContent = orig;
        return;
      }
      if(translations[lang] && translations[lang][key]){
        node.textContent = translations[lang][key];
      }
    });

    const label = document.getElementById('lang-label');
    const btn = document.getElementById('lang-toggle');
    if(label) label.textContent = (lang === 'fr') ? 'FR' : 'EN';
    if(btn) btn.setAttribute('aria-pressed', String(lang === 'fr'));
    document.documentElement.lang = (lang === 'fr') ? 'fr' : 'en';
  }

  function setLanguage(lang){
    lang = lang || DEFAULT;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
  }

  function cacheOriginals(){
    const map = {};
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const key = node.getAttribute('data-i18n');
      map[key] = node.textContent.trim();
    });
    window.__liu_original = map;
  }

  // Mobile menu toggle
  function attachMenuToggle(){
    const menuBtn = document.getElementById('menu-toggle');
    const nav = document.querySelector('.main-nav');
    if(!menuBtn || !nav) return;
    menuBtn.addEventListener('click', ()=>{
      const open = nav.style.display !== 'flex';
      nav.style.display = open ? 'flex' : 'none';
      menuBtn.setAttribute('aria-expanded', String(open));
    });
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    cacheOriginals();
    attachMenuToggle();
    const btn = document.getElementById('lang-toggle');
    const storedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT;
    if(storedLang === 'fr') applyTranslations('fr');
    if(btn){
      btn.addEventListener('click', ()=>{
        const current = localStorage.getItem(STORAGE_KEY) || DEFAULT;
        const next = (current === 'fr') ? 'en' : 'fr';
        setLanguage(next);
      });
    }
  });
})();
