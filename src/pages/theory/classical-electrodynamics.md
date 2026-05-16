---
layout: "../../Article.astro"
title: "Klassische Elektrodynamik"
description: "Eine kleinschrittige Herleitung der Maxwell-Gleichungen und ein alternativer Zugang über den Lagrange-Formalismus."
---

## Ausgangspunkt

Klassische Elektrodynamik beginnt mit einer einfachen physikalischen Tatsache: Materie kann elektrische Ladung tragen. Diese Ladung kann sich bewegen, aber sie verschwindet in gewöhnlichen elektromagnetischen Prozessen nicht einfach. Das erste fundamentale Prinzip ist daher lokale Ladungserhaltung.

Wichtig ist: Die Maxwell-Gleichungen sind nicht reine mathematische Sätze. Sie sind Naturgesetze. Man kann aber streng zeigen, wie ihre lokale Form aus Ladungserhaltung, Coulombs Gesetz, Faradays Induktionsgesetz und Konsistenz folgt.

## 1. Ladungsdichte und Stromdichte

Wir beschreiben Ladung lokal durch eine Ladungsdichte $\rho(\mathbf{x},t)$. Die gesamte Ladung in einem festen Volumen $V$ ist

$$
Q_V(t)=\int_V \rho(\mathbf{x},t)\,d^3x .
\tag{1}
$$

Wenn Ladung aus $V$ herausfließt, muss sie die Randfläche $\partial V$ durchqueren. Dies beschreibt die Stromdichte $\mathbf{j}(\mathbf{x},t)$. Mit nach außen orientiertem Flächenelement $d\mathbf{S}$ gilt

$$
\frac{d}{dt}\int_V \rho\,d^3x
=
-\oint_{\partial V}\mathbf{j}\cdot d\mathbf{S}.
\tag{2}
$$

Mit dem Gaußschen Satz wird der Fluss durch den Rand zu einem Volumenintegral:

$$
\oint_{\partial V}\mathbf{j}\cdot d\mathbf{S}
=
\int_V \nabla\cdot\mathbf{j}\,d^3x .
\tag{3}
$$

Da das Volumen $V$ beliebig gewählt war, muss der Integrand punktweise verschwinden. Damit folgt die Kontinuitätsgleichung:

$$
\boxed{
\frac{\partial \rho}{\partial t}
+
\nabla\cdot\mathbf{j}=0
}.
\tag{4}
$$

## 2. Das elektrische Feld und Gauß' Gesetz

Das elektrische Feld $\mathbf{E}$ wird operational durch die Kraft auf eine kleine Probeladung $q$ definiert:

$$
\mathbf{F}=q\mathbf{E}.
\tag{5}
$$

Für eine ruhende Punktladung am Ort $\mathbf{x}'$ lautet Coulombs Gesetz

