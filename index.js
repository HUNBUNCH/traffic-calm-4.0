(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1748,1858]]},
		{name:"index_atlas_2", frames: [[579,1127,400,400],[579,1529,400,400],[981,1127,400,400],[981,1529,400,400],[1383,1127,400,400],[1383,1529,400,400],[0,1127,577,585],[0,0,2000,1125]]},
		{name:"index_atlas_3", frames: [[0,402,421,122],[0,0,400,400],[402,0,400,400],[804,0,400,400],[1206,0,400,400],[1608,0,400,400]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.button2 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cryingface01 = function() {
	this.initialize(img.cryingface01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3508,2481);


(lib.images01 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.images02 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.images03 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.images04 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.images05 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.images06 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.images07 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.images08 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.images09 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.images10 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.images11 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.LOGO203 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.logofull02 = function() {
	this.initialize(img.logofull02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4961,1788);


(lib.sad02 = function() {
	this.initialize(img.sad02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2481,1748);


(lib.ThumbsupTPNM = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.TPNMHOme = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.YouWin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ThumbsupTPNM();
	this.instance.setTransform(-59,18,0.0678,0.0678);

	this.text = new cjs.Text("COLLECT YOUR STICKER", "normal 400 55px 'Passion One'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 59;
	this.text.lineWidth = 731;
	this.text.parent = this;
	this.text.setTransform(0.007,150.55,0.8928,0.8928);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.text_1 = new cjs.Text("YOU WIN!!!", "normal 700 120px 'Passion One'", "#666666");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 124;
	this.text_1.lineWidth = 731;
	this.text_1.parent = this;
	this.text_1.setTransform(0.007,-103.9,0.8928,0.8928);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328,-105.7,656,308.8);


(lib.YouLose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cryingface01();
	this.instance.setTransform(-118,-12,0.0664,0.0664);

	this.text = new cjs.Text("YOU LOSE...", "normal 700 96px 'Passion One'", "#FF3300");
	this.text.textAlign = "center";
	this.text.lineHeight = 99;
	this.text.lineWidth = 731;
	this.text.parent = this;
	this.text.setTransform(0,-128.65);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367.3,-130.6,734.7,283.4);


(lib.TapToStart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Tap to start", "normal 700 68px 'Passion One'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 408;
	this.text.parent = this;
	this.text.setTransform(0,-34.45);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.1,-36.4,412.29999999999995,72.9);


(lib.Rec3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.button2();
	this.instance.setTransform(-208,-52,0.9857,0.854);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208,-52,415,104.2);


(lib.Rec2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-270,960,540);


(lib.Rec1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BACF00").s().p("Aq4FkQhkAAAAhkIAAn/QAAhkBkAAIVxAAQBkAAAABkIAAH/QAABkhkAAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.7,-35.6,159.5,71.2);


(lib.Rec = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.button2();
	this.instance.setTransform(-119,-52,0.5636,0.8512);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BACF00").s().p("AuwHXQiJAAAAiJIAAqbQAAiJCJAAIdgAAQCKAAAACJIAAKbQAACJiKAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-52,237.3,103.9);


(lib.Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.instance = new lib.logofull02();
	this.instance.setTransform(-369,-133,0.1489,0.1489);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-369,-133,738.5,266.2);


(lib.InvisibleButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
	this.shape.setTransform(480,270);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.Hit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ak/FAIAAp/IJ/AAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Faces = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// numbers
	this.instance = new lib.images01();
	this.instance.setTransform(-92,-92,0.46,0.46);

	this.text = new cjs.Text("0", "normal 400 130px 'Passion One'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 136;
	this.text.lineWidth = 172;
	this.text.parent = this;
	this.text.setTransform(0,-67.15);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.instance_1 = new lib.images02();
	this.instance_1.setTransform(-92,-92,0.46,0.46);

	this.instance_2 = new lib.images03();
	this.instance_2.setTransform(-92,-92,0.46,0.46);

	this.instance_3 = new lib.images04();
	this.instance_3.setTransform(-92,-92,0.46,0.46);

	this.instance_4 = new lib.images05();
	this.instance_4.setTransform(-92,-92,0.46,0.46);

	this.instance_5 = new lib.images06();
	this.instance_5.setTransform(-92,-92,0.46,0.46);

	this.instance_6 = new lib.images07();
	this.instance_6.setTransform(-92,-92,0.46,0.46);

	this.instance_7 = new lib.images08();
	this.instance_7.setTransform(-92,-92,0.46,0.46);

	this.instance_8 = new lib.images09();
	this.instance_8.setTransform(-92,-92,0.46,0.46);

	this.instance_9 = new lib.images10();
	this.instance_9.setTransform(-92,-92,0.46,0.46);

	this.instance_10 = new lib.images11();
	this.instance_10.setTransform(-92,-92,0.46,0.46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{text:"0"}},{t:this.instance}]}).to({state:[{t:this.text,p:{text:"1"}},{t:this.instance_1}]},1).to({state:[{t:this.text,p:{text:"2"}},{t:this.instance_2}]},1).to({state:[{t:this.text,p:{text:"3"}},{t:this.instance_3}]},1).to({state:[{t:this.text,p:{text:"4"}},{t:this.instance_4}]},1).to({state:[{t:this.text,p:{text:"5"}},{t:this.instance_5}]},1).to({state:[{t:this.text,p:{text:"6"}},{t:this.instance_6}]},1).to({state:[{t:this.text,p:{text:"7"}},{t:this.instance_7}]},1).to({state:[{t:this.text,p:{text:"8"}},{t:this.instance_8}]},1).to({state:[{t:this.text,p:{text:"9"}},{t:this.instance_9}]},1).to({state:[{t:this.text,p:{text:"10"}},{t:this.instance_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-92,184,184);


(lib.exitFullScreenBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BACF00").s().p("AikClIAAlJIFJAAIAAFJg");
	this.shape.setTransform(0.5,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-18,33,33);


(lib.FullScreenButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icons
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D9D195").ss(4,2,0,3).p("ADIhKIh9AAIAAh9ABLDIIAAh9IB9AAAhKjHIAAB9Ih9AAAjHBLIB9AAIAAB9");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// hit
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AkrEsIAApXIJXAAIAAJXg");
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BACF00").s().p("AgGCLIkZAAIAAkWIEZAAIAAiWIEmEiIkmEhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-28.9,57.6,57.9);


(lib.YouWinAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// anim
	this.instance = new lib.YouWin("single",0);
	this.instance.setTransform(0,0,0.05,0.05);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},29,cjs.Ease.backOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-359,-115.6,718.1,337.9);


(lib.YouLoseAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// anim
	this.instance = new lib.YouLose("single",0);
	this.instance.setTransform(0,0,0.05,0.05);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},29,cjs.Ease.backOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-402.1,-143,804.3,310.3);


(lib.YesButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("YES", "normal 700 48px 'Passion One'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 51;
	this.tf.lineWidth = 98;
	this.tf.parent = this;
	this.tf.setTransform(0,-24.35);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.tf);
	}

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({x:4.8,y:-26.75},0).wait(1).to({font:"normal 700 44px 'Passion One'",lineHeight:46.55},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec1("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec1("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.7,-35.6,159.5,71.2);


(lib.TapToStartAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tapToStart
	this.instance = new lib.TapToStart("single",0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},59,cjs.Ease.sineInOut).wait(30).to({startPosition:0},0).to({alpha:0},60,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.1,-36.4,412.29999999999995,72.9);


(lib.PlayButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("PLAY", "normal 700 68px 'Passion One'", "#BACF00");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 71;
	this.tf.lineWidth = 174;
	this.tf.parent = this;
	this.tf.setTransform(-9.75,-34.45);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.tf);
	}

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({x:5,y:-36.45,color:"#FFFFFF"},0).wait(1).to({font:"normal 700 64px 'Passion One'",lineHeight:66.85},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec("single",0);
	this.instance.setTransform(-10.15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9,x:0},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.1,-52,247.39999999999998,103.9);


(lib.PlayAgainButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("PLAY AGAIN", "normal 700 68px 'Passion One'", "#BACF00");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 71;
	this.tf.lineWidth = 372;
	this.tf.parent = this;
	this.tf.setTransform(0,-34.45);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.tf);
	}

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({x:6.25,color:"#FFFFFF"},0).wait(1).to({font:"normal 700 64px 'Passion One'",lineHeight:66.85},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec3("single",0);
	this.instance.setTransform(-0.05,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9,x:0},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec3("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208,-52,415,104.2);


(lib.NoButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("NO", "normal 700 48px 'Passion One'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 51;
	this.tf.lineWidth = 98;
	this.tf.parent = this;
	this.tf.setTransform(0,-24.35);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.tf);
	}

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({x:4.8,y:-26.75},0).wait(1).to({font:"normal 700 44px 'Passion One'",lineHeight:46.55},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec1("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec1("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.7,-35.6,159.5,71.2);


(lib.MenuScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.playButton = new lib.PlayButton();
	this.playButton.name = "playButton";
	this.playButton.setTransform(480,487.65,0.5541,0.5541);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.PlayButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MenuScreen, new cjs.Rectangle(408.4,458.8,131.5,57.599999999999966), null);


(lib.MenuButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("EXIT", "normal 700 68px 'Passion One'", "#BACF00");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 71;
	this.tf.lineWidth = 160;
	this.tf.parent = this;
	this.tf.setTransform(0,-34.45);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.tf);
	}

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({x:5,y:-36.45,text:"MENU",color:"#FFFFFF",lineWidth:174},0).wait(1).to({font:"normal 700 64px 'Passion One'",lineHeight:66.85},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec("single",0);
	this.instance.setTransform(0.45,0,0.9288,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9,x:0},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-52,237.3,103.9);


(lib.LoseScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// youLose
	this.instance = new lib.YouLoseAnim();
	this.instance.setTransform(480,147.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// menuButton
	this.menuButton = new lib.MenuButton();
	this.menuButton.name = "menuButton";
	this.menuButton.setTransform(487.9,375.7,0.668,0.668,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.menuButton, 0, 1, 2, false, new lib.MenuButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.menuButton).wait(1));

	// playButton
	this.playAgainButton = new lib.PlayAgainButton();
	this.playAgainButton.name = "playAgainButton";
	this.playAgainButton.setTransform(480.25,467.2,0.668,0.668,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.playAgainButton, 0, 1, 2, false, new lib.PlayAgainButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playAgainButton).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LoseScreen, new cjs.Rectangle(341.2,140.8,277.2,361.2), null);


(lib.LogoScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_179 = function() {
		root.gotoAndStop("menu");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// logo
	this.instance = new lib.Logo("single",0);
	this.instance.setTransform(480,270);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},59,cjs.Ease.sineInOut).wait(60).to({startPosition:0},0).to({alpha:0},60,cjs.Ease.sineIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(111,137,738.5,266.2);


(lib.fullScreenBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.fullScreenButton = new lib.FullScreenButton();
	this.fullScreenButton.name = "fullScreenButton";
	this.fullScreenButton.setTransform(0.5,0.5);
	new cjs.ButtonHelper(this.fullScreenButton, 0, 1, 2, false, new lib.FullScreenButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.fullScreenButton).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-29.5,60,60);


(lib.FadeButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rec
	this.instance = new lib.Rec2("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-270,960,540);


(lib.CardAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {front:1,back:30};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(31));

	// numbers
	this.faces = new lib.Faces();
	this.faces.name = "faces";
	this.faces.setTransform(0,0,0.0028,1);
	this.faces.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.faces).wait(14).to({visible:true},0).to({scaleX:1},15).to({scaleX:0.0028},15).to({_off:true},1).wait(15));

	// rec
	this.instance = new lib.LOGO203();
	this.instance.setTransform(-40,-41,0.1385,0.1385);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BACF00").ss(1,1,1).p("At9t9Ib7AAIAAb7I77AAg");
	this.shape.setTransform(-0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("At9t9Ib7AAIAAb7I77AAg");
	this.shape_1.setTransform(-0.025,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("As5t9IZzAQIAAbbI5zAQg");
	this.shape_2.setTransform(-0.025,-0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ar1t9IXrAfIAAa9I3rAfg");
	this.shape_3.setTransform(-0.025,-0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aqxt9IVjAvIAAadI1jAvg");
	this.shape_4.setTransform(-0.05,-0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("Apst9ITZA/IAAZ9IzZA/g");
	this.shape_5.setTransform(-0.05,-0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aoot9IRRBOIAAZfIxRBOg");
	this.shape_6.setTransform(-0.05,-0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ankt9IPJBeIAAY/IvJBeg");
	this.shape_7.setTransform(-0.025,-0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("Amgt9INBBuIAAYfItBBug");
	this.shape_8.setTransform(-0.05,-0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("Albt9IK3B+IAAX/Iq3B+g");
	this.shape_9.setTransform(-0.05,-0.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkXt9IIvCNIAAXhIovCNg");
	this.shape_10.setTransform(-0.05,-0.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjTt9IGnCdIAAXBImnCdg");
	this.shape_11.setTransform(-0.025,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiPt9IEfCtIAAWhIkfCtg");
	this.shape_12.setTransform(-0.05,-0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhKt9ICVC9IAAWCIiVC8g");
	this.shape_13.setTransform(-0.025,-0.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgGt9IANDMIAAVjIgNDMg");
	this.shape_14.setTransform(-0.05,-0.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAHt9IgNDMIAAVjIANDMg");
	this.shape_15.setTransform(-0.05,-0.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhBq+ICDi/IAAb7IiDi+g");
	this.shape_16.setTransform(-0.025,-0.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah9rMID7ixIAAb7Ij7ixg");
	this.shape_17.setTransform(-0.05,-0.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ai4raIFxijIAAb7Ilxijg");
	this.shape_18.setTransform(-0.025,-0.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjzroIHniVIAAb7InniVg");
	this.shape_19.setTransform(-0.05,-0.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("Akur1IJdiIIAAb7IpdiIg");
	this.shape_20.setTransform(-0.05,-0.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlqsDILVh6IAAb7IrVh6g");
	this.shape_21.setTransform(-0.05,-0.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmlsRINLhsIAAb7ItLhsg");
	this.shape_22.setTransform(-0.025,-0.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AngseIPBhfIAAb7IvBhfg");
	this.shape_23.setTransform(-0.025,-0.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,1,1).p("AobssIQ3hRIAAb7Iw3hRg");
	this.shape_24.setTransform(-0.025,-0.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,1,1).p("ApWs5ISthEIAAb7IythEg");
	this.shape_25.setTransform(-0.025,-0.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1,1,1).p("AqRtHIUjg2IAAb7I0jg2g");
	this.shape_26.setTransform(-0.025,-0.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArMtUIWZgpIAAb7I2Zgpg");
	this.shape_27.setTransform(-0.025,-0.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("AsHtiIYPgbIAAb7I4Pgbg");
	this.shape_28.setTransform(-0.025,-0.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("AtCtvIaFgOIAAb7I6FgOg");
	this.shape_29.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.1385,x:-40,scaleY:0.1385}}]}).to({state:[{t:this.shape_1},{t:this.instance,p:{scaleX:0.1385,x:-40,scaleY:0.1385}}]},1).to({state:[{t:this.shape_2},{t:this.instance,p:{scaleX:0.1385,x:-40,scaleY:0.1385}}]},1).to({state:[{t:this.shape_3},{t:this.instance,p:{scaleX:0.1176,x:-34,scaleY:0.1385}}]},1).to({state:[{t:this.shape_4},{t:this.instance,p:{scaleX:0.1176,x:-34,scaleY:0.1385}}]},1).to({state:[{t:this.shape_5},{t:this.instance,p:{scaleX:0.1038,x:-30,scaleY:0.1385}}]},1).to({state:[{t:this.shape_6},{t:this.instance,p:{scaleX:0.1038,x:-30,scaleY:0.1385}}]},1).to({state:[{t:this.shape_7},{t:this.instance,p:{scaleX:0.0899,x:-26,scaleY:0.1385}}]},1).to({state:[{t:this.shape_8},{t:this.instance,p:{scaleX:0.0726,x:-21,scaleY:0.1385}}]},1).to({state:[{t:this.shape_9},{t:this.instance,p:{scaleX:0.0622,x:-18,scaleY:0.1385}}]},1).to({state:[{t:this.shape_10},{t:this.instance,p:{scaleX:0.0448,x:-13,scaleY:0.1385}}]},1).to({state:[{t:this.shape_11},{t:this.instance,p:{scaleX:0.0379,x:-11,scaleY:0.1385}}]},1).to({state:[{t:this.shape_12},{t:this.instance,p:{scaleX:0.0379,x:-11,scaleY:0.1385}}]},1).to({state:[{t:this.shape_13},{t:this.instance,p:{scaleX:0.0312,x:-9,scaleY:0.1385}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).to({state:[{t:this.shape_15}]},29).to({state:[{t:this.shape_16},{t:this.instance,p:{scaleX:0.0274,x:-8,scaleY:0.1384}}]},1).to({state:[{t:this.shape_17},{t:this.instance,p:{scaleX:0.0275,x:-8,scaleY:0.1385}}]},1).to({state:[{t:this.shape_18},{t:this.instance,p:{scaleX:0.0275,x:-8,scaleY:0.1385}}]},1).to({state:[{t:this.shape_19},{t:this.instance,p:{scaleX:0.0483,x:-14,scaleY:0.1385}}]},1).to({state:[{t:this.shape_20},{t:this.instance,p:{scaleX:0.0622,x:-18,scaleY:0.1385}}]},1).to({state:[{t:this.shape_21},{t:this.instance,p:{scaleX:0.083,x:-24,scaleY:0.1385}}]},1).to({state:[{t:this.shape_22},{t:this.instance,p:{scaleX:0.0865,x:-25,scaleY:0.1385}}]},1).to({state:[{t:this.shape_23},{t:this.instance,p:{scaleX:0.0865,x:-25,scaleY:0.1385}}]},1).to({state:[{t:this.shape_24},{t:this.instance,p:{scaleX:0.1038,x:-30,scaleY:0.1385}}]},1).to({state:[{t:this.shape_25},{t:this.instance,p:{scaleX:0.1107,x:-32,scaleY:0.1385}}]},1).to({state:[{t:this.shape_26},{t:this.instance,p:{scaleX:0.1211,x:-35,scaleY:0.1385}}]},1).to({state:[{t:this.shape_27},{t:this.instance,p:{scaleX:0.1211,x:-35,scaleY:0.1385}}]},1).to({state:[{t:this.shape_28},{t:this.instance,p:{scaleX:0.1211,x:-35,scaleY:0.1385}}]},1).to({state:[{t:this.shape_29},{t:this.instance,p:{scaleX:0.1385,x:-40,scaleY:0.1385}}]},1).to({state:[{t:this.shape_1},{t:this.instance,p:{scaleX:0.1385,x:-40,scaleY:0.1385}}]},1).wait(1));

	// rec
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AvgPhIAA/BIfBAAIAAfBg");
	this.shape_30.setTransform(-0.025,-0.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AuUvgIcpARIAAefI8pARg");
	this.shape_31.setTransform(-0.025,-0.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AtJvgIaTAjIAAd7I6TAjg");
	this.shape_32.setTransform(-0.025,-0.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ar9vgIX7A0IAAdZI37A0g");
	this.shape_33.setTransform(-0.025,-0.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AqxvgIVjBGIAAc1I1jBGg");
	this.shape_34.setTransform(-0.025,-0.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AplvgITLBXIAAcTIzLBXg");
	this.shape_35.setTransform(-0.025,-0.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AoavgIQ1BpIAAbvIw1Bpg");
	this.shape_36.setTransform(-0.05,-0.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AnOvgIOdB6IAAbNIudB6g");
	this.shape_37.setTransform(-0.025,-0.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AmCvgIMFCLIAAarIsFCLg");
	this.shape_38.setTransform(-0.05,-0.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ak2vgIJtCdIAAaHIptCdg");
	this.shape_39.setTransform(-0.05,-0.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AjqvgIHVCuIAAZlInVCug");
	this.shape_40.setTransform(-0.05,-0.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AifvgIE/DAIAAZBIk/DAg");
	this.shape_41.setTransform(-0.05,-0.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhTvgICnDRIAAYfIinDRg");
	this.shape_42.setTransform(-0.05,-0.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHvgIAPDjIAAX7IgPDjg");
	this.shape_43.setTransform(-0.05,-0.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgHL+IAA37IAPjjIAAfBg");
	this.shape_44.setTransform(-0.05,-0.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhOMOIAA4bICdjTIAAfBg");
	this.shape_45.setTransform(-0.05,-0.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AiUMfIAA49IEpjCIAAfBg");
	this.shape_46.setTransform(-0.025,-0.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AjaMvIAA5dIG1iyIAAfBg");
	this.shape_47.setTransform(-0.05,-0.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AkgM/IAA59IJBiiIAAfBg");
	this.shape_48.setTransform(-0.05,-0.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AlnNPIAA6dILPiSIAAfBg");
	this.shape_49.setTransform(-0.05,-0.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AmtNgIAA6/INbiBIAAfBg");
	this.shape_50.setTransform(-0.025,-0.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("An0NwIAA7fIPphxIAAfBg");
	this.shape_51.setTransform(-0.025,-0.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ao6OAIAA7/IR1hhIAAfBg");
	this.shape_52.setTransform(-0.05,-0.025);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AqAOQIAA8fIUBhRIAAfBg");
	this.shape_53.setTransform(-0.025,-0.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("ArHOgIAA8/IWPhBIAAfBg");
	this.shape_54.setTransform(-0.025,-0.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AsNOxIAA9hIYbgwIAAfBg");
	this.shape_55.setTransform(-0.025,-0.025);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AtUPBIAA+BIapggIAAfBg");
	this.shape_56.setTransform(-0.05,-0.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AuaPRIAA+hIc1gQIAAfBg");
	this.shape_57.setTransform(-0.025,-0.025);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AuavgIc1AQIAAehI81AQg");
	this.shape_58.setTransform(-0.025,-0.025);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AtUvgIapAgIAAeBI6pAgg");
	this.shape_59.setTransform(-0.05,-0.025);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AsNvgIYbAwIAAdhI4bAwg");
	this.shape_60.setTransform(-0.025,-0.025);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("ArHvgIWPBBIAAc/I2PBBg");
	this.shape_61.setTransform(-0.025,-0.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AqAvgIUBBRIAAcfI0BBRg");
	this.shape_62.setTransform(-0.025,-0.025);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("Ao6vgIR1BhIAAb/Ix1Bhg");
	this.shape_63.setTransform(-0.05,-0.025);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("An0vgIPpBxIAAbfIvpBxg");
	this.shape_64.setTransform(-0.025,-0.025);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AmtvgINbCBIAAa/ItbCBg");
	this.shape_65.setTransform(-0.025,-0.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AlnvgILPCSIAAadIrPCSg");
	this.shape_66.setTransform(-0.05,-0.025);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AkgvgIJBCiIAAZ9IpBCig");
	this.shape_67.setTransform(-0.05,-0.025);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AjavgIG1CyIAAZdIm1Cyg");
	this.shape_68.setTransform(-0.05,-0.025);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AiUvgIEpDCIAAY9IkpDCg");
	this.shape_69.setTransform(-0.025,-0.025);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AhOvgICdDTIAAYbIidDTg");
	this.shape_70.setTransform(-0.05,-0.025);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AhIMNIAA4ZICRjUIAAfBg");
	this.shape_71.setTransform(-0.05,-0.025);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AiLMdIAA45IEWjEIAAfBg");
	this.shape_72.setTransform(-0.05,-0.025);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AjMMsIAA5XIGZi1IAAfBg");
	this.shape_73.setTransform(-0.05,-0.025);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AkOM7IAA51IIdimIAAfBg");
	this.shape_74.setTransform(-0.025,-0.025);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AlPNKIAA6TIKfiXIAAfBg");
	this.shape_75.setTransform(-0.05,-0.025);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AmRNZIAA6xIMjiIIAAfBg");
	this.shape_76.setTransform(-0.05,-0.025);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AnTNoIAA7PIOnh5IAAfBg");
	this.shape_77.setTransform(-0.025,-0.025);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AoUN3IAA7tIQphqIAAfBg");
	this.shape_78.setTransform(-0.05,-0.025);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("ApWOGIAA8LISthbIAAfBg");
	this.shape_79.setTransform(-0.025,-0.025);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AqYOWIAA8rIUxhLIAAfBg");
	this.shape_80.setTransform(-0.025,-0.025);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("ArZOlIAA9JIWzg8IAAfBg");
	this.shape_81.setTransform(-0.05,-0.025);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AsbO0IAA9nIY3gtIAAfBg");
	this.shape_82.setTransform(-0.025,-0.025);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AtdPDIAA+FIa7geIAAfBg");
	this.shape_83.setTransform(-0.025,-0.025);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AufPSIAA+jIc/gPIAAfBg");
	this.shape_84.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_30}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.3,-99.3,198.6,198.6);


(lib.Card = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// anim
	this.anim = new lib.CardAnim();
	this.anim.name = "anim";

	this.timeline.addTween(cjs.Tween.get(this.anim).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Card, new cjs.Rectangle(-99.3,-99.3,198.6,198.6), null);


(lib.ArrowButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arrow
	this.instance = new lib.Arrow("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-2.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-2.45},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Hit("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.WinScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// youWin
	this.instance = new lib.YouWinAnim();
	this.instance.setTransform(480,147.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// menuButton
	this.menuButton = new lib.MenuButton();
	this.menuButton.name = "menuButton";
	this.menuButton.setTransform(488,413,0.681,0.681);
	new cjs.ButtonHelper(this.menuButton, 0, 1, 2, false, new lib.MenuButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.menuButton).wait(1));

	// playButton
	this.playAgainButton = new lib.PlayAgainButton();
	this.playAgainButton.name = "playAgainButton";
	this.playAgainButton.setTransform(480.2,494,0.681,0.681);
	new cjs.ButtonHelper(this.playAgainButton, 0, 1, 2, false, new lib.PlayAgainButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playAgainButton).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WinScreen, new cjs.Rectangle(338.5,142,282.6,387.6), null);


(lib.TapToStartScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// invisibleButton
	this.instance = new lib.InvisibleButton();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tapToStart
	this.instance_1 = new lib.TapToStartAnim();
	this.instance_1.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TapToStartScreen, new cjs.Rectangle(0,0,960,540), null);


(lib.QuitPrompt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// box
	this.instance = new lib.sad02();
	this.instance.setTransform(316,112,0.1352,0.1352);

	this.noButton = new lib.NoButton();
	this.noButton.name = "noButton";
	this.noButton.setTransform(605.5,367.25);
	new cjs.ButtonHelper(this.noButton, 0, 1, 2, false, new lib.NoButton(), 3);

	this.yesButton = new lib.YesButton();
	this.yesButton.name = "yesButton";
	this.yesButton.setTransform(354.5,367.25);
	new cjs.ButtonHelper(this.yesButton, 0, 1, 2, false, new lib.YesButton(), 3);

	this.text = new cjs.Text("Are you sure you want to quit?", "normal 400 44px 'Passion One'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 324;
	this.text.parent = this;
	this.text.setTransform(480,36.2);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgpjAedQheABAAhfMAAAg59QAAhfBeABMBTGAAAQBggBAABfMAAAA59QAABfhggBg");
	this.shape.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text},{t:this.yesButton},{t:this.noButton},{t:this.instance}]}).wait(1));

	// fade
	this.hit = new lib.FadeButton();
	this.hit.name = "hit";
	this.hit.setTransform(480,270);
	this.hit.alpha = 0.75;
	new cjs.ButtonHelper(this.hit, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.QuitPrompt, new cjs.Rectangle(0,0,960,540), null);


(lib.Deck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cards
	this.instance = new lib.Card();
	this.instance.setTransform(370.05,90.5,0.911,0.911);

	this.instance_1 = new lib.Card();
	this.instance_1.setTransform(-370.05,90.5,0.911,0.911);

	this.instance_2 = new lib.Card();
	this.instance_2.setTransform(-370.1,-95.1,0.911,0.911,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.Card();
	this.instance_3.setTransform(370.05,-95.1,0.911,0.911,0,0,0,0,-0.1);

	this.instance_4 = new lib.Card();
	this.instance_4.setTransform(185,90.5,0.911,0.911);

	this.instance_5 = new lib.Card();
	this.instance_5.setTransform(-0.05,90.5,0.911,0.911);

	this.instance_6 = new lib.Card();
	this.instance_6.setTransform(-185.05,90.5,0.911,0.911);

	this.instance_7 = new lib.Card();
	this.instance_7.setTransform(185.05,-95,0.911,0.911);

	this.instance_8 = new lib.Card();
	this.instance_8.setTransform(0,-95,0.911,0.911);

	this.instance_9 = new lib.Card();
	this.instance_9.setTransform(-185.1,-95.1,0.911,0.911,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Deck, new cjs.Rectangle(-460.5,-185.5,921,366.5), null);


(lib.InGameScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// deck
	this.backButton = new lib.ArrowButton();
	this.backButton.name = "backButton";
	this.backButton.setTransform(45.85,34.55);
	new cjs.ButtonHelper(this.backButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeTF = new cjs.Text("00:00", "normal 400 64px 'Passion One'", "#BACF00");
	this.timeTF.name = "timeTF";
	this.timeTF.textAlign = "center";
	this.timeTF.lineHeight = 68;
	this.timeTF.lineWidth = 254;
	this.timeTF.parent = this;
	this.timeTF.setTransform(480,1.5);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.timeTF);
	}

	this.deck = new lib.Deck();
	this.deck.name = "deck";
	this.deck.setTransform(480,299.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.deck},{t:this.timeTF},{t:this.backButton}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InGameScreen, new cjs.Rectangle(14.6,-0.5,925.9,480.8), null);


// stage content:
(lib.html5_canvas_memory_game_v31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {logo:1,menu:2,inGame:3,lose:4,win:5};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5];
	// timeline functions:
	this.frame_0 = function() {
		function tapToStartState()
		{
			window.root = exportRoot;
			document.querySelector(".lds-ripple").remove();
			document.body.style.backgroundColor =  lib.properties.color;
			createjs.Touch.enable(stage);
			fixText(0.14);
			root.stop();
			
			root.tapToStartScreen.on("click", function()
			{
				root.gotoAndStop("logo");
			}, null, true);
		}
		
		function fixText(lineHeightRatio)
		{
			const chrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
			const firefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
			
			if ((chrome || firefox) && createjs)
			{
				createjs.Text.prototype._drawTextLine = function(ctx, text, y)
				{
					if (this.textBaseline === "top")
						y += (this.lineHeight || this.getMeasuredLineHeight()) * lineHeightRatio;
					ctx[this.outline ? "strokeText" : "fillText"](text, 0, y, this.maxwidth || 0xFFFF);
				};
			}
		}
		
		tapToStartState();
	}
	this.frame_1 = function() {
		function logoState()
		{
			game.Sound.play("BGM0", "bgm", true, { volume: 0.02, loop: -1 });
		}
		
		logoState();
	}
	this.frame_2 = function() {
		function menuState()
		{
			root.menuScreen.playButton.on("click", function()
			{
				game.Sound.play("Button", "sfx", true, { volume: 0.5 });
				root.gotoAndStop("inGame");
			});	
		}
		
		if (!root.menuStateStarted)
		{
			menuState();
			root.menuStateStarted = true;
		}
		// Full-Screen Function
		function requestFullScreen() {
		    let elem = document.documentElement;
		    if (elem.requestFullscreen) elem.requestFullscreen();
		    else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
		    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
		    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
		}
		
		// Full-Screen Button Event Listener
		root.fullScreenBtn.on("click", function() {
		    requestFullScreen();
		    root.fullScreenBtn.visible = false; // Hide button after entering full screen
		});
		
		// Menu State Setup for Frame 3
		function menuState() {
		    // Setup any other home screen functionalities here
		    root.menuScreen.playButton.on("click", function() {
		        game.Sound.play("Button", "sfx", true, { volume: 0.5 });
		        root.gotoAndStop("inGame");
		    });
		}
		
		// Initialize the menuState on Frame 3
		if (!root.menuStateStarted) {
		    menuState();
		    root.menuStateStarted = true;
		}
		// Full-Screen and Exit Full-Screen Functions
		function requestFullScreen() {
		    let elem = document.documentElement;
		    if (elem.requestFullscreen) elem.requestFullscreen();
		    else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
		    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
		    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
		}
		
		function exitFullScreen() {
		    if (document.exitFullscreen) document.exitFullscreen();
		    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
		    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
		    else if (document.msExitFullscreen) document.msExitFullscreen();
		}
		
		// Event Listeners for Full-Screen and Exit Full-Screen Buttons
		root.fullScreenBtn.on("click", function() {
		    requestFullScreen();
		    root.fullScreenBtn.visible = false;      // Hide Full Screen button
		    root.exitFullScreenBtn.visible = true;   // Show Exit Full Screen button
		});
		
		root.exitFullScreenBtn.on("click", function() {
		    exitFullScreen();
		    root.fullScreenBtn.visible = true;       // Show Full Screen button
		    root.exitFullScreenBtn.visible = false;  // Hide Exit Full Screen button
		});
		
		// Detect Full-Screen Changes and Toggle Button Visibility
		document.addEventListener("fullscreenchange", function() {
		    if (document.fullscreenElement) {
		        root.fullScreenBtn.visible = false;
		        root.exitFullScreenBtn.visible = true;
		    } else {
		        root.fullScreenBtn.visible = true;
		        root.exitFullScreenBtn.visible = false;
		    }
		});
		
		// Menu State Setup for Frame 3
		function menuState() {
		    // Additional setup for the home screen
		    root.menuScreen.playButton.on("click", function() {
		        game.Sound.play("Button", "sfx", true, { volume: 0.5 });
		        root.gotoAndStop("inGame");
		    });
		}
		
		// Initialize the menuState on Frame 3
		if (!root.menuStateStarted) {
		    menuState();
		    root.menuStateStarted = true;
		}
	}
	this.frame_3 = function() {
		var memoryGame, timer;
		
		function inGameState()
		{
			memoryGame = new game.MemoryGame
			({
				cards: root.inGameScreen.deck.children,
				callbacks:
				{
					onSetup: function()
					{
						console.log("memoryGame onSetup");
					},
					onMemorize: function()
					{
						console.log("memoryGame onMemorize");
					},
					onStart: function()
					{
						console.log("memoryGame onStart");
						timer.start();
					},
					onClick: function()
					{
						console.log("memoryGame onClick");
					},
					onFlip: function()
					{
						console.log("memoryGame onFlip");
						game.Sound.play("Flip", "sfx", true, { volume: 0.3 });
					},
					onPair: function()
					{
						console.log("memoryGame onPair");
					},
					onMiss: function()
					{
						console.log("memoryGame onMiss");
						game.Sound.play("Wrong", "sfx", true, { volume: 0.5 });
					},
					onMatch: function()
					{
						console.log("memoryGame onMatch");
						game.Sound.play("Right", "sfx", true, { volume: 0.5 });
					},
					onBeforeWin: function()
					{
						console.log("memoryGame onBeforeWin");
					},
					onWin: function()
					{
						console.log("memoryGame onWin");
						
						clear();
						root.gotoAndStop("win");
					}
				}
			});
		
			timer = new game.Timer
			({
				initialTime: 60000, // time in milliseconds | 1000 ms = 1 s
				callbacks:
				{
					onStart: function()
					{
						console.log("timer onStart");
						updateText(this);
					},
					onUpdate: function()
					{
						console.log("timer onUpdate");
						updateText(this);
					},
					onFinish: function()
					{
						console.log("timer onFinish");
						
						if (!memoryGame.win)
						{
							clear();
							root.gotoAndStop("lose");
						}
					}
				}
			});
		
			updateText(timer);
		
			root.inGameScreen.backButton.clickEvent = root.inGameScreen.backButton.on("click", addPrompt);
		}
		
		function addPrompt()
		{
			game.Sound.play("Button", "sfx", true, { volume: 0.5 });
		
			root.prompt = new lib.QuitPrompt();
			root.addChild(root.prompt);
			root.prompt.clickEvent = root.prompt.on("click", onPromptClick);
		}
		
		function onPromptClick(e)
		{
			if (e.target === e.currentTarget.noButton || e.target === e.currentTarget.hit)
			{
				game.Sound.play("Button", "sfx", true, { volume: 0.5 });
				removePrompt();
			}
			else if (e.target === e.currentTarget.yesButton)
			{
				game.Sound.play("Button", "sfx", true, { volume: 0.5 });
				clear();
				root.gotoAndStop("menu");
			}
		}
		
		function removePrompt()
		{
			if (!root.prompt)
				return;
			
			root.prompt.off("click", root.prompt.clickEvent);
			root.prompt.parent.removeChild(root.prompt);
			root.prompt._off = true;
			root.prompt = null;
		}
		
		function clear()
		{
			removePrompt();
			memoryGame.destroy();
			memoryGame = null;
			timer.destroy();
			timer = null;
			root.inGameScreen.backButton.off("click", root.inGameScreen.backButton.clickEvent);
		}
		
		function updateText(timer)
		{
			var time = timer.toTimecode(timer.currentTime);
			root.inGameScreen.timeTF.text = time.minutes + ":" + time.seconds;
		}
		
		inGameState();
	}
	this.frame_4 = function() {
		function loseState()
		{
			root.loseScreen.menuButton.on("click", function()
			{
				game.Sound.stop("bgm1");
				root.gotoAndStop("menu");
			});
		
			root.loseScreen.playAgainButton.on("click", function()
			{
				game.Sound.stop("bgm1");
				root.gotoAndStop("inGame");
			});
		
			game.Sound.play("Lose", "bgm1", true, { volume: 0.1 });
		}
		
		if (!root.loseStateStarted)
		{
			loseState();
			root.loseStateStarted = true;
		}
	}
	this.frame_5 = function() {
		function winState()
		{
			root.winScreen.menuButton.on("click", function()
			{
				game.Sound.stop("bgm1");
				root.gotoAndStop("menu");
			});
		
			root.winScreen.playAgainButton.on("click", function()
			{
				game.Sound.stop("bgm1");
				root.gotoAndStop("inGame");
			});
		
			game.Sound.play("Win", "bgm1", true, { volume: 0.1 });
		}
		
		if (!root.winStateStarted)
		{
			winState();
			root.winStateStarted = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// Layer_1
	this.fullScreenBtn = new lib.fullScreenBtn();
	this.fullScreenBtn.name = "fullScreenBtn";
	this.fullScreenBtn.setTransform(930.5,30.55);
	this.fullScreenBtn._off = true;
	new cjs.ButtonHelper(this.fullScreenBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.fullScreenBtn).wait(2).to({_off:false},0).wait(4));

	// screens
	this.tapToStartScreen = new lib.TapToStartScreen();
	this.tapToStartScreen.name = "tapToStartScreen";

	this.instance = new lib.LogoScreen();

	this.exitFullScreenBtn = new lib.exitFullScreenBtn();
	this.exitFullScreenBtn.name = "exitFullScreenBtn";
	this.exitFullScreenBtn.setTransform(929.35,32.8,1.147,1.1163);
	new cjs.ButtonHelper(this.exitFullScreenBtn, 0, 1, 1);

	this.menuScreen = new lib.MenuScreen();
	this.menuScreen.name = "menuScreen";
	this.menuScreen.setTransform(2.8,-17.55);

	this.instance_1 = new lib.TPNMHOme();
	this.instance_1.setTransform(0,-7,0.4859,0.4859);

	this.inGameScreen = new lib.InGameScreen();
	this.inGameScreen.name = "inGameScreen";

	this.loseScreen = new lib.LoseScreen();
	this.loseScreen.name = "loseScreen";

	this.winScreen = new lib.WinScreen();
	this.winScreen.name = "winScreen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tapToStartScreen}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.menuScreen},{t:this.exitFullScreenBtn}]},1).to({state:[{t:this.inGameScreen}]},1).to({state:[{t:this.loseScreen}]},1).to({state:[{t:this.winScreen}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,263,491.79999999999995,276.6);
// library properties:
lib.properties = {
	id: 'FC643B0B3A4F44D9AEDF61053C8EE40A',
	width: 960,
	height: 540,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/cryingface01.png", id:"cryingface01"},
		{src:"images/logofull02.png", id:"logofull02"},
		{src:"images/sad02.png", id:"sad02"},
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png", id:"index_atlas_3"},
		{src:"sounds/Lose.mp3", id:"Lose"},
		{src:"sounds/Flip.mp3", id:"Flip"},
		{src:"sounds/Win.mp3", id:"Win"},
		{src:"sounds/BGM0.mp3", id:"BGM0"},
		{src:"sounds/Button.mp3", id:"Button"},
		{src:"sounds/Wrong.mp3", id:"Wrong"},
		{src:"sounds/Right.mp3", id:"Right"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FC643B0B3A4F44D9AEDF61053C8EE40A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;