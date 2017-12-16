---
title: Player 3d
hidemenu: true
buttons:
    - url: "#contact"
      icon: envelope
      text: Contactez-moi
      
projets:
    - title: "Player 3d"
      description: |
          <h3 class="article-title">Le projet</h3>
          <p>
            Le player 3d est un <span>outil permettant d'afficher une maquette virtuelle</span> qu'on peut manipuler :<br />
             zoom, rotation, découpe d'étage du batiment.<br />
             Lorsqu'on visualise une découpe d'étage, des zones actives sont visibles et il est possible de les cliquer
              pour voir un plan 3d de ce logement.<br />
          </p>
           <h3 class="article-title">Aspects techniques :</h3>
           <p>
              la maquette est composée de 30 images précalculées composant l'animation de la rotation,<br />
              ainsi que de zones 3d temps réel (plus la position de la caméra pour chaque frame).
          </p>
          <h3 class="article-title">Mission</h3>
          <p>
            La direction de départ était d'<span>optimiser cet outil en rendant plus rapide le chargement et l'affichage,
            ainsi que la réactivité globale</span>. <br />
            <br />
            => chargement d'images basse résolution en premier puis amélioration de la qualité;<br />
            <br />
            => <span>gestionnaire de file d'attente</span> priorisant l'image en cours,
            puis une image sur trois en tournant;<br />
            <br />
            => <span>le loader est caché avant que tout soit chargé</span> (3 à 6 images suffisent), ce qui donne une
            impression de chargement fini plus rapidement. <span>Le chargement continue en tâche de fond mais la manipulation est possible</span>.<br />
            <br />
            => <span>séparation de l'outil en un gestionnaire principal, deux drivers (html5 et flash) et le gestionnaire de téléchargement</span>.
            Scinder la librairie en plus petites parties plus spécialisées permet une manipulation du code plus simple.<br />
            <br />
            => <span>documentation de l'outil</span> (commentaires, API, exemples et cas de tests pour vérifier que les évolutions ne cassent pas l'existant).<br />
            <br />
            => <span>changement du code gérant l'inertie</span> : les mouvements suivent le contrôle de l'utilisateur tant que le bouton
            de la souris est maintenu mais lorsqu'elle est relachée il y a désormais un calcul de la vitesse radiale et une décélération
            (via une fonction de easing).       
          </p>
      img: [player-small.jpg]
      url: "http://configurateur.bouygues-immobilier.com/index?pid=030-295J42&lname=C104"
      
      
      
---
## Présentation globale

Premier projet dans ma société actuelle, travail sur un outil interne en javascript.



