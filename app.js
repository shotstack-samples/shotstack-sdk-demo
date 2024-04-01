const template = {
  timeline: {
    soundtrack: {
      src: 'https://s3-ap-southeast-2.amazonaws.com/shotstack-assets/music/moment.mp3',
      effect: 'fadeOut',
    },
    background: '#000000',
    tracks: [
      {
        clips: [
          {
            asset: {
              type: 'html',
              html: '<p data-html-type="text">HELLO WORLD</p>',
              css: "p { color: #ffffff; font-size: 32px; font-family: 'Montserrat ExtraBold'; text-align: center; }",
            },
            start: 0,
            length: 5,
            transition: {
              in: 'fade',
              out: 'fade',
            },
          },
        ],
      },
    ],
  },
  output: {
    format: 'mp4',
    size: {
      width: 512,
      height: 512,
    },
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('updateEditorButton');
  const targetId = 'player';

  button.addEventListener('click', () => {
    try {
      const parsedData = JSON.parse(editor.getValue());
      window.shotstack.load(targetId, parsedData);
    } catch (e) {
      alert('Invalid JSON');
    }
  });
});

require.config({ paths: { vs: 'https://unpkg.com/monaco-editor@latest/min/vs' } });
require(['vs/editor/editor.main'], () => {
  window.editor = monaco.editor.create(document.getElementById('editor'), {
    value: JSON.stringify(template, null, 2),
    language: 'json',
    theme: 'vs-dark',
    minimap: { enabled: false },
    folding: false,
  });
});
