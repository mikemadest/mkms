---
title: Player 3d
hidemenu: true
buttons:
    - url: "#contact"
      icon: envelope
      text: Voir un exemple
      
projets:
    - title: "Player 3d"
    
      intro: | 
        Le player 3d est un outil en javascript utilisant un canvas et du webgl pour afficher une maquette virtuelle qu'on peut zoomer et tourner.<br />
         Les batiments présentent une découpe d'étage dans laquelle des zones interactives correspondant aux logements sont visibles.
    
      description: |
          <div class="row">
          <div class="three columns">
            <h1><span>Aspects techniques :</span></h1>
          </div>
          <div class="nine main-col columns">
               <p>
                  la maquette est composée de 30 images précalculées composant l'animation de la rotation,<br />
                  ainsi que de zones 3d temps réel (plus la position de la caméra pour chaque frame).
              </p>
          </div>
          
          <h3 class="article-title">Mission</h3>
          <p>
            Le but était d'<span>optimiser la librairie en rendant plus rapide le chargement et l'affichage,
            ainsi que la réactivité globale</span>. <br />
            </p>
          <h3 class="article-title">Mon apport</h3>
          <p>
            => chargement d'images basse résolution en premier puis amélioration de la qualité;<br />
            <br />
            => <span>gestionnaire de file d'attente</span> priorisant l'image en cours,
            puis une image sur trois parmis les 30 composants la rotation;<br />
            <br />
            => <span>l'indicateur de chargement disparaît alors que 20% des éléments sont chargés</span>, ce qui donne une
            impression de chargement fini plus rapidement. <br />
            => <span>Le chargement continue en tâche de fond mais la manipulation est possible</span> 
            car on a assez d'images pour faire une rotation.<br />
            <br />
            => <span>changement du code gérant l'inertie</span> : avant, chaque mouvement de la maquette passait par une sorte de "tween", donnant une impression de lourdeur.
            Après modification, les mouvements suivent le contrôle de l'utilisateur tant que le bouton
            de la souris est maintenu, donnant une meilleure impression de réactivité.
            Lorsque le bouton est relaché on calcule la vitesse radiale et une décélération est faite (via une fonction de easing).<br />
            <br />
            => <span>séparation de l'outil en un gestionnaire principal, deux drivers (html5 et flash) et le gestionnaire de téléchargement</span>.<br />
            <br />
            => <span>documentation de l'outil</span> : commentaires, API, exemples et cas de tests pour vérifier que les évolutions ne cassent pas l'existant.<br />
          </p>
      img: [player-small.jpg]
      imgbig: "player-big.jpg"
      url: "http://configurateur.bouygues-immobilier.com/index?pid=030-295J42&lname=C104"
      text: Voir un exemple
      
      
      
---
## Présentation globale

Premier projet dans ma société actuelle, travail sur un outil interne en javascript.



