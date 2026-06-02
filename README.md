# PVSTOL statický PHP web

Nahrajte obsah priečinka na klasický hosting do `public_html` alebo `www`.

## Pred spustením
- upravte `includes/config.php`
- vymeňte placeholder SVG obrázky v `images/` za reálne WebP/AVIF fotografie
- v HTML zmeňte texty, firemné údaje, IČO, adresu a doménu
- otestujte PHP `mail()` na hostingu

## Kontakt formulár
Formulár odosiela cez `php/send.php`. Obsahuje honeypot antispam a GDPR checkbox.
