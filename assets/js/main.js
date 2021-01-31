document.fonts.ready.then(function () {
  document.body.classList.add('fonts-loaded');
});

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
  .matches;
const colorToggle = document.getElementById('toggle-color-scheme');
const colorToggleLabel = document.getElementById('toggle-color-scheme-label');

function toggleColorSchemePrefersLight(evt) {
  evt.preventDefault();

  if (colorToggle.getAttribute('aria-pressed') === 'true') {
    document.body.classList.remove('dark-theme');
    colorToggleLabel.innerText = 'dark mode';
    colorToggle.setAttribute('aria-pressed', 'false');
  } else {
    document.body.classList.add('dark-theme');
    colorToggleLabel.innerText = 'light mode';
    colorToggle.setAttribute('aria-pressed', 'true');
  }
}

function toggleColorSchemePrefersDark(evt) {
  evt.preventDefault();

  if (colorToggle.getAttribute('aria-pressed') === 'true') {
    document.body.classList.remove('light-theme');
    colorToggleLabel.innerText = 'light mode';
    colorToggle.setAttribute('aria-pressed', 'false');
  } else {
    document.body.classList.add('light-theme');
    colorToggleLabel.innerText = 'dark mode';
    colorToggle.setAttribute('aria-pressed', 'true');
  }
}

if (prefersDarkMode) {
  colorToggleLabel.innerText = 'light mode';
  colorToggle.onclick = toggleColorSchemePrefersDark;
  colorToggle.onkeypress = toggleColorSchemePrefersDark;
  colorToggleLabel.onclick = toggleColorSchemePrefersDark;
  colorToggleLabel.onkeypress = toggleColorSchemePrefersDark;
} else {
  colorToggleLabel.innerText = 'dark mode';
  colorToggle.onclick = toggleColorSchemePrefersLight;
  colorToggle.onkeypress = toggleColorSchemePrefersLight;
  colorToggleLabel.onclick = toggleColorSchemePrefersLight;
  colorToggleLabel.onkeypress = toggleColorSchemePrefersLight;
}