$$
\mathbf{E}(\mathbf{x})
=
\frac{1}{4\pi\varepsilon_0}
q\frac{\mathbf{x}-\mathbf{x}'}
{|\mathbf{x}-\mathbf{x}'|^3}.
\tag{6}
$$

Für eine kontinuierliche Ladungsverteilung erhält man durch Superposition

$$
\mathbf{E}(\mathbf{x})
=
\frac{1}{4\pi\varepsilon_0}
\int
\rho(\mathbf{x}')
\frac{\mathbf{x}-\mathbf{x}'}
{|\mathbf{x}-\mathbf{x}'|^3}
\,d^3x' .
\tag{7}
$$

Die zentrale mathematische Identität ist

$$
\nabla\cdot
\frac{\mathbf{x}-\mathbf{x}'}
{|\mathbf{x}-\mathbf{x}'|^3}
=
4\pi\delta^{(3)}(\mathbf{x}-\mathbf{x}').
\tag{8}
$$

Wendet man die Divergenz auf das elektrische Feld an, folgt

$$
\boxed{
\nabla\cdot\mathbf{E}
=
\frac{\rho}{\varepsilon_0}
}.
\tag{9}
$$

## 3. Keine magnetischen Monopole

Für das magnetische Feld $\mathbf{B}$ findet man keine isolierten magnetischen Quellen. Der magnetische Fluss durch jede geschlossene Fläche verschwindet:

$$
\oint_{\partial V}\mathbf{B}\cdot d\mathbf{S}=0.
\tag{10}
$$

Wieder liefert der Gaußsche Satz

$$
\int_V \nabla\cdot\mathbf{B}\,d^3x=0.
\tag{11}
$$

Da $V$ beliebig ist, folgt lokal

$$
\boxed{
\nabla\cdot\mathbf{B}=0
}.
\tag{12}
$$

## 4. Faradays Induktionsgesetz

Ein zeitlich veränderlicher magnetischer Fluss erzeugt ein elektrisches Wirbelfeld. Für eine Fläche $S$ mit Randkurve $\partial S$ lautet Faradays Gesetz

$$
\oint_{\partial S}\mathbf{E}\cdot d\mathbf{l}
=
-\frac{d}{dt}
\int_S \mathbf{B}\cdot d\mathbf{S}.
\tag{13}
$$

Mit dem Satz von Stokes ist

$$
\oint_{\partial S}\mathbf{E}\cdot d\mathbf{l}
=
\int_S(\nabla\times\mathbf{E})\cdot d\mathbf{S}.
\tag{14}
$$

Für eine feste Fläche $S$ darf die Zeitableitung in das Integral gezogen werden. Also gilt

$$
\int_S
\left(
\nabla\times\mathbf{E}
+
\frac{\partial\mathbf{B}}{\partial t}
\right)
\cdot d\mathbf{S}
=0.
\tag{15}
$$

Da die Fläche beliebig ist, muss der Integrand verschwinden:

$$
\boxed{
\nabla\times\mathbf{E}
=
-\frac{\partial\mathbf{B}}{\partial t}
}.
\tag{16}
$$

## 5. Ampere-Gesetz und Maxwells Korrektur

In der Magnetostatik erzeugen stationäre Ströme ein magnetisches Wirbelfeld. Das Ampere-Gesetz lautet

$$
\oint_{\partial S}\mathbf{B}\cdot d\mathbf{l}
=
\mu_0
\int_S\mathbf{j}\cdot d\mathbf{S}.
\tag{17}
$$

Mit Stokes erhält man lokal

$$
\nabla\times\mathbf{B}=\mu_0\mathbf{j}.
\tag{18}
$$

Diese Gleichung kann aber nicht für zeitabhängige Ladungsverteilungen stimmen. Nimmt man die Divergenz beider Seiten, folgt links immer

$$
\nabla\cdot(\nabla\times\mathbf{B})=0.
\tag{19}
$$

Rechts ergäbe sich also $\nabla\cdot\mathbf{j}=0$. Das widerspricht der Kontinuitätsgleichung, sobald $\partial\rho/\partial t\neq 0$. Aus Gauß' Gesetz folgt

$$
\rho=\varepsilon_0\nabla\cdot\mathbf{E}.
\tag{20}
$$

Daher ist

$$
\frac{\partial\rho}{\partial t}
=
\varepsilon_0
\nabla\cdot
\frac{\partial\mathbf{E}}{\partial t}.
\tag{21}
$$

Setzt man dies in die Kontinuitätsgleichung ein, erhält man

$$
\nabla\cdot
\left(
\mathbf{j}
+
\varepsilon_0
\frac{\partial\mathbf{E}}{\partial t}
\right)
=0.
\tag{22}
$$

Der Ausdruck in Klammern ist der konsistente Gesamtstrom: Leitungsstrom plus Verschiebungsstrom. Die lokale Erweiterung des Ampere-Gesetzes lautet deshalb

$$
\boxed{
\nabla\times\mathbf{B}
=
\mu_0\mathbf{j}
+
\mu_0\varepsilon_0
\frac{\partial\mathbf{E}}{\partial t}
}.
\tag{23}
$$

## Maxwell-Gleichungen

Zusammen ergeben sich in SI-Einheiten die Maxwell-Gleichungen im Vakuum mit Quellen:

$$
\boxed{
\begin{gathered}
\nabla\cdot\mathbf{E}
=
\frac{\rho}{\varepsilon_0},
\qquad
\nabla\cdot\mathbf{B}
=
0,
\\
\nabla\times\mathbf{E}
=
-\frac{\partial\mathbf{B}}{\partial t},
\qquad
\nabla\times\mathbf{B}
=
\mu_0\mathbf{j}
+
\mu_0\varepsilon_0
\frac{\partial\mathbf{E}}{\partial t}.
\end{gathered}
}
\tag{24}
$$

## 6. Alternativer Zugang: Lagrange-Formalismus

Der Lagrange-Zugang beginnt nicht direkt mit den vier Maxwell-Gleichungen. Stattdessen sucht man eine Wirkung $S$, deren stationäre Punkte die Bewegungsgleichungen des elektromagnetischen Feldes liefern:

$$
S=\int dt\int d^3x\,\mathcal{L}.
\tag{25}
$$

Die Frage ist also: Welche Lagrangedichte $\mathcal{L}$ ist die einfachste lokale Größe, die die Symmetrien des elektromagnetischen Feldes respektiert?

## 6.1 Potentiale aus den homogenen Gleichungen

Aus $\nabla\cdot\mathbf{B}=0$ folgt lokal, dass es ein Vektorpotential $\mathbf{A}$ gibt mit

$$
\mathbf{B}=\nabla\times\mathbf{A}.
\tag{26}
$$

Setzt man dies in Faradays Gesetz ein, erhält man

$$
\nabla\times\mathbf{E}
=
-\frac{\partial}{\partial t}
(\nabla\times\mathbf{A})
=
-\nabla\times\frac{\partial\mathbf{A}}{\partial t}.
\tag{27}
$$

Damit gilt

$$
\nabla\times
\left(
\mathbf{E}
+
\frac{\partial\mathbf{A}}{\partial t}
\right)
=0.
\tag{28}
$$

Ein wirbelfreies Feld kann lokal als Gradient eines Skalars geschrieben werden. Man definiert daher das skalare Potential $\phi$ durch

$$
\mathbf{E}
=
-\nabla\phi
-
\frac{\partial\mathbf{A}}{\partial t}.
\tag{29}
$$

Die homogenen Maxwell-Gleichungen sind damit automatisch erfüllt. Die Dynamik muss also nur noch die inhomogenen Gleichungen erzeugen.

## 6.2 Eichfreiheit

Die Potentiale sind nicht eindeutig. Für eine beliebige Funktion $\chi(\mathbf{x},t)$ gilt

$$
\begin{aligned}
\mathbf{A}' &= \mathbf{A}+\nabla\chi,\\
\phi' &= \phi-\frac{\partial\chi}{\partial t}.
\end{aligned}
\tag{30}
$$

Diese Transformation ändert die physikalischen Felder nicht:

$$
\begin{aligned}
\mathbf{B}' &= \nabla\times\mathbf{A}'
=\nabla\times\mathbf{A}
+\nabla\times\nabla\chi
=\mathbf{B},\\
\mathbf{E}' &=
-\nabla\phi'
-\frac{\partial\mathbf{A}'}{\partial t}
=
-\nabla\phi
-\frac{\partial\mathbf{A}}{\partial t}
=\mathbf{E}.
\end{aligned}
\tag{31}
$$

Die Lagrangedichte darf deshalb nur von eichinvarianten Größen abhängen, also von $\mathbf{E}$, $\mathbf{B}$ und der Kopplung an erhaltene Quellen.

## 6.3 Wie findet man die Lagrangedichte?

Wir fordern vier Dinge:

- Lokalität: $\mathcal{L}$ hängt von Feldern am selben Punkt ab.

- Rotationsinvarianz: keine ausgezeichnete Raumrichtung.

- Eichinvarianz: nur $\mathbf{E}$, $\mathbf{B}$ und erhaltene Quellen sind physikalisch.

- Quadratische freie Theorie: Superposition und lineare Feldgleichungen.

Die einfachsten rotationsinvarianten quadratischen Terme sind $\mathbf{E}^2$ und $\mathbf{B}^2$. Der relative Vorzeichenunterschied ist der übliche Unterschied zwischen kinetischem und potentiellem Term in einer Lagrange-Funktion und folgt elegant aus der lorentzinvarianten Größe $F_{\mu\nu}F^{\mu\nu}$. In SI-Einheiten erhält man für das freie Feld

$$
\mathcal{L}_{\mathrm{field}}
=
\frac{\varepsilon_0}{2}\mathbf{E}^2
-
\frac{1}{2\mu_0}\mathbf{B}^2 .
\tag{32}
$$

Quellen koppeln minimal an die Potentiale. Für eine Ladungsdichte ist die potentielle Energie $\rho\phi$, also erscheint in der Lagrangedichte der Term $-\rho\phi$. Bewegte Ladung koppelt an das Vektorpotential durch $\mathbf{j}\cdot\mathbf{A}$. Damit

$$
\mathcal{L}_{\mathrm{source}}
=
-\rho\phi+\mathbf{j}\cdot\mathbf{A}.
\tag{33}
$$

Die vollständige Lagrangedichte lautet also

$$
\boxed{
\mathcal{L}
=
\frac{\varepsilon_0}{2}\mathbf{E}^2
-
\frac{1}{2\mu_0}\mathbf{B}^2
-
\rho\phi
+
\mathbf{j}\cdot\mathbf{A}
}.
\tag{34}
$$

Diese Kopplung ist eichinvariant bis auf Randterme, genau wenn die Kontinuitätsgleichung gilt:

$$
\delta\mathcal{L}_{\mathrm{source}}
=
\rho\frac{\partial\chi}{\partial t}
+
\mathbf{j}\cdot\nabla\chi
=
\frac{\partial(\rho\chi)}{\partial t}
+
\nabla\cdot(\mathbf{j}\chi)
-
\chi
\left(
\frac{\partial\rho}{\partial t}
+
\nabla\cdot\mathbf{j}
\right).
\tag{35}
$$

Der letzte Term verschwindet wegen Ladungserhaltung. Die übrigen Terme sind totale Ableitungen und ändern die Bewegungsgleichungen nicht.

## 6.4 Variation nach dem skalaren Potential

Wir variieren zuerst $\phi$, halten $\mathbf{A}$ fest und benutzen

$$
\delta\mathbf{E}=-\nabla\delta\phi,
\qquad
\delta\mathbf{B}=0.
\tag{36}
$$

Der relevante Teil der Wirkungsvariation ist

$$
\begin{aligned}
\delta S_\phi
        &=
\int dt\,d^3x
\left[
\varepsilon_0\mathbf{E}\cdot\delta\mathbf{E}
-
\rho\,\delta\phi
\right]
\\
        &=
\int dt\,d^3x
\left[
-\varepsilon_0\mathbf{E}\cdot\nabla\delta\phi
-
\rho\,\delta\phi
\right].
\end{aligned}
\tag{37}
$$

Partielle Integration im Raum liefert, bis auf Randterme,

$$
\delta S_\phi
=
\int dt\,d^3x
\left(
\varepsilon_0\nabla\cdot\mathbf{E}
-
\rho
\right)
\delta\phi .
\tag{38}
$$

Da $\delta\phi$ beliebig ist, folgt

$$
\boxed{
\nabla\cdot\mathbf{E}
=
\frac{\rho}{\varepsilon_0}
}.
\tag{39}
$$

## 6.5 Variation nach dem Vektorpotential

Nun variieren wir $\mathbf{A}$, halten $\phi$ fest und benutzen

$$
\delta\mathbf{E}
=
-\frac{\partial\delta\mathbf{A}}{\partial t},
\qquad
\delta\mathbf{B}
=
\nabla\times\delta\mathbf{A}.
\tag{40}
$$

Die Variation der Wirkung ist

$$
\begin{aligned}
\delta S_{\mathbf{A}}
        &=
\int dt\,d^3x
\left[
\varepsilon_0\mathbf{E}\cdot
\left(
-\frac{\partial\delta\mathbf{A}}{\partial t}
\right)
-
\frac{1}{\mu_0}\mathbf{B}\cdot
(\nabla\times\delta\mathbf{A})
+
\mathbf{j}\cdot\delta\mathbf{A}
\right].
\end{aligned}
\tag{41}
$$

Partielle Integration in Zeit und Raum ergibt, wieder bis auf Randterme,

$$
\delta S_{\mathbf{A}}
=
\int dt\,d^3x
\left[
\varepsilon_0\frac{\partial\mathbf{E}}{\partial t}
-
\frac{1}{\mu_0}\nabla\times\mathbf{B}
+
\mathbf{j}
\right]\cdot\delta\mathbf{A}.
\tag{42}
$$

Da $\delta\mathbf{A}$ beliebig ist, muss der Ausdruck in der eckigen Klammer verschwinden. Damit folgt

$$
\boxed{
\nabla\times\mathbf{B}
=
\mu_0\mathbf{j}
+
\mu_0\varepsilon_0
\frac{\partial\mathbf{E}}{\partial t}
}.
\tag{43}
$$

Zusammen mit den automatisch erfüllten homogenen Gleichungen aus $\mathbf{B}=\nabla\times\mathbf{A}$ und $\mathbf{E}=-\nabla\phi-\partial_t\mathbf{A}$ erhält man wieder die vollständigen Maxwell-Gleichungen.
