(function () {
  document.fonts.ready.then(function () {
    document.body.classList.add('fonts-loaded');
  });

  function getCookie(name) {
    const cookieVals = document.cookie
      .split('; ')
      .filter((row) => row.startsWith(name + '='))
      .map((row) => row.split('=')[1]);

    if (cookieVals.length > 0) {
      return cookieVals[0];
    }

    return '';
  }

  const onLoad = () => {
    const themeCookie = getCookie('theme');
    const mediaPrefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const lightModeValue = mediaPrefersDarkMode ? 'true' : 'false';
    const darkModeValue = mediaPrefersDarkMode ? 'false' : 'true';
    const themeSwitch = document.getElementById('theme-switch');
    const themeSwitchLabel = document.getElementById('theme-switch-label');

    function lightModeOn() {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      document.cookie = 'theme=light; samesite=lax; secure';
      themeSwitchLabel.innerText = 'dark mode';
      themeSwitch.setAttribute('aria-checked', lightModeValue);
    }

    function darkModeOn() {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      document.cookie = 'theme=dark; samesite=lax; secure';
      themeSwitchLabel.innerText = 'light mode';
      themeSwitch.setAttribute('aria-checked', darkModeValue);
    }

    if (themeCookie === 'light') {
      themeSwitch.setAttribute('aria-checked', lightModeValue);
    } else if (themeCookie === 'dark') {
      themeSwitch.setAttribute('aria-checked', darkModeValue);
    } else if (mediaPrefersDarkMode) {
      themeSwitchLabel.innerText = 'light mode';
    } else {
      themeSwitchLabel.innerText = 'dark mode';
    }

    function onToggleSwitch(evt) {
      evt.preventDefault();

      const toggleState = themeSwitch.getAttribute('aria-checked');

      if (toggleState === darkModeValue) {
        lightModeOn();
      } else {
        darkModeOn();
      }
    }

    themeSwitch.onclick = onToggleSwitch;
    themeSwitch.onkeypress = onToggleSwitch;
    themeSwitchLabel.onclick = onToggleSwitch;
    themeSwitchLabel.onkeypress = onToggleSwitch;
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onLoad);
  } else {
    onLoad();
  }
})();
