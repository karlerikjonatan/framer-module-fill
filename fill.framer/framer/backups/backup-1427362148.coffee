# Module
fill = require "fill"

# Layers
layerA = new BackgroundLayer()
layerB = new Layer({
	background: "#FFF"
	height: Framer.Device.screen.height / 3 
	width: Framer.Device.screen.width
})

layerB.superLayer = layerA
layerB.center()

# Fill
# Pattern provided by The Pattern Library, thepatternlibrary.com
# Video provided by Mazwai, mazwai.com
fill.pattern(layerA, "http://i.imgur.com/i3OA2PJ.jpg")
fill.video(layerB, "http://mazwai.com/system/posts/videos/000/000/050/preview_mp4_2/thomas_mandelid--clips_of_the_Aurora.mp4?1402827584")

# Play and loop video
layerB.subLayers[0].player.play()
layerB.subLayers[0].player.loop = true