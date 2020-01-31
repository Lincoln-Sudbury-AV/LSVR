(function(){
	var script = {
 "start": "this['MainViewer'] = this.MainViewer_mobile; this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player486"
 },
 "scripts": {
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback, stopBackgroundAudio){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } var src = this.playGlobalAudio(audio, endCallback); if(stopBackgroundAudio === true){ var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); } return src; },
  "_getPlayListsWithViewer": function(viewer){  var playLists = this.getByClassName('PlayList'); var containsViewer = function(playList) { var items = playList.get('items'); for(var j=items.length-1; j>=0; --j) { var item = items[j]; var player = item.get('player'); if(player !== undefined && player.get('viewerArea') == viewer) return true; } return false; }; for(var i=playLists.length-1; i>=0; --i) { if(!containsViewer(playLists[i])) playLists.splice(i, 1); } return playLists; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "existsKey": function(key){  return key in window; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopGlobalAudios": function(onlyForeground){  var audios = window.currentGlobalAudios; var self = this; if(audios){ Object.keys(audios).forEach(function(key){ var data = audios[key]; if(!onlyForeground || (onlyForeground && !data.asBackground)) { self.stopGlobalAudio(data.audio); } }); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios).map(function(v) { return v.audio })); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getFirstPlayListWithMedia": function(media, onlySelected){  var playLists = this.getPlayListsWithMedia(media, onlySelected); return playLists.length > 0 ? playLists[0] : undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext, true); }; playNext(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData) audio = audioData.audio; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListsWithMedia": function(media, onlySelected){  var result = []; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) result.push(playList); } return result; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "_initItemWithComps": function(playList, index, components, eventName, visible, effectToApply, delay, restoreStateAt){  var item = playList.get('items')[index]; var registerVisibility = restoreStateAt > 0; var rootPlayer = this.rootPlayer; var cloneEffect = function(visible) { var klass = effectToApply ? effectToApply.get('class') : undefined; var effect = undefined; switch(klass) { case 'FadeInEffect': case 'FadeOutEffect': effect = rootPlayer.createInstance(visible ? 'FadeInEffect' : 'FadeOutEffect'); break; case 'SlideInEffect': case 'SlideOutEffect': effect = rootPlayer.createInstance(visible ? 'SlideInEffect' : 'SlideOutEffect'); break; } if(effect){ effect.set('duration', effectToApply.get('duration')); effect.set('easing', effectToApply.get('easing')); if(klass.indexOf('Slide') != -1) effect.set(visible ? 'from' : 'to', effectToApply.get(visible ? 'from' : 'to')); } return effect; }; var endFunc = function() { for(var i = 0, count = components.length; i<count; ++i) { var component = components[i]; if(restoreStateAt > 0){ this.setComponentVisibility(component, !visible, 0, cloneEffect(!visible)); } else { var key = 'visibility_' + component.get('id'); if(this.existsKey(key)) { if(this.getKey(key)) this.setComponentVisibility(component, true, 0, cloneEffect(true)); else this.setComponentVisibility(component, false, 0, cloneEffect(false)); this.unregisterKey(key); } } } item.unbind('end', endFunc, this); if(addMediaEndEvent) media.unbind('end', endFunc, this); }; var stopFunc = function() { item.unbind('stop', stopFunc, this, true); item.unbind('stop', stopFunc, this); item.unbind('begin', stopFunc, this, true); item.unbind('begin', stopFunc, this); for(var i = 0, count = components.length; i<count; ++i) { this.keepCompVisible(components[i], false); } }; var addEvent = function(eventName, delay, restoreStateAt){ var changeFunc = function(){ var changeVisibility = function(component, visible, effect) { rootPlayer.setComponentVisibility(component, visible, delay, effect, visible ? 'showEffect' : 'hideEffect', false); if(restoreStateAt > 0){ var time = delay + restoreStateAt + (effect != undefined ? effect.get('duration') : 0); rootPlayer.setComponentVisibility(component, !visible, time, cloneEffect(!visible), visible ? 'hideEffect' : 'showEffect', true); } }; for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; if(visible == 'toggle'){ if(!component.get('visible')) changeVisibility(component, true, cloneEffect(true)); else changeVisibility(component, false, cloneEffect(false)); } else { changeVisibility(component, visible, cloneEffect(visible)); } } item.unbind(eventName, changeFunc, this); }; item.bind(eventName, changeFunc, this) }; if(eventName == 'begin'){ for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; this.keepCompVisible(component, true); if(registerVisibility) { var key = 'visibility_' + component.get('id'); this.registerKey(key, component.get('visible')); } } item.bind('stop', stopFunc, this, true); item.bind('stop', stopFunc, this); item.bind('begin', stopFunc, this, true); item.bind('begin', stopFunc, this); if(registerVisibility){ item.bind('end', endFunc, this); var media = item.get('media'); var addMediaEndEvent = media.get('loop') != undefined && !(media.get('loop')); if(addMediaEndEvent) media.bind('end', endFunc, this); } } else if(eventName == 'end' && restoreStateAt > 0){ addEvent('begin', restoreStateAt, 0); restoreStateAt = 0; } if(eventName != undefined) addEvent(eventName, delay, restoreStateAt); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setOverlayBehaviour": function(overlay, media, action, preventDoubleClick){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(preventDoubleClick){ if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 1000); } }; if(preventDoubleClick && window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getFirstPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "registerTextVariable": function(obj){  var property = (function() { switch (obj.get('class')) { case 'Label': return 'text'; case 'Button': case 'BaseButton': return 'label'; case 'HTMLText': return 'html'; } })(); if (property == undefined) return; var re = new RegExp('\\{\\{\\s*(\\w+)\\s*\\}\\}', 'g'); var text = obj.get(property); var data = obj.get('data') || {}; data[property] = text; obj.set('data', data); var updateLabel = function(vars) { var text = data[property]; for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) { var dispatcher = dispatchers[j]; var index = dispatcher.get('selectedIndex'); if (index >= 0) { var srcPropArray = info.src.split('.'); var src = dispatcher.get('items')[index]; if(src == undefined || (info.itemCondition !== undefined && !info.itemCondition.call(this, src))) continue; for (var z = 0; z < srcPropArray.length; ++z) src = 'get' in src ? src.get(srcPropArray[z]) : src[srcPropArray[z]]; text = text.replace(info.replace, src); } } } if(text != data[property]) obj.set(property, text); }; var vars = []; var addVars = function(dispatchers, eventName, src, replace, itemCondition) { vars.push({ 'dispatchers': dispatchers, 'eventName': eventName, 'src': src, 'replace': replace, 'itemCondition': itemCondition }); }; var viewerAreaItemCondition = function(item) { var player = item.get('player'); return player !== undefined && player.get('viewerArea') == this.MainViewer; }; while (null != (result = re.exec(text))) { switch (result[1]) { case 'title': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.label', result[0], viewerAreaItemCondition); break; case 'subtitle': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.data.subtitle', result[0], viewerAreaItemCondition); break; } } if (vars.length > 0) { var func = updateLabel.bind(this, vars); for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) dispatchers[j].bind(info.eventName, func, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = undefined; if(mediaDispatcher){ var playListsWithMedia = this.getPlayListsWithMedia(mediaDispatcher, true); playListDispatcher = playListsWithMedia.indexOf(playList) != -1 ? playList : (playListsWithMedia.length > 0 ? playListsWithMedia[0] : undefined); } if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } item.bind('begin', onBeginFunction, self); this.executeFunctionWhenChange(playList, index, disposeCallback);  },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; } return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "keepCompVisible": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareSocial": function(socialID, url, deepLink){  if(url == undefined) { url = deepLink ? location.href : location.href.split(location.search||location.hash||/[?#]/)[0]; } else if(deepLink) { url += location.hash; } url = (function(id){ switch(id){ case 'fb': return 'https://www.facebook.com/sharer/sharer.php?u='+url; case 'wa': return 'https://api.whatsapp.com/send/?text='+encodeURIComponent(url); case 'tw': return 'https://twitter.com/intent/tweet?source=webclient&url='+url; default: return undefined; } })(socialID); this.openLink(url, '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getKey": function(key){  return window[key]; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback, asBackground){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = {'audio': audio, 'asBackground': asBackground || false}; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData){ audio = audioData.audio; delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; }
 },
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "defaultVRPointer": "laser",
 "children": [
  "this.MainViewer_mobile",
  "this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile",
  "this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile",
  "this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile",
  "this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile",
  "this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile"
 ],
 "gap": 10,
 "paddingLeft": 0,
 "class": "Player",
 "scrollBarWidth": 10,
 "mouseWheelEnabled": true,
 "minWidth": 20,
 "vrPolyfillScale": 1,
 "mobileMipmappingEnabled": false,
 "overflow": "hidden",
 "id": "rootPlayer",
 "shadow": false,
 "height": "100%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "desktopMipmappingEnabled": false,
 "width": "100%",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile",
 "downloadEnabled": false,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "definitions": [{
 "horizontalAlign": "center",
 "data": {
  "name": "-Expand"
 },
 "minHeight": 1,
 "left": "40%",
 "propagateClick": false,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "right": "40%",
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile.png",
 "id": "IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile",
 "mode": "push",
 "height": 92,
 "click": "this.setComponentVisibility(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile, false, 0, this.effect_3A451B34_1C82_9908_41AD_37B1C5A316C2, 'hideEffect', false); this.setComponentVisibility(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile, false, 0, this.effect_3A451B34_1C82_9908_41AD_37B1C5A316C2, 'hideEffect', false); this.setComponentVisibility(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile, false, 0, this.effect_3A451B34_1C82_9908_41AD_37B1C5A316C2, 'hideEffect', false)",
 "shadow": false,
 "borderRadius": 0,
 "maxWidth": 92,
 "visible": false,
 "maxHeight": 92,
 "paddingBottom": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "borderSize": 0,
 "paddingTop": 0,
 "bottom": 0,
 "cursor": "hand",
 "paddingRight": 0
},
{
 "id": "panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F96A5524_F3FF_EDB9_41C6_C86383A9C3AA",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F6103C9C_FD01_9C4C_41E6_CB79C8148B97",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F96A7524_F3FF_EDB9_41C1_E4BFC6E56535",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E53BDB54_FF00_64DC_41E4_4C2E3A582B34",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.23,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E53BCB54_FF00_64DC_41D5_FC18D629A0F1",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F611BC9D_FD01_9C4C_41E3_E2F07CE24E41",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9",
 "hfovMin": "150%",
 "label": "Balcony Mid Left",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_EEEAC445_FD00_AC3C_41E6_60F43F6FCFF4",
  "this.overlay_E977DF67_FD01_BCFC_41EA_16DD377B99C9"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 97.55,
   "class": "AdjacentPanorama",
   "yaw": -105.69,
   "distance": 1,
   "panorama": "this.panorama_F617986F_FD01_E4CC_41E0_C238A8477456"
  },
  {
   "backwardYaw": -16.67,
   "class": "AdjacentPanorama",
   "yaw": 131.88,
   "distance": 1,
   "panorama": "this.panorama_F617375A_FD01_ECD4_41E0_889483F1FB53"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "camera_E526DB01_FF00_6434_41B9_B05FE67EC401",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -70.29,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E526CB01_FF00_6434_41EC_C1700CFAB078",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E1F53A14_FF00_645C_41E3_31E0B6CFF235",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -75.76,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E1F55A14_FF00_645C_41EE_BB98D1A0ED6D",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E5622B8B_FF00_6434_41EA_7491C7F28BE2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5625B8B_FF00_6434_41EE_DEFE815CE7CE",
 "automaticZoomSpeed": 10
},
{
 "horizontalAlign": "center",
 "data": {
  "name": "next"
 },
 "minHeight": 1,
 "propagateClick": false,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "right": "2%",
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile.png",
 "id": "IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile",
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, 1)",
 "shadow": false,
 "borderRadius": 0,
 "width": 92,
 "maxWidth": 92,
 "visible": false,
 "maxHeight": 92,
 "paddingBottom": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "borderSize": 0,
 "top": "35%",
 "paddingTop": 0,
 "bottom": "35%",
 "cursor": "hand",
 "paddingRight": 0
},
{
 "id": "camera_DE560A54_FF00_64DC_41C1_E98D7F0EE546",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.78,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_DE565A54_FF00_64DC_41ED_1F4F2D6EE104",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F6110C9E_FD01_9C4C_41ED_FB7DB1C27022",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_DE26EA34_FF00_645C_41ED_66C69FF12C65",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.15,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_DE271A34_FF00_645C_41CF_64092ACCB27A",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7",
 "hfovMin": "150%",
 "label": "Balcony Storage Right 2",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_EBFF4A20_FD00_6474_41BD_EF450A4DF480",
  "this.overlay_EAF8FFD2_FD00_7BD4_41D1_F85718DCB342",
  "this.overlay_EAAD5808_FD00_6434_41E0_1340C1A59493"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -57.69,
   "class": "AdjacentPanorama",
   "yaw": -62.54,
   "distance": 1,
   "panorama": "this.panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434"
  },
  {
   "backwardYaw": -116.32,
   "class": "AdjacentPanorama",
   "yaw": -165.23,
   "distance": 1,
   "panorama": "this.panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A"
  },
  {
   "backwardYaw": -164.92,
   "class": "AdjacentPanorama",
   "yaw": 83.28,
   "distance": 1,
   "panorama": "this.panorama_F600AB30_FD01_A454_41B3_FCD20F95281D"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "camera_E5CBBC06_FF00_9C3C_41E8_3B31E453C89C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 155.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5CBAC06_FF00_9C3C_41EA_FBB4B705DD34",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F6108C9C_FD01_9C4C_41E6_0613FF270D47",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E557FB75_FF00_64DC_41EE_49FA5425FA19",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -82.45,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E557EB75_FF00_64DC_41CB_80D07DC61C48",
 "automaticZoomSpeed": 10
},
{
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "gap": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "right": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "id": "Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36_mobile",
 "height": "100%",
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile",
  "this.IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile",
  "this.IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile"
 ],
 "shadow": false,
 "borderRadius": 0,
 "width": "50%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "contentOpaque": false,
 "top": "0%",
 "paddingTop": 0,
 "data": {
  "name": "Right"
 },
 "layout": "horizontal",
 "horizontalAlign": "right",
 "scrollBarVisible": "rollOver",
 "paddingRight": 10
},
{
 "minHeight": 1,
 "left": "0%",
 "propagateClick": false,
 "gap": 0,
 "backgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "paddingLeft": 10,
 "class": "Container",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "id": "Container_1185BA07_1C82_BB09_4190_3425ACEF39CF_mobile",
 "height": "100%",
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile",
  "this.IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile",
  "this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile"
 ],
 "shadow": false,
 "borderRadius": 0,
 "width": "50%",
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "borderSize": 0,
 "contentOpaque": false,
 "top": "0%",
 "paddingTop": 0,
 "data": {
  "name": "Left"
 },
 "layout": "horizontal",
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0
},
{
 "id": "camera_DE041A1F_FF00_644C_41E6_5293EA290704",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 138.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_DE040A1F_FF00_644C_41A4_3DBBB67179E7",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E214EC4B_FF00_9C34_41CA_00EF32C0AC46",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 79.78,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E2151C4B_FF00_9C34_41E2_FD40BDB96733",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7",
 "hfovMin": "150%",
 "label": "House Aisle Left Front",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_E2637034_FC0C_2399_41E2_F54203852C69",
  "this.overlay_E0FD41C1_FC0C_24FB_41CA_B500E6933FAC"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -130.48,
   "class": "AdjacentPanorama",
   "yaw": 88.78,
   "distance": 1,
   "panorama": "this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4"
  },
  {
   "backwardYaw": 147.34,
   "class": "AdjacentPanorama",
   "yaw": -7.59,
   "distance": 1,
   "panorama": "this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F611FC9D_FD01_9C4C_41D7_ED418A3658E6",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E5BEDBEA_FF00_9BF4_416C_21CE886193B2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 81.6,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5BECBEA_FF00_9BF4_41B2_30898C1891A4",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E1C209F5_FF00_67DC_41E5_9BDF7F933A11",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 30.26,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E1C229F5_FF00_67DC_41D2_FA50AAB5A7DE",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F613B268_FD01_A4F4_41D0_C7F28F111199",
 "hfovMin": "150%",
 "label": "Balcony Corner Right",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_E888F2A8_FD00_A474_41E8_F7C7AC6B6CE1",
  "this.overlay_E8176927_FD00_E47C_41DB_A49029FF7590"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 104.24,
   "class": "AdjacentPanorama",
   "yaw": -101.13,
   "distance": 1,
   "panorama": "this.panorama_F61719CA_FD01_A434_41E7_DBDD14D07503"
  },
  {
   "backwardYaw": -4.22,
   "class": "AdjacentPanorama",
   "yaw": -163.32,
   "distance": 1,
   "panorama": "this.panorama_F600AB30_FD01_A454_41B3_FCD20F95281D"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "MainViewer_mobilePanoramaPlayer",
 "class": "PanoramaPlayer",
 "buttonMoveUp": "this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile",
 "touchControlMode": "drag_rotation",
 "gyroscopeEnabled": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonMoveDown": "this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile",
 "mouseControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "buttonMoveLeft": "this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile",
 "buttonCardboardView": "this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile",
 "viewerArea": "this.MainViewer_mobile",
 "buttonZoomIn": "this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile",
 "buttonZoomOut": "this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile",
 "buttonMoveRight": "this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile"
},
{
 "id": "camera_E51C0AE5_FF00_65FC_41D4_F2A5C4B995CA",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 63.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E51C3AE5_FF00_65FC_41E3_C86D433F2A0D",
 "automaticZoomSpeed": 10
},
{
 "horizontalAlign": "center",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0,
 "minWidth": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile.png",
 "id": "IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile",
 "mode": "push",
 "height": 46,
 "rollOverIconURL": "skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile_rollover.png",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile_pressed.png",
 "verticalAlign": "middle",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "Up"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "width": 46
},
{
 "horizontalAlign": "center",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0,
 "minWidth": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile.png",
 "id": "IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile",
 "mode": "push",
 "height": 46,
 "rollOverIconURL": "skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile_rollover.png",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile_pressed.png",
 "verticalAlign": "middle",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "Zoom In"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "width": 46
},
{
 "id": "panorama_F600AB30_FD01_A454_41B3_FCD20F95281D",
 "hfovMin": "150%",
 "label": "Balcony Storage Right 1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_E80FDF13_FD0F_9C54_41D4_4011CDE93402",
  "this.overlay_EB83EF3C_FD00_BC4C_41D7_0791A4CDFD3C"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -163.32,
   "class": "AdjacentPanorama",
   "yaw": -4.22,
   "distance": 1,
   "panorama": "this.panorama_F613B268_FD01_A4F4_41D0_C7F28F111199"
  },
  {
   "backwardYaw": 83.28,
   "class": "AdjacentPanorama",
   "yaw": -164.92,
   "distance": 1,
   "panorama": "this.panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowColor": "#333333",
 "progressBottom": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressHeight": 10,
 "playbackBarBorderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "paddingLeft": 0,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "firstTransitionDuration": 0,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowSpread": 0,
 "toolTipPaddingLeft": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipDisplayTime": 600,
 "vrPointerSelectionTime": 2000,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "shadow": false,
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingBottom": 4,
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarProgressBorderRadius": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadow": true,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "paddingRight": 0,
 "progressOpacity": 1,
 "progressBarBorderSize": 0,
 "playbackBarHeadHeight": 15,
 "progressRight": 0,
 "progressBorderSize": 0,
 "toolTipFontStyle": "normal",
 "vrPointerSelectionColor": "#FF6600",
 "propagateClick": false,
 "toolTipFontWeight": "normal",
 "progressBorderColor": "#000000",
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarRight": 0,
 "class": "ViewerArea",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBottom": 5,
 "playbackBarHeadWidth": 6,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingTop": 4,
 "playbackBarLeft": 0,
 "toolTipBorderSize": 1,
 "width": "100%",
 "playbackBarBorderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer_mobile",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressLeft": 0,
 "height": "100%",
 "playbackBarProgressOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeight": 10,
 "toolTipPaddingRight": 6,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "paddingTop": 0,
 "transitionMode": "blending",
 "toolTipOpacity": 1,
 "borderSize": 0
},
{
 "id": "panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F96A3524_F3FF_EDB9_41A1_41E723FF5A3D",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_DE36FA3F_FF00_644C_41E4_39FE3B9E2BF4",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -74.85,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_DE371A3F_FF00_644C_41A3_7C5132EC029F",
 "automaticZoomSpeed": 10
},
{
 "id": "effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5",
 "class": "FadeOutEffect",
 "duration": 200,
 "easing": "linear"
},
{
 "id": "camera_E5324B3E_FF00_644C_41BB_FD144200D77F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -112.71,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5327B3E_FF00_644C_41D1_933C7AD6574B",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9",
 "hfovMin": "150%",
 "label": "House Rear Door Right",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_E00B0A65_FC0C_27BB_41DC_CE6BC287A8C0",
  "this.overlay_F335378A_FD00_AC34_41E1_7F3088317445",
  "this.overlay_F2015216_FD00_645C_41E1_4095E74BAC56"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 119.85,
   "class": "AdjacentPanorama",
   "yaw": -81.53,
   "distance": 1,
   "panorama": "this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8"
  },
  {
   "backwardYaw": -156.26,
   "class": "AdjacentPanorama",
   "yaw": 110.32,
   "distance": 1,
   "panorama": "this.panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "horizontalAlign": "center",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0,
 "minWidth": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile.png",
 "id": "IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile",
 "mode": "push",
 "height": 92,
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, -1)",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "borderSize": 0,
 "paddingTop": 0,
 "data": {
  "name": "Previous"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "width": 92
},
{
 "id": "camera_E5D16C13_FF00_9C54_41C2_C5876746E17F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.77,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5D19C13_FF00_9C54_41E6_B3C5030ED388",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E5FFBC35_FF00_9C5C_41DF_33AA18A27787",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -169.82,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5FFAC35_FF00_9C5C_41CF_6AAC90545044",
 "automaticZoomSpeed": 10
},
{
 "horizontalAlign": "center",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0,
 "minWidth": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile.png",
 "id": "IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile",
 "mode": "push",
 "height": 92,
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, 1)",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "borderSize": 0,
 "paddingTop": 0,
 "data": {
  "name": "Next"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "width": 92
},
{
 "id": "camera_E59E6BC1_FF00_6434_41C9_5480F84BFC77",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 47.28,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E59E9BC1_FF00_6434_41E9_1A18E58805C4",
 "automaticZoomSpeed": 10
},
{
 "horizontalAlign": "center",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0,
 "minWidth": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile.png",
 "id": "IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile",
 "mode": "push",
 "height": 46,
 "rollOverIconURL": "skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile_rollover.png",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile_pressed.png",
 "verticalAlign": "middle",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "Down"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "width": 46
},
{
 "id": "panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F6117C9D_FD01_9C4C_41D6_1318978E4967",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F611DC9D_FD01_9C4C_41E9_D0C892858A53",
 "automaticZoomSpeed": 10
},
{
 "data": {
  "name": "SETTINGS"
 },
 "minHeight": 1,
 "left": "2%",
 "propagateClick": false,
 "gap": 10,
 "backgroundOpacity": 0.9,
 "scrollBarOpacity": 0.5,
 "right": "2%",
 "paddingLeft": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "overflow": "scroll",
 "id": "Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile",
 "height": 100,
 "backgroundColorDirection": "vertical",
 "children": [
  "this.Container_1185BA07_1C82_BB09_4190_3425ACEF39CF_mobile",
  "this.Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36_mobile",
  "this.Container_129084CF_1C83_AF18_418C_2D8031993BE6_mobile"
 ],
 "shadow": false,
 "backgroundColor": [
  "#534741"
 ],
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "backgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "bottom": 20,
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0
},
{
 "id": "panorama_F61719CA_FD01_A434_41E7_DBDD14D07503",
 "hfovMin": "150%",
 "label": "Balcony Mid Right",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_E97B2E6C_FD00_BCCC_41CF_4F3A541E8B64",
  "this.overlay_E86AF7A8_FD00_AC74_41EA_80BC5C224305",
  "this.overlay_E80997CA_FD03_AC34_4185_4CCA690480CC",
  "this.overlay_E8855BCC_FD03_BBCC_41EA_324B269398C3"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 109.71,
   "class": "AdjacentPanorama",
   "yaw": -100.22,
   "distance": 1,
   "panorama": "this.panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07"
  },
  {
   "backwardYaw": -101.13,
   "class": "AdjacentPanorama",
   "yaw": 104.24,
   "distance": 1,
   "panorama": "this.panorama_F613B268_FD01_A4F4_41D0_C7F28F111199"
  },
  {
   "backwardYaw": 24.95,
   "class": "AdjacentPanorama",
   "yaw": -132.72,
   "distance": 1,
   "panorama": "this.panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A"
  },
  {
   "panorama": "this.panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "panorama_F617986F_FD01_E4CC_41E0_C238A8477456",
 "hfovMin": "150%",
 "label": "Balcony Corner Left",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_EE19F693_FD00_6C54_41EF_776C69199A8C"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -105.69,
   "class": "AdjacentPanorama",
   "yaw": 97.55,
   "distance": 1,
   "panorama": "this.panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07",
 "hfovMin": "150%",
 "label": "Balcony Center",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_E9B56E80_FD00_7C34_41ED_619D62FB3875",
  "this.overlay_E8E1EAFD_FD00_A5CC_41E4_9CB9B20D3B80"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -100.22,
   "class": "AdjacentPanorama",
   "yaw": 109.71,
   "distance": 1,
   "panorama": "this.panorama_F61719CA_FD01_A434_41E7_DBDD14D07503"
  },
  {
   "panorama": "this.panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist",
 "class": "PlayList",
 "items": [
  {
   "camera": "this.panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 0, 1)",
   "media": "this.panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9"
  },
  {
   "camera": "this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 1, 2)",
   "media": "this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8"
  },
  {
   "camera": "this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 2, 3)",
   "media": "this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF"
  },
  {
   "camera": "this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 3, 4)",
   "media": "this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1"
  },
  {
   "camera": "this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 4, 5)",
   "media": "this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7"
  },
  {
   "camera": "this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 5, 6)",
   "media": "this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4"
  },
  {
   "camera": "this.panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 6, 7)",
   "media": "this.panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F"
  },
  {
   "camera": "this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 7, 8)",
   "media": "this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6"
  },
  {
   "camera": "this.panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 8, 9)",
   "media": "this.panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D"
  },
  {
   "camera": "this.panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 9, 10)",
   "media": "this.panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A"
  },
  {
   "camera": "this.panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 10, 11)",
   "media": "this.panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434"
  },
  {
   "camera": "this.panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 11, 12)",
   "media": "this.panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7"
  },
  {
   "camera": "this.panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 12, 13)",
   "media": "this.panorama_F600AB30_FD01_A454_41B3_FCD20F95281D"
  },
  {
   "camera": "this.panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 13, 14)",
   "media": "this.panorama_F613B268_FD01_A4F4_41D0_C7F28F111199"
  },
  {
   "camera": "this.panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 14, 15)",
   "media": "this.panorama_F61719CA_FD01_A434_41E7_DBDD14D07503"
  },
  {
   "camera": "this.panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 15, 16)",
   "media": "this.panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07"
  },
  {
   "camera": "this.panorama_F617986F_FD01_E4CC_41E0_C238A8477456_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 16, 17)",
   "media": "this.panorama_F617986F_FD01_E4CC_41E0_C238A8477456"
  },
  {
   "camera": "this.panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 17, 18)",
   "media": "this.panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9"
  },
  {
   "camera": "this.panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 18, 19)",
   "media": "this.panorama_F617375A_FD01_ECD4_41E0_889483F1FB53"
  },
  {
   "camera": "this.panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 19, 20)",
   "media": "this.panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8"
  },
  {
   "camera": "this.panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 20, 21)",
   "media": "this.panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5"
  },
  {
   "camera": "this.panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 21, 22)",
   "media": "this.panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F"
  },
  {
   "camera": "this.panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 22, 0)",
   "media": "this.panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A"
  }
 ]
},
{
 "id": "panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6",
 "hfovMin": "150%",
 "label": "House Center",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_E24B121C_FC07_E789_41D3_BECEBD1E169E",
  "this.overlay_EFA6F45C_FC04_2389_41D8_36D89086CC86"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -13.9,
   "class": "AdjacentPanorama",
   "yaw": -102.38,
   "distance": 1,
   "panorama": "this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4"
  },
  {
   "backwardYaw": -90.77,
   "class": "AdjacentPanorama",
   "yaw": 59.77,
   "distance": 1,
   "panorama": "this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "panorama_F617986F_FD01_E4CC_41E0_C238A8477456_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F6119C9D_FD01_9C4C_41C4_B78911211DFB",
 "automaticZoomSpeed": 10
},
{
 "id": "effect_0A30489F_1C86_6738_41A8_2722230A2E2F",
 "class": "FadeOutEffect",
 "duration": 100,
 "easing": "linear"
},
{
 "id": "panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F6112C9E_FD01_9C4C_41D8_9640E2FEC8C3",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434",
 "hfovMin": "150%",
 "label": "Balcony Storage Right Electrical",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_EA56CB87_FD00_A43C_41BA_4249F509FAC8"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -62.54,
   "class": "AdjacentPanorama",
   "yaw": -57.69,
   "distance": 1,
   "panorama": "this.panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "camera_E1A339DE_FF00_67CC_41D8_C174E778BFB1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.32,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E1A359DE_FF00_67CC_41C7_C9F95FA0DB19",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E1B399EA_FF00_67F4_41E1_04D63250BF49",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 77.62,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E1B3B9EA_FF00_67F4_41E1_8FD6151010F0",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_DE143A29_FF00_6474_41D9_4B9358B3150E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.72,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_DE142A29_FF00_6474_41C9_BB5A8605AF13",
 "automaticZoomSpeed": 10
},
{
 "rollOverItemLabelFontWeight": "normal",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "THUMBNAIL LIST"
 },
 "minHeight": 20,
 "left": "2%",
 "gap": 10,
 "rollOverItemBackgroundOpacity": 0,
 "scrollBarOpacity": 0,
 "right": "2%",
 "itemLabelTextDecoration": "none",
 "selectedItemLabelFontColor": "#FFFFFF",
 "paddingLeft": 14,
 "minWidth": 20,
 "paddingTop": 17,
 "itemThumbnailWidth": 240,
 "selectedItemBackgroundOpacity": 0.9,
 "itemThumbnailScaleMode": "fit_outside",
 "itemPaddingTop": 3,
 "selectedItemBorderSize": 3,
 "itemThumbnailOpacity": 1,
 "backgroundColor": [
  "#534741"
 ],
 "itemLabelFontColor": "#999999",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "itemPaddingBottom": 3,
 "itemLabelFontStyle": "normal",
 "itemBackgroundColorDirection": "vertical",
 "rollOverItemLabelFontColor": "#FFFFFF",
 "itemThumbnailShadow": false,
 "itemMode": "normal",
 "itemLabelFontWeight": "normal",
 "bottom": 120,
 "itemThumbnailHeight": 140,
 "layout": "horizontal",
 "selectedItemBorderColor": "#FFFFFF",
 "itemPaddingRight": 3,
 "selectedItemLabelFontWeight": "bold",
 "itemBorderRadius": 0,
 "propagateClick": false,
 "paddingRight": 14,
 "backgroundOpacity": 0.9,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingLeft": 3,
 "itemVerticalAlign": "middle",
 "class": "ThumbnailList",
 "scrollBarWidth": 5,
 "itemLabelFontFamily": "Arial",
 "itemOpacity": 1,
 "itemLabelGap": 8,
 "scrollBarMargin": 0,
 "id": "ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile",
 "height": 202,
 "itemBackgroundOpacity": 0,
 "playList": "this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist",
 "itemBackgroundColor": [],
 "selectedItemBackgroundColor": [
  "#534741"
 ],
 "borderRadius": 0,
 "itemBackgroundColorRatios": [],
 "backgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "verticalAlign": "top",
 "scrollBarColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "itemLabelFontSize": "18px",
 "itemLabelHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "horizontalAlign": "left",
 "selectedItemBackgroundColorRatios": [
  0.04
 ],
 "borderSize": 0
},
{
 "id": "camera_E53FBB49_FF00_6434_41E2_7A0C9AB62C29",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.1,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E53FAB49_FF00_6434_41ED_3748D9B1F3F4",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E5E81C29_FF00_9C74_41D7_820DAC88A733",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 98.47,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E57F0BA1_FF00_6474_41DC_E6EC2637AA13",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 49.52,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E57F3BA1_FF00_6474_41AE_0D565C629048",
 "automaticZoomSpeed": 10
},
{
 "id": "effect_3A451B34_1C82_9908_41AD_37B1C5A316C2",
 "class": "FadeOutEffect",
 "duration": 100,
 "easing": "linear"
},
{
 "id": "panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8",
 "hfovMin": "150%",
 "label": "Balcony Left Seats",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_ECB639D8_FD01_E7D4_41EA_60F9A5693539",
  "this.overlay_EC38005F_FD00_E4CC_41DD_BA0E5F749A8A"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -86.85,
   "class": "AdjacentPanorama",
   "yaw": 39.83,
   "distance": 1,
   "panorama": "this.panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5"
  },
  {
   "backwardYaw": 105.15,
   "class": "AdjacentPanorama",
   "yaw": -149.74,
   "distance": 1,
   "panorama": "this.panorama_F617375A_FD01_ECD4_41E0_889483F1FB53"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050",
 "class": "FadeInEffect",
 "duration": 100,
 "easing": "linear"
},
{
 "id": "panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F610AC9B_FD01_9C54_41CC_5D23C532C78A",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F96A9524_F3FF_EDB9_41DA_A4EC681E48B3",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E55F1B81_FF00_6434_41E6_20F15DCDC940",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 163.33,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E55F3B81_FF00_6434_41DD_13C9DA959E53",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E5364B33_FF00_6454_41D0_7313BC8C24A0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.66,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5366B33_FF00_6454_41D7_00F441316243",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E5216B1B_FF00_6454_41E5_F82000BCE723",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -155.05,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5219B1B_FF00_6454_41E9_42FF23C7788A",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E19089D2_FF00_67D4_41DF_A88BE6788A30",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.22,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E190D9D2_FF00_67D4_41C4_0FCF0D2530E9",
 "automaticZoomSpeed": 10
},
{
 "horizontalAlign": "center",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0,
 "minWidth": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile.png",
 "id": "IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile",
 "mode": "push",
 "height": 46,
 "rollOverIconURL": "skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile_rollover.png",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile_pressed.png",
 "verticalAlign": "middle",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "Zoom Out"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "width": 46
},
{
 "id": "panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -54.38,
  "pitch": -14.89
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E1D28A00_FF00_6434_41D1_7D39E03326A1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.12,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E1D2AA00_FF00_6434_41E9_F2DF1A2DA22E",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F97AF201_F3FC_277B_41E0_D223026486F8",
 "hfovMin": "150%",
 "label": "House Aisle Right Mid",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_E0E19C89_FC0B_DC8B_41A0_6D95052AF985",
  "this.overlay_E0B57054_FC04_2399_41D0_F04322820D71",
  "this.overlay_EF45A334_FC04_2599_41DA_9B6C3CEF1A40"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 59.77,
   "class": "AdjacentPanorama",
   "yaw": -90.77,
   "distance": 1,
   "panorama": "this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6"
  },
  {
   "backwardYaw": -81.53,
   "class": "AdjacentPanorama",
   "yaw": 119.85,
   "distance": 1,
   "panorama": "this.panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9"
  },
  {
   "backwardYaw": 10.18,
   "class": "AdjacentPanorama",
   "yaw": -41.03,
   "distance": 1,
   "panorama": "this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "panorama_F97AF201_F3FC_277B_41E0_D223026486F8_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F96AC523_F3FF_EDBF_41C0_DB94792CF772",
 "automaticZoomSpeed": 10
},
{
 "horizontalAlign": "center",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0,
 "minWidth": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile.png",
 "id": "IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile",
 "mode": "push",
 "height": 46,
 "rollOverIconURL": "skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile_rollover.png",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile_pressed.png",
 "verticalAlign": "middle",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "Left"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "width": 46
},
{
 "id": "panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A",
 "hfovMin": "150%",
 "label": "Balcony Rear Door Right",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_F251CED0_FD00_BDD4_41A6_11C88567FA18",
  "this.overlay_F23F748D_FD00_6C4C_41E3_7141765605D8",
  "this.overlay_E47203BF_FF01_A44C_41B1_6AF33018E204"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 110.32,
   "class": "AdjacentPanorama",
   "yaw": -156.26,
   "distance": 1,
   "panorama": "this.panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9"
  },
  {
   "backwardYaw": -132.72,
   "class": "AdjacentPanorama",
   "yaw": 24.95,
   "distance": 1,
   "panorama": "this.panorama_F61719CA_FD01_A434_41E7_DBDD14D07503"
  },
  {
   "backwardYaw": 144.03,
   "class": "AdjacentPanorama",
   "yaw": -100.22,
   "distance": 1,
   "panorama": "this.panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "camera_E18089C5_FF00_643C_41E1_B824679A970E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 79.78,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E180B9C5_FF00_643C_41E4_A8AFBFB3944F",
 "automaticZoomSpeed": 10
},
{
 "horizontalAlign": "center",
 "toolTipOpacity": 1,
 "minHeight": 1,
 "propagateClick": false,
 "toolTipFontWeight": "normal",
 "backgroundOpacity": 0,
 "minWidth": 1,
 "toolTipShadowHorizontalLength": 0,
 "toolTip": "Fullscreen",
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile.png",
 "toolTipBorderRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "toolTipBorderSize": 1,
 "toolTipShadowSpread": 0,
 "toolTipPaddingLeft": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipDisplayTime": 600,
 "toolTipBorderColor": "#767676",
 "id": "IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile",
 "toolTipFontFamily": "Arial",
 "mode": "toggle",
 "height": 92,
 "shadow": false,
 "borderRadius": 0,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "width": 92,
 "maxWidth": 92,
 "toolTipTextShadowOpacity": 0,
 "maxHeight": 92,
 "paddingBottom": 0,
 "toolTipFontColor": "#606060",
 "transparencyActive": true,
 "verticalAlign": "middle",
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "toolTipPaddingRight": 6,
 "data": {
  "name": "fullscreen"
 },
 "toolTipFontStyle": "normal",
 "cursor": "hand",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0
},
{
 "id": "camera_E5A56BCE_FF00_9BCC_41ED_CFC7099ECF42",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -35.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5A59BCE_FF00_9BCC_41EB_16EED0000A11",
 "automaticZoomSpeed": 10
},
{
 "minHeight": 1,
 "left": "25%",
 "propagateClick": false,
 "gap": 0,
 "backgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "right": "25%",
 "paddingLeft": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "id": "Container_129084CF_1C83_AF18_418C_2D8031993BE6_mobile",
 "height": "100%",
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile",
  "this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile",
  "this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile",
  "this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile",
  "this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile",
  "this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile"
 ],
 "shadow": false,
 "borderRadius": 0,
 "visible": false,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "borderSize": 0,
 "contentOpaque": false,
 "top": "0%",
 "paddingTop": 0,
 "data": {
  "name": "Center"
 },
 "layout": "horizontal",
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0
},
{
 "id": "panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F",
 "hfovMin": "150%",
 "label": "House Rear Door Left",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_E1A9AD30_FC04_FD99_41CC_659E0AA8F115",
  "this.overlay_F2CF90A1_FD03_E474_41E6_AEDB5770C761",
  "this.overlay_F2DEB477_FD00_ACDC_41D5_FF7654E18A21"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 67.29,
   "class": "AdjacentPanorama",
   "yaw": -84.68,
   "distance": 1,
   "panorama": "this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4"
  },
  {
   "panorama": "this.panorama_F617375A_FD01_ECD4_41E0_889483F1FB53",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "camera_E5827BAB_FF00_6474_41B6_9FD6071A3F6E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -32.66,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5826BAB_FF00_6474_41C6_E8BDDCD34102",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E524EB0E_FF00_644C_41E3_886A98A2E003",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.87,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5251B0E_FF00_644C_41D3_143E7709F82F",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1",
 "hfovMin": "150%",
 "label": "House Pit Center",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_EFBED560_FC0C_2DB9_41D2_B026516536F6",
  "this.overlay_E036B0A6_FC0C_24B9_41EE_A42411B6EBFC"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -7.59,
   "class": "AdjacentPanorama",
   "yaw": 147.34,
   "distance": 1,
   "panorama": "this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7"
  },
  {
   "backwardYaw": 94.34,
   "class": "AdjacentPanorama",
   "yaw": 2.28,
   "distance": 1,
   "panorama": "this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "camera_E51B7AF3_FF00_65D4_41E3_32C23B2BD7A1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 15.08,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E51B6AF3_FF00_65D4_41D1_AF88BA823D9F",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E58B4BB5_FF00_645C_41B9_41AE94F8E76A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -69.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F96A1524_F3FF_EDB9_41C5_D3BB58D1D028",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4",
 "hfovMin": "150%",
 "label": "House Aisle Left Mid",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_E09097AE_FC04_2C89_4178_26C8A6424056",
  "this.overlay_E0533B8A_FC04_2489_41D7_2EA903729875",
  "this.overlay_E10C9925_FC04_65BB_41E8_FB8136945B33"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 88.78,
   "class": "AdjacentPanorama",
   "yaw": -130.48,
   "distance": 1,
   "panorama": "this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7"
  },
  {
   "backwardYaw": -84.68,
   "class": "AdjacentPanorama",
   "yaw": 67.29,
   "distance": 1,
   "panorama": "this.panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F"
  },
  {
   "backwardYaw": -102.38,
   "class": "AdjacentPanorama",
   "yaw": -13.9,
   "distance": 1,
   "panorama": "this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "camera_E5E4DC1E_FF00_9C4C_41D3_6852A5948FD1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -120.23,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5E4CC1E_FF00_9C4C_41DE_CBAD3BE7FEBF",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F96AB523_F3FF_EDBF_41D4_5CF61DF00B0E",
 "automaticZoomSpeed": 10
},
{
 "horizontalAlign": "center",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0,
 "minWidth": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile.png",
 "id": "IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile",
 "mode": "toggle",
 "height": 92,
 "click": "if(!this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile.get('visible')){ this.setComponentVisibility(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile, true, 0, this.effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7, 'showEffect', false) } else { this.setComponentVisibility(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile, false, 0, this.effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5, 'hideEffect', false) }",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "borderSize": 0,
 "paddingTop": 0,
 "data": {
  "name": "Thumblist"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "width": 92
},
{
 "id": "camera_E52D2B27_FF00_647C_41E3_91FEE97BEF58",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.41,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E52D5B27_FF00_647C_41EE_0DC3364F5B20",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A",
 "hfovMin": "150%",
 "label": "Balcony Storage Right 3",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_EA86CDC3_FD00_BC34_41E5_7B7F522D4CA3",
  "this.overlay_E4FBF985_FD07_E43C_41D3_88EA9FA12E69"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -24.57,
   "class": "AdjacentPanorama",
   "yaw": 104.24,
   "distance": 1,
   "panorama": "this.panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D"
  },
  {
   "backwardYaw": -165.23,
   "class": "AdjacentPanorama",
   "yaw": -116.32,
   "distance": 1,
   "panorama": "this.panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "horizontalAlign": "center",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile.png",
 "id": "IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile",
 "mode": "push",
 "height": 92,
 "shadow": false,
 "borderRadius": 0,
 "width": 92,
 "maxWidth": 92,
 "maxHeight": 92,
 "paddingBottom": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "borderSize": 0,
 "paddingTop": 0,
 "data": {
  "name": "VR"
 },
 "cursor": "hand",
 "paddingRight": 0
},
{
 "id": "camera_E5699B96_FF00_645C_41D7_840DCCEAB236",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -96.72,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5698B96_FF00_645C_41EA_A5B292BC5E29",
 "automaticZoomSpeed": 10
},
{
 "horizontalAlign": "center",
 "data": {
  "name": "previous"
 },
 "minHeight": 1,
 "left": "2%",
 "propagateClick": false,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile.png",
 "id": "IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile",
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, -1)",
 "shadow": false,
 "borderRadius": 0,
 "width": 92,
 "maxWidth": 92,
 "visible": false,
 "maxHeight": 92,
 "paddingBottom": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "borderSize": 0,
 "top": "35%",
 "paddingTop": 0,
 "bottom": "35%",
 "cursor": "hand",
 "paddingRight": 0
},
{
 "id": "panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F6106C9C_FD01_9C4C_41E3_641D6D10FE8C",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E5C46BF9_FF00_9BD4_41D6_1AFB405C2882",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 117.46,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5C49BF9_FF00_9BD4_41D1_43ABCFC17321",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_DE664A5F_FF00_64CC_41BA_49974B48439E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 122.31,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_DE669A5F_FF00_64CC_41EF_4D974EBA0544",
 "automaticZoomSpeed": 10
},
{
 "horizontalAlign": "center",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0,
 "minWidth": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile.png",
 "id": "IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile",
 "mode": "push",
 "height": 46,
 "rollOverIconURL": "skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile_rollover.png",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile_pressed.png",
 "verticalAlign": "middle",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "Right"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "width": 46
},
{
 "id": "panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F612BC9E_FD01_9C4C_41C2_8360A12D5DCB",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F",
 "hfovMin": "150%",
 "label": "Balcony Right Seats",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_EDFC05C4_FD00_6C3C_41EC_B68110034B64",
  "this.overlay_ED5CE131_FD00_E454_41D5_3646743E2FA7"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 93.3,
   "class": "AdjacentPanorama",
   "yaw": -98.4,
   "distance": 1,
   "panorama": "this.panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5"
  },
  {
   "backwardYaw": -100.22,
   "class": "AdjacentPanorama",
   "yaw": 144.03,
   "distance": 1,
   "panorama": "this.panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "camera_E5427B5F_FF00_64CC_41DC_7D12F82BDFDF",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -60.15,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5426B5F_FF00_64CC_41E3_69BF6E26C63D",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF",
 "hfovMin": "150%",
 "label": "House Aisle Right Front",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_E001A4BA_FC0C_6C89_41E3_5F8AC1886613",
  "this.overlay_E0A98413_FC0D_E39F_41B6_F24E26505B93"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -41.03,
   "class": "AdjacentPanorama",
   "yaw": 10.18,
   "distance": 1,
   "panorama": "this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8"
  },
  {
   "backwardYaw": 2.28,
   "class": "AdjacentPanorama",
   "yaw": 94.34,
   "distance": 1,
   "panorama": "this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "mainPlayList",
 "class": "PlayList",
 "items": [
  {
   "camera": "this.panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9"
  },
  {
   "camera": "this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8"
  },
  {
   "camera": "this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF"
  },
  {
   "camera": "this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1"
  },
  {
   "camera": "this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7"
  },
  {
   "camera": "this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4"
  },
  {
   "camera": "this.panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F"
  },
  {
   "camera": "this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6"
  },
  {
   "camera": "this.panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D"
  },
  {
   "camera": "this.panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A"
  },
  {
   "camera": "this.panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434"
  },
  {
   "camera": "this.panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7"
  },
  {
   "camera": "this.panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_F600AB30_FD01_A454_41B3_FCD20F95281D"
  },
  {
   "camera": "this.panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_F613B268_FD01_A4F4_41D0_C7F28F111199"
  },
  {
   "camera": "this.panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_F61719CA_FD01_A434_41E7_DBDD14D07503"
  },
  {
   "camera": "this.panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07"
  },
  {
   "camera": "this.panorama_F617986F_FD01_E4CC_41E0_C238A8477456_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_F617986F_FD01_E4CC_41E0_C238A8477456"
  },
  {
   "camera": "this.panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9"
  },
  {
   "camera": "this.panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_F617375A_FD01_ECD4_41E0_889483F1FB53"
  },
  {
   "camera": "this.panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8"
  },
  {
   "camera": "this.panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5"
  },
  {
   "camera": "this.panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F"
  },
  {
   "camera": "this.panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
   "end": "this.trigger('tourEnded')",
   "media": "this.panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A"
  }
 ]
},
{
 "id": "effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7",
 "class": "FadeInEffect",
 "duration": 200,
 "easing": "linear"
},
{
 "horizontalAlign": "center",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundOpacity": 0,
 "minWidth": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile.png",
 "id": "IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile",
 "mode": "push",
 "height": 92,
 "click": "this.setComponentVisibility(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile, false, 0, this.effect_0A30489F_1C86_6738_41A8_2722230A2E2F, 'hideEffect', false); this.setComponentVisibility(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile, false, 0, this.effect_0A30489F_1C86_6738_41A8_2722230A2E2F, 'hideEffect', false); this.setComponentVisibility(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile, true, 0, this.effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050, 'showEffect', false); this.setComponentVisibility(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile, true, 0, this.effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050, 'showEffect', false); this.setComponentVisibility(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile, true, 0, this.effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050, 'showEffect', false)",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "borderSize": 0,
 "paddingTop": 0,
 "data": {
  "name": "Collapse"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "width": 92
},
{
 "id": "camera_E1E53A0A_FF00_6434_41EE_5D7486931F80",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.31,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E1E52A0A_FF00_6434_41E4_3EB910F1900E",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E2013C40_FF00_9C34_41E8_0845BF3166B1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -86.7,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E2012C40_FF00_9C34_41EE_1FD3D6D9495E",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F6101C9D_FD01_9C4C_41E9_3461D40B9B1B",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_DE475A49_FF00_6434_41EB_24F1812BE96A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -75.76,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_DE477A49_FF00_6434_41E3_F67900CEB49C",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D",
 "hfovMin": "150%",
 "label": "Balcony Storage Right 4",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_EA1AFF76_FD00_9CDC_41CB_4792BB4EC031"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 104.24,
   "class": "AdjacentPanorama",
   "yaw": -24.57,
   "distance": 1,
   "panorama": "this.panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5",
 "hfovMin": "150%",
 "label": "Balcony Center Seats",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_ED3D4D43_FD00_7C34_41E6_39833E356FE2",
  "this.overlay_EC93233F_FD00_A44C_419E_F33EEABADFC7"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 39.83,
   "class": "AdjacentPanorama",
   "yaw": -86.85,
   "distance": 1,
   "panorama": "this.panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8"
  },
  {
   "backwardYaw": -98.4,
   "class": "AdjacentPanorama",
   "yaw": 93.3,
   "distance": 1,
   "panorama": "this.panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "camera_E5AB6BDC_FF00_9BCC_41E6_9669AF35227F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -140.17,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5AB9BDC_FF00_9BCC_41E7_B0AFB89B66D8",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F6115C9D_FD01_9C4C_41DC_C91E1A31D65B",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E54C5B6A_FF00_64F4_41AB_28B875569C92",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 23.74,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E54C4B6A_FF00_64F4_41E0_9771752A62F7",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_F617375A_FD01_ECD4_41E0_889483F1FB53",
 "hfovMin": "150%",
 "label": "Balcony Rear Door Left",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_t.jpg",
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/d/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/d/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/d/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/r/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/r/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/r/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/b/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/b/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/b/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/l/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/l/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/l/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/f/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/f/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/f/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/u/0/{row}_{column}.jpg"
     },
     {
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/u/1/{row}_{column}.jpg"
     },
     {
      "width": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0/u/2/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_EFFC9CBD_FD00_FC4C_41E5_D8878DC5CFAC",
  "this.overlay_EFA14652_FD00_ACD4_41ED_402F3884D0F9",
  "this.overlay_E562D022_FF00_A474_41E3_9CDE2A0664DC"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -149.74,
   "class": "AdjacentPanorama",
   "yaw": 105.15,
   "distance": 1,
   "panorama": "this.panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8"
  },
  {
   "panorama": "this.panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 131.88,
   "class": "AdjacentPanorama",
   "yaw": -16.67,
   "distance": 1,
   "panorama": "this.panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9"
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "id": "panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_F612EC9E_FD01_9C4C_41EA_0AD3006A61DC",
 "automaticZoomSpeed": 10
},
{
 "id": "sequence_F96A5524_F3FF_EDB9_41C6_C86383A9C3AA",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_F6103C9C_FD01_9C4C_41E6_CB79C8148B97",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_F96A7524_F3FF_EDB9_41C1_E4BFC6E56535",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E53BCB54_FF00_64DC_41D5_FC18D629A0F1",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_F611BC9D_FD01_9C4C_41E3_E2F07CE24E41",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_EEEAC445_FD00_AC3C_41E6_60F43F6FCFF4",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F617986F_FD01_E4CC_41E0_C238A8477456, this.camera_E557FB75_FF00_64DC_41EE_49FA5425FA19); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -55.03,
   "yaw": -105.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.71,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F47548_FD00_6C34_41D9_9D11738DC249"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.69,
   "hfov": 11.71,
   "pitch": -55.03
  }
 ]
},
{
 "id": "overlay_E977DF67_FD01_BCFC_41EA_16DD377B99C9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F617375A_FD01_ECD4_41E0_889483F1FB53, this.camera_E55F1B81_FF00_6434_41E6_20F15DCDC940); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -40.45,
   "yaw": 131.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.54,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F59548_FD00_6C34_41BA_3E9AB59ABAB8"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.88,
   "hfov": 15.54,
   "pitch": -40.45
  }
 ]
},
{
 "id": "sequence_E526CB01_FF00_6434_41EC_C1700CFAB078",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E1F55A14_FF00_645C_41EE_BB98D1A0ED6D",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E5625B8B_FF00_6434_41EE_DEFE815CE7CE",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_DE565A54_FF00_64DC_41ED_1F4F2D6EE104",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_F6110C9E_FD01_9C4C_41ED_FB7DB1C27022",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_DE271A34_FF00_645C_41CF_64092ACCB27A",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_EBFF4A20_FD00_6474_41BD_EF450A4DF480",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F600AB30_FD01_A454_41B3_FCD20F95281D, this.camera_E51B7AF3_FF00_65D4_41E3_32C23B2BD7A1); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -39.54,
   "yaw": 83.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.75,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F83546_FD00_6C3C_41DC_85BC794966BD"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.28,
   "hfov": 15.75,
   "pitch": -39.54
  }
 ]
},
{
 "id": "overlay_EAF8FFD2_FD00_7BD4_41D1_F85718DCB342",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A, this.camera_E51C0AE5_FF00_65FC_41D4_F2A5C4B995CA); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -35.89,
   "yaw": -165.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.55,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F87546_FD00_6C3C_4192_40314DA9B046"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.23,
   "hfov": 16.55,
   "pitch": -35.89
  }
 ]
},
{
 "id": "overlay_EAAD5808_FD00_6434_41E0_1340C1A59493",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434, this.camera_DE664A5F_FF00_64CC_41BA_49974B48439E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 14.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "width": 223,
      "class": "ImageResourceLevel",
      "height": 225,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_1_HS_2_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "distance": 50,
   "pitch": -18.42,
   "yaw": -62.54
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.54,
   "hfov": 14.21,
   "pitch": -18.42
  }
 ]
},
{
 "id": "sequence_E5CBAC06_FF00_9C3C_41EA_FBB4B705DD34",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_F6108C9C_FD01_9C4C_41E6_0613FF270D47",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E557EB75_FF00_64DC_41CB_80D07DC61C48",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_DE040A1F_FF00_644C_41A4_3DBBB67179E7",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E2151C4B_FF00_9C34_41E2_FD40BDB96733",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_E2637034_FC0C_2399_41E2_F54203852C69",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4, this.camera_E57F0BA1_FF00_6474_41DC_E6EC2637AA13); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -47.13,
   "yaw": 88.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.09,
   "distance": 50,
   "image": "this.AnimatedImageResource_E31E4A6A_FC04_2789_41C2_60F69F581B89"
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.78,
   "hfov": 12.09,
   "pitch": -47.13
  }
 ]
},
{
 "id": "overlay_E0FD41C1_FC0C_24FB_41CA_B500E6933FAC",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1, this.camera_E5827BAB_FF00_6474_41B6_9FD6071A3F6E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -35.47,
   "yaw": -7.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.06,
   "distance": 50,
   "image": "this.AnimatedImageResource_E31E0A6B_FC04_278F_41E0_939881ABE0F0"
  }
 ],
 "data": {
  "label": "Arrow Blue Left-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0_HS_3_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.59,
   "hfov": 18.06,
   "pitch": -35.47
  }
 ]
},
{
 "id": "sequence_F611FC9D_FD01_9C4C_41D7_ED418A3658E6",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E5BECBEA_FF00_9BF4_41B2_30898C1891A4",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E1C229F5_FF00_67DC_41D2_FA50AAB5A7DE",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_E888F2A8_FD00_A474_41E8_F7C7AC6B6CE1",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F61719CA_FD01_A434_41E7_DBDD14D07503, this.camera_DE475A49_FF00_6434_41EB_24F1812BE96A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -32.55,
   "yaw": -101.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.22,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F68547_FD00_6C3C_41EE_6B209F89543C"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.13,
   "hfov": 17.22,
   "pitch": -32.55
  }
 ]
},
{
 "id": "overlay_E8176927_FD00_E47C_41DB_A49029FF7590",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F600AB30_FD01_A454_41B3_FCD20F95281D, this.camera_DE560A54_FF00_64DC_41C1_E98D7F0EE546); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 19.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "width": 298,
      "class": "ImageResourceLevel",
      "height": 264,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_1_HS_1_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "distance": 50,
   "pitch": -7.26,
   "yaw": -163.32
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.32,
   "hfov": 19.82,
   "pitch": -7.26
  }
 ]
},
{
 "id": "sequence_E51C3AE5_FF00_65FC_41E3_C86D433F2A0D",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_E80FDF13_FD0F_9C54_41D4_4011CDE93402",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F613B268_FD01_A4F4_41D0_C7F28F111199, this.camera_E5622B8B_FF00_6434_41EA_7491C7F28BE2); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -46.22,
   "yaw": -4.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.13,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F9F546_FD00_6C3C_41E4_801EF310318E"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.22,
   "hfov": 14.13,
   "pitch": -46.22
  }
 ]
},
{
 "id": "overlay_EB83EF3C_FD00_BC4C_41D7_0791A4CDFD3C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7, this.camera_E5699B96_FF00_645C_41D7_840DCCEAB236); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 13.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "width": 214,
      "class": "ImageResourceLevel",
      "height": 246,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_1_HS_1_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "distance": 50,
   "pitch": 14.31,
   "yaw": -164.92
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 18,
      "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.92,
   "hfov": 13.92,
   "pitch": 14.31
  }
 ]
},
{
 "id": "sequence_F96A3524_F3FF_EDB9_41A1_41E723FF5A3D",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_DE371A3F_FF00_644C_41A3_7C5132EC029F",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E5327B3E_FF00_644C_41D1_933C7AD6574B",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_E00B0A65_FC0C_27BB_41DC_CE6BC287A8C0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8, this.camera_E5427B5F_FF00_64CC_41DC_7D12F82BDFDF); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -26.05,
   "yaw": -81.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.26,
   "distance": 50,
   "image": "this.AnimatedImageResource_E31ABA63_FC04_27BF_41EC_BF383DE2839D"
  }
 ],
 "data": {
  "label": "Arrow Transparent Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0_HS_3_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.53,
   "hfov": 8.26,
   "pitch": -26.05
  }
 ]
},
{
 "id": "overlay_F335378A_FD00_AC34_41E1_7F3088317445",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A, this.camera_E54C5B6A_FF00_64F4_41AB_28B875569C92); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -10.07,
   "yaw": 110.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 48.54,
   "distance": 50,
   "image": "this.AnimatedImageResource_E3FEC53D_FD00_6C4C_41EA_9E3F1014B512"
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_1_HS_5_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.32,
   "hfov": 48.54,
   "pitch": -10.07
  }
 ]
},
{
 "id": "overlay_F2015216_FD00_645C_41E1_4095E74BAC56",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "pitch": 4.86,
   "yaw": 112.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 68.26,
   "image": {
    "levels": [
     {
      "width": 1023,
      "class": "ImageResourceLevel",
      "height": 192,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0_HS_6_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "distance": 50
  }
 ],
 "data": {
  "label": "Jump up to the balcony"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0_HS_6_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.33,
   "hfov": 68.26,
   "pitch": 4.86
  }
 ]
},
{
 "id": "sequence_E5D19C13_FF00_9C54_41E6_B3C5030ED388",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E5FFAC35_FF00_9C5C_41CF_6AAC90545044",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E59E9BC1_FF00_6434_41E9_1A18E58805C4",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_F6117C9D_FD01_9C4C_41D6_1318978E4967",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_F611DC9D_FD01_9C4C_41E9_D0C892858A53",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_E97B2E6C_FD00_BCCC_41CF_4F3A541E8B64",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A, this.camera_E5216B1B_FF00_6454_41E5_F82000BCE723); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -39.54,
   "yaw": -132.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.75,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F60547_FD00_6C3C_41E8_C3206123616C"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.72,
   "hfov": 15.75,
   "pitch": -39.54
  }
 ]
},
{
 "id": "overlay_E86AF7A8_FD00_AC74_41EA_80BC5C224305",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07, this.camera_E526DB01_FF00_6434_41B9_B05FE67EC401); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -41.05,
   "yaw": -100.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.4,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F67547_FD00_6C3C_41CE_97F1493272EC"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.22,
   "hfov": 15.4,
   "pitch": -41.05
  }
 ]
},
{
 "id": "overlay_E80997CA_FD03_AC34_4185_4CCA690480CC",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F613B268_FD01_A4F4_41D0_C7F28F111199, this.camera_E524EB0E_FF00_644C_41E3_886A98A2E003); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -48.35,
   "yaw": 104.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.57,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F7A547_FD00_6C3C_41E0_2335854D52FE"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.24,
   "hfov": 13.57,
   "pitch": -48.35
  }
 ]
},
{
 "id": "overlay_E8855BCC_FD03_BBCC_41EA_324B269398C3",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -41.05,
   "yaw": -100.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.4,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F71548_FD00_6C34_41E6_CEB119B927F5"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_1_HS_3_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.22,
   "hfov": 15.4,
   "pitch": -41.05
  }
 ]
},
{
 "id": "overlay_EE19F693_FD00_6C54_41EF_776C69199A8C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9, this.camera_E1E53A0A_FF00_6434_41EE_5D7486931F80); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -38.32,
   "yaw": 97.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.02,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F4E548_FD00_6C34_41CF_E58563F58677"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.55,
   "hfov": 16.02,
   "pitch": -38.32
  }
 ]
},
{
 "id": "overlay_E9B56E80_FD00_7C34_41ED_619D62FB3875",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 16.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "width": 305,
      "class": "ImageResourceLevel",
      "height": 185,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_1_HS_0_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "distance": 100,
   "pitch": -36.5,
   "yaw": -119.05
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -119.05,
   "hfov": 16.42,
   "pitch": -36.5
  }
 ]
},
{
 "id": "overlay_E8E1EAFD_FD00_A5CC_41E4_9CB9B20D3B80",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F61719CA_FD01_A434_41E7_DBDD14D07503, this.camera_E18089C5_FF00_643C_41E1_B824679A970E); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 15.47,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "width": 305,
      "class": "ImageResourceLevel",
      "height": 185,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_1_HS_1_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "distance": 100,
   "pitch": -40.75,
   "yaw": 109.71
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F7FF2125_FD01_E47C_41E5_7D37F254AD07_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.71,
   "hfov": 15.47,
   "pitch": -40.75
  }
 ]
},
{
 "id": "overlay_E24B121C_FC07_E789_41D3_BECEBD1E169E",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4, this.camera_E53FBB49_FF00_6434_41E2_7A0C9AB62C29); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -27.38,
   "yaw": -102.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.04,
   "distance": 50,
   "image": "this.AnimatedImageResource_E31DEA6C_FC04_2789_41E0_A522F9C5E0FA"
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.38,
   "hfov": 21.04,
   "pitch": -27.38
  }
 ]
},
{
 "id": "overlay_EFA6F45C_FC04_2389_41D8_36D89086CC86",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8, this.camera_E53BDB54_FF00_64DC_41E4_4C2E3A582B34); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -33.38,
   "yaw": 59.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.35,
   "distance": 50,
   "image": "this.AnimatedImageResource_E31DBA6C_FC04_2789_41E2_71896F532B0A"
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0_HS_3_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 59.77,
   "hfov": 15.35,
   "pitch": -33.38
  }
 ]
},
{
 "id": "sequence_F6119C9D_FD01_9C4C_41C4_B78911211DFB",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_F6112C9E_FD01_9C4C_41D8_9640E2FEC8C3",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_EA56CB87_FD00_A43C_41BA_4249F509FAC8",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7, this.camera_E5C46BF9_FF00_9BD4_41D6_1AFB405C2882); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -43.18,
   "yaw": -57.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.89,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F8D546_FD00_6C3C_41DC_F5497EE8F112"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.69,
   "hfov": 14.89,
   "pitch": -43.18
  }
 ]
},
{
 "id": "sequence_E1A359DE_FF00_67CC_41C7_C9F95FA0DB19",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E1B3B9EA_FF00_67F4_41E1_8FD6151010F0",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_DE142A29_FF00_6474_41C9_BB5A8605AF13",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E53FAB49_FF00_6434_41ED_3748D9B1F3F4",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E57F3BA1_FF00_6474_41AE_0D565C629048",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_ECB639D8_FD01_E7D4_41EA_60F9A5693539",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F617375A_FD01_ECD4_41E0_889483F1FB53, this.camera_DE36FA3F_FF00_644C_41E4_39FE3B9E2BF4); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -55.03,
   "yaw": -149.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.71,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F4254E_FD00_6CCC_41C7_7B4D587BF930"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.74,
   "hfov": 11.71,
   "pitch": -55.03
  }
 ]
},
{
 "id": "overlay_EC38005F_FD00_E4CC_41DD_BA0E5F749A8A",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5, this.camera_DE26EA34_FF00_645C_41ED_66C69FF12C65); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -54.73,
   "yaw": 39.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.79,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F5954F_FD00_6CCC_41C3_7057D393F0E7"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.83,
   "hfov": 11.79,
   "pitch": -54.73
  }
 ]
},
{
 "id": "sequence_F610AC9B_FD01_9C54_41CC_5D23C532C78A",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_F96A9524_F3FF_EDB9_41DA_A4EC681E48B3",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E55F3B81_FF00_6434_41DD_13C9DA959E53",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E5366B33_FF00_6454_41D7_00F441316243",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E5219B1B_FF00_6454_41E9_42FF23C7788A",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E190D9D2_FF00_67D4_41C4_0FCF0D2530E9",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E1D2AA00_FF00_6434_41E9_F2DF1A2DA22E",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_E0E19C89_FC0B_DC8B_41A0_6D95052AF985",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9, this.camera_E5E81C29_FF00_9C74_41D7_820DAC88A733); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -19.86,
   "yaw": 119.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.57,
   "distance": 50,
   "image": "this.AnimatedImageResource_E319FA69_FC04_278B_41D1_3E3101F37860"
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0_HS_4_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.85,
   "hfov": 8.57,
   "pitch": -19.86
  }
 ]
},
{
 "id": "overlay_E0B57054_FC04_2399_41D0_F04322820D71",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF, this.camera_E5FFBC35_FF00_9C5C_41DF_33AA18A27787); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -22.14,
   "yaw": -41.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.44,
   "distance": 50,
   "image": "this.AnimatedImageResource_E3184A69_FC04_278B_41B7_497F08B3D943"
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0_HS_5_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.03,
   "hfov": 8.44,
   "pitch": -22.14
  }
 ]
},
{
 "id": "overlay_EF45A334_FC04_2599_41DA_9B6C3CEF1A40",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6, this.camera_E5E4DC1E_FF00_9C4C_41D3_6852A5948FD1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -28.94,
   "yaw": -90.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.27,
   "distance": 50,
   "image": "this.AnimatedImageResource_E3180A69_FC04_278B_41E9_F8E676B327E9"
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0_HS_6_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.77,
   "hfov": 6.27,
   "pitch": -28.94
  }
 ]
},
{
 "id": "sequence_F96AC523_F3FF_EDBF_41C0_DB94792CF772",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_F251CED0_FD00_BDD4_41A6_11C88567FA18",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F, this.camera_E5A56BCE_FF00_9BCC_41ED_CFC7099ECF42); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -41.05,
   "yaw": -100.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.4,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F25550_FD00_6CD4_41DA_134818FDF78F"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.22,
   "hfov": 15.4,
   "pitch": -41.05
  }
 ]
},
{
 "id": "overlay_F23F748D_FD00_6C4C_41E3_7141765605D8",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F61719CA_FD01_A434_41E7_DBDD14D07503, this.camera_E59E6BC1_FF00_6434_41C9_5480F84BFC77); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -28.3,
   "yaw": 24.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.98,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F38550_FD00_6CD4_41BE_FBC784899254"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.95,
   "hfov": 17.98,
   "pitch": -28.3
  }
 ]
},
{
 "id": "overlay_E47203BF_FF01_A44C_41B1_6AF33018E204",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9, this.camera_E58B4BB5_FF00_645C_41B9_41AE94F8E76A); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.99,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0_HS_2_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "distance": 50,
   "pitch": -8.78,
   "yaw": -156.26
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_0_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -156.26,
   "hfov": 9.99,
   "pitch": -8.78
  }
 ]
},
{
 "id": "sequence_E180B9C5_FF00_643C_41E4_A8AFBFB3944F",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E5A59BCE_FF00_9BCC_41EB_16EED0000A11",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_E1A9AD30_FC04_FD99_41CC_659E0AA8F115",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4, this.camera_E5324B3E_FF00_644C_41BB_FD144200D77F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -42.27,
   "yaw": -84.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.19,
   "distance": 50,
   "image": "this.AnimatedImageResource_E31D0A6B_FC04_278F_41D8_FB443A0E59CD"
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.68,
   "hfov": 26.19,
   "pitch": -42.27
  }
 ]
},
{
 "id": "overlay_F2CF90A1_FD03_E474_41E6_AEDB5770C761",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "pitch": -4.78,
   "yaw": 83.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 68.27,
   "image": {
    "levels": [
     {
      "width": 1023,
      "class": "ImageResourceLevel",
      "height": 453,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_1_HS_3_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "distance": 50
  }
 ],
 "data": {
  "label": "Jump up to the balcony"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_1_HS_3_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.47,
   "hfov": 68.27,
   "pitch": -4.78
  }
 ]
},
{
 "id": "overlay_F2DEB477_FD00_ACDC_41D5_FF7654E18A21",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -16.14,
   "yaw": 80.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 47.36,
   "distance": 50,
   "image": "this.AnimatedImageResource_E3FAA544_FD00_6C3C_41A1_10C6D3419B29"
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_1_HS_4_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.55,
   "hfov": 47.36,
   "pitch": -16.14
  }
 ]
},
{
 "id": "sequence_E5826BAB_FF00_6474_41C6_E8BDDCD34102",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E5251B0E_FF00_644C_41D3_143E7709F82F",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_EFBED560_FC0C_2DB9_41D2_B026516536F6",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF, this.camera_E5364B33_FF00_6454_41D0_7313BC8C24A0); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -24.95,
   "yaw": 2.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.27,
   "distance": 50,
   "image": "this.AnimatedImageResource_E31F0A6A_FC04_2789_41E9_596F6808BB48"
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.28,
   "hfov": 27.27,
   "pitch": -24.95
  }
 ]
},
{
 "id": "overlay_E036B0A6_FC0C_24B9_41EE_A42411B6EBFC",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7, this.camera_E52D2B27_FF00_647C_41E3_91FEE97BEF58); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -46.48,
   "yaw": 147.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.53,
   "distance": 50,
   "image": "this.AnimatedImageResource_E31FDA6A_FC04_2789_41D7_8B676D403A35"
  }
 ],
 "data": {
  "label": "Arrow Blue Right-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0_HS_3_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 147.34,
   "hfov": 16.53,
   "pitch": -46.48
  }
 ]
},
{
 "id": "sequence_E51B6AF3_FF00_65D4_41D1_AF88BA823D9F",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_F96A1524_F3FF_EDB9_41C5_D3BB58D1D028",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_E09097AE_FC04_2C89_4178_26C8A6424056",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7, this.camera_E19089D2_FF00_67D4_41DF_A88BE6788A30); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -32.39,
   "yaw": -130.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.91,
   "distance": 50,
   "image": "this.AnimatedImageResource_E31EEA6B_FC04_278F_41C6_0AD493514C65"
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0_HS_3_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -130.48,
   "hfov": 25.91,
   "pitch": -32.39
  }
 ]
},
{
 "id": "overlay_E0533B8A_FC04_2489_41D7_2EA903729875",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F, this.camera_E1A339DE_FF00_67CC_41D8_C174E778BFB1); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -25.1,
   "yaw": 67.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.81,
   "distance": 50,
   "image": "this.AnimatedImageResource_E31EAA6B_FC04_278F_41D9_B58DCB65D517"
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0_HS_4_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.29,
   "hfov": 19.81,
   "pitch": -25.1
  }
 ]
},
{
 "id": "overlay_E10C9925_FC04_65BB_41E8_FB8136945B33",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6, this.camera_E1B399EA_FF00_67F4_41E1_04D63250BF49); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -39.3,
   "yaw": -13.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.75,
   "distance": 50,
   "image": "this.AnimatedImageResource_E31E8A6B_FC04_278F_41E2_F28613F25147"
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0_HS_5_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.9,
   "hfov": 17.75,
   "pitch": -39.3
  }
 ]
},
{
 "id": "sequence_E5E4CC1E_FF00_9C4C_41DE_CBAD3BE7FEBF",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_F96AB523_F3FF_EDBF_41D4_5CF61DF00B0E",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E52D5B27_FF00_647C_41EE_0DC3364F5B20",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_EA86CDC3_FD00_BC34_41E5_7B7F522D4CA3",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7, this.camera_E5D16C13_FF00_9C54_41C2_C5876746E17F); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -24.35,
   "yaw": -116.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.61,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3FB1545_FD00_6C3C_41E2_462E776257E4"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.32,
   "hfov": 18.61,
   "pitch": -24.35
  }
 ]
},
{
 "id": "overlay_E4FBF985_FD07_E43C_41D3_88EA9FA12E69",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D, this.camera_E5CBBC06_FF00_9C3C_41E8_3B31E453C89C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -48.35,
   "yaw": 104.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.57,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3FB5545_FD00_6C3C_41E1_665D8479B9A9"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.24,
   "hfov": 13.57,
   "pitch": -48.35
  }
 ]
},
{
 "id": "sequence_E5698B96_FF00_645C_41EA_A5B292BC5E29",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_F6106C9C_FD01_9C4C_41E3_641D6D10FE8C",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E5C49BF9_FF00_9BD4_41D1_43ABCFC17321",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_DE669A5F_FF00_64CC_41EF_4D974EBA0544",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_F612BC9E_FD01_9C4C_41C2_8360A12D5DCB",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_EDFC05C4_FD00_6C3C_41EC_B68110034B64",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A, this.camera_E214EC4B_FF00_9C34_41CA_00EF32C0AC46); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -50.78,
   "yaw": 144.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.92,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F2954F_FD00_6CCC_41EB_6763D62A0674"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144.03,
   "hfov": 12.92,
   "pitch": -50.78
  }
 ]
},
{
 "id": "overlay_ED5CE131_FD00_E454_41D5_3646743E2FA7",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5, this.camera_E2013C40_FF00_9C34_41E8_0845BF3166B1); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -47.13,
   "yaw": -98.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.9,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F2F54F_FD00_6CCC_41EF_ABE401D3876A"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.4,
   "hfov": 13.9,
   "pitch": -47.13
  }
 ]
},
{
 "id": "sequence_E5426B5F_FF00_64CC_41E3_69BF6E26C63D",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_E001A4BA_FC0C_6C89_41E3_5F8AC1886613",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8, this.camera_DE041A1F_FF00_644C_41E6_5293EA290704); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -25.48,
   "yaw": 10.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.23,
   "distance": 50,
   "image": "this.AnimatedImageResource_E318EA69_FC04_278B_41DD_CB08168690C6"
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.18,
   "hfov": 8.23,
   "pitch": -25.48
  }
 ]
},
{
 "id": "overlay_E0A98413_FC0D_E39F_41B6_F24E26505B93",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1, this.camera_DE143A29_FF00_6474_41D9_4B9358B3150E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -26.22,
   "yaw": 94.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.02,
   "distance": 100,
   "image": "this.AnimatedImageResource_E318BA6A_FC04_2789_41D6_B34DA3AE6EC5"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.34,
   "hfov": 12.02,
   "pitch": -26.22
  }
 ]
},
{
 "id": "sequence_E1E52A0A_FF00_6434_41E4_3EB910F1900E",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E2012C40_FF00_9C34_41EE_1FD3D6D9495E",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_F6101C9D_FD01_9C4C_41E9_3461D40B9B1B",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_DE477A49_FF00_6434_41E3_F67900CEB49C",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_EA1AFF76_FD00_9CDC_41CB_4792BB4EC031",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A, this.camera_E1F53A14_FF00_645C_41E3_31E0B6CFF235); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -41.05,
   "yaw": -24.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.4,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3FBA545_FD00_6C3C_41EF_2CA5F6328004"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.57,
   "hfov": 15.4,
   "pitch": -41.05
  }
 ]
},
{
 "id": "overlay_ED3D4D43_FD00_7C34_41E6_39833E356FE2",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8, this.camera_E5AB6BDC_FF00_9BCC_41E6_9669AF35227F); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -31.64,
   "yaw": -86.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.39,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F5F54F_FD00_6CCC_4183_D807A4018F1F"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.85,
   "hfov": 17.39,
   "pitch": -31.64
  }
 ]
},
{
 "id": "overlay_EC93233F_FD00_A44C_419E_F33EEABADFC7",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F, this.camera_E5BEDBEA_FF00_9BF4_416C_21CE886193B2); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -30.12,
   "yaw": 93.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.67,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F5254F_FD00_6CCC_41E8_5F3D8E2EAD2F"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.3,
   "hfov": 17.67,
   "pitch": -30.12
  }
 ]
},
{
 "id": "sequence_E5AB9BDC_FF00_9BCC_41E7_B0AFB89B66D8",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_F6115C9D_FD01_9C4C_41DC_C91E1A31D65B",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "sequence_E54C4B6A_FF00_64F4_41E0_9771752A62F7",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "overlay_EFFC9CBD_FD00_FC4C_41E5_D8878DC5CFAC",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8, this.camera_E1C209F5_FF00_67DC_41E5_9BDF7F933A11); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -45.61,
   "yaw": 105.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.29,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F50549_FD00_6CCB_41D0_466E7F64FDA5"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.15,
   "hfov": 14.29,
   "pitch": -45.61
  }
 ]
},
{
 "id": "overlay_EFA14652_FD00_ACD4_41ED_402F3884D0F9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9, this.camera_E1D28A00_FF00_6434_41D1_7D39E03326A1); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "pitch": -37.41,
   "yaw": -16.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.22,
   "distance": 100,
   "image": "this.AnimatedImageResource_E3F4D54E_FD00_6CCC_41E8_A3EC431081CC"
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.67,
   "hfov": 16.22,
   "pitch": -37.41
  }
 ]
},
{
 "id": "overlay_E562D022_FF00_A474_41E3_9CDE2A0664DC",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0_HS_2_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "distance": 50,
   "pitch": -9.23,
   "yaw": -167.5
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_0_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.5,
   "hfov": 9.98,
   "pitch": -9.23
  }
 ]
},
{
 "id": "sequence_F612EC9E_FD01_9C4C_41EA_0AD3006A61DC",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F47548_FD00_6C34_41D9_9D11738DC249",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_1_HS_0_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F59548_FD00_6C34_41BA_3E9AB59ABAB8",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F7FF3FEF_FD01_FBCC_41DE_77C7C71B8BE9_1_HS_1_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F83546_FD00_6C3C_41DC_85BC794966BD",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_1_HS_0_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F87546_FD00_6C3C_4192_40314DA9B046",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F61563F4_FD01_ABDC_41B0_3DA1F3F6EDF7_1_HS_1_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E31E4A6A_FC04_2789_41C2_60F69F581B89",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200,
   "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0_HS_2_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E31E0A6B_FC04_278F_41E0_939881ABE0F0",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200,
   "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0_HS_3_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F68547_FD00_6C3C_41EE_6B209F89543C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F613B268_FD01_A4F4_41D0_C7F28F111199_1_HS_0_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F9F546_FD00_6C3C_41E4_801EF310318E",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F600AB30_FD01_A454_41B3_FCD20F95281D_1_HS_0_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E31ABA63_FC04_27BF_41EC_BF383DE2839D",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200,
   "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0_HS_3_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3FEC53D_FD00_6C4C_41EA_9E3F1014B512",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 780,
   "class": "ImageResourceLevel",
   "height": 1170,
   "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_1_HS_5_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F60547_FD00_6C3C_41E8_C3206123616C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_1_HS_0_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F67547_FD00_6C3C_41CE_97F1493272EC",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_1_HS_1_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F7A547_FD00_6C3C_41E0_2335854D52FE",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_1_HS_2_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F71548_FD00_6C34_41E6_CEB119B927F5",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F61719CA_FD01_A434_41E7_DBDD14D07503_1_HS_3_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F4E548_FD00_6C34_41CF_E58563F58677",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F617986F_FD01_E4CC_41E0_C238A8477456_1_HS_0_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E31DEA6C_FC04_2789_41E0_A522F9C5E0FA",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0_HS_2_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E31DBA6C_FC04_2789_41E2_71896F532B0A",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0_HS_3_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F8D546_FD00_6C3C_41DC_F5497EE8F112",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F7FF5C57_FD01_9CDC_41E4_0A99B6E7E434_1_HS_0_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F4254E_FD00_6CCC_41C7_7B4D587BF930",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_1_HS_0_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F5954F_FD00_6CCC_41C3_7057D393F0E7",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F600DEB4_FD01_9C5C_41E2_CD7CC9CF56D8_1_HS_1_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E319FA69_FC04_278B_41D1_3E3101F37860",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200,
   "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0_HS_4_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3184A69_FC04_278B_41B7_497F08B3D943",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200,
   "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0_HS_5_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3180A69_FC04_278B_41E9_F8E676B327E9",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200,
   "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0_HS_6_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F25550_FD00_6CD4_41DA_134818FDF78F",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_1_HS_0_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F38550_FD00_6CD4_41BE_FBC784899254",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F619A4BA_FD01_AC54_41E2_CC7D4ED4436A_1_HS_1_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E31D0A6B_FC04_278F_41D8_FB443A0E59CD",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 480,
   "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0_HS_1_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3FAA544_FD00_6C3C_41A1_10C6D3419B29",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 780,
   "class": "ImageResourceLevel",
   "height": 1170,
   "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_1_HS_4_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E31F0A6A_FC04_2789_41E9_596F6808BB48",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0_HS_2_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E31FDA6A_FC04_2789_41D7_8B676D403A35",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0_HS_3_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E31EEA6B_FC04_278F_41C6_0AD493514C65",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0_HS_3_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E31EAA6B_FC04_278F_41D9_B58DCB65D517",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0_HS_4_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E31E8A6B_FC04_278F_41E2_F28613F25147",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0_HS_5_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3FB1545_FD00_6C3C_41E2_462E776257E4",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_1_HS_0_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3FB5545_FD00_6C3C_41E1_665D8479B9A9",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F60ED4E8_FD00_6DF4_41E9_300B0F182E9A_1_HS_1_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F2954F_FD00_6CCC_41EB_6763D62A0674",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_1_HS_0_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F2F54F_FD00_6CCC_41EF_ABE401D3876A",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F600AD3F_FD01_BC4C_41E7_59C2633B5E3F_1_HS_1_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E318EA69_FC04_278B_41DD_CB08168690C6",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200,
   "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0_HS_1_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E318BA6A_FC04_2789_41D6_B34DA3AE6EC5",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200,
   "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0_HS_2_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3FBA545_FD00_6C3C_41EF_2CA5F6328004",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F159232E_FD00_A44C_41E0_4D2AF0AF5A1D_1_HS_0_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F5F54F_FD00_6CCC_4183_D807A4018F1F",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_1_HS_0_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F5254F_FD00_6CCC_41E8_5F3D8E2EAD2F",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F615B60F_FD01_AC4C_41ED_4F6E099AE4B5_1_HS_1_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F50549_FD00_6CCB_41D0_466E7F64FDA5",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_1_HS_0_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
},
{
 "id": "AnimatedImageResource_E3F4D54E_FD00_6CCC_41E8_A3EC431081CC",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110,
   "url": "media/panorama_F617375A_FD01_ECD4_41E0_889483F1FB53_1_HS_1_0.png"
  }
 ],
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24
}],
 "backgroundPreloadEnabled": true,
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0
};


	function HistoryData(playList) {
		this.playList = playList;
		this.list = [];
		this.pointer = -1;
	}

	HistoryData.prototype.add = function(index){
		if(this.pointer < this.list.length && this.list[this.pointer] == index) {
			return;
		}
		++this.pointer;
		this.list.splice(this.pointer, this.list.length - this.pointer, index);
	};

	HistoryData.prototype.back = function(){
		if(!this.canBack()) return;
		this.playList.set('selectedIndex', this.list[--this.pointer]);
	};

	HistoryData.prototype.forward = function(){
		if(!this.canForward()) return;
		this.playList.set('selectedIndex', this.list[++this.pointer]);
	};

	HistoryData.prototype.canBack = function(){
		return this.pointer > 0;
	};

	HistoryData.prototype.canForward = function(){
		return this.pointer >= 0 && this.pointer < this.list.length-1;
	};


	if(script.data == undefined)
		script.data = {};
	script.data["history"] = {};   

	TDV.PlayerAPI.defineScript(script);
})();
