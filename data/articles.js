/* ============================================================
   GRĂDINA NOASTRĂ — data/articles.js
   ============================================================
   Adaugă articole noi la ÎNCEPUTUL array-ului (cel mai nou primul).

   STRUCTURA unui articol:
   {
     id:       "slug-unic-fara-diacritice",  ← apare în URL
     title:    "Titlul articolului",
     date:     "YYYY-MM-DD",
     category: "Categoria",                  ← devine filtru automat
     tags:     ["tag1", "tag2"],
     image:    "images/poza.jpeg",
     author:   "Numele autorului",
     excerpt:  "Rezumat scurt (1-2 propoziții).",
     content:  `HTML-ul complet al articolului`
   }
   ============================================================ */

const ARTICLES = [
  {
    id: "omida-sfingida-rosii",
    title: "Omida sfingidă pe cartofi: prieten sau dușman?",
    date: "2024-07-15",
    category: "Viața din grădină",
    tags: ["insecte", "cartofi", "permacultură", "biodiversitate"],
    image: "images/poza3.jpeg",
    author: "Laura",
    excerpt: "Am descoperit pe plantele de cartofi o creatură impresionantă — omida sfingidă. Mare, verde, cu marcaje fascinante. Ce facem cu ea în grădina de permacultură?",
    content: `
      <p>Era o dimineață obișnuită de iulie când, controlând plantele de cartofi, am dat peste ea: o omidă uriașă, aproape cât degetul meu, de un verde intens cu marcaje albastre și galbene pe corp și o față ce părea că zâmbește.</p>
      <p>Primul impuls a fost să o scot. Dar am stat și m-am uitat la ea. Era atât de frumoasă, atât de vie, atât de perfectă în felul ei.</p>
      <h3>Ce este omida sfingidă?</h3>
      <p>Omida sfingidă (<em>Manduca sexta</em>) este larva unui fluture sfinx — un fluture nocturn elegant, cu aripi late care poate zbura ca o colibri. În grădina de permacultură, prezența ei este un semn de biodiversitate activă.</p>
      <p>Da, mănâncă din frunzele de cartofi. Dar câteva frunze mâncate nu omoară o plantă sănătoasă. Iar fluturele adult care va ieși din ea va poleniza florile din grădină.</p>
      <h3>Decizia noastră</h3>
      <p>Am ales să o lăsăm. Am mutat-o pe o plantă mai puternică, i-am urmărit evoluția zilnic împreună cu copiii. Timp de două săptămâni a fost cea mai fascinantă lecție de biologie pe care o puteam oferi.</p>
      <p>Grădina nu este un sistem steril — este un ecosistem viu, unde fiecare creatură are rolul ei. Uneori, <em>dușmanul</em> pe care îl crezi se dovedește a fi cel mai bun profesor.</p>
    `
  },
  {
    id: "primul-an-de-permacultura",
    title: "Primul an de permacultură: ce am învățat",
    date: "2024-06-10",
    category: "Permacultură",
    tags: ["permacultură", "sol viu", "observație", "lecții"],
    image: "images/poza2.jpeg",
    author: "Laura",
    excerpt: "Un an întreg de observat, experimentat și greșit cu grație. Iată cele mai importante lecții pe care ni le-a oferit grădina în primul ei an de viață.",
    content: `
      <p>Primul an de permacultură nu seamănă cu nimic din ce citisești. Cărțile îți arată sisteme mature, echilibrate, productive. Realitatea este că începi cu un teren gol, multă incertitudine și câteva semințe de speranță.</p>
      <h3>Lecția 1: Observă înainte să acționezi</h3>
      <p>Prima tentație a fost să plantăm imediat, să construim, să transformăm. Principiile de permacultură spun altceva: observă timp de un an întreg înainte de a face schimbări majore. Unde cade apa? De unde vine vântul? Care zone sunt umbroase vara, însorite toamna?</p>
      <p>Am ascultat parțial. Și chiar și observațiile parțiale ne-au salvat de câteva greșeli mari.</p>
      <h3>Lecția 2: Solul este totul</h3>
      <p>Am început să înțelegem că nu cultivăm plante — cultivăm sol. Un sol viu, plin de ciuperci, bacterii, râme, este fundația a tot ce urmează. Am adăugat compost, am mulcit cu paie, am plantat plante fixatoare de azot între rânduri.</p>
      <h3>Lecția 3: Natura știe mai bine</h3>
      <p>Câteva plante pe care le-am considerat „buruieni" s-au dovedit a fi exact ce avea nevoie terenul nostru. Pătlagina — indicator de sol compactat, dar și plantă medicinală valoroasă. Urzica — semn de azot în sol, și un superaliment pentru compost.</p>
      <p>Anul doi a început cu mai multă umilință și mai multă curiozitate. Exact ce trebuie.</p>
    `
  },
  {
    id: "gradina-cu-copiii",
    title: "Cum să faci grădinărit cu copiii mici",
    date: "2024-05-20",
    category: "Copii & Natură",
    tags: ["copii", "grădinărit", "activități", "natură"],
    image: "images/poza1.jpeg",
    author: "Laura",
    excerpt: "Nu e nevoie de o grădină perfectă — e nevoie de răbdare, curiozitate și acceptarea că picioarele vor fi mereu murdare de pământ bun.",
    content: `
      <p>Când am decis să implicăm copiii în grădină, cea mai mare teamă a mea era că nu vor fi interesați, că se vor plictisi, că va trebui să îi conving cu recompense. M-am înșelat complet.</p>
      <h3>Copiii și pământul — o conexiune naturală</h3>
      <p>Există ceva primar în relația unui copil cu pământul. Nu trebuie să îi înveți să atingă, să sape, să miroase. O fac instinctiv. Tot ce trebuie tu să faci este să le dai spațiu și să nu te temi de murdărie.</p>
      <h3>Activități potrivite pe vârste</h3>
      <p><strong>2–4 ani:</strong> Stropitul (oricât de mult ajunge pe ei), colectat pietre, udat din stropitoare mică.</p>
      <p><strong>5–7 ani:</strong> Plantat semințe, recoltat legume coapte, observat insecte cu lupa.</p>
      <p><strong>8+ ani:</strong> Responsabilitate proprie — o zonă a lor, un proiect al lor, note de observație zilnică.</p>
      <h3>Ce câștigă copiii</h3>
      <p>Dincolo de cunoștințele despre natură, grădina le oferă copiilor ceva mai profund: experiența că efortul duce la rezultate vizibile. Sămânța plantată de ei devine planta care le hrănește familia. Asta nu se predă — se trăiește.</p>
      <p>Și da, pantofii vor fi mereu murdari. Merită din plin.</p>
    `
  }
];
