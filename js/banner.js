(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [];


    (lib.AnMovieClip = function () {
        this.actionFrames = [];
        this.gotoAndPlay = function (positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
        }
        this.play = function () {
            cjs.MovieClip.prototype.play.call(this);
        }
        this.gotoAndStop = function (positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
        }
        this.stop = function () {
            cjs.MovieClip.prototype.stop.call(this);
        }
    }).prototype = p = new cjs.MovieClip();
    // symbols:



    (lib.banner1 = function () {
        this.initialize(img.banner1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1536, 300);


    (lib.banner2 = function () {
        this.initialize(img.banner2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1536, 300);


    (lib.banner3 = function () {
        this.initialize(img.banner3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1536, 300); // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.Symbol4 = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.banner1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0, 0, 1536, 300), null);


    (lib.Symbol3 = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.banner3();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0, 0, 1536, 300), null);


    (lib.Symbol2 = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.banner2();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0, 0, 1536, 300), null);


    (lib.Symbol1 = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.banner1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0, 0, 1536, 300), null);


    (lib.banner_1 = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_4
        this.text = new cjs.Text("The Best Cakes, Pastries and Confectioneries Recipes Site", "55px 'Arial'", "#FFFFFF");
        this.text.textAlign = "center";
        this.text.lineHeight = 63;
        this.text.lineWidth = 1532;
        this.text.parent = this;
        this.text.setTransform(768, 2);

        this.text_1 = new cjs.Text("", "55px '_sans'", "#333333");
        this.text_1.textAlign = "center";
        this.text_1.lineHeight = 63;
        this.text_1.lineWidth = 1532;
        this.text_1.parent = this;
        this.text_1.setTransform(768, 2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text_1
            }, {
                t: this.text
            }]
        }).to({
            state: [{
                t: this.text_1
            }, {
                t: this.text
            }]
        }, 89).wait(1));

        // Layer_1
        this.instance = new lib.Symbol1();
        this.instance.setTransform(768, 150, 1, 1, 0, 0, 0, 768, 150);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({
            alpha: 0.8
        }, 0).wait(1).to({
            alpha: 0.6
        }, 0).wait(1).to({
            alpha: 0.4
        }, 0).wait(1).to({
            alpha: 0.2
        }, 0).wait(1).to({
            alpha: 0
        }, 0).to({
            _off: true
        }, 1).wait(70));

        // Layer_2
        this.instance_1 = new lib.Symbol2();
        this.instance_1.setTransform(768, 150, 1, 1, 0, 0, 0, 768, 150);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({
            alpha: 0.8
        }, 0).wait(1).to({
            alpha: 0.6
        }, 0).wait(1).to({
            alpha: 0.4
        }, 0).wait(1).to({
            alpha: 0.2
        }, 0).wait(1).to({
            alpha: 0
        }, 0).to({
            _off: true
        }, 1).wait(40));

        // Layer_3
        this.instance_2 = new lib.Symbol3();
        this.instance_2.setTransform(768, 150, 1, 1, 0, 0, 0, 768, 150);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({
            alpha: 0.8
        }, 0).wait(1).to({
            alpha: 0.6
        }, 0).wait(1).to({
            alpha: 0.4
        }, 0).wait(1).to({
            alpha: 0.2
        }, 0).wait(1).to({
            alpha: 0
        }, 0).to({
            _off: true
        }, 1).wait(10));

        // Layer_7
        this.instance_3 = new lib.Symbol4();
        this.instance_3.setTransform(768, 150, 1, 1, 0, 0, 0, 768, 150);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1536, 300);


    // stage content:
    (lib.banner = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = false;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_4
        this.instance = new lib.banner_1();
        this.instance.setTransform(768, 150, 1, 1, 0, 0, 0, 768, 150);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer_3
        this.instance_1 = new lib.Symbol2();
        this.instance_1.setTransform(768, 150, 1, 1, 0, 0, 0, 768, 150);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // Layer_2
        this.instance_2 = new lib.Symbol3();
        this.instance_2.setTransform(768, 150, 1, 1, 0, 0, 0, 768, 150);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // Layer_1
        this.instance_3 = new lib.Symbol4();
        this.instance_3.setTransform(768, 150, 1, 1, 0, 0, 0, 768, 150);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new lib.AnMovieClip();
    p.nominalBounds = new cjs.Rectangle(768, 150, 768, 150);
    // library properties:
    lib.properties = {
        id: '891C9C45E006BC4FAE9596704BFA58DE',
        width: 1536,
        height: 300,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [
            {
                src: "images/banner1.png",
                id: "banner1"
            },
            {
                src: "images/banner2.png",
                id: "banner2"
            },
            {
                src: "images/banner3.png",
                id: "banner3"
            }
	],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function (canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function (autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function () {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function (ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function (ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function () {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function () {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function (fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['891C9C45E006BC4FAE9596704BFA58DE'] = {
        getStage: function () {
            return exportRoot.stage;
        },
        getLibrary: function () {
            return lib;
        },
        getSpriteSheet: function () {
            return ss;
        },
        getImages: function () {
            return img;
        }
    };

    an.compositionLoaded = function (id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function (id) {
        return an.compositions[id];
    }


    an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function resizeCanvas() {
            var w = lib.properties.width,
                h = lib.properties.height;
            var iw = window.innerWidth,
                ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1,
                xRatio = iw / w,
                yRatio = ih / h,
                sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                } else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            domContainers[0].width = w * pRatio * sRatio;
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function (container) {
                container.style.width = w * sRatio + 'px';
                container.style.height = h * sRatio + 'px';
            });
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    an.handleSoundStreamOnTick = function (event) {
        if (!event.paused) {
            var stageChild = stage.getChildAt(0);
            if (!stageChild.paused) {
                stageChild.syncStreamSounds();
            }
        }
    }


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;