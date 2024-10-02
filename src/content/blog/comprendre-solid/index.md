---
title: " Qu'est ce que le projet Solid ? "
summary: "Comprendre le projet solid en 5 minutes"
date: "Mar 2 2021"
draft: false
tags:
- Solid

---

Il existe peu de contenus en français qui expliquent en quoi consiste le projet SOLID. Cet article tente de résoudre cette lacune en tâchant d’expliquer le cheminement qui a mené Tim Berners Lee, l’inventeur du web, à monter le projet SOLID en 2015. Il est librement inspiré de la page officielle du projet, avec quelques ajouts liés à la réalité de l’écosystème français.

SOLID est pensé comme une correction de mi-parcours pour le Web afin de réaliser la vision du Web en tant que moyen d'échange sécurisé et décentralisé de données publiques, privées et nous dirions même communautaires.

Le Web, pour Tim comme pour tous les enthousiastes de la première heure, était censé être un espace de liberté, de partage et de coopération où tout le monde pouvait lire et écrire de l’information. Le web était censé être un média collaboratif mais il s’est perdu en chemin.

# La première vision du web : une liberté difficile à mettre en pratique

Les explorations actuelles sur les communs nous montrent à quel point il est difficile de dessiner un espace de liberté pour tous. Qui a le droit d’écrire ? Comment empêcher que n’importe qui écrive n’importe quoi ?

Ce sont des questions primaires auxquelles nous n’avons toujours pas de réponse.

Devant cette complexité, les entreprises qui se sont emparées du web ont développé leurs écosystèmes économiques en évinçant l’aspect collaboratif. C’était bien plus simple de contrôler l’écriture et de vendre la consultation. C’est-à-dire que les projets qui ont peuplé l’espace du web ont posé de façon unilatérale leurs règles de collaboration avec les utilisateurs de leurs services et ont développé des modèles économiques basés sur la rétention de l'accès à l’information.

Cette simplification de l’usage du Web a été pour Tim Berners Lee, la première voie d’égarement sur ce qu’il devait être. En même temps, c’est cette simplification qui a permis au milieu des années 1990, l’ouverture du web au grand public.

# La naissance des silos

Dans les années 2000, arrive ce que l’on appelle le web 2.0. La notion d’écriture, c’est à dire la possibilité d’écrire de la donnée sur le web, réapparaît à travers les wikis, les blogs et les réseaux sociaux. Pour que cela soit possible, il a fallu mettre en place des mécanismes d’identification et d’authentification. A l’époque, il n’existait pas de standards reconnus internationalement sur cette problématique. C’est ainsi que des entreprises comme Facebook ont débarqué pour former l'océan bleu des réseaux sociaux, en montant leurs propres mécanismes d'identification, d'authentification et de contrôle d'accès . Et de façon tout à fait pragmatique, c’était par la même occasion une façon d’assurer la sécurité des données :  il était plus simple de penser son système isolé des autres, afin d’en garder la maîtrise.

C’est ainsi que sont nés et se sont formés les silos qui concentrent notre web actuel.

# Pourquoi les silos sont problématiques ?

Un silo, c’est comme une boite hermétique. Par exemple, Facebook est un silo. Tous vos amis sont enfermés dedans. Si vous devez choisir un réseau social, vous allez aller dans la boîte où sont vos amis même si d'autres boites vous paraissent plus en phase avec vos valeurs. Plus cette boite grandit, plus elle rend inutile l’exploration d’autres boites, et plus on leur donne de la donnée, plus elle est incontournable.

C’est ce qu’on appelle l'effet de réseau.

Vous n’avez pas le choix, personne n’a vraiment plus le choix et le plus gros rafle la mise.

C’est ce qu’on appelle la logique du “winner takes all”. C’est ainsi que le web est structuré aujourd’hui. Les logiques monopolistiques sont inéluctables, l’innovation est ainsi verrouillée et l’utilisateur en paie le prix.

Comme le service n’a pas de concurrence réelle, il n’a aucune motivation à améliorer la visibilité des données qui sont conservées, utilisées, ni à qui elles sont partagées. Vous êtes dépendants d’un service pour accéder à votre identité, à vos données et à votre communauté.

De plus, cette dernière est fragmentée parce qu'elle est cloisonnée, dispersée entre des fournisseurs, des interfaces et des formats de données propriétaires.

