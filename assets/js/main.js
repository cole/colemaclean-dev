(function () {
  document.fonts.ready.then(function () {
    document.body.classList.add('fonts-loaded');
  });

  const onLoad = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
      .matches;
    const colorToggle = document.getElementById('toggle-color-scheme');
    const colorToggleLabel = document.getElementById(
      'toggle-color-scheme-label',
    );

    function toggleColorScheme(evt) {
      evt.preventDefault();

      let themeClass = 'dark-theme';
      let initialLabel = 'dark mode';
      let activeLabel = 'light mode';

      if (prefersDarkMode) {
        themeClass = 'light-theme';
        initialLabel = 'light mode';
        activeLabel = 'dark mode';
      }

      const toggleState = colorToggle.getAttribute('aria-pressed');
      if (toggleState === 'true') {
        colorToggle.setAttribute('aria-pressed', 'false');
        document.body.classList.remove(themeClass);
        colorToggleLabel.innerText = initialLabel;
      } else {
        colorToggle.setAttribute('aria-pressed', 'true');
        document.body.classList.add(themeClass);
        colorToggleLabel.innerText = activeLabel;
      }
    }

    colorToggle.onclick = toggleColorScheme;
    colorToggle.onkeypress = toggleColorScheme;
    colorToggleLabel.onclick = toggleColorScheme;
    colorToggleLabel.onkeypress = toggleColorScheme;

    if (prefersDarkMode) {
      colorToggleLabel.innerText = 'light mode';
    } else {
      colorToggleLabel.innerText = 'dark mode';
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onLoad);
  } else {
    onLoad();
  }
})();
