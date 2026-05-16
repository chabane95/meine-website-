# meine-website

Lokale Vorschau:

```sh
npm install
npm run dev
```

Danach diese Adresse im Browser oeffnen:

```txt
http://127.0.0.1:4321/
```

Nicht die `.md`-Dateien und nicht den Projektordner direkt im Browser oeffnen.
Astro wandelt Markdown erst ueber diese lokale Adresse in normale Webseiten um.

Theory-Artikel kommen direkt nach `src/pages/theory/`.

Eine Theory-Notiz ist einfach eine `.md`-Datei:

```md
---
layout: "../../Article.astro"
title: "Titel"
description: "Kurze Beschreibung."
---

Normaler Text.

Inline-Formel: $E = mc^2$

Block-Formel:

$$
\int_a^b f(x)\,dx
$$
```

Neue QFT-Kapitel kommen nach `src/pages/theory/qft/`.
Dort ist der Layout-Pfad eine Ebene tiefer:

```md
---
layout: "../../../Article.astro"
title: "2. Relativistische Grundlagen"
description: "Kurze Beschreibung."
section: "Quantenfeldtheorie"
backLink: "/theory/qft/"
backText: "Zur QFT-Übersicht"
---
```

Wichtig: Markdown-Dateien nicht direkt im Browser oeffnen. Immer zuerst:

```sh
npm run dev
```

Dann die Seite im Browser ueber Astro oeffnen, zum Beispiel:

```txt
http://localhost:4321/theory/classical-electrodynamics/
```
