const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: false,
  theme: {
    darkSelector: '.dark-mode',
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '880px',
    },
    extend: {
      fontSize: {
        sm: ['13px', '28px'],
        base: ['16px', '28px'],
      },
      minHeight: {
        'xs': '12rem',
        'sm': '16rem',
        'mu': '17rem',
        'hr': '27rem',
        'xl': '44rem',
        'xu': '49rem',
      },
      height: {
        'xs': '12rem',
        'sm': '16rem',
        'mu': '17rem',
        'hr': '27rem',
        'gc': '40rem',
        'xl': '44rem',
        'xu': '49rem',
      },
      spacing: {
      	'2px': '2px',
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '1/8': '10%',
        '2/8': '25%',
        '3/8': '36.5%',
        '4/8': '50%',
        '5/8': '62.5%',
        '6/8': '75%',
        '7/8': '90%',
        '3/11': '30%',
        '1/10': '10%',
        '3/10': '30%',
        '7/10': '70%',
        '9/10': '90%',
        '16/17': '93.5%',
        '11/16': '67%',
      },
      textColor: {
        "default": "var(--color-text-default)",
        "default-soft": "var(--color-text-meta)",
        "meta": "var(--color-text-meta)",
        "inverse": "var(--color-text-inverse)",
        // links
        "link": "var(--a11y-text-link)",
        // fountain
        "synopsis": "var(--color-synopsis)",
        "parenthesis": "var(--color-parenthesis)",
        "action": "var(--color-action)",
        "lyrics": "var(--color-lyrics)",
        // primary
        "indigo-primary": "var(--a11y-indigo-primary)",         // h2
        "serenity-primary": "var(--a11y-serenity-primary)",     // h2
        "tranquil-primary": "var(--a11y-green-primary)",        // h2
        "gold-primary": "var(--a11y-yellow-primary)",           // h2
        "yellow-primary": "palegoldenrod",                      // h2
        "amber-primary": "var(--a11y-orange-primary)",          // h2
        "rose-primary": "var(--a11y-rose-primary)",             // h2
        "violet-primary": "var(--a11y-violet-primary)",         // h2
        // secondary
        "indigo-secondary": "var(--a11y-indigo-secondary)",     // h2
        "serenity-secondary": "var(--a11y-serenity-secondary)", // h2
        "tranquil-secondary": "var(--a11y-green-secondary)",    // h2
        "gold-secondary": "var(--a11y-yellow-secondary)",       // h2
        "amber-secondary": "var(--a11y-orange-secondary)",      // h2
        "rose-secondary": "var(--a11y-rose-secondary)",         // h2
        "violet-secondary": "var(--a11y-violet-secondary)",     // h2
        // additional
        "serenity-inverse": "var(--a11y-primary-inverse)",
        // rose headings
        "rose-heading-primary": "var(--a11y-rose-gold-primary)",     // h4
        "rose-heading-secondary": "var(--a11y-rose-gold-secondary)", // h5
      },
      backgroundColor: {
        "default": "var(--color-bg-default)",
        "contrast": "var(--color-bg-contrast)",
        "dark": "var(--blue-highlight-dark)",
        // home page featured serenity
        "primary": "var(--a11y-primary)",
        "primary-tranquil": "var(--a11y-tranquil)",
        "primary-gold": "var(--a11y-gold)",
        "secondary": "var(--a11y-secondary)",
        // rainbow palette
        "indigo": "var(--switch-indigo-background)",
        "serenity": "var(--switch-blue-background)",
        "pacific": "var(--switch-cyan-background)",
        "tranquil": "var(--switch-green-background)",
        "gold": "var(--switch-yellow-background)",
        "amber": "var(--switch-orange-background)",
        "rose": "var(--switch-red-background)",
        "orchid": "var(--switch-pink-background)",
        "violet": "var(--switch-violet-background)",
        "platinum": "var(--switch-platinum-background)",
        // highlights
        "violet-mark": "var(--switch-violet-mark)",
        "indigo-mark": "var(--switch-indigo-mark)",
        "serenity-mark": "var(--switch-blue-mark)",
        "tranquil-mark": "var(--switch-green-mark)",
        "gold-mark": "var(--switch-yellow-mark)",
        "amber-mark": "var(--switch-orange-mark)",
        "rose-mark": "var(--switch-red-mark)",
        // rose gold (buttons)
        "rose-gold": "var(--a11y-rose-gold-primary)",
        "rose-gold-inverse": "var(--a11y-rose-gold-primary-inverse)",
      },
      borderColor: {
        "default": "var(--color-border-serenity-default)",
        // rainbow accents
        "indigo": "var(--a11y-border-indigo)",
        "serenity": "var(--a11y-border-serenity)",
        "pacific": "var(--a11y-border-cyan)",
        "tranquil": "var(--a11y-border-green)",
        "gold": "var(--a11y-border-yellow)",
        "amber": "var(--a11y-border-orange)",
        "rose": "var(--a11y-border-rose)",
        "orchid": "var(--a11y-border-pink)",
        "violet": "var(--a11y-border-violet)",
        // rose gold (buttons)
        "rose-gold": "var(--a11y-rose-gold-primary)",
        "rose-gold-inverse": "var(--a11y-rose-gold-primary-inverse)",
      }
    },
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'hover'],
    backgroundPosition: ['dark'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover'],
    display: ['responsive', 'dark', 'dark-hover', 'dark-active'],
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
};