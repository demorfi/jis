# JiS
-------
JiS is “Image is a slider for a framework JQuery”

Required
========
* jQuery framework >= 1.8
* [* Java for build]

Features
========
* Light weight (min. 14KB code)
* Smooth animation with low cpu usage
* Cross browser support (IE, Chrome, Firefox, Opera, Vivaldi)
* Wide API interfaces
* Easy to adapt skins, customize the way you like
* Uses a module animation
* Supports custom animations
* Customize the way you like

How to Use
==========

Install the slider in the footer
```javascript
  <script src="/javascript/jis.jquery.min.js"></script>
  <script>$(function() {$('#slider').jis({})});</script>
```

Markup is pretty straightforward, it looks something like this
``` html
<ul id="slider">
  <li><a href="#"><img src="slide-1.jpg" alt="Title slide 1" /></a></li>
  <li><a href="#"><img src="slide-2.jpg" alt="Title slide 2" /></a></li>
  <li><a href="#"><img src="slide-3.jpg" alt="Title slide 3" /></a></li>
</ul>
```

or add special class for your `<ul>` element `<ul class="jis-trigger">`.

Options
=======
<table>
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>title</td>
    <td>true</td>
    <td>[boolean] Display title text</td>
  </tr>
  <tr>
    <td>effect</td>
    <td>'random'</td>
    <td>[string] or [function] Slides used effect. Supported ['random', 'selectRandom', 'randomSlide', 'randomStrips', 'slideX', 'slideY', 'strips']</td>
  </tr>
  <tr>
    <td>row</td>
    <td>3</td>
    <td>[number] Count row in create table effect</td>
  </tr>
  <tr>
    <td>cell</td>
    <td>20</td>
    <td>[number] Count cell in create table effect</td>
  </tr>
  <tr>
    <td>auto</td>
    <td>true</td>
    <td>[boolean] Auto scrolling slideshow</td>
  </tr>
  <tr>
    <td>speed</td>
    <td>800</td>
    <td>[number] Speed scrolling slideshow</td>
  </tr>
  <tr>
    <td>pause</td>
    <td>3500</td>
    <td>[number] Pause before scrolling slideshow</td>
  </tr>
  <tr>
    <td>pauseHover</td>
    <td>true</td>
    <td>[boolean] Stop scrolling slideshow in hover slide</td>
  </tr>
  <tr>
    <td>recursion</td>
    <td>true</td>
    <td>[boolean] Recursive scrolling slideshow</td>
  </tr>
  <tr>
    <td>start</td>
    <td>1</td>
    <td>[number] Start init slide</td>
  </tr>
  <tr>
    <td>directionNav</td>
    <td>true</td>
    <td>[boolean] Display navigation arrows</td>
  </tr>
  <tr>
    <td>controlNav</td>
    <td>true</td>
    <td>[boolean] Display navigation buttons</td>
  </tr>
  <tr>
    <td>random</td>
    <td>false</td>
    <td>[boolean] Start random init slide</td>
  </tr>
  <tr>
    <td>nextText</td>
    <td>'Next'</td>
    <td>[string] Text navigation arrow next</td>
  </tr>
  <tr>
    <td>prevText</td>
    <td>'Prev'</td>
    <td>[string] Text navigation arrow prev</td>
  </tr>
  <tr>
    <td>width</td>
    <td>false</td>
    <td>[boolean] or [string] Set the width of the slider</td>
  </tr>
  <tr>
    <td>height</td>
    <td>false</td>
    <td>[boolean] or [string] Set the height of the slider</td>
  </tr>
</table>

Callback
========
<table>
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>callback.init</td>
    <td>$.noop</td>
    <td>[function] Callback init slider</td>
  </tr>
  <tr>
    <td>callback.before</td>
    <td>$.noop</td>
    <td>[function] Callback for up to the next slide</td>
  </tr>
  <tr>
    <td>callback.after</td>
    <td>$.noop</td>
    <td>[function] Callback for up to the prev slide</td>
  </tr>
  <tr>
    <td>callback.last</td>
    <td>$.noop</td>
    <td>[function] Callback when the last slide</td>
  </tr>
  <tr>
    <td>callback.first</td>
    <td>$.noop</td>
    <td>[function] Callback when the first slide</td>
  </tr>
</table>

Animate
=======
<table>
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>animate.title</td>
    <td>function (title)</td>
    <td>[function] Animate title show slide</td>
  </tr>
</table>

Custom Animations
=================
```javascript
$.fn.jis.effect = $.extend({
  fade: function (current, next, params)
  {
      $(current).fadeOut(params.speed);
      this.saveStyle(next, ['position']);
      $(next).css('position', 'absolute').fadeIn(params.speed, $.proxy(function (current)
      {
          this.restoreStyle(current);
      }, this, next));
  }
}, $.fn.jis.effect);
```

or used option only for one animation

```javascript
$('#slider').jis({
  effect: function (current, next, params)
  {
      $(current).fadeOut(params.speed);
      this.saveStyle(next, ['position']);
      $(next).css('position', 'absolute').fadeIn(params.speed, $.proxy(function (current)
      {
          this.restoreStyle(current);
      }, this, next));
  }
});
```

Build
=====
```bash
cd ~ && git clone https://github.com/demorfi/jis.git jis && cd jis
make && ls builds -lX

# rebuild
make clean && make && ls builds -lX
```

or use ready files in directories.

Change Log
==========
v1.0 - Mar 03, 2015
--------------------
 * Initialize repository version 1.0

License
=======
JiS is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
