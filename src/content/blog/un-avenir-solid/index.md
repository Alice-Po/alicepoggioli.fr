---
title: "Un avenir Solid"
summary: "Article de vulgarisation de Solid avec PhilH "
date: "Jul 22 2020"
draft: false
tags:
- Solid
---

>Le web est plus une invention sociale que technologique. Je l’ai conçu pour qu’il ait un effet social – aider les gens à travailler ensemble – et non comme un jouet technologique. — Tim Berners-Lee, Weaving the Web, 1999


Quand on passe un appel téléphonique, on ne se soucie pas de la marque de téléphone ou de l’opérateur de son interlocuteur. De la même façon, l’envoi d’un mail ne nous oblige pas à nous préoccuper du domaine de l’adresse email du destinataire ni de son application de messagerie. Tous ces systèmes sont interopérables, c’est-à-dire qu’ils sont capables communiquer entre eux.

Nous considérons l’interopérabilité de ces systèmes de communication parfaitement naturelle, et pourtant nous sommes également habitués à ne pas en bénéficier lorsqu’il s’agit d’applications Web ou mobile. Personne ne s’étonne de ne pouvoir s’envoyer de messages entre WhatsApp et Telegram.

Aujourd’hui, nos applications ne se parlent pas. L’absence d’interopérabilité a des impacts sur le Web et sur l’économie du numérique en général, mais également sur les organisations et leur capacité à s’organiser et à coopérer.

C’est à partir de ce constat qu’est né le projet Solid (SOcial LInked Data), proposé par Tim Berners-Lee en 2015. Inquiet face aux dérives actuelles du Web et de l’emprise croissante de quelques entreprises mondiales sur la circulation de l’information et les données personnelles de chacun, Tim a entrepris de refonder l’architecture technique du Web sur les principes de décentralisation et d’interopérabilité.
## Le Web des données
Pour comprendre cette révolution, il faut évoquer le Web des données, une initiative du W3C visant à favoriser la publication de données structurées sur le Web en évitant les silos de données isolées les unes des autres. L’objectif du Web des données est de mettre en relation les données, quel que soit leur lieu de stockage, afin de constituer un réseau universel de l'information. 

C’est le Web sémantique qui permet de cette mise en relation, en dotant les données de définitions permettant à des machines d’effectuer des recherches contextualisées. Le Web sémantique s’appuie sur un langage appelé RDF (Resource Definition Framework) qui permet de décrire les relations des données entre elles sous la forme de triplets : sujet - prédicat - objet. RDF peut utiliser plusieurs syntaxes telles que XML ou JsonLD pour représenter ces relations.

Par exemple, Bob (sujet) aime (prédicat) les chats (objet). Les données Bob et chats sont liées entre elles par un lien qualifié qu’est le prédicat. Ces données sont elles-mêmes décrites par une ontologie web qui représente les concepts de “personne” et de “chat”. Les ontologies web contextualisent les données à l’aide d’un langage de représentation formelle des connaissances appelé OWL, s’appuyant lui-même sur RDF. Les ontologies peuvent décrire l’ensemble des concepts et des relations entre concepts de tout un domaine de connaissances, par exemple celui des sciences de la vie. On peut également créer des ontologies beaucoup plus spécifiques, relatives à un métier, une activité, une organisation.

Une fois cette contextualisation sémantique des données établie, il est possible de déléguer des traitements “intelligents” à des machines, qui peuvent dès lors effectuer des opérations logiques comme des inférences.

Mais la sémantisation des données ne fait pas tout. Il existe plusieurs implémentations du RDF et de nombreux standards, qui ne facilitent pas le consensus international sur certains points délicats comme la gestion des permissions et l’authentification.

C’est ici qu’entre en jeu le projet Solid.


### Le projet Solid
Créé par Tim Berners-Lee en 2015 au MIT, et aujourd’hui porté par un groupe de travail du W3C, Solid est un standard d’API facilitant les interactions entre applications à partir des données sémantiques. Avec Solid, il n’est plus nécessaire de développer une API spécifique pour chaque application afin d’accéder à ses données, traditionnellement servies par le backend de l’application et demeurant sous le contrôle de l’entreprise qui l’opère. A la place, les utilisateurs décident du point de stockage (“pods”) de leurs données et autorisent les applications à y accéder. Les pods sont des sources de données indépendantes du fournisseur de l’application, qui n’a pas besoin de se les approprier pour rendre le service qu’on attend de lui.


