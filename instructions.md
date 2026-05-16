# Programmierstil und Arbeitsweise für dieses Website-Projekt

Diese Website ist ein Lernprojekt. Der Code soll fuer jemanden verstaendlich bleiben, der vor allem HTML und CSS kennt.

Das wichtigste Prinzip:

**So einfach wie moeglich, so wenig wie moeglich, so verstaendlich wie moeglich.**

Astro ist erlaubt. JavaScript ist erlaubt. Beides soll aber nur verwendet werden, wenn es wirklich hilft.

---

## 1. Grundprinzip

Bitte schreibe keinen unnoetig komplizierten Code.

Bevor du etwas einbaust, pruefe immer:

1. Geht es auch mit normalem HTML?
2. Geht es auch mit einfachem CSS?
3. Brauchen wir dafuer wirklich JavaScript?
4. Brauchen wir dafuer wirklich eine neue Datei?
5. Brauchen wir dafuer wirklich einen neuen Ordner?
6. Brauchen wir dafuer wirklich eine neue Bibliothek?

Wenn die einfache Loesung reicht, nimm immer die einfache Loesung.

---

## 2. Verstaendlichkeit ist wichtiger als Kuerze

Der Code soll nicht nur funktionieren, sondern auch lehrreich sein.

Schreibe sinnvolle Kommentare direkt in den Code. Die Kommentare sollen erklaeren:

- was ein Abschnitt macht,
- warum er dort steht,
- welche Aufgabe eine Klasse oder Datei hat,
- was fuer einen Anfaenger wichtig ist,
- welche Teile spaeter leicht geaendert werden koennen.

Die Kommentare sollen hilfreich sein, nicht kuenstlich.

Beispiel:

```html
<!-- Dieser Bereich ist der obere sichtbare Einstieg der Startseite.
     Hier sieht der Besucher zuerst, worum es auf der Website geht. -->
<section class="hero">
  <h1>Meine Website</h1>
  <p>Kurzer Erklaerungstext.</p>
</section>
```

---

## 3. Keine unnoetige Abstraktion

Erstelle nicht automatisch Komponenten, Unterordner oder Hilfsdateien.

Wenn ein Abschnitt nur einmal verwendet wird, bleibt er in derselben Datei.

Nur wenn ein Teil wirklich mehrfach vorkommt oder eine Datei sonst unuebersichtlich wird, darf er ausgelagert werden.

---

## 4. Ordnerstruktur

Die Ordnerstruktur soll minimal bleiben.

Aktuell gewuenschte Grundstruktur:

```txt
src/
  pages/
    index.astro
    theory/
      index.astro
      classical-electrodynamics.md
      statistical-physics.md
      qft/
        index.astro
        01-motivation.md
  Article.astro

public/
  style.css
```

Wichtig:

- Neue Theory-Artikel kommen nach `src/pages/theory/`.
- Markdown-Dateien werden nicht direkt im Browser geoeffnet. Die Website wird mit `npm run dev` gestartet und dann ueber `http://localhost:4321/...` angesehen.
- Bilder kommen spaeter nach `public/images/`, falls Bilder gebraucht werden.
- `node_modules`, `package.json`, `package-lock.json` und `astro.config.mjs` gehoeren technisch zu Astro/npm. Sie sind keine Inhalte der Website.

Bitte keine tiefen Strukturen wie:

```txt
components/
  layout/
  ui/
  sections/
  shared/
  common/
  widgets/
```

Solche Strukturen sind fuer dieses Projekt zu viel.

---

## 5. Astro wie erweitertes HTML verwenden

Nutze Astro moeglichst einfach.

Astro soll sich hier wie HTML mit kleinen Extras anfuehlen.

Gut:

```astro
---
const title = "Meine Website";
---

<h1>{title}</h1>
```

Vermeide komplizierte Astro-Logik, wenn sie nicht noetig ist.

Wenn Astro-spezifische Dinge verwendet werden, erklaere sie mit Kommentaren.

---

## 6. JavaScript nur sparsam einsetzen

JavaScript ist nur fuer echte Interaktivitaet gedacht.

Sinnvolle Beispiele:

- Menue oeffnen und schliessen
- einfache Filter
- kleine Animationen
- Formularverhalten
- kleine Benutzereingaben

Bitte kein JavaScript fuer Dinge verwenden, die HTML und CSS allein koennen.

Wenn JavaScript noetig ist, schreibe es sehr einfach und kommentiert.

Beispiel:

```js
// Wir suchen den Button, mit dem das Menue geoeffnet wird.
const menuButton = document.querySelector(".menu-button");

// Wir suchen das Menue selbst.
const menu = document.querySelector(".menu");

// Wenn der Button geklickt wird, bekommt das Menue eine Klasse.
// Ueber diese Klasse steuert CSS, ob das Menue sichtbar ist.
menuButton.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});
```

