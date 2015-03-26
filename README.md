# framer.module.fill
framer.module.fill is a fill module for Framer.

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
fill.pattern(layer, src)
```
The ```layer``` and ```src``` parameters defines the layer to fill and the source to fill it with.

Fill source could either be local or external.

#### video
``` coffeescript
fill.video(layer, src)
```
The ```layer``` and ```src``` parameters defines the layer to fill and the source to fill it with.

Fill source could either be local or external.

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

## License
The MIT License (MIT)

Copyright (c) 2015 Jonatan Pettersson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