### WebID et pods
WebID est un identifiant unique associé à une personne ou une organisation. Chacun peut héberger cet identifiant sur son propre serveur d’identité, ou déléguer cette fonction à un fournisseur tiers (“WebID provider”). La gestion d’identité repose sur des standards ouverts (FOAF pour le profil, OpenID pour l’authentification, Web Access Control pour les droits d’accès) afin de maintenir l’interopérabilité entre utilisateurs, données et applications, et l’indépendance de l’utilisateur vis-à-vis du fournisseur d’identité.

Le “pod” désigne l’espace où sont stockées les données d’un utilisateur associées à un WebID, donc d’une personne ou d’une organisation. Le Pod provider peut être le même que le WebID provider, ou bien ils peuvent être distincts, chaque utilisateur pouvant en décider.
### Reprendre la main sur ses données
Le modèle actuel du Web conduit à la concentration du pouvoir entre les mains d’acteurs centralisés, qui fournissent des services souvent gratuits en contrepartie de l’accès à nos données personnelles qu’ils monétisent. Google ou Facebook, par exemple, jouent aujourd’hui un rôle de fournisseur d’identité, non seulement concernant leurs propres services, mais aussi vis-à-vis de centaines d’applications tierces. Ces acteurs dominants collectent de l’information sur notre activité sociale et notre consommation de services et d’information, en dehors des services qu’ils proposent eux-mêmes.

Cette connaissance intime de chaque personne s’assimile à une forme de surveillance extrême, dont on a vu les dangers en matière de manipulation à des fins mercantiles ou politiques.

Un autre enjeu de l’abandon de notre souveraineté sur nos données est celui de la fragmentation, que nous évoquions en début d’article. Puisque notre identité et nos données sont contrôlées par les entreprises fournissant des services, il est illusoire d’attendre de celles-ci qu’elles facilitent la portabilité ou l’interopérabilité avec leurs concurrents. C’est ainsi que notre playlist Deezer sera inutilisable sur Spotify, que notre réputation de conducteur sera uniquement mise en valeur chez Blablacar, ou que le graphe social de nos amis et connaissances restera propriété de Facebook.

Enfin, l’hyper-concentration des applications Web conduit à l’uniformité de l’expérience utilisateur. Certaines applications sont utilisées par des centaines de millions, voire des milliards d’individus, en raison des effets de réseau favorisant les monopoles mondiaux. La libération de l’accès aux données (dans le respect des droits des personnes) permettrait une explosion cambrienne des applications sociales et collaboratives, chaque communauté — voire même chaque individu — pouvant disposer d’une interface adaptée à ses besoins.

Solid change radicalement l’architecture des applications Web en faveur de l’autonomie des individus, dont l’identité et les données retournent sous leur seul contrôle. Loin d’être un changement sur le seul plan technique, Solid pourrait transformer en profondeur l’économie du numérique, au détriment des modèles basés sur l’exploitation massive des données des utilisateurs.

Avec Solid, le succès d’un projet ne peut plus reposer sur la capture et la rétention des données afin d’en extraire une rente économique. L’enjeu devient l’exploitation intelligente de ces données afin de fournir un service pertinent à un utilisateur désormais émancipé.
## Solid et les organisations
S’il est facile d’imaginer le potentiel émancipateur de Solid concernant les individus utilisateurs, consommateurs et citoyens, qu’en est-il des organisations ? Le modèle de Web distribué proposé par Tim Berners-Lee a-t-il également des vertus pour les entreprises ? Peut-il accompagner leur transformation en facilitant la coopération entre organisations ?


Prenons le cas d’une grande organisation disposant d’antennes dans différentes régions ou pays. En général, les outils informatiques permettant la collaboration entre les différents échelons de l’organisation ainsi qu’avec les interlocuteurs extérieurs sont choisis, développés, configurés, et déployés de façon centralisée par la direction des systèmes d’information. Celle-ci doit prendre en compte la multiplicité des besoins et s’engager dans des projets complexes, longs et souvent incertains pour les satisfaire. Pendant ce temps, l’échelon local, à la périphérie de l’organisation, est entravé par des outils inadaptés, ou bien mobilise du “shadow IT”, c’est-à-dire des solutions répondant aux besoins locaux, mais multipliant les silos et les risques de sécurité.