---

## 7. CSS-Stil

Schreibe CSS klar, ruhig und nachvollziehbar.

Vermeide kryptische Klassennamen.

Gut:

```css
.hero {
  padding: 4rem 1.5rem;
  text-align: center;
}

.hero-title {
  font-size: 2.5rem;
  line-height: 1.1;
}
```

Schlecht:

```css
.xl-grid-main-v2-special-wrapper {
}
```

Besser:

```css
.main-section {
}

.card-grid {
}

.feature-card {
}
```

---

## 8. Keine unnoetigen Bibliotheken

Installiere keine neue Bibliothek, wenn es auch ohne geht.

Vor jeder neuen Bibliothek muss klar sein:

- Welches konkrete Problem loest sie?
- Warum reichen HTML, CSS oder einfaches JavaScript nicht aus?
- Macht sie das Projekt wirklich einfacher?
- Bleibt der Code danach fuer einen Anfaenger verstaendlich?

Wenn eine Bibliothek nicht unbedingt noetig ist, nicht installieren.

---

## 9. Aenderungen klein halten

Aendere nicht zu viele Dinge auf einmal.

Arbeite in kleinen, logischen Schritten:

1. Struktur anlegen
2. Inhalt schreiben
3. Gestaltung hinzufuegen
4. Verhalten mit JavaScript ergaenzen, falls wirklich noetig

Grosse Umbauten ohne klare Notwendigkeit vermeiden.

---

## 10. Bei bestehenden Dateien

Wenn vorhandener Code bearbeitet wird:

- einfache Struktur erhalten,
- unnoetigen Code entfernen,
- vereinfachen, wo moeglich,
- wichtige Stellen kommentieren,
- kurz erklaeren, warum etwas geaendert wurde,
- keine wichtigen Inhalte ohne Grund loeschen.

---

## 11. Ziel der Website

Die Website soll schoen aussehen und gleichzeitig ein Lernprojekt bleiben.

Nach jeder Aenderung soll ungefaehr klar sein:

- Welche Datei wurde geaendert?
- Warum wurde sie geaendert?
- Was macht der neue Code?
- Was kann spaeter leicht angepasst werden?
- Welche Stellen sind wichtig fuer HTML, CSS, Astro oder JavaScript?

---

## 12. Antwortstil bei Codeaenderungen

Nach Codeaenderungen kurz erklaeren:

- Welche Dateien wichtig sind.
- Was jede Datei macht.
- Wo Text geaendert werden kann.
- Wo Farben, Abstaende und Schriftgroessen geaendert werden koennen.
- Ob JavaScript verwendet wurde und warum.

Bitte nicht zu technisch erklaeren. Erklaere es fuer jemanden mit HTML- und CSS-Erfahrung.

---

## 13. Was vermieden werden soll

Bitte vermeiden:

- zu viele Dateien,
- zu viele Unterordner,
- unnoetige Komponenten,
- unnoetige JavaScript-Logik,
- unnoetige Bibliotheken,
- schwer verstaendliche Abkuerzungen,
- komplizierte Muster,
- zu abstrakte Loesungen,
- Code ohne Kommentare,
- grosse Umbauten ohne Erklaerung.

---

## 14. Gewuenschter Stil

Der Code soll wirken wie:

- sauber,
- ruhig,
- geordnet,
- anfaengerfreundlich,
- gut kommentiert,
- leicht veraenderbar,
- nicht uebertechnisiert.

Lieber eine einfache Loesung, die verstaendlich ist, als eine professionelle Loesung, die schwer nachvollziehbar ist.

---

## Kurzer Codex-Befehl

Arbeite an dieser Website maximal einfach und verstaendlich. Ich kenne vor allem HTML und CSS. Astro und wenig JavaScript sind erlaubt, aber nur, wenn es wirklich noetig ist. Erstelle moeglichst wenige Dateien und Ordner. Die Struktur soll aufgeraeumt bleiben. Keine unnoetigen Komponenten, keine unnoetigen Bibliotheken, keine komplizierte Logik.

Erklaere den Code durch sinnvolle Kommentare direkt in den Dateien. Der Code soll lehrreich sein, damit ich beim Durchlesen verstehe, was passiert. Verwende einfache Klassennamen, klare CSS-Struktur und nur wenig JavaScript. Wenn JavaScript noetig ist, kommentiere jeden wichtigen Schritt.

Bevor du neue Dateien, Unterordner, Komponenten oder Bibliotheken erstellst, pruefe immer, ob es auch einfacher geht. Bevorzuge HTML und CSS. Nutze Astro eher wie erweitertes HTML. Nach Aenderungen erklaere kurz, welche Dateien wichtig sind, was sie machen und wo Inhalte oder Gestaltung angepasst werden koennen.
