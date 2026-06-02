# PVSTOL web – návod na doplnenie obsahu a nasadenie

Tento balík je klasická statická webstránka s PHP formulárom. Je pripravená na nahratie cez FTP na bežný hosting do priečinka `public_html`, `www` alebo ekvivalentu podľa hostingu.

## 1. Čo treba upraviť pred spustením

### Firemné údaje
Upravte najmä tieto súbory:

- `includes/config.php` – email príjemcu formulára, názov firmy, telefón, adresa, doména.
- Všetky texty v pätičke vo `.html` súboroch – názov, IČO, DIČ, adresa, telefón, email.
- `pravne-informacie.html` – právne a identifikačné údaje firmy.
- `gdpr.html` – údaje prevádzkovateľa, sprostredkovatelia, doby uchovávania.
- `cookies.html` – zoznam reálne používaných cookies a analytických nástrojov.

Firemné údaje sú doplnené pre PVSTOL s. r. o. Pred ostrým spustením ešte skontrolujte, či sa nezmenil hosting, emailové doručovanie, analytika alebo právne požiadavky.

## 2. Logo

Logo je uložené tu:

```text
images/logo-pstol.webp
images/logo-pstol-original.png
```

Ak chcete vymeniť logo, nahraďte `images/logo-pstol.webp` vlastným súborom s rovnakým názvom. Odporúčanie:

- formát: `webp` alebo `svg`,
- šírka: 500–900 px,
- transparentné pozadie,
- verzia vhodná na tmavé pozadie.

Logo v hlavičke a hero sekcii sa načítava automaticky z tejto cesty.

## 3. Obrázky – kam čo vložiť

Používajte vlastné fotografie vo formáte `webp` alebo `avif`. JPG použite iba ako zdroj pred konverziou. Fotky pred nahraním komprimujte.

### Odporúčané rozmery

| Použitie | Cesta / príklad | Rozmer | Formát | Poznámka |
|---|---|---:|---|---|
| Hero / veľký projekt | `images/pstol-kuchyna.webp` | 1800 × 1200 px | WebP/AVIF | široká kvalitná fotka interiéru |
| Karta realizácie | `images/pstol-skrina.webp` | 1400 × 1800 px | WebP/AVIF | vertikálna alebo mierne portrétna fotka |
| Galéria | `images/gallery-kuchyna.webp` | 1600 × 1200 px | WebP/AVIF | ostrá fotka bez vodoznaku |
| Detail nábytku | `images/gallery-detail.webp` | 1400 × 1400 px | WebP/AVIF | detail spoja, úchytky, kovania |
| Vizualizácia | `images/pstol-vizualizacia.webp` | 1600 × 1000 px | WebP/AVIF | render alebo návrh interiéru |
| Open Graph obrázok | napr. `images/og-image.webp` | 1200 × 630 px | WebP/JPG | obrázok pre zdieľanie na sociálnych sieťach |

### Názvy súborov pre SEO

Používajte popisné názvy bez diakritiky:

```text
kuchyna-na-mieru-bratislava-matna-cierna.webp
vstavana-skrina-kosice-dub-cierny-mat.webp
kupelnovy-nabytok-presov-kompaktna-doska.webp
```

Nekopírujte názvy typu:

```text
IMG_4829.webp
foto1.webp
final-final2.webp
```

## 4. Ako doplniť nové fotky do galérie

Súbor:

```text
galeria.html
```

Nájdite blok podobný:

```html
<button class="photo" data-cat="kuchyne" data-lightbox>
  <img src="/images/gallery-kuchyna.webp" alt="Kuchyňa na mieru" loading="lazy">
</button>
```

Skopírujte ho a upravte:

- `data-cat` podľa kategórie,
- `src` na cestu k obrázku,
- `alt` na konkrétny popis fotky.

Povolené kategórie filtrov:

```text
kuchyne
skrine
kupelne
obyvacky
satniky
detaily
vizualizacie
```

Ak je pri fotke `data-cat="kuchyne"`, lightbox ju bude pri aktívnom filtri Kuchyne prepínať iba medzi kuchyňami.

## 5. Ako doplniť nové realizácie

### Zoznam realizácií
Súbor:

```text
realizacie.html
```

Skopírujte existujúcu kartu projektu a upravte:

- obrázok,
- názov,
- lokalitu,
- kategóriu,
- krátky popis,
- odkaz na detail realizácie.

### Detail realizácie
Vytvorte nový súbor napríklad:

```text
realizacie/kuchyna-na-mieru-zilina.html
```

Odporúčaná SEO URL:

```text
/realizacie/kuchyna-na-mieru-zilina
```

V detaile doplňte:

- H1 názov realizácie,
- lokalitu,
- typ projektu,
- rok realizácie,
- materiály,
- kovanie,
- dekory,
- pracovnú dosku,
- typ úchytiek,
- galériu fotiek,
- meta title a meta description.

## 6. Ako upraviť služby

Hlavná stránka:

```text
index.html
```

Podstránka služieb:

```text
sluzby.html
```

Detail služby:

