(function(document,videojs,pannellum){'use strict';videojs.plugin('pannellum',function(config){var player=this;var container=player.el();var vid=container.getElementsByTagName('video')[0],pnlmContainer=document.createElement('div');config=config||{};config.type='equirectangular';config.dynamic=true;config.showZoomCtrl=false;config.showFullscreenCtrl=false;config.autoLoad=true;config.panorama=vid;pnlmContainer.style.visibility='hidden';var pnlm=pannellum.viewer(pnlmContainer,config);container.insertBefore(pnlmContainer,container.firstChild);vid.style.display='none';player.on('play',function(){if(vid.readyState>1)
pnlm.setUpdate(true);});player.on('canplay',function(){if(!player.paused())
pnlm.setUpdate(true);});player.on('pause',function(){pnlm.setUpdate(false);});player.on('loadeddata',function(){pnlmContainer.style.visibility='visible';});player.on('seeking',function(){if(player.paused())
pnlm.setUpdate(true);});player.on('seeked',function(){if(player.paused())
pnlm.setUpdate(false);});});})(document,videojs,pannellum);