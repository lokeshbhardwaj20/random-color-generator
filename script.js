document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton');
    const generatedColor = document.getElementById('generatedColor');
    const colorName = document.getElementById('colorName');
  
    generateButton.addEventListener('click', function () {
      const randomColor = generateRandomColor();
      applyColor(randomColor);
      getColorName(randomColor);
    });
  
    // Function to generate a random color
    function generateRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // Function to get the color name using TinyColor
    function getColorName(color) {
      const tinyColor = tinycolor(color);
      const name = tinyColor.toName();
      
      if (name !== null) {
        colorName.textContent = name;
      } else {
        colorName.textContent = 'Unknown Color';
      }
    }
  
    // Function to apply the color to the entire screen
    function applyColor(color) {
      document.body.style.backgroundColor = color;
      generatedColor.style.backgroundColor = color;
    }
  });
  