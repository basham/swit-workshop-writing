import Reveal from './reveal.js/dist/reveal.esm.js';
import Markdown from './reveal.js/plugin/markdown/markdown.esm.js';
import Notes from './reveal.js/plugin/notes/notes.esm.js';

Reveal.initialize({
  backgroundTransition: 'none',
  dependencies: [
    {
      async: true,
      condition: () => !!document.body.classList,
      src: 'reveal-a11y/accessibility/helper.js',
    }
  ],
  hash: true,
  markdown: {
    smartypants: true
  },
  plugins: [
    Markdown,
    Notes
  ],
  transition: 'none'
});

Reveal.on('ready', updateTheme);

Reveal.on('slidechanged', updateTheme);

function updateTheme (event) {
  const isPrimary = !!event.currentSlide.querySelector('h1');
  document.body.classList.toggle('reveal-viewport--primary', isPrimary);
}
