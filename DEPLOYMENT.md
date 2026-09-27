# Déploiement — GitHub Pages

Le site est un **export statique Next.js** (`output: 'export'` → dossier `./out`) déployé
par le workflow [`.github/workflows/gh-pages.yml`](.github/workflows/gh-pages.yml) à chaque
push sur `main`.

## Activation (une seule fois)

Dans **Settings → Pages** du dépôt : **Source = GitHub Actions**.

## Domaines : `synthi-ai.com` (canonique) + `synthi-ai.org` (redirige)

GitHub Pages ne gère qu'**un seul domaine custom canonique** par site (fichier
[`public/CNAME`](public/CNAME) = `synthi-ai.com`). Si on pointe aussi les DNS de
`synthi-ai.org` vers GitHub Pages, GitHub renvoie automatiquement un **301
`synthi-ai.org` → `synthi-ai.com`**. Rien à changer dans le code.

### Enregistrements DNS à créer chez le registrar

Créer les **mêmes enregistrements pour les deux domaines** (`.com` ET `.org`).

**Apex (`synthi-ai.com` / `synthi-ai.org`) — 4 enregistrements `A` (IPv4) :**

```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

**Apex — 4 enregistrements `AAAA` (IPv6, recommandé) :**

```
AAAA   @   2606:50c0:8000::153
AAAA   @   2606:50c0:8001::153
AAAA   @   2606:50c0:8002::153
AAAA   @   2606:50c0:8003::153
```

**Sous-domaine `www` — un `CNAME` :**

```
CNAME   www   <OWNER>.github.io.
```

> Remplacer `<OWNER>` par le propriétaire du dépôt GitHub (user ou organisation).

### Vérification

```sh
dig +short synthi-ai.com          # doit renvoyer les 4 IP 185.199.10x.153
dig +short synthi-ai.org          # idem
curl -sI https://synthi-ai.org/   # doit renvoyer "HTTP/2 301" + "location: https://synthi-ai.com/"
```

La propagation DNS peut prendre jusqu'à 24 h. Cocher **Enforce HTTPS** dans Settings → Pages
une fois les certificats émis.

## Alternative : servir `.org` de façon indépendante (non retenue)

Pour que `.org` s'affiche tel quel (canonique lui aussi), il faudrait un **second
déploiement** (dépôt miroir avec `CNAME = synthi-ai.org`, ou hébergement Cloudflare/Netlify).
Déconseillé : contenu dupliqué (SEO) et double maintenance.
