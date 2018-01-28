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
              <div class="four columns">
                <h1><span>Aspects techniques</span></h1>
              </div>
              <div class="eight main-col columns">
                   <p>
                      la maquette est composée de 30 images précalculées composant l'animation de la rotation,<br />
                      ainsi que de zones 3d temps réel (plus la position de la caméra pour chaque frame).
                  </p>
              </div>
          </div>          
          
          <div class="row">
              <div class="four columns">
                <h1><span>Mission</span></h1>
              </div>
              <div class="eight main-col columns">
                   <p>
                      Le but était d'optimiser la librairie en rendant plus rapide le chargement et l'affichage,
                      ainsi que la réactivité globale
                  </p>
              </div>
          </div>
          
          
          <div class="row">
              <div class="four columns">
                <h1><span>Réalisation</span></h1>
              </div>
              <div class="eight main-col columns">
                   <ul class="task-list">
                        <li><i class="material-icons">chevron_right</i><strong>Chargement d'images basse résolution en premier</strong> puis amélioration de la qualité</li>
                        
                        <li><i class="material-icons">chevron_right</i><strong>Gestionnaire de file d'attente</strong> commençant par l'image en cours,
                        puis une image sur trois parmis les 30 qui composent la rotation</li>
                        
                        <li><i class="material-icons">chevron_right</i><strong>L'indicateur de chargement disparaît alors que 20% des éléments sont chargés</strong>, ce qui donne une
                        impression de chargement fini plus rapidement.</li>
                        
                        <li><i class="material-icons">chevron_right</i><strong>Le chargement continue en tâche de fond mais la manipulation est possible</strong> 
                        car on a assez d'images pour faire une rotation.</li>
                        
                        <li><i class="material-icons">chevron_right</i><strong>Changement du code gérant l'inertie</strong> : calcul de la vitesse radiale et décélération au relachement de la souris<li>
                        
                        <li><i class="material-icons">chevron_right</i><strong>Séparation de l'outil en 4 librairies</strong> : un gestionnaire principal, deux drivers (html5 et flash) et le gestionnaire de téléchargement</li>
                        
                        <li><i class="material-icons">chevron_right</i><strong>Documentation de l'outil</strong> : commentaires, API, exemples et cas de tests pour vérifier que les évolutions ne cassent pas l'existant</li>
                  </p>
              </div>
          </div>
          
      img: [player-small.jpg]
      imgbig: "player-big.jpg"
      url: "http://configurateur.bouygues-immobilier.com/index?pid=030-295J42&lname=C104"
      text: Voir un exemple
      
      
      
---
## Présentation globale

Premier projet dans ma société actuelle, travail sur un outil interne en javascript.



