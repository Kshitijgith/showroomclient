// customWidthHeightPlugin.js

// customWidthHeightPlugin.js

// customWidthHeightPlugin.js

// customPercentagePlugin.js

module.exports = function ({ addUtilities }) {
    const utilities = {};
  
    for (let i = 1; i <= 100; i++) {
      const widthClassName = `.w-${i}-percent`;
      const heightClassName = `.h-${i}-percent`;
  
      utilities[widthClassName] = {
        width: `${i}%`,
      };
  
      utilities[heightClassName] = {
        height: `${i}%`,
      };
    }
  
    addUtilities(utilities, ['responsive', 'hover']);
  };
  