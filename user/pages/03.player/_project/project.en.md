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
        This is a Javascript tool for visualizing real estate 3d model, using webgl for real time over 
        pre-rendered high quality 3d.
    
      description: |
          <div class="row">
              <div class="four columns">
                <h1><span>Specifications</span></h1>
              </div>
              <div class="eight main-col columns">
                   <p>
                      The rotation animation use 30 pre-rendered frames of the 3d models, with real time 3d zones.
                      The javascript tool use an html5 canvas with threejs for the webgl library.
                  </p>
              </div>
          </div>          
          
          <div class="row" style="margin-top: 24px;">
              <div class="four columns">
                <h1><span>Mission</span></h1>
              </div>
              <div class="eight main-col columns">
                   <p>
                      the goal was an improved loading time and more performances.
                  </p>
              </div>
          </div>
          
          
          <div class="row" style="margin-top: 24px;">
              <div class="four columns">
                <h1><span>Work</span></h1>
              </div>
              <div class="eight main-col columns">
                   <ul class="task-list">
                        <li><i class="material-icons">chevron_right</i><strong>Start with low res frames for faster ready state</strong>, then we load the higher quality ones.</li>
                        
                        <li><i class="material-icons">chevron_right</i><strong>Download manager</strong> priorizing the current frame, then "key" frames, making the rotation possible,
                        then improving fluidity.</li>
                        
                        <li><i class="material-icons">chevron_right</i><strong>After upgrading the app, it only required 20% of frames to disable the loading indicator</strong>, 
                        making it look way faster.</li>
                        
                        <!--li><i class="material-icons">chevron_right</i><strong>Background downloading improves the quality and fluidity,</strong> 
                         without interfering with the user.</li-->
                        
                        <li><i class="material-icons">chevron_right</i><strong>Better inertia simulation</strong> with rotation speed and deceleration.<li>
                        
                        <li><i class="material-icons">chevron_right</i><strong>Tool separated in 4 smaller "one purpose" classes</strong> : the main core, two view handler (flash and webgl) and the download manager.</li>
                        
                        <li><i class="material-icons">chevron_right</i><strong>Extended documentation</strong> : samples, test cases, API, everything needed for other developers use.</li>
                  </p>
              </div>
          </div>
          
      img: [player-small.jpg]
      imgbig: "player-demo5.gif"
      url: "http://configurateur.bouygues-immobilier.com/index?pid=030-295J42&lname=C104"
      text: Voir un exemple
      
      
      
---
## Présentation globale

Premier projet dans ma société actuelle, travail sur un outil interne en javascript.



