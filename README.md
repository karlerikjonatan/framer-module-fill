# framer.module.fill
framer.module.fill is a fill module for Framer.

![framer.module.fill](https://raw.githubusercontent.com/karlerikjonatan/framer.module.fill/master/screenshot.png)

## Installation
Add ```fill.coffee``` to the /modules folder of your project.

## Usage
To include the module within your project, add the following:

``` coffeescript
fill = require "fill"
```

framer.module.fill consists of the methods ```pattern```, ```video``` and accepts the parameters ```layer```, ```src```.

#### pattern
``` coffeescript
# Repeats on x-axis and y-axis
fill.pattern(layer, src)
```
The ```layer``` and ```src``` parameters defines the layer to fill and the source to fill it with.

Fill source could either be local or external of type [image/*](http://en.wikipedia.org/wiki/Internet_media_type#Type_image).

#### video
``` coffeescript
fill.video(layer, src)
```
The ```layer``` and ```src``` parameters defines the layer to fill and the source to fill it with.

Fill source could either be local or external of type [video/*](http://en.wikipedia.org/wiki/Internet_media_type#Type_video).

### Example
``` coffeescript
# Module
fill = require "fill"

# Layers
layerA = new Layer()
layerB = new Layer()

# Fill
fill.pattern(layerA, "path/to/image.jpg")
fill.video(layerB, "path/to/video.mp4")
```
