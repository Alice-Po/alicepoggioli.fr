---
title: "Des PODs et des CODs ! "
summary: "Aujourd’hui notre identité numérique est éparpillée à travers une diversité d'applications ce qui rend très compliqué sa maîtrise et sa gestion. "
date: "May 20 2021"
draft: false
tags:
- Solid
- PODs
- CODs
---

## C’est quoi un POD ?

Aujourd’hui notre identité numérique est éparpillée à travers une diversité d'applications ce qui rend très compliqué sa maîtrise et sa gestion.

C’est aussi un problème de sécurité car nous confions notre identité à n’importe qui. Une entreprise qui développe un service de livraison de pizza a surement une expertise livraison mais pas forcément en sécurité ni en protection des données personnelles. L’application du RGPD reste une expérience complexe pour une toute petite entreprise.

De plus, notre expérience du web en elle-même est dégradée à cause de cette fragmentation de notre identité numérique. Le web est immense et l'accès à des données personnelles à fin de personnalisation est indispensable afin d’avoir des services pertinents.

Ces différentes raisons ont conduit la communauté Solid à développer le concept de POD, pour Personal Online Datastore. Un POD, c’est un endroit unique où l’on stocke son identité numérique au sens large et où l’on peut approuver ou révoquer à tout moment l'accès de telles ou telles données à telle ou telle application. Ainsi aucune copie de nos données n'est faite et la maîtrise de notre identité est grandement simplifiée.

## Au-delà des PODs

Dans la page de présentation de Solid, il est précisé qu’un des moteurs de la démarche est de se réapproprier le web, un web libre pour tous. Nous avons perdu de vue cet idéal initial car la mise en place d'une telle liberté nous confronte à une grande complexité. L'intérêt majeur de Solid c’est d’ajouter une dimension communautaire dans le partage de données. En lieu et place de se dire “Est ce que je suis d’accord de publier cet article sur le web ? ou sur cette plateforme ?” Je peux me dire qu'au-delà des plateformes, je décide de partager cet article avec telle personne, telle application ou tel écosystème.. On peut ainsi s’émanciper des plateformes et penser le web comme une vraie toile mutualisée. La confiance sur le web pourrait à nouveau se tisser via des réseaux d’humain davantage que sur la notoriété d’une plateforme qu’on sait aujourd’hui être un mauvais indicateur.

Si on garde en tête cette pertinence qui est pour nous première, le POD est surtout notre échelle de souveraineté vis à vis de nos données en tant qu’individu. Ainsi, on peut le penser de façon individuelle mais il peut aussi recouvrir une dimension collective du moment que la question de la gouvernance de ces données est partagée.

## Les PODS de chez nous

Dans le cadre des projets que nous développons avec SemApps ou Startin'Blox, nous n’avons pas de PODs à proprement parler. Nous n’avons pas ce besoin. Nous avons des clients pour qui nous déployons une solution et ces clients ne veulent pas fournir un POD à chacun de leurs utilisateurs.

La réalité du développement économique de cette vision nous amène à mutualiser la gestion des identités au sein des serveurs du projet que nous déployons.

Les identités des utilisateurs sont stockées sur un serveur collectif propre au projet et le POD devient simplement l’interface des comptes utilisateurs.

Mais ce n'est pas seulement la réalité économique qui pousse à implémenter cette idée ainsi, c’est aussi des besoins concrets concernant les données partagées. Par exemple un projet porté par une organisation n'est pas une donnée personnelle. Cela n'aurait pas de sens de le mettre dans le POD, par exemple, du président de l'asso. C'est la notion de "données communes" qui n’est pas prise en compte dans le concept de POD. Peut être devrions nous parler de “CODs” pour “Collective Online Data Store” ?

Pour l’instant l’écosystème des PODS est encore émergent et réservé à des initiés.

Peut être qu’à terme tout le monde aura son POD, mais on peut imaginer qu’assumer seul la gestion de ses données personnelles peut être rebutant pour beaucoup.

Quelle sorte d’entité pourrait obtenir notre confiance pour les gérer pour nous ?

Ainsi, nous pouvons parier que cette dimension collective de la gestion des identités a de l’avenir.

Faire du SOLID sans PODs, c’est possible, les spécifications l'autorisent et ça ne change rien à la pertinence de cet effort de standardisation. Peut-être devrions-nous nous émanciper de ce cadre afin de pouvoir embarquer plus de monde dans cette vision. Parler de “CODs”, ou du moins aborder la notion de serveur de données gouverné par une communauté, plus que de serveur personnel pourrait augmenter le potentiel inclusif et fédérateur des spécifications Solid.

Il est important de garder en tête les objectifs plus que les implémentations. Le “SOcial” de Solid invite à la prise en compte de la dimension communautaire de la reprise en main de notre identité numérique.
