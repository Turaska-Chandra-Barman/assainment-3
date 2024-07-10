/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ['*.html'],
  theme: {
    extend: {
      screens: {
        sm0: '385px',
        sm1: '420px',
        smpro: '530px',
        sm2: '1780px',
        sm3: '2000px',
        sm4: '1135px',
      },
      fontFamily: {
        plus: ['Plus Jakarta Sans', 'sans-serif'],
      },
      maxWidth: {
        '9xl': '580px',
        '10xl': '1820px',
        '11xl': '1650px',
        '12xl': '2000px',
        '13xl': '2200px',
        'logo-max': '350px',
        'upskils-text': '570px',
      },
      minHeight: {
        'hero-img': '800px',
        'header-h': '900px',
      },
      borderRadius: {
        coustomaize: '0% 0 50% 50%/0 0 10% 10%',
        coustomaize2: '50% 50% 0 0%/100% 100% 0 0',
        b: '0px 0px 0xp 10px'
      },
      colors: {
        'main-clr': '#FAFAFA',
        'header-section': '#FAFAFA',
        btn: '#F44335',
        navclr: '#072125',
        activeclr: '#F44335',
        empower: '#DDDDDD',
        empowerbg: '#2D3142',
        missionbg: '#F5E5E5',
        secondaryclr: '#F5F5F5',
        missiontext: '#FC5A5A',
        line: '#9A9CA5',
        circel: '#00FF84',
        footer: '#20484F',
      },
      boxShadow: {
        boxshadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
    },
  },
  plugins: [],
};

