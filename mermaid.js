import mermaid from 'CDN/mermaid.esm.mjs';

// Registrar o pacote de ícones
mermaid.registerIconPacks([
  {
    name: 'logos', // Nome do pacote para ser usado nos diagramas
    loader: () =>
      fetch('https://unpkg.com/@iconify-json/logos@1/icons.json').then((res) => res.json()),
  },
]);
