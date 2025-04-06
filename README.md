# AgTechDesigne Website

## Project Overview

AgTechDesigne è una piattaforma digitale innovativa che presenta soluzioni tecnologiche avanzate per le aziende. Il sito web presenta elementi 3D moderni, animazioni interattive e un design responsive per offrire un'esperienza utente coinvolgente.

## Features

- Sfondo 3D interattivo con effetti particellari
- Animazioni di scorrimento fluide ed effetti parallasse
- Design responsive per dispositivi di tutte le dimensioni
- Supporto per modalità chiara/scura
- Presentazione dei servizi con schede animate
- Sezione portfolio progetti
- Contatore statistiche animato
- UI moderna con effetti sfumati

## Technologies Used

Questo progetto è costruito con:

- Vite
- TypeScript
- React
- Three.js & React Three Fiber
- Framer Motion
- Tailwind CSS
- Lucide React (per le icone)

## Getting Started

### Prerequisites

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clona il repository
git clone https://github.com/yourusername/agtechdesigne.git

# Naviga nella directory del progetto
cd agtechdesigne

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

## Configurazione del Dominio Personalizzato su Vercel

Questo progetto è configurato per essere hostato su Vercel con il dominio personalizzato `agtechdesigne.com`. Di seguito sono riportati i passaggi per configurare correttamente il dominio personalizzato su Vercel.

### Passaggi per la Configurazione del Dominio

1. **Accedi al tuo account Vercel**
   - Vai su [vercel.com](https://vercel.com) e accedi al tuo account

2. **Seleziona il tuo progetto**
   - Dalla dashboard, seleziona il progetto AgTechDesigne

3. **Vai alle impostazioni del dominio**
   - Clicca su "Settings" nel menu di navigazione
   - Seleziona "Domains" dalla barra laterale

4. **Aggiungi il tuo dominio personalizzato**
   - Clicca su "Add" o "Add Domain"
   - Inserisci `agtechdesigne.com` nel campo del dominio
   - Clicca su "Add"

5. **Configura i record DNS**
   - Segui le istruzioni fornite da Vercel per configurare i record DNS presso il tuo provider di dominio
   - Tipicamente, dovrai aggiungere un record A o CNAME che punta al tuo deployment Vercel

6. **Verifica la configurazione**
   - Vercel verificherà automaticamente la configurazione DNS
   - Una volta verificato, il tuo sito sarà accessibile tramite `agtechdesigne.com`

7. **Configura il reindirizzamento www (opzionale)**
   - È consigliabile configurare anche il reindirizzamento da `www.agtechdesigne.com` a `agtechdesigne.com` (o viceversa)
   - Puoi farlo aggiungendo un altro dominio nelle impostazioni di Vercel

### Note Importanti

- La propagazione DNS può richiedere fino a 48 ore, quindi il tuo dominio potrebbe non essere immediatamente disponibile
- Assicurati che il tuo dominio sia correttamente registrato e attivo presso il tuo registrar
- Se utilizzi la protezione della privacy del dominio, potrebbe essere necessario disabilitarla temporaneamente durante la verifica

### Configurazione SSL

Vercel fornisce automaticamente certificati SSL per tutti i domini. Non è necessaria alcuna configurazione aggiuntiva per abilitare HTTPS sul tuo dominio personalizzato.
