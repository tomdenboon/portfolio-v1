export function applyTheme(theme) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });
}

export function createTheme({
  primary,
  primaryDark,
  secondary,
  textBase,
  textDark,
  textDarkest,
}) {
  return {
    "--theme-primary": primary,
    "--theme-primary-dark": primaryDark,
    "--theme-secondary": secondary,
    "--theme-text-base": textBase,
    "--theme-text-dark": textDark,
    "--theme-text-darkest": textDarkest,
  };
}
