# 🩺 Plateforme de gestion de rendez-vous médicaux en ligne

Cette application web permet la **gestion complète des rendez-vous médicaux en ligne**.  
Elle offre une interface moderne pour les patients, les médecins et les administrateurs, ainsi qu’un **chatbot d’assistance** pour guider les utilisateurs.

---

## 🎯 Objectif du projet

Développer une solution web qui permet :

- aux **patients** de réserver, modifier ou annuler leurs consultations en ligne,
- aux **médecins** de gérer leurs disponibilités et consulter l’historique de leurs rendez-vous,
- aux **administrateurs** de superviser l’ensemble du système, gérer les comptes et configurer la plateforme,
- d’**assister les utilisateurs** grâce à un chatbot intégré (FAQ, aide à la réservation, informations générales).

---

## 👥 Rôles et fonctionnalités

### 👨‍⚕️ Rôle Patient
- Création de compte et authentification
- Recherche de médecins (spécialités, disponibilité…)
- Réservation d’un rendez-vous en ligne
- Consultation, modification ou annulation d’un rendez-vous
- Visualisation de l’historique des consultations
- Assistance via chatbot (questions fréquentes, aide à la prise de rendez-vous)

### 🩻 Rôle Médecin
- Gestion du profil (spécialité, informations de contact…)
- Définition et gestion des créneaux de disponibilité
- Validation ou refus de rendez-vous
- Consultation de la liste des rendez-vous à venir
- Accès à l’historique des consultations

### 🛠️ Rôle Administrateur
- Gestion des comptes utilisateurs (patients, médecins, admins)
- Supervision globale des rendez-vous
- Configuration générale de la plateforme (spécialités, paramètres système, etc.)
- Suivi de l’activité (statistiques, logs de base)

---

## 🤖 Chatbot d’assistance

Un **chatbot intégré** accompagne l’utilisateur dans :

- la compréhension du fonctionnement de la plateforme,
- la navigation (où réserver, où voir ses rendez-vous…),
- la réponse à des questions fréquentes (horaires, spécialités, procédures).

Le chatbot est accessible depuis l’interface web côté patient et éventuellement depuis la page d’accueil.

---

## 🏗️ Architecture générale

L’application est basée sur une architecture **SPA + API REST** :

- **Frontend : Angular**
  - Interface utilisateur dynamique et responsive
  - Gestion de l’authentification (JWT ou session)
  - Modules dédiés par rôle (patient, médecin, admin)
  - Intégration du chatbot dans l’UI

- **Backend : Django / Django REST Framework**
  - Exposition d’API REST pour :
    - la gestion des utilisateurs et des rôles
    - la gestion des rendez-vous
    - la gestion des disponibilités
  - Sécurité, validation des données, logique métier
  - Connexion à la base de données (ex : PostgreSQL / MySQL)

---

## 🧰 Technologies utilisées

### Backend
- **Django**
- **Django REST Framework**
- Base de données relationnelle (PostgreSQL / MySQL / SQLite selon l’environnement)
- Gestion des utilisateurs et rôles

### Frontend
- **Angular**
- TypeScript / HTML / SCSS
- Consommation des API REST
- Composants réutilisables pour formulaires, listes, tableaux, etc.

### Autres
- Chatbot (intégré via service backend ou API externe)
- JSON pour les échanges de données
- Git / GitHub pour le versionnement

---

## 🚀 Installation (exemple général)

### 1. Backend (Django)

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
