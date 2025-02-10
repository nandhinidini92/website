const shapeSelect = document.getElementById('shape');
const inputFields = document.getElementById('inputFields');
const resultsDiv = document.getElementById('results');

shapeSelect.addEventListener('change', updateInputFields);

function updateInputFields() {
  const shape = shapeSelect.value;
  let html = '';

  if (shape === 'rectangle') {
    html = `
      <label for="length">Length:</label>
      <input type="number" id="length" placeholder="Enter length">
      <label for="breadth">Breadth:</label>
      <input type="number" id="breadth" placeholder="Enter breadth">
      <label for="perimeter">Perimeter (optional):</label>
      <input type="number" id="perimeter" placeholder="Enter perimeter">
    `;
  } else if (shape === 'circle') {
    html = `
      <label for="radius">Radius:</label>
      <input type="number" id="radius" placeholder="Enter radius">
    `;
  } else if (shape === 'triangle') {
    html = `
      <label for="base">Base:</label>
      <input type="number" id="base" placeholder="Enter base">
      <label for="height">Height:</label>
      <input type="number" id="height" placeholder="Enter height">
    `;
  } else if (shape === 'cube') {
    html = `
      <label for="side">Side:</label>
      <input type="number" id="side" placeholder="Enter side">
    `;
  } else if (shape === 'sphere') {
    html = `
      <label for="radius">Radius:</label>
      <input type="number" id="radius" placeholder="Enter radius">
    `;
  }

  inputFields.innerHTML = html;
}

function calculate() {
  const shape = shapeSelect.value;
  let result = '';

  if (shape === 'rectangle') {
    const length = parseFloat(document.getElementById('length').value);
    const breadth = parseFloat(document.getElementById('breadth').value);
    const perimeter = parseFloat(document.getElementById('perimeter').value);

    if (perimeter && breadth) {
      const calculatedLength = (perimeter / 2) - breadth;
      const area = calculatedLength * breadth;
      result = `Length: ${calculatedLength}, Area: ${area}`;
    } else if (length && breadth) {
      const area = length * breadth;
      const perimeter = 2 * (length + breadth);
      result = `Area: ${area}, Perimeter: ${perimeter}`;
    } else {
      result = 'Please provide valid inputs.';
    }
  } else if (shape === 'circle') {
    const radius = parseFloat(document.getElementById('radius').value);
    if (radius) {
      const area = Math.PI * radius * radius;
      const circumference = 2 * Math.PI * radius;
      result = `Area: ${area.toFixed(2)}, Circumference: ${circumference.toFixed(2)}`;
    } else {
      result = 'Please provide valid inputs.';
    }
  } else if (shape === 'triangle') {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    if (base && height) {
      const area = 0.5 * base * height;
      result = `Area: ${area}`;
    } else {
      result = 'Please provide valid inputs.';
    }
  } else if (shape === 'cube') {
    const side = parseFloat(document.getElementById('side').value);
    if (side) {
      const volume = side * side * side;
      const surfaceArea = 6 * side * side;
      result = `Volume: ${volume}, Surface Area: ${surfaceArea}`;
    } else {
      result = 'Please provide valid inputs.';
    }
  } else if (shape === 'sphere') {
    const radius = parseFloat(document.getElementById('radius').value);
    if (radius) {
      const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
      const surfaceArea = 4 * Math.PI * Math.pow(radius, 2);
      result = `Volume: ${volume.toFixed(2)}, Surface Area: ${surfaceArea.toFixed(2)}`;
    } else {
      result = 'Please provide valid inputs.';
    }
  }

  resultsDiv.textContent = result;
}

function reset() {
  inputFields.innerHTML = '';
  resultsDiv.textContent = '';
}

// Initialize input fields on page load
updateInputFields();