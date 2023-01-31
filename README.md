# M165_Sky_Mischa
Generic data hoarding platform (Spring, Neo4J, React TS)

## Idee
In diesem Projekt wollten wir uns eine Challenge annehmen. Deshalb dachten wir, dass es interessant wäre, ein dynamisches Programm zu schreiben. Wir wollen damit generischen Code schreiben: Code, den man sehr einfach erweitern kann. Dieses Projekt wollten wir zudem auch privat später nutzen, also war die Motivation bei uns auch sehr hoch.
Also dachten wir, in verbundenheit mit der Datenbank, wäre es sinnvoll ein Data-Hording Projekt zu machen. Dazu sollte man einfach neue Daten-Quellen hinzufügen können. 

## Generigkeit
Im Frontend gibt es ein `modules.cfg.json` File, welches die Einstellungen für das Frontend besitzt. Dafür gibt es 3 Einstellungen:

1. Navbar
Hier stehen die Links in der Navbar, die eine URL besitzen.

2. Toolbar
Die Toolbar wird verwendet, um schnell zu Modulen zu wechseln. Hier werden schnelle Navigationsitems angezeigt.

3. Modules
Hier werden die Module gelisted, welche auf der Startseite angezeigt werden. Dazu wird automatisch ein Formular generiert, welches in das Backend ein neues Item schickt und diese darzeigt und modifiziert.

# Verwendete Technologien
In diesem Projekt verwendeten wir verschiedene Technologien für das Frontend, das Backend sowie die Datenbank. Darunter findet man eine kurze Beschreibung dazu:

## Datenbank

### Neo4j
Neo4j ist eine graphbasierte NoSQL-Datenbank, die sich auf das Verwalten von Beziehungen zwischen Datenelementen spezialisiert hat. Es nutzt ein einzigartiges Property Graph Modell, das Beziehungen und Eigenschaften von [Knoten (Entitäten) und Kanten (Beziehungen)](https://www.datenbanken-verstehen.de/lexikon/neo4j/#:~:text=In%20Neo4j%20werden%20Daten%2C%20und,Datensatz%20in%20einer%20relationalen%20Datenbank.) abbildet. Neo4j bietet leistungsstarke Abfrage- und Suchfähigkeiten, einschließlich Cypher, einer graphbasierten Abfragesprache. Diese Funktionalitäten erleichtern das Untersuchen von Beziehungen in großen Datenmengen, wie beispielsweise in sozialen Netzwerken, Empfehlungssystemen oder Fraud-Detection.

### Docker
Docker ist eine plattformunabhängige Container-Virtualisierungstechnologie, die es Entwicklern ermöglicht, Anwendungen und ihre Abhängigkeiten in einer sicheren und isolierten Umgebung auszuführen. Docker erleichtert die Verteilung und Wartung von Anwendungen, da sie unabhängig von der Umgebung, in der sie ausgeführt werden, funktionieren.

## Backend

### Java
Java ist eine objektorientierte Programmiersprache, die für die Entwicklung von Anwendungen auf einer Vielzahl von Plattformen verwendet wird. Java ist bekannt für seine hohe Portabilität, Sicherheit und Skalierbarkeit.

### Spring Boot
Spring Boot ist ein Framework für Java-Anwendungen, das es Entwicklern ermöglicht, schnell und einfach Anwendungen zu erstellen, indem es bereits eine Vielzahl von Funktionalitäten bereitstellt. Spring Boot bietet eine einfache Konfiguration und geringerer Codeaufwand. Mit Spring Boot kann man Anwendungen schnell und effizient entwickeln und bereitstellen.

### Maven
Maven ist ein Build-Management- und Konfigurationsmanagement-Werkzeug für Java-basierte Projekte. Es vereinfacht die Verwaltung von Abhängigkeiten und die Automatisierung von Build-Prozessen.

## Frontend

### React
React ist ein JavaScript-basiertes Framework zur Erstellung von Benutzeroberflächen. Es ermöglicht es Entwicklern, UI-Komponenten effizient und leistungsstark zu rendern und bietet eine hohe Entwicklerfreundlichkeit. React verwendet eine Virtual DOM-Technologie, die das Rendern schneller und ressourceneffizienter macht, indem es Änderungen an der Benutzeroberfläche automatisch verfolgt und nur die notwendigen Änderungen am echten DOM vornimmt.

### Vite
Vite ist ein schneller Frontend-Build-System, das speziell für moderne JavaScript-Anwendungen wie React entwickelt wurde. Es unterscheidet sich von anderen Build-Systemen wie Webpack, da es einen direkteren Ansatz nutzt, um deine Anwendung schnell zu bauen und bereitzustellen. Vite kann in Echtzeit Änderungen im Code erkennen und sofort eine neue Version bereitstellen, ohne dass man einen Neubau starten musst. Dadurch kann man schnellere Entwicklungs und Testzyklen durchführen.

### TS
TypeScript ist eine Programmiersprache, die auf JavaScript aufbaut. Es bietet statische Typen, Klassen und Interfaces und ermöglicht es Entwicklern, komplexere und fehlerfreie Anwendungen zu erstellen. TypeScript kann in jedem JavaScript-Code eingesetzt werden und bietet eine größere Typsicherheit und bessere Codequalität. Außerdem bietet es eine umfassende Toolunterstützung, einschließlich IntelliSense und Debugging, was die Entwicklerproduktivität verbessert.

# Startup

## Datenbank
Die Datenbank kann man dank docker mit nur einem Befehl starten in einem Terminal: `docker run --workdir=/var/lib/neo4j -p 7473:7473 -p 7474:7474 -p 7687:7687 -t -d neo4j:latest`

## Backend
Für das Backend braucht man IntelliJ. Dazu muss man den Ordner `/osuapi` in IntelliJ öffnen und danach den Start-Knopf drücken.

## Frontend

1. Ordner Wechseln. In einem Terminal der Wahl in den `/Frontend/M165` wechseln.

2. Abhängigkeiten installieren. Dies tut man mithilfe von `npm install`.

3. Frontend Starten. Nachdem alles installiert wurde, kann man das Frontend mithilfe von `npm run dev` starten.
