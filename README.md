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

## Neues Dokument schreiben und pushen

Vorher immer den aktuellen Stand von GitHub holen:

```sh
git pull --ff-only
```

Dann eine neue Markdown-Datei in `src/pages/theory/` anlegen.
Der Dateiname wird zur URL:

```txt
src/pages/theory/classical-mechanics.md
```

wird zu:

```txt
/theory/classical-mechanics/
```

Beispiel fuer eine neue Theory-Seite:

```md
---
layout: "../../Article.astro"
title: "Klassische Mechanik"
description: "Newtonsche Mechanik, Lagrange-Formalismus und Hamilton-Mechanik."
---

## Ausgangspunkt

Hier steht der Text.

Inline-Formel: $E = T + V$

Block-Formel:

$$
F = m a
$$
```

Damit die Seite in der Theory-Uebersicht erscheint, in
`src/pages/theory/index.astro` einen neuen Eintrag in die `theory-list`
setzen:

```astro
<article>
  <h2><a href="/theory/classical-mechanics/">Klassische Mechanik</a></h2>
  <p>
    Newtonsche Bewegungsgleichungen, Energie, Impuls,
    Lagrange-Mechanik und Hamilton-Formalismus.
  </p>
</article>
```

Lokal testen:

```sh
npm run dev
```

Dann im Browser oeffnen:

```txt
http://127.0.0.1:4321/theory/
```

oder direkt:

```txt
http://127.0.0.1:4321/theory/classical-mechanics/
```

Vor dem Push pruefen, ob Astro die Seite bauen kann:

```sh
npm run build
```

Dann committen und pushen:

```sh
git status
git add src/pages/theory/index.astro src/pages/theory/classical-mechanics.md
git commit -m "Add classical mechanics page"
git push
```

Wenn beim Push `fetch first` kommt:

```sh
git pull --ff-only
git push
```

Wichtig: Markdown-Dateien nicht direkt im Browser oeffnen. Immer zuerst:

```sh
npm run dev
```

Dann die Seite im Browser ueber Astro oeffnen, zum Beispiel:

```txt
http://localhost:4321/theory/classical-electrodynamics/
```

Deployment:

Die fertige Website wird nicht direkt aus den `.astro`- und `.md`-Dateien angezeigt.
GitHub Actions baut die Seite zuerst mit `npm run build` und veroeffentlicht dann den Ordner `dist/`.
