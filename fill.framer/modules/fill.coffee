exports.pattern = (layer, src) ->

    layer.style = {
        backgroundImage: "url('" + src + "')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto"
    }

exports.video = (layer, src) ->

    video = new VideoLayer({video: src})
    video.superLayer = layer
    video.backroundColor = "transparent"
    video.height = layer.height
    video.width = layer.width