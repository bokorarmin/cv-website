import './languageToggle.css';

export const LanguageToggleButton = () => {
  return (
    <div className="language-toggle-wrapper">
      <input type="checkbox" id="language-toggle" />
      <label id="button" htmlFor="language-toggle">
        <div id="knob" />
        <div id="language-text">HU</div>
      </label>
    </div>
  );
};