Ainsi il devient très difficile d’accéder à toutes vos données et de les utiliser pour votre compte. Votre marge de manœuvre dans votre usage du web est de plus en plus limitée. L’espace de partage de l'information et de la liberté est désormais celui qui est défini par quelques grandes firmes américaines.

# Qu’est ce que propose Tim Berners Lee ?

SOLID signifie Social Linked Data.

L’objectif est de s’accorder ensemble sur des standards qui vont permettre l'interopérabilité des applications web entre elles, c’est à dire leur compatibilité entre elles. Par exemple, avoir accès à ses playlists indépendamment du fait d’utiliser l’interface de Spotify ou de Deezer. Notre identité et nos données ne sont plus rattachées obligatoirement au système d’une application mais il nous appartient de les externaliser où bon nous semble.

Nous avons donc d’un côté des applications et de l'autre notre identité et nos données au sens le plus large du terme. C'est-à-dire que mes amis ne sont plus enfermés sur Facebook. Le fait que je sois connecté à ces personnes existe indépendamment de la réalité de la firme. La même logique peut être appliquée à mes musiques préférées, mes articles de blog, mes covoiturages, mes locations etc...

Nous reprenons le contrôle de notre identité, nous reprenons notre liberté vis-à-vis des applications.

Si la personnalisation proposée aujourd’hui par les GAFAM peut être hallucinante, imaginez qu’ils ne la mettent en œuvre qu’avec une fraction de votre identité.

Reprendre la main sur ses données, c’est avoir encore plus de pertinence dans votre accès à l’information via des services que vous aurez choisi car ils vous auront convaincu de pertinence et de leur éthique.

Reprendre la main sur ses données, cela signifie que vous pouvez partager certaines parties de vos données avec d'autres personnes, groupes de confiance, ou avec un écosystème d'applications et de services à qui vous avez donné la possibilité.

Dans la communauté SOLID Monde, il y a un concept structurant qui est la notion de POD, pour Personal Online Datastore, un endroit unique où l’on peut stocker son identité et ses données. Au sein de la communauté francophone qui se forme autour de cette vision partagée de ce que devrait être le web, nous ajoutons au concept de POD celui de COD pour Collective Online Datastore. Les CODs permettent l'hébergement des données communautaires : Ni publiques, ni privées, celles-ci sont le fruit des organisations entendues au sens large.

# Les perspectives

Les perspectives de ce changement de paradigme sont abyssales, nous en donnons quelques exemples ici.

La première et majeure avancée concerne la gestion des données personnelles.

## RGPD et Sécurité

Le RGPD est une superbe opportunité pour l’écosystème SOLID. Les contraintes juridiques qu’il pose ne sont assimilables que par les entreprises qui ont les moyens de s’y conformer. Avec SOLID, l’inégalité de moyens face à la mise aux normes juridiques n’a plus lieu d’être car c’est dans l’architecture même de l’application que le respect des données personnelles est assuré.

C’est aussi une grande avancée en terme de sécurité car si aujourd’hui nous confions nos données personnelles à une myriade de services, demain, les applications pourraient se concentrer sur leur métier et laisser la protection et la gestion des données personnelles à des structures dont c’est la spécialité.
Considération culturelle et relocalisation

Si nous sommes libres d’utiliser l’application qui nous plait sans être contraint par l’effet de réseau, nous pouvons imaginer une relocalisation et une adaptation fine des interfaces. Des interfaces qui pourraient être locales, multiples, plurielles, fonction des cultures et des usages. Accorder sa confiance ou non, se déciderait à l’échelle des communautés qu’elles soient territoriales ou culturelles. Et l’open source pourrait prendre tout son sens pour davantage d’inclusivité sur le web.

## Gouvernance

Si nos données personnelles sortent de la possession des entreprises qui les exploitent et que nous pouvons en reprendre la maîtrise, cela implique que nous avons la possibilité d'adresser avec un champ de possibles beaucoup plus ouvert sur le sujet de la gouvernance des données. Comment allons-nous aménager cette reprise de liberté de notre identité numérique ? Comment allons-nous gérer la modération dans un monde décentralisé ?

Comment répondre à la complexité de ce que signifie la liberté sur le Web ?

Tout ceci n’est qu’un avant goût du champ des possibles que pourrait nous laisser imaginer le projet SOLID. La communauté SOLID jardine l’émergence de ce nouveau paradigme avec l’ambition de débarrasser le web des gros poissons qui monopolisent la place pour laisser émerger des bancs de petits spécimens, plus aptes pour que le Web adresse la complexité du genre humain et aux grands enjeux qui l’attendent.
