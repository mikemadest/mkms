---
title: Les configurateurs d'appartement
hidemenu: true
buttons:
    - url: "#contact"
      icon: envelope
      text: Contactez-moi
      
projets:
    - title: "Configurateur Bouygues"
      description: |
          Le projet Bouygues consiste en <span>deux éléments séparés</span> :<br />
          - <span>Un 360° configurable</span> (configuration des sols et de la décoration) mais sans panier ni commande.<br />
          - <span>Un configurateur</span> permettant de choisir les revêtements et options d'un logement précis, 
          avec ticket de caisse, synthèse et commande.<br />
          <br />
          <span>Ce projet est géré en agile avec des sprints et des échanges constants avec le client.</span><br />
          Mon rôle sur le projet : développeur php et javascript.<br />
          Mes tâches :
            <h3 class="article-title">1. R&D sur la visite virtuelle 360° configurable.</h3>
            <p>En interne on utilisait déjà krpano mais on voulait faire une <span>composition de couches png 
            des rendus équirectangulaires</span> de chacun des choix et afficher le résultat. 
            L'outil utilise le webgl via Threejs et dans un premier temps les hotspots seront des polygones texturés.</p>
            
            <h3 class="article-title">2. Import du xml</h3>
            <p>Rien de particulièrement complexe ici, le xml contient toutes les informations nécessaires au projet et qu'on importe en base de données :<br />
            programmes, lots, pièces, produits, style de décoration, gammes de produits, les liens entre les données.</p>

            <h3 class="article-title">3. Le site</h3>
            <p>L'intégration html / css est faite, mon travail consiste à faire fonctionner tout ça, rien de trop complexe :<br />
            - <span>obtenir le prix d'un produit et calcul du panier</span>. Les prix sont au forfait ou au m2, dépendent du programme, de la pièce en cours (sèche ou humide), etc.<br />
            - <span>lister les choix possibles pour une pièce</span> (revêtements, finitions et options) en fonction du programme et de la collection choisie.<br />
            - Visualisation d'un plan 3d "avec rotation" de l'appartement si disponible<br />
            - un peu d'ajax pour les calculs de prix<br />
            - <span>enregistrement des choix et commandes</span>
          </p>
      img: [bouygues-small.jpg, bouygues2-small.jpg]
      url: "http://configurateur.bouygues-immobilier.com/index?pid=030-295J42&lname=C104"
      
    - title: "Configurateur Cogedim"
      description: |
          <p>Une équipe a réalisé un backoffice pour gérer les catalogues de produits et les données du site, 
          utilisant une base de données sensiblement différente.</p>
          <h3 class="article-title">R&D : nouvel outil "scène 2d composée"</h3>
          <p>Il s'agit d'un configurateur de type image fixes (pas de 360) mais avec un nouvel outil :<br />
          - les aperçus de produit sont maintenant fait à partir de <span>textures appliquées sur des objets 3d en webgl</span>.<br /> 
          - un background avec la décoration est ajouté, ainsi qu'une couche "d'effets" permettant d'avoir des ombres et lumières réalistes sur les éléments 3d.<br />
          Bien sûr on veut éviter d'avoir à faire un rendu pour chaque produit avec cette évolution 
          (sans compter qu'il fallait le faire pour chaque pièce). 
          De plus c'est maintenant possible avec les évolutions techniques 
          (le webgl est enfin présent sur toutes les plateformes, alors qu'au moment de la réalisation de Bouygues ce n'était pas le cas).<br />
          <br />
          <span>Le configurateur lui même utilisera les bases déjà développées en les adaptant à la base de données et aux besoins client.</span>
          </p>      
      img: [configurateur-small.jpg] 
      
      
    - title: "Configurateur VINCI"
      description: |
          <h3 class="article-title">R&D : "scène 360° composée"</h3>
          <p>Désormais le but est d'avoir une visite 360° mais avec des éléments temps réels.<br />
          Concrêtement, on doit faire un rendu équirectangulaire de la scène 3d
          puis la superposer aux éléments précalculés.<br />
          <br />
          L'architecture sera la suivante :<br />
          - <span>un outil spécialisé dans la composition des couches</span>, 
          qui inclu le rendu des éléments temps réels et la création de l'équirectangulaire.<br />
          <br />
          - <span>un outil spécialisé dans l'affichage 360° du résultat</span><br />
          Une phase d'étude permettra de définir une nomenclature pour les médias produits 
          (objets 3d, background, couches d'effets, etc.).</p>
          
          <h3 class="article-title">Editeur 3d : </h3>
          <p>Développement d'un outil pour visualiser rapidement un média (scène 2d composée ou 360°), 
          placer les hotspots, définir l'angle de vue par défaut, le fov, la position de la caméra pour les objets 3d.<br />
          Cet outil fera surtout une analyse rapide du dossier du média 
          pour afficher le tout en posant le moins de questions possible afin d'être utilisé par les graphistes 
          pour prévisualiser leur travail.</p>
          
          <h3 class="article-title">Espace documentaire</h3>
          <p>Une documentation est disponible pour chaque outil javascript, documentant l'API, présentant des exemples. 
          Elle sera aussi faite pour les graphistes (nomenclature, configuration pour les exports, 
          création de scripts 3dsmax et photoshop et mise à disposition dans cet espace).
          Tout est fait pour ne pas perdre d'information et aller plus vite dans les étapes de réalisation 
          (erreurs fréquentes documentées et solutionnées par des scripts plus tard, etc.). </p>
          
          <h3 class="article-title">Modularisation du code php</h3>
          <p>Après deux configurateurs, les besoins commencent à être connus.<br />
          Une première phase permettra de <span>créer des modules composer pour les fonctionnalités du projet</span>.<br />
          Ensuite ce sera le début de la réalisation de ce projet pour lequel on sera 4 :<br />
          - un intégrateur front<br />
          - un développeur back<br />
          - un chef de projet et développeur front / R&D (moi)<br />
          - Un chef de produit.<br />
          <br />
          <span>Le projet évoluera en fin de phase vers l'agile (évolution interne de la société) 
          et l'utilisation de Tuleap pour l'organisation.</span>
          </p>
          
          <h3 class="article-title">Pilotage de l'équipe "configurateurs" :</h3>
          <p><span>- analyse du travail à réaliser</span>, <br />
          - <span>réunion de l'équipe et répartition ensemble du travail. Chiffrage et estimations</span>.<br />
          - échanges avec le chef de produit sur les chiffrages et deadline.<br />
          - membre "technique" pour les réunions client<br />
          - développement<br />
          - <span>organisation de séances de test</span> : les 3 membres techniques testent le projet en notant 
          toutes les remarques pertinentes (problèmes d'ergonomie, dysfonctionnements). <br />
          Ensuite l'équipe fait le bilan et réparti les interventions (après validation si besoin par le chef de produit).
          Enfin, la validation de la réalisation est confiée au chef de produit avant de passer à la recette client.<br />
          La société n'ayant pas d'équipe de test, chaque développeur fait bien sûr ses propres contrôles 
          mais ces tests fonctionnels organisés à mon initiative ont eu un impact positif sur le développement (plus de fiabilité) 
          tout en évitant que ce soit le chef de produit ou le client qui rapporte des bugs.<br />
          <br />
          <span>Ce projet a respecté les deadlines développeur et la qualité de production a été au rendez-vous</span>.
          </p>
          
      img: [vinci-small.jpg, vinci2-small.jpg, vinci3-small.jpg]
      url: "http://configurateur.bouygues-immobilier.com/index?pid=030-295J42&lname=C104"
      
      
---
## Présentation globale

<span>Débutés en 2015</span>, les projets de configurateur d'appartement consiste à choisir
les revêtements de sols, domotiques et autres options qui composeront le logement livré.



