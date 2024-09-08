// Select elements
const angleInput = document.getElementById("angleInput");
const angleSlider = document.getElementById("angleSlider");
const radioButtons = document.querySelectorAll('input[name="angleRadio"]');

// Update the slider and radio buttons when the text input changes
angleInput.addEventListener("input", () => {
  let angle = parseInt(angleInput.value);
  if (isNaN(angle)) angle = 0;
  angle = Math.min(Math.max(angle, 0), 360); // Clamp between 0 and 360
  angleInput.value = angle;
  angleSlider.value = angle;
  updateRadioButtons(angle);
});

// Update the text input and radio buttons when the slider changes
angleSlider.addEventListener("input", () => {
  const angle = angleSlider.value;
  angleInput.value = angle;
  updateRadioButtons(angle);
});

// Update the text input and slider when a radio button is selected
radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => {
    const angle = radio.value;
    angleInput.value = angle;
    angleSlider.value = angle;
  });
});

// Function to update radio buttons based on the current angle value
function updateRadioButtons(angle) {
  radioButtons.forEach((radio) => {
    radio.checked = parseInt(radio.value) === parseInt(angle);
  });
}