```text
sluzby/kuchyne-na-mieru.html
sluzby/vstavane-skrine.html
...
```

Každá služba má mať:

- jedno H1,
- unikátny meta title,
- unikátny meta description,
- text služby,
- výhody,
- materiály,
- FAQ,
- CTA na kontakt.

## 7. SEO checklist

Pred spustením skontrolujte:

- Každá stránka má vlastný `<title>`.
- Každá stránka má vlastný `<meta name="description">`.
- Každá stránka má maximálne jedno H1.
- Obrázky majú popisný `alt` text.
- Canonical URL zodpovedá ostrej doméne.
- V `sitemap.xml` je ostrá doména a všetky dôležité URL.
- V `robots.txt` je správna cesta k sitemap.
- V `llms.txt` sú aktuálne služby, kontakt a popis firmy.
- Telefón, email, adresa a IČO sú rovnaké v pätičke, právnych stránkach aj schema dátach.

### Súbory na SEO úpravy

```text
sitemap.xml
robots.txt
llms.txt
```

Doména je nastavená na:

```text
https://www.pvstol.sk
```

Ak sa doména v budúcnosti zmení, upravte ju vo všetkých troch súboroch.

## 8. Schema.org

V hlavičke stránok je vložený základ `LocalBusiness`. Pred ostrým spustením upravte:

- `name`,
- `url`,
- `telephone`,
- `email`,
- `areaServed`,
- prípadne adresu.

Pre detailné SEO môžete pri službách doplniť aj `Service`, pri FAQ `FAQPage`, pri realizáciách `ImageObject` a `BreadcrumbList`.

## 9. Kontaktný formulár

Formulár odosiela súbor:

```text
php/send.php
```

Nastavenia sú v:

```text
includes/config.php
```

Skontrolujte:

- email príjemcu,
- email odosielateľa,
- názov firmy,
- maximálnu veľkosť prílohy,
- povolené typy príloh.

Pozor: PHP `mail()` musí byť povolené na hostingu. Ak emaily padajú do spamu alebo nechodia, odporúčame SMTP riešenie cez hosting, napríklad PHPMailer.

## 10. Cookies a analytika

Aktuálne je pripravená cookie lišta s možnosťou:

- prijať všetko,
- odmietnuť,
- nastaviť kategórie.

Analytické alebo marketingové skripty nepridávajte priamo do `<head>`, ak sa majú spúšťať až po súhlase. Vložte ich do JS logiky až po udelení príslušného súhlasu.

Ak nepoužívate Google Analytics, Meta Pixel ani reklamné nástroje, ponechajte len nevyhnutné cookies a podľa toho upravte `cookies.html`.

## 11. Sociálne siete

V pätičke sú ikonky Instagram a Facebook. Nájdite odkazy:

```html
<a aria-label="Instagram" href="https://www.instagram.com/pv_stol?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
<a aria-label="Facebook" href="https://www.facebook.com/people/Peter-Virostko-Stol%C3%A1rstvo/100095222172292/?locale=sk_SK">
```

Nahraďte `#` reálnymi URL profilov:

```text
https://www.instagram.com/vasprofil
https://www.facebook.com/vasprofil
```

Na stránke `o-nas.html` môžete doplniť text, že na sociálnych sieťach zverejňujete fotky, videá z výroby, montáže a detaily realizácií.

## 12. Právne stránky

Doplňte a skontrolujte:

```text
gdpr.html
cookies.html
pravne-informacie.html
```

Najdôležitejšie položky:

- presné obchodné meno,
- sídlo,
- IČO,
- DIČ / IČ DPH,
- zápis v obchodnom registri,
- reálne kontakty,
- reálni sprostredkovatelia,
- reálne cookies a nástroje,
- dátum poslednej aktualizácie.

Texty sú pripravené ako kvalitný základ, ale finálnu právnu zodpovednosť nesie prevádzkovateľ webu.

## 13. Nasadenie na hosting

1. Rozbaľte ZIP.
2. Nahrajte celý obsah do `public_html` alebo `www`.
3. Skontrolujte, že `index.html` je v koreňovom priečinku webu.
4. Overte formulár cez testovací dopyt.
5. Zapnite HTTPS certifikát.
6. Skontrolujte stránku na mobile.
7. Otestujte PageSpeed a veľkosť obrázkov.

## 14. Odporúčané veľkosti súborov

- Bežná fotka v galérii: ideálne do 250–450 KB.
- Veľká hero / projektová fotka: ideálne do 500–800 KB.
- Logo: do 100 KB.
- Nepoužívajte 5–15 MB fotky priamo z mobilu.

## 15. Pred odovzdaním klientovi

- Vymeniť všetky placeholder fotky.
- Vymeniť všetky firemné údaje.
- Doplniť odkazy na sociálne siete.
- Otestovať formulár.
- Skontrolovať mobilné menu.
- Skontrolovať galériu a filtre.
- Skontrolovať cookies modal.
- Skontrolovať právne texty.
- Aktualizovať `sitemap.xml`, `robots.txt`, `llms.txt`.
- Nahrať web cez HTTPS.