Il est communément accepté aujourd’hui que la performance et la résilience des organisations passe par une autonomie croissante accordée aux équipes opérationnelles, capables de réagir rapidement aux demandes et aux contraintes locales. Le modèle de l’entreprise modulaire, par exemple, qui dote les équipes, services, ou BU d’une grande latitude d’action et de décision, requiert de décentraliser les processus d’information et de coopération. Il s’agit d'encapaciter les composants d’un système complexe, afin de gagner en agilité. Dès lors, comment conserver la cohérence d’ensemble de l’organisation et éviter sa babelisation ?

Une autre transformation profonde affectant les organisations de toutes tailles touche à l’innovation ouverte et à tous les processus coopératifs et coopétitifs au sein d’un écosystème. La mutualisation de la R&D au sein des IRT, les échanges entre corporates et startups, la coopération au sein de filières industrielles ou de chaînes d’approvisionnement : autant de domaines où la centralisation des systèmes d’information est contre-productive.

Enfin, l’économie dite “collaborative” s’est installée durablement. Si elle recouvre des réalités très diverses et pas toujours positives, du digital labor au travail à la tâche effectué par des essaims de pseudo-auto entrepreneurs, c’est aussi la marque d’une transformation profonde, marquée par la transition du labeur à l’ouvrage, telle que la décrit Laetitia Vitaud dans son dernier ouvrage. Indépendance du travail, maîtrise du temps et des tâches… et nouvelles solidarités au sein de collectifs et de réseaux d’indépendants, appelés à coopérer et à mutualiser leurs moyens sans sacrifier leur autonomie. Ici aussi, les outils monolithiques traditionnels sont inadaptés, et le besoin d’interopérabilité entre parties autonomes est manifeste.

Solid permet de créer les conditions du dialogue entre des tiers, qu’il s’agisse de travailleurs indépendants, de collectifs, d’agences ou de grandes entreprises. Les échanges reposent sur l’interopérabilité souple qu’autorise le Web des données. plutôt que sur un schéma de données rigide et sur l’uniformisation des applications.

Deux éditeurs français ont d’ailleurs fait le pari de mettre cette vision à la portée de tous.

L’Assemblée Virtuelle est un écosystème associatif d’acteurs développant de manière collaborative des communs (outils open source, méthodologies et projets) basés sur le Web sémantique et Solid, au service des acteurs de la transition. 

La coopérative Startin’blox propose une solution open source pour créer des applications Web en assemblant des composants Solid, aussi simplement que l’on peut créer un site Web avec Wordpress.

Une première application basée sur le framework Startin’Blox, Hubl, illustre ses possibilités en matière d’interopérabilité entre organisations. Hubl propose aux collectifs de freelances des modules tels qu’une messagerie instantanée, un job board pour les offres de mission, un annuaire de profils, etc. Chaque collectif peut décider des modules mis en oeuvre et des données qu’il souhaite partager. Il est désormais possible de d’interconnecter collectifs et indépendants au sein d’un écosystème, sans qu’une plateforme ne dicte ses règles aux participants ni n’utilise sa position d’intermédiaire incontournable pour extraire une rente économique !


Comme les technologies Web3 s’appuyant sur des technologies blockchain, le Web distribué de Solid favorise l’autonomie des individus tout en augurant d’un potentiel de transformation considérable au sein des organisations et des écosystèmes. Malgré son manque actuel de visibilité, son adoption pourrait s’avérer rapide, grâce à un socle technologique fiable… et la réponse qu’il apporte à des besoins manifestes de nombreux acteurs économiques.

Article publié la première fois sur [Hackernoon](https://hackernoon.com/the-social-linked-data-solid-project-of-tim-berners-lee-an-organizational-take-m94u3z74?_gl=1*8ib2ec*_up*MQ..*_ga*NjYzMjYzMDk3LjE3Mjc3NzczMjc.*_ga_ECJJ2Q2SJQ*MTcyNzc3NzMyNi4xLjEuMTcyNzc3NzMyOC41OC4wLjA.)