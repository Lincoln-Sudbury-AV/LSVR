(function(){
	var script = {
 "definitions": [{
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "width": 46,
 "minWidth": 0,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile_rollover.png",
 "height": 46,
 "pressedIconURL": "skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile_pressed.png",
 "id": "IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile",
 "shadow": false,
 "transparencyActive": true,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "Zoom Out"
 },
 "paddingRight": 0,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "class": "FadeInEffect",
 "id": "effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050",
 "duration": 100,
 "easing": "linear"
},
{
 "class": "FadeOutEffect",
 "id": "effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5",
 "duration": 200,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 77.62,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E31E7783_FC04_2D7F_41D9_2672811FC495",
 "initialSequence": "this.sequence_E31E3783_FC04_2D7F_41E4_B901541E7270"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 98.47,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E4EBF7AA_FC04_2C89_41E5_879734C30E2D"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.23,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E34F2739_FC04_2D8B_41B7_CBC696463637",
 "initialSequence": "this.sequence_E34FC739_FC04_2D8B_41CA_F224E693164A"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "id": "panorama_F97AF201_F3FC_277B_41E0_D223026486F8",
 "label": "R0010092_20200115131717",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -90.77,
   "backwardYaw": 59.77,
   "distance": 1,
   "panorama": "this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 119.85,
   "backwardYaw": -81.53,
   "distance": 1,
   "panorama": "this.panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -41.03,
   "backwardYaw": 10.18,
   "distance": 1,
   "panorama": "this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF"
  }
 ],
 "overlays": [
  "this.overlay_E0E19C89_FC0B_DC8B_41A0_6D95052AF985",
  "this.overlay_E0B57054_FC04_2399_41D0_F04322820D71",
  "this.overlay_EF45A334_FC04_2599_41DA_9B6C3CEF1A40"
 ],
 "hfovMax": 130,
 "hfovMin": "150%",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_camera",
 "initialSequence": "this.sequence_F96A3524_F3FF_EDB9_41A1_41E723FF5A3D"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -60.15,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E33FE757_FC04_2D87_41D4_DEF32887965A",
 "initialSequence": "this.sequence_E33F8757_FC04_2D87_41EA_75357978A496"
},
{
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "width": 46,
 "minWidth": 0,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile_rollover.png",
 "height": 46,
 "pressedIconURL": "skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile_pressed.png",
 "id": "IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile",
 "shadow": false,
 "transparencyActive": true,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "Down"
 },
 "paddingRight": 0,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "id": "panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9",
 "label": "R0010091_20200115131429",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -81.53,
   "backwardYaw": 119.85,
   "distance": 1,
   "panorama": "this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8"
  }
 ],
 "overlays": [
  "this.overlay_E00B0A65_FC0C_27BB_41DC_CE6BC287A8C0",
  "this.overlay_E0F604B1_FC3C_EC9A_41EA_52A2B457D943"
 ],
 "hfovMax": 130,
 "hfovMin": "150%",
 "partial": false
},
{
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "width": 92,
 "minWidth": 0,
 "mode": "push",
 "height": 92,
 "id": "IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile",
 "click": "this.setComponentVisibility(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile, false, 0, this.effect_0A30489F_1C86_6738_41A8_2722230A2E2F, 'hideEffect', false); this.setComponentVisibility(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile, false, 0, this.effect_0A30489F_1C86_6738_41A8_2722230A2E2F, 'hideEffect', false); this.setComponentVisibility(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile, true, 0, this.effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050, 'showEffect', false); this.setComponentVisibility(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile, true, 0, this.effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050, 'showEffect', false); this.setComponentVisibility(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile, true, 0, this.effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050, 'showEffect', false)",
 "shadow": false,
 "transparencyActive": true,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "Collapse"
 },
 "paddingRight": 0,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "layout": "horizontal",
 "data": {
  "name": "Center"
 },
 "left": "25%",
 "scrollBarWidth": 10,
 "right": "25%",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "gap": 0,
 "id": "Container_129084CF_1C83_AF18_418C_2D8031993BE6_mobile",
 "minWidth": 1,
 "height": "100%",
 "children": [
  "this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile",
  "this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile",
  "this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile",
  "this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile",
  "this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile",
  "this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile"
 ],
 "shadow": false,
 "scrollBarColor": "#000000",
 "visible": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center"
},
{
 "itemLabelTextDecoration": "none",
 "rollOverItemBackgroundOpacity": 0,
 "data": {
  "name": "THUMBNAIL LIST"
 },
 "left": "2%",
 "rollOverItemLabelFontWeight": "normal",
 "right": "2%",
 "paddingLeft": 14,
 "class": "ThumbnailList",
 "backgroundColorDirection": "vertical",
 "itemLabelFontSize": "18px",
 "itemLabelFontWeight": "normal",
 "itemThumbnailScaleMode": "fit_outside",
 "selectedItemLabelFontWeight": "bold",
 "itemBackgroundOpacity": 0,
 "gap": 10,
 "itemPaddingBottom": 3,
 "itemLabelFontColor": "#999999",
 "backgroundColor": [
  "#534741"
 ],
 "itemPaddingTop": 3,
 "itemBackgroundColorDirection": "vertical",
 "shadow": false,
 "itemLabelFontFamily": "Arial",
 "itemThumbnailWidth": 240,
 "minHeight": 20,
 "itemPaddingRight": 3,
 "backgroundOpacity": 0.9,
 "bottom": 120,
 "paddingRight": 14,
 "itemVerticalAlign": "middle",
 "itemMode": "normal",
 "propagateClick": false,
 "layout": "horizontal",
 "itemLabelGap": 8,
 "itemOpacity": 1,
 "selectedItemLabelFontColor": "#FFFFFF",
 "selectedItemBackgroundColorRatios": [
  0.04
 ],
 "itemLabelFontStyle": "normal",
 "itemThumbnailBorderRadius": 0,
 "scrollBarWidth": 5,
 "itemBorderRadius": 0,
 "selectedItemBackgroundOpacity": 0.9,
 "scrollBarMargin": 0,
 "selectedItemBorderColor": "#FFFFFF",
 "itemThumbnailOpacity": 1,
 "borderRadius": 0,
 "playList": "this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist",
 "backgroundColorRatios": [
  0
 ],
 "itemPaddingLeft": 3,
 "itemBackgroundColor": [],
 "itemThumbnailShadow": false,
 "id": "ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile",
 "minWidth": 20,
 "height": 202,
 "scrollBarColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "itemLabelHorizontalAlign": "center",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "itemLabelPosition": "bottom",
 "itemBackgroundColorRatios": [],
 "itemThumbnailHeight": 140,
 "scrollBarOpacity": 0,
 "paddingTop": 17,
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "rollOverItemLabelFontColor": "#FFFFFF",
 "selectedItemBackgroundColor": [
  "#534741"
 ],
 "verticalAlign": "top",
 "selectedItemBorderSize": 3
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.1,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3408720_FC04_2DB9_41E2_7CAD7F03D3AA",
 "initialSequence": "this.sequence_E340A720_FC04_2DB9_41D6_F8F2FF5BBD75"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 49.52,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3B47665_FC04_2FBB_41E3_068D266E3CAE",
 "initialSequence": "this.sequence_E3B41665_FC04_2FBB_4195_C087860E5F51"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_camera",
 "initialSequence": "this.sequence_F96A5524_F3FF_EDB9_41C6_C86383A9C3AA"
},
{
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "width": 46,
 "minWidth": 0,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile_rollover.png",
 "height": 46,
 "pressedIconURL": "skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile_pressed.png",
 "id": "IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile",
 "shadow": false,
 "transparencyActive": true,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "Up"
 },
 "paddingRight": 0,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "minHeight": 1,
 "horizontalAlign": "center",
 "left": "2%",
 "maxWidth": 92,
 "iconURL": "skin/IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "width": 92,
 "id": "IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile",
 "minWidth": 1,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, -1)",
 "shadow": false,
 "visible": false,
 "maxHeight": 92,
 "transparencyActive": true,
 "borderSize": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "bottom": "35%",
 "paddingRight": 0,
 "paddingTop": 0,
 "top": "35%",
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "previous"
 }
},
{
 "class": "PanoramaPlayer",
 "buttonMoveRight": "this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer_mobile",
 "displayPlaybackBar": true,
 "id": "MainViewer_mobilePanoramaPlayer",
 "buttonZoomIn": "this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile",
 "buttonCardboardView": "this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile",
 "buttonMoveLeft": "this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile",
 "mouseControlMode": "drag_rotation",
 "buttonMoveDown": "this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile",
 "gyroscopeEnabled": true,
 "buttonZoomOut": "this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile",
 "touchControlMode": "drag_rotation",
 "buttonMoveUp": "this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile"
},
{
 "class": "FadeOutEffect",
 "id": "effect_3A451B34_1C82_9908_41AD_37B1C5A316C2",
 "duration": 100,
 "easing": "linear"
},
{
 "toolTipShadowOpacity": 1,
 "firstTransitionDuration": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipPaddingLeft": 6,
 "toolTipFontFamily": "Arial",
 "toolTipDisplayTime": 600,
 "toolTipShadowSpread": 0,
 "paddingLeft": 0,
 "class": "ViewerArea",
 "toolTipBorderRadius": 3,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": "1.11vmin",
 "progressLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "shadow": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontStyle": "normal",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "paddingRight": 0,
 "propagateClick": false,
 "vrPointerColor": "#FFFFFF",
 "vrPointerSelectionColor": "#FF6600",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingTop": 4,
 "toolTipTextShadowColor": "#000000",
 "progressBorderRadius": 0,
 "playbackBarOpacity": 1,
 "progressBarBorderRadius": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "progressBarBorderColor": "#000000",
 "borderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "width": "100%",
 "toolTipTextShadowOpacity": 0,
 "playbackBarBottom": 5,
 "transitionDuration": 500,
 "id": "MainViewer_mobile",
 "minWidth": 100,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipFontColor": "#606060",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "height": "100%",
 "toolTipPaddingRight": 6,
 "progressBackgroundOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBorderRadius": 0,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "progressRight": 0,
 "toolTipShadowColor": "#333333",
 "progressOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "progressBarBorderSize": 0,
 "transitionMode": "blending",
 "borderSize": 0,
 "progressBottom": 0,
 "playbackBarHeadShadowColor": "#000000",
 "paddingTop": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadow": true,
 "playbackBarHeight": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -54.38,
  "pitch": -14.89
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_camera"
},
{
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "width": 92,
 "minWidth": 0,
 "mode": "toggle",
 "height": 92,
 "id": "IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile",
 "click": "if(!this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile.get('visible')){ this.setComponentVisibility(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile, true, 0, this.effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7, 'showEffect', false) } else { this.setComponentVisibility(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile, false, 0, this.effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5, 'hideEffect', false) }",
 "shadow": false,
 "transparencyActive": true,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "Thumblist"
 },
 "paddingRight": 0,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "id": "panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F",
 "label": "R0010097_20200115132810",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -84.68,
   "backwardYaw": 67.29,
   "distance": 1,
   "panorama": "this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4"
  }
 ],
 "overlays": [
  "this.overlay_E1A9AD30_FC04_FD99_41CC_659E0AA8F115",
  "this.overlay_E2B385E7_FC0C_6C87_41D3_423B14A6B494"
 ],
 "hfovMax": 130,
 "hfovMin": "150%",
 "partial": false
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "id": "panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6",
 "label": "R0010098_20200115132938",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -102.38,
   "backwardYaw": -13.9,
   "distance": 1,
   "panorama": "this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 59.77,
   "backwardYaw": -90.77,
   "distance": 1,
   "panorama": "this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8"
  }
 ],
 "overlays": [
  "this.overlay_E24B121C_FC07_E789_41D3_BECEBD1E169E",
  "this.overlay_EFA6F45C_FC04_2389_41D8_36D89086CC86"
 ],
 "hfovMax": 130,
 "hfovMin": "150%",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -169.82,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E4DA77B7_FC04_2C87_41DA_9AE11F18C482",
 "initialSequence": "this.sequence_E4DA27B7_FC04_2C87_417E_35FE999D3872"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.41,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E38376B4_FC04_2C99_41D4_A7A2AD05FF20",
 "initialSequence": "this.sequence_E38316B4_FC04_2C99_4192_F33140076207"
},
{
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "width": 46,
 "minWidth": 0,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile_rollover.png",
 "height": 46,
 "pressedIconURL": "skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile_pressed.png",
 "id": "IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile",
 "shadow": false,
 "transparencyActive": true,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "Right"
 },
 "paddingRight": 0,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "id": "panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF",
 "label": "R0010093_20200115132042",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 94.34,
   "backwardYaw": 2.28,
   "distance": 1,
   "panorama": "this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 10.18,
   "backwardYaw": -41.03,
   "distance": 1,
   "panorama": "this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8"
  }
 ],
 "overlays": [
  "this.overlay_E001A4BA_FC0C_6C89_41E3_5F8AC1886613",
  "this.overlay_E0A98413_FC0D_E39F_41B6_F24E26505B93"
 ],
 "hfovMax": 130,
 "hfovMin": "150%",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_camera",
 "initialSequence": "this.sequence_F96A1524_F3FF_EDB9_41C5_D3BB58D1D028"
},
{
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "layout": "horizontal",
 "data": {
  "name": "Left"
 },
 "horizontalAlign": "left",
 "left": "0%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 10,
 "class": "Container",
 "gap": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "50%",
 "id": "Container_1185BA07_1C82_BB09_4190_3425ACEF39CF_mobile",
 "minWidth": 1,
 "height": "100%",
 "children": [
  "this.IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile",
  "this.IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile",
  "this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile"
 ],
 "shadow": false,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "contentOpaque": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_camera",
 "initialSequence": "this.sequence_F96A9524_F3FF_EDB9_41DA_A4EC681E48B3"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.32,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E30E1791_FC04_2C9B_41E1_D35AA502ECD5",
 "initialSequence": "this.sequence_E30E3791_FC04_2C9B_41AD_BE384DA668D4"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_camera",
 "initialSequence": "this.sequence_F96AB523_F3FF_EDBF_41D4_5CF61DF00B0E"
},
{
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "width": 46,
 "minWidth": 0,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile_rollover.png",
 "height": 46,
 "pressedIconURL": "skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile_pressed.png",
 "id": "IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile",
 "shadow": false,
 "transparencyActive": true,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "Zoom In"
 },
 "paddingRight": 0,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.72,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E36276EA_FC04_2C89_41AC_8D978CCC03DD",
 "initialSequence": "this.sequence_E36226EA_FC04_2C89_41ED_25FED0FEBC49"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -32.66,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3A4F67D_FC04_2F8B_41E9_91E7D5D3DEBD",
 "initialSequence": "this.sequence_E3A4967D_FC04_2F8B_41CD_B6DC9C9900E4"
},
{
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "layout": "horizontal",
 "data": {
  "name": "Right"
 },
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "gap": 0,
 "width": "50%",
 "id": "Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36_mobile",
 "minWidth": 1,
 "height": "100%",
 "children": [
  "this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile",
  "this.IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile",
  "this.IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile"
 ],
 "shadow": false,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "contentOpaque": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.66,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E371B6D1_FC04_2C9A_41EC_538514CC27D1",
 "initialSequence": "this.sequence_E37276D2_FC04_2C99_41EB_F0C5CAA5F253"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 138.97,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E350F707_FC04_2D87_41D6_06778D8C1A4D",
 "initialSequence": "this.sequence_E350B707_FC04_2D86_41E9_D3272F9505CC"
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_camera",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8_camera",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_camera",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_camera",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_camera",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_camera",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_camera",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
   "camera": "this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_camera",
   "media": "this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -120.23,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E4FD479E_FC04_2C89_41ED_5A6A95AEE5DF",
 "initialSequence": "this.sequence_E4FD779E_FC04_2C89_41D4_605514573C73"
},
{
 "toolTipBorderRadius": 3,
 "minHeight": 1,
 "horizontalAlign": "center",
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "maxWidth": 92,
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "toolTip": "Fullscreen",
 "iconURL": "skin/IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile.png",
 "toolTipFontFamily": "Arial",
 "toolTipDisplayTime": 600,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingBottom": 4,
 "borderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "width": 92,
 "toolTipFontSize": 12,
 "toolTipTextShadowOpacity": 0,
 "id": "IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile",
 "minWidth": 1,
 "mode": "toggle",
 "height": 92,
 "toolTipFontColor": "#606060",
 "shadow": false,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipPaddingRight": 6,
 "toolTipFontStyle": "normal",
 "toolTipOpacity": 1,
 "maxHeight": 92,
 "transparencyActive": true,
 "toolTipShadowColor": "#333333",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "fullscreen"
 },
 "paddingRight": 0,
 "paddingTop": 0,
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipShadowOpacity": 1
},
{
 "class": "PlayList",
 "id": "ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_camera",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 0, 1)",
   "media": "this.panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8_camera",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 1, 2)",
   "media": "this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_camera",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 2, 3)",
   "media": "this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_camera",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 3, 4)",
   "media": "this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_camera",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 4, 5)",
   "media": "this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_camera",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 5, 6)",
   "media": "this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_camera",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 6, 7)",
   "media": "this.panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_camera",
   "player": "this.MainViewer_mobilePanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist, 7, 0)",
   "media": "this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6"
  }
 ]
},
{
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "width": 46,
 "minWidth": 0,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile_rollover.png",
 "height": 46,
 "pressedIconURL": "skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile_pressed.png",
 "id": "IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile",
 "shadow": false,
 "transparencyActive": true,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "Left"
 },
 "paddingRight": 0,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "id": "panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1",
 "label": "R0010094_20200115132244",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 147.34,
   "backwardYaw": -7.59,
   "distance": 1,
   "panorama": "this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 2.28,
   "backwardYaw": 94.34,
   "distance": 1,
   "panorama": "this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF"
  }
 ],
 "overlays": [
  "this.overlay_EFBED560_FC0C_2DB9_41D2_B026516536F6",
  "this.overlay_E036B0A6_FC0C_24B9_41EE_A42411B6EBFC"
 ],
 "hfovMax": 130,
 "hfovMin": "150%",
 "partial": false
},
{
 "minHeight": 1,
 "horizontalAlign": "center",
 "left": "40%",
 "maxWidth": 92,
 "right": "40%",
 "iconURL": "skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "id": "IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile",
 "minWidth": 1,
 "mode": "push",
 "height": 92,
 "click": "this.setComponentVisibility(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile, false, 0, this.effect_3A451B34_1C82_9908_41AD_37B1C5A316C2, 'hideEffect', false); this.setComponentVisibility(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile, false, 0, this.effect_3A451B34_1C82_9908_41AD_37B1C5A316C2, 'hideEffect', false); this.setComponentVisibility(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile, false, 0, this.effect_3A451B34_1C82_9908_41AD_37B1C5A316C2, 'hideEffect', false)",
 "shadow": false,
 "visible": false,
 "maxHeight": 92,
 "transparencyActive": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "bottom": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "-Expand"
 }
},
{
 "class": "FadeOutEffect",
 "id": "effect_0A30489F_1C86_6738_41A8_2722230A2E2F",
 "duration": 100,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.22,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E32E676F_FC04_2D87_41D0_99A6D1C132D6",
 "initialSequence": "this.sequence_E32E076F_FC04_2D87_41D6_687CA6991230"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F97AF201_F3FC_277B_41E0_D223026486F8_camera",
 "initialSequence": "this.sequence_F96AC523_F3FF_EDBF_41C0_DB94792CF772"
},
{
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "width": 92,
 "minWidth": 0,
 "mode": "push",
 "height": 92,
 "id": "IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile",
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, 1)",
 "shadow": false,
 "transparencyActive": true,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "Next"
 },
 "paddingRight": 0,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "id": "panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7",
 "label": "R0010095_20200115132521",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 88.78,
   "backwardYaw": -130.48,
   "distance": 1,
   "panorama": "this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -7.59,
   "backwardYaw": 147.34,
   "distance": 1,
   "panorama": "this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1"
  }
 ],
 "overlays": [
  "this.overlay_E2637034_FC0C_2399_41E2_F54203852C69",
  "this.overlay_E0FD41C1_FC0C_24FB_41CA_B500E6933FAC"
 ],
 "hfovMax": 130,
 "hfovMin": "150%",
 "partial": false
},
{
 "minHeight": 1,
 "layout": "absolute",
 "data": {
  "name": "SETTINGS"
 },
 "horizontalAlign": "left",
 "left": "2%",
 "scrollBarWidth": 10,
 "right": "2%",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "borderRadius": 0,
 "overflow": "scroll",
 "gap": 10,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#534741"
 ],
 "id": "Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile",
 "minWidth": 1,
 "height": 100,
 "children": [
  "this.Container_1185BA07_1C82_BB09_4190_3425ACEF39CF_mobile",
  "this.Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36_mobile",
  "this.Container_129084CF_1C83_AF18_418C_2D8031993BE6_mobile"
 ],
 "shadow": false,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0.9,
 "propagateClick": false,
 "bottom": 20,
 "paddingRight": 0,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "contentOpaque": false
},
{
 "minHeight": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "width": 92,
 "minWidth": 0,
 "mode": "push",
 "height": 92,
 "id": "IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile",
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, -1)",
 "shadow": false,
 "transparencyActive": true,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "Previous"
 },
 "paddingRight": 0,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "minHeight": 1,
 "horizontalAlign": "center",
 "maxWidth": 92,
 "right": "2%",
 "iconURL": "skin/IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "width": 92,
 "id": "IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile",
 "minWidth": 1,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, 1)",
 "shadow": false,
 "visible": false,
 "maxHeight": 92,
 "transparencyActive": true,
 "borderSize": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "bottom": "35%",
 "paddingRight": 0,
 "paddingTop": 0,
 "top": "35%",
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "next"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_camera",
 "initialSequence": "this.sequence_F96A7524_F3FF_EDB9_41C1_E4BFC6E56535"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "colCount": 4,
      "rowCount": 4,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "colCount": 2,
      "rowCount": 2,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "colCount": 1,
      "rowCount": 1,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "id": "panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4",
 "label": "R0010096_20200115132708",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -130.48,
   "backwardYaw": 88.78,
   "distance": 1,
   "panorama": "this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -13.9,
   "backwardYaw": -102.38,
   "distance": 1,
   "panorama": "this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 67.29,
   "backwardYaw": -84.68,
   "distance": 1,
   "panorama": "this.panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F"
  }
 ],
 "overlays": [
  "this.overlay_E09097AE_FC04_2C89_4178_26C8A6424056",
  "this.overlay_E0533B8A_FC04_2489_41D7_2EA903729875",
  "this.overlay_E10C9925_FC04_65BB_41E8_FB8136945B33"
 ],
 "hfovMax": 130,
 "hfovMin": "150%",
 "partial": false
},
{
 "minHeight": 1,
 "horizontalAlign": "center",
 "maxWidth": 92,
 "iconURL": "skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "width": 92,
 "id": "IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile",
 "minWidth": 1,
 "mode": "push",
 "height": 92,
 "shadow": false,
 "maxHeight": 92,
 "transparencyActive": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "VR"
 },
 "paddingRight": 0,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "class": "FadeInEffect",
 "id": "effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7",
 "duration": 200,
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -112.71,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E393569B_FC04_2C8F_41DE_8F00DE000A84",
 "initialSequence": "this.sequence_E393769B_FC04_2C8F_41E9_E7D4C636513A"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_E31E3783_FC04_2D7F_41E4_B901541E7270"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_E34FC739_FC04_2D8B_41CA_F224E693164A"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9, this.camera_E4EBF7AA_FC04_2C89_41E5_879734C30E2D); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_E0E19C89_FC0B_DC8B_41A0_6D95052AF985",
 "items": [
  {
   "hfov": 8.57,
   "pitch": -19.86,
   "yaw": 119.85,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E319FA69_FC04_278B_41D1_3E3101F37860",
   "distance": 50
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.57,
   "yaw": 119.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0_HS_4_0_0_map.gif"
     }
    ]
   },
   "pitch": -19.86
  }
 ],
 "useHandCursor": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF, this.camera_E4DA77B7_FC04_2C87_41DA_9AE11F18C482); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_E0B57054_FC04_2399_41D0_F04322820D71",
 "items": [
  {
   "hfov": 8.44,
   "pitch": -22.14,
   "yaw": -41.03,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E3184A69_FC04_278B_41B7_497F08B3D943",
   "distance": 50
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.44,
   "yaw": -41.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0_HS_5_0_0_map.gif"
     }
    ]
   },
   "pitch": -22.14
  }
 ],
 "useHandCursor": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6, this.camera_E4FD479E_FC04_2C89_41ED_5A6A95AEE5DF); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_EF45A334_FC04_2599_41DA_9B6C3CEF1A40",
 "items": [
  {
   "hfov": 6.27,
   "pitch": -28.94,
   "yaw": -90.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E3180A69_FC04_278B_41E9_F8E676B327E9",
   "distance": 50
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.27,
   "yaw": -90.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0_HS_6_0_0_map.gif"
     }
    ]
   },
   "pitch": -28.94
  }
 ],
 "useHandCursor": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_F96A3524_F3FF_EDB9_41A1_41E723FF5A3D"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_E33F8757_FC04_2D87_41EA_75357978A496"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8, this.camera_E33FE757_FC04_2D87_41D4_DEF32887965A); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_E00B0A65_FC0C_27BB_41DC_CE6BC287A8C0",
 "items": [
  {
   "hfov": 8.26,
   "pitch": -26.05,
   "yaw": -81.53,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E31ABA63_FC04_27BF_41EC_BF383DE2839D",
   "distance": 50
  }
 ],
 "data": {
  "label": "Arrow Transparent Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.26,
   "yaw": -81.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0_HS_3_0_0_map.gif"
     }
    ]
   },
   "pitch": -26.05
  }
 ],
 "useHandCursor": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_E0F604B1_FC3C_EC9A_41EA_52A2B457D943",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 736,
      "height": 688,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0_HS_4_0.png"
     }
    ]
   },
   "hfov": 48.54,
   "distance": 50,
   "pitch": -10.07,
   "yaw": 110.32
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 48.54,
   "yaw": 110.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16,
      "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0_HS_4_0_0_map.gif"
     }
    ]
   },
   "pitch": -10.07
  }
 ],
 "useHandCursor": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_E340A720_FC04_2DB9_41D6_F8F2FF5BBD75"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_E3B41665_FC04_2FBB_4195_C087860E5F51"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_F96A5524_F3FF_EDB9_41C6_C86383A9C3AA"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4, this.camera_E393569B_FC04_2C8F_41DE_8F00DE000A84); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_E1A9AD30_FC04_FD99_41CC_659E0AA8F115",
 "items": [
  {
   "hfov": 26.19,
   "pitch": -42.27,
   "yaw": -84.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E31D0A6B_FC04_278F_41D8_FB443A0E59CD",
   "distance": 50
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 26.19,
   "yaw": -84.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "pitch": -42.27
  }
 ],
 "useHandCursor": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_E2B385E7_FC0C_6C87_41D3_423B14A6B494",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 908,
      "height": 935,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0_HS_2_0.png"
     }
    ]
   },
   "hfov": 59.24,
   "distance": 50,
   "pitch": -13.18,
   "yaw": 77.21
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 59.24,
   "yaw": 77.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "pitch": -13.18
  }
 ],
 "useHandCursor": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4, this.camera_E3408720_FC04_2DB9_41E2_7CAD7F03D3AA); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_E24B121C_FC07_E789_41D3_BECEBD1E169E",
 "items": [
  {
   "hfov": 21.04,
   "pitch": -27.38,
   "yaw": -102.38,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E31DEA6C_FC04_2789_41E0_A522F9C5E0FA",
   "distance": 50
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.04,
   "yaw": -102.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "pitch": -27.38
  }
 ],
 "useHandCursor": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8, this.camera_E34F2739_FC04_2D8B_41B7_CBC696463637); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_EFA6F45C_FC04_2389_41D8_36D89086CC86",
 "items": [
  {
   "hfov": 15.35,
   "pitch": -33.38,
   "yaw": 59.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E31DBA6C_FC04_2789_41E2_71896F532B0A",
   "distance": 50
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.35,
   "yaw": 59.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0_HS_3_0_0_map.gif"
     }
    ]
   },
   "pitch": -33.38
  }
 ],
 "useHandCursor": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_E4DA27B7_FC04_2C87_417E_35FE999D3872"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_E38316B4_FC04_2C99_4192_F33140076207"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F97AF201_F3FC_277B_41E0_D223026486F8, this.camera_E350F707_FC04_2D87_41D6_06778D8C1A4D); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_E001A4BA_FC0C_6C89_41E3_5F8AC1886613",
 "items": [
  {
   "hfov": 8.23,
   "pitch": -25.48,
   "yaw": 10.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E318EA69_FC04_278B_41DD_CB08168690C6",
   "distance": 50
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.23,
   "yaw": 10.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0_HS_1_0_0_map.gif"
     }
    ]
   },
   "pitch": -25.48
  }
 ],
 "useHandCursor": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1, this.camera_E36276EA_FC04_2C89_41AC_8D978CCC03DD); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_E0A98413_FC0D_E39F_41B6_F24E26505B93",
 "items": [
  {
   "hfov": 12.02,
   "pitch": -26.22,
   "yaw": 94.34,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E318BA6A_FC04_2789_41D6_B34DA3AE6EC5",
   "distance": 100
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.02,
   "yaw": 94.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "pitch": -26.22
  }
 ],
 "useHandCursor": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_F96A1524_F3FF_EDB9_41C5_D3BB58D1D028"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_F96A9524_F3FF_EDB9_41DA_A4EC681E48B3"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_E30E3791_FC04_2C9B_41AD_BE384DA668D4"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_F96AB523_F3FF_EDBF_41D4_5CF61DF00B0E"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_E36226EA_FC04_2C89_41ED_25FED0FEBC49"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_E3A4967D_FC04_2F8B_41CD_B6DC9C9900E4"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_E37276D2_FC04_2C99_41EB_F0C5CAA5F253"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_E350B707_FC04_2D86_41E9_D3272F9505CC"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_E4FD779E_FC04_2C89_41D4_605514573C73"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF, this.camera_E371B6D1_FC04_2C9A_41EC_538514CC27D1); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_EFBED560_FC0C_2DB9_41D2_B026516536F6",
 "items": [
  {
   "hfov": 27.27,
   "pitch": -24.95,
   "yaw": 2.28,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E31F0A6A_FC04_2789_41E9_596F6808BB48",
   "distance": 50
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 27.27,
   "yaw": 2.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "pitch": -24.95
  }
 ],
 "useHandCursor": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7, this.camera_E38376B4_FC04_2C99_41D4_A7A2AD05FF20); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_E036B0A6_FC0C_24B9_41EE_A42411B6EBFC",
 "items": [
  {
   "hfov": 16.53,
   "pitch": -46.48,
   "yaw": 147.34,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E31FDA6A_FC04_2789_41D7_8B676D403A35",
   "distance": 50
  }
 ],
 "data": {
  "label": "Arrow Blue Right-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.53,
   "yaw": 147.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0_HS_3_0_0_map.gif"
     }
    ]
   },
   "pitch": -46.48
  }
 ],
 "useHandCursor": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_E32E076F_FC04_2D87_41D6_687CA6991230"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_F96AC523_F3FF_EDBF_41C0_DB94792CF772"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4, this.camera_E3B47665_FC04_2FBB_41E3_068D266E3CAE); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_E2637034_FC0C_2399_41E2_F54203852C69",
 "items": [
  {
   "hfov": 12.09,
   "pitch": -47.13,
   "yaw": 88.78,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E31E4A6A_FC04_2789_41C2_60F69F581B89",
   "distance": 50
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.09,
   "yaw": 88.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0_HS_2_0_0_map.gif"
     }
    ]
   },
   "pitch": -47.13
  }
 ],
 "useHandCursor": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1, this.camera_E3A4F67D_FC04_2F8B_41E9_91E7D5D3DEBD); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_E0FD41C1_FC0C_24FB_41CA_B500E6933FAC",
 "items": [
  {
   "hfov": 18.06,
   "pitch": -35.47,
   "yaw": -7.59,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E31E0A6B_FC04_278F_41E0_939881ABE0F0",
   "distance": 50
  }
 ],
 "data": {
  "label": "Arrow Blue Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.06,
   "yaw": -7.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0_HS_3_0_0_map.gif"
     }
    ]
   },
   "pitch": -35.47
  }
 ],
 "useHandCursor": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_F96A7524_F3FF_EDB9_41C1_E4BFC6E56535"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7, this.camera_E32E676F_FC04_2D87_41D0_99A6D1C132D6); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_E09097AE_FC04_2C89_4178_26C8A6424056",
 "items": [
  {
   "hfov": 25.91,
   "pitch": -32.39,
   "yaw": -130.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E31EEA6B_FC04_278F_41C6_0AD493514C65",
   "distance": 50
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.91,
   "yaw": -130.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0_HS_3_0_0_map.gif"
     }
    ]
   },
   "pitch": -32.39
  }
 ],
 "useHandCursor": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F, this.camera_E30E1791_FC04_2C9B_41E1_D35AA502ECD5); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_E0533B8A_FC04_2489_41D7_2EA903729875",
 "items": [
  {
   "hfov": 19.81,
   "pitch": -25.1,
   "yaw": 67.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E31EAA6B_FC04_278F_41D9_B58DCB65D517",
   "distance": 50
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.81,
   "yaw": 67.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0_HS_4_0_0_map.gif"
     }
    ]
   },
   "pitch": -25.1
  }
 ],
 "useHandCursor": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6, this.camera_E31E7783_FC04_2D7F_41D9_2672811FC495); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "id": "overlay_E10C9925_FC04_65BB_41E8_FB8136945B33",
 "items": [
  {
   "hfov": 17.75,
   "pitch": -39.3,
   "yaw": -13.9,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E31E8A6B_FC04_278F_41E2_F28613F25147",
   "distance": 50
  }
 ],
 "data": {
  "label": "Arrow Blue Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.75,
   "yaw": -13.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0_HS_5_0_0_map.gif"
     }
    ]
   },
   "pitch": -39.3
  }
 ],
 "useHandCursor": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_E393769B_FC04_2C8F_41E9_E7D4C636513A"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E319FA69_FC04_278B_41D1_3E3101F37860",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200,
   "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0_HS_4_0.png"
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E3184A69_FC04_278B_41B7_497F08B3D943",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200,
   "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0_HS_5_0.png"
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E3180A69_FC04_278B_41E9_F8E676B327E9",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200,
   "url": "media/panorama_F97AF201_F3FC_277B_41E0_D223026486F8_0_HS_6_0.png"
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E31ABA63_FC04_27BF_41EC_BF383DE2839D",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200,
   "url": "media/panorama_F89ECC01_F3FC_237B_41E3_4503973E4CE9_0_HS_3_0.png"
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E31D0A6B_FC04_278F_41D8_FB443A0E59CD",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 480,
   "url": "media/panorama_F979E926_F3FC_25B9_41DA_686147AFFF5F_0_HS_1_0.png"
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E31DEA6C_FC04_2789_41E0_A522F9C5E0FA",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780,
   "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0_HS_2_0.png"
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E31DBA6C_FC04_2789_41E2_71896F532B0A",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780,
   "url": "media/panorama_F95956FC_F3FC_2C89_41D5_AB9C2F328BE6_0_HS_3_0.png"
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E318EA69_FC04_278B_41DD_CB08168690C6",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200,
   "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0_HS_1_0.png"
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E318BA6A_FC04_2789_41D6_B34DA3AE6EC5",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200,
   "url": "media/panorama_F955C025_F3FC_23BB_41CC_E4771E0FC1EF_0_HS_2_0.png"
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E31F0A6A_FC04_2789_41E9_596F6808BB48",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110,
   "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0_HS_2_0.png"
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E31FDA6A_FC04_2789_41D7_8B676D403A35",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780,
   "url": "media/panorama_F9798E49_F3FC_5F8B_41D8_3D9F0DD398A1_0_HS_3_0.png"
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E31E4A6A_FC04_2789_41C2_60F69F581B89",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200,
   "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0_HS_2_0.png"
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E31E0A6B_FC04_278F_41E0_939881ABE0F0",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200,
   "url": "media/panorama_F979ACBD_F3FC_7C8B_418C_FF7C9C021CB7_0_HS_3_0.png"
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E31EEA6B_FC04_278F_41C6_0AD493514C65",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780,
   "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0_HS_3_0.png"
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E31EAA6B_FC04_278F_41D9_B58DCB65D517",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1110,
   "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0_HS_4_0.png"
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E31E8A6B_FC04_278F_41E2_F28613F25147",
 "frameDuration": 41,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 780,
   "url": "media/panorama_F95A5B34_F3FC_6599_41D4_A590EBAEFDB4_0_HS_5_0.png"
  }
 ]
}],
 "minHeight": 20,
 "layout": "absolute",
 "data": {
  "name": "Player486"
 },
 "horizontalAlign": "left",
 "contentOpaque": false,
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "start": "this['MainViewer'] = this.MainViewer_mobile; this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "Player",
 "downloadEnabled": false,
 "gap": 10,
 "defaultVRPointer": "laser",
 "borderRadius": 0,
 "overflow": "hidden",
 "width": "100%",
 "mobileMipmappingEnabled": false,
 "desktopMipmappingEnabled": false,
 "id": "rootPlayer",
 "minWidth": 20,
 "height": "100%",
 "shadow": false,
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 1,
 "buttonToggleFullscreen": "this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile",
 "borderSize": 0,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "children": [
  "this.MainViewer_mobile",
  "this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile",
  "this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile",
  "this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile",
  "this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile",
  "this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile"
 ],
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "paddingRight": 0,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scripts": {
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "registerTextVariable": function(obj){  var property = (function() { switch (obj.get('class')) { case 'Label': return 'text'; case 'Button': case 'BaseButton': return 'label'; case 'HTMLText': return 'html'; } })(); if (property == undefined) return; var re = new RegExp('\\{\\{\\s*(\\w+)\\s*\\}\\}', 'g'); var text = obj.get(property); var data = obj.get('data') || {}; data[property] = text; obj.set('data', data); var updateLabel = function(vars) { var text = data[property]; for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) { var dispatcher = dispatchers[j]; var index = dispatcher.get('selectedIndex'); if (index >= 0) { var srcPropArray = info.src.split('.'); var src = dispatcher.get('items')[index]; if(src == undefined || (info.itemCondition !== undefined && !info.itemCondition.call(this, src))) continue; for (var z = 0; z < srcPropArray.length; ++z) src = 'get' in src ? src.get(srcPropArray[z]) : src[srcPropArray[z]]; text = text.replace(info.replace, src); } } } if(text != data[property]) obj.set(property, text); }; var vars = []; var addVars = function(dispatchers, eventName, src, replace, itemCondition) { vars.push({ 'dispatchers': dispatchers, 'eventName': eventName, 'src': src, 'replace': replace, 'itemCondition': itemCondition }); }; var viewerAreaItemCondition = function(item) { var player = item.get('player'); return player !== undefined && player.get('viewerArea') == this.MainViewer; }; while (null != (result = re.exec(text))) { switch (result[1]) { case 'title': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.label', result[0], viewerAreaItemCondition); break; case 'subtitle': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.data.subtitle', result[0], viewerAreaItemCondition); break; } } if (vars.length > 0) { var func = updateLabel.bind(this, vars); for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) dispatchers[j].bind(info.eventName, func, this); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext, true); }; playNext(); },
  "getFirstPlayListWithMedia": function(media, onlySelected){  var playLists = this.getPlayListsWithMedia(media, onlySelected); return playLists.length > 0 ? playLists[0] : undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios).map(function(v) { return v.audio })); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "_getPlayListsWithViewer": function(viewer){  var playLists = this.getByClassName('PlayList'); var containsViewer = function(playList) { var items = playList.get('items'); for(var j=items.length-1; j>=0; --j) { var item = items[j]; var player = item.get('player'); if(player !== undefined && player.get('viewerArea') == viewer) return true; } return false; }; for(var i=playLists.length-1; i>=0; --i) { if(!containsViewer(playLists[i])) playLists.splice(i, 1); } return playLists; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback, stopBackgroundAudio){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } var src = this.playGlobalAudio(audio, endCallback); if(stopBackgroundAudio === true){ var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); } return src; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudio": function(audio, endCallback, asBackground){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = {'audio': audio, 'asBackground': asBackground || false}; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = undefined; if(mediaDispatcher){ var playListsWithMedia = this.getPlayListsWithMedia(mediaDispatcher, true); playListDispatcher = playListsWithMedia.indexOf(playList) != -1 ? playList : (playListsWithMedia.length > 0 ? playListsWithMedia[0] : undefined); } if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } item.bind('begin', onBeginFunction, self); this.executeFunctionWhenChange(playList, index, disposeCallback);  },
  "registerKey": function(key, value){  window[key] = value; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\\text-align:left\\><SPAN STYLE=\\color:#FFFFFF;font-size:12px;font-family:Verdana\\><span color=\\white\\ font-family=\\Verdana\\ font-size=\\12px\\>' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setOverlayBehaviour": function(overlay, media, action, preventDoubleClick){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(preventDoubleClick){ if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 1000); } }; if(preventDoubleClick && window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getFirstPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListsWithMedia": function(media, onlySelected){  var result = []; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) result.push(playList); } return result; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData) audio = audioData.audio; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "keepCompVisible": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getKey": function(key){  return window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; } return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopGlobalAudios": function(onlyForeground){  var audios = window.currentGlobalAudios; var self = this; if(audios){ Object.keys(audios).forEach(function(key){ var data = audios[key]; if(!onlyForeground || (onlyForeground && !data.asBackground)) { self.stopGlobalAudio(data.audio); } }); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData){ audio = audioData.audio; delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "_initItemWithComps": function(playList, index, components, eventName, visible, effectToApply, delay, restoreStateAt){  var item = playList.get('items')[index]; var registerVisibility = restoreStateAt > 0; var rootPlayer = this.rootPlayer; var cloneEffect = function(visible) { var klass = effectToApply ? effectToApply.get('class') : undefined; var effect = undefined; switch(klass) { case 'FadeInEffect': case 'FadeOutEffect': effect = rootPlayer.createInstance(visible ? 'FadeInEffect' : 'FadeOutEffect'); break; case 'SlideInEffect': case 'SlideOutEffect': effect = rootPlayer.createInstance(visible ? 'SlideInEffect' : 'SlideOutEffect'); break; } if(effect){ effect.set('duration', effectToApply.get('duration')); effect.set('easing', effectToApply.get('easing')); if(klass.indexOf('Slide') != -1) effect.set(visible ? 'from' : 'to', effectToApply.get(visible ? 'to' : 'from')); } return effect; }; var endFunc = function() { for(var i = 0, count = components.length; i<count; ++i) { var component = components[i]; if(restoreStateAt > 0){ this.setComponentVisibility(component, !visible, 0, cloneEffect(!visible)); } else { var key = 'visibility_' + component.get('id'); if(this.existsKey(key)) { if(this.getKey(key)) this.setComponentVisibility(component, true, 0, cloneEffect(true)); else this.setComponentVisibility(component, false, 0, cloneEffect(false)); this.unregisterKey(key); } } } item.unbind('end', endFunc, this); if(addMediaEndEvent) media.unbind('end', endFunc, this); }; var stopFunc = function() { item.unbind('stop', stopFunc, this, true); item.unbind('stop', stopFunc, this); item.unbind('begin', stopFunc, this, true); item.unbind('begin', stopFunc, this); for(var i = 0, count = components.length; i<count; ++i) { this.keepCompVisible(components[i], false); } }; var addEvent = function(eventName, delay, restoreStateAt){ var changeFunc = function(){ var changeVisibility = function(component, visible, effect) { rootPlayer.setComponentVisibility(component, visible, delay, effect, visible ? 'showEffect' : 'hideEffect', false); if(restoreStateAt > 0){ var time = delay + restoreStateAt + (effect != undefined ? effect.get('duration') : 0); rootPlayer.setComponentVisibility(component, !visible, time, cloneEffect(!visible), visible ? 'hideEffect' : 'showEffect', true); } }; for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; if(visible == 'toggle'){ if(!component.get('visible')) changeVisibility(component, true, cloneEffect(true)); else changeVisibility(component, false, cloneEffect(false)); } else { changeVisibility(component, visible, cloneEffect(visible)); } } item.unbind(eventName, changeFunc, this); }; item.bind(eventName, changeFunc, this) }; if(eventName == 'begin'){ for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; this.keepCompVisible(component, true); if(registerVisibility) { var key = 'visibility_' + component.get('id'); this.registerKey(key, component.get('visible')); } } item.bind('stop', stopFunc, this, true); item.bind('stop', stopFunc, this); item.bind('begin', stopFunc, this, true); item.bind('begin', stopFunc, this); if(registerVisibility){ item.bind('end', endFunc, this); var media = item.get('media'); var addMediaEndEvent = media.get('loop') != undefined && !(media.get('loop')); if(addMediaEndEvent) media.bind('end', endFunc, this); } } else if(eventName == 'end' && restoreStateAt > 0){ addEvent('begin', restoreStateAt, 0); restoreStateAt = 0; } if(eventName != undefined) addEvent(eventName, delay, restoreStateAt); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareSocial": function(socialID, url, deepLink){  if(url == undefined) { url = deepLink ? location.href : location.href.split(location.search||location.hash||/[?#]/)[0]; } else if(deepLink) { url += location.hash; } url = (function(id){ switch(id){ case 'fb': return 'https://www.facebook.com/sharer/sharer.php?u='+url; case 'wa': return 'https://api.whatsapp.com/send/?text='+encodeURIComponent(url); case 'tw': return 'https://twitter.com/intent/tweet?source=webclient&url='+url; default: return undefined; } })(socialID); this.openLink(url, '_blank'); }
 }
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
