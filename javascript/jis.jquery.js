/*!
 * JiS is “Images slider for jQuery framework”.
 *
 * @author demorfi <demorfi@gmail.com>
 * @version 1.0
 * @source https://github.com/demorfi/jis
 * @license http://opensource.org/licenses/MIT Licensed under MIT License
 */
(function ($)
{

    /**
     * Initialize.
     *
     * @param {object} [options] Available options
     * @param {boolean} [options.title] Display title text
     * @param {string} [options.effect] Slides used effect [random, selectRandom, randomSlide, randomStrips, slideX, slideY, strips]
     * @param {int} [options.row] Count row in create table effect
     * @param {int} [options.cell] Count cell in create table effect
     * @param {boolean} [options.auto] Auto scrolling slideshow
     * @param {int} [options.speed] Speed scrolling slideshow
     * @param {int} [options.pause] Pause before scrolling slideshow
     * @param {boolean} [options.pauseHover] Stop scrolling slideshow in hover slide
     * @param {boolean} [options.recursion] Recursive scrolling slideshow
     * @param {int} [options.start] Start init slide
     * @param {boolean} [options.directionNav] Display navigation arrows
     * @param {boolean} [options.controlNav] Display navigation buttons
     * @param {boolean} [options.random] Start random init slide
     * @param {string} [options.nextText] Text navigation arrow next
     * @param {string} [options.prevText] Text navigation arrow prev
     * @param {string} [options.width] Set the width of the slider
     * @param {string} [options.height] Set the height of the slider
     * @param {object} [options.callback] Callback functions
     * @param {function} [options.callback.init] Callback init slider
     * @param {function} [options.callback.before] Callback for up to the next slide
     * @param {function} [options.callback.after] Callback for up to the prev slide
     * @param {function} [options.callback.last] Callback when the last slide
     * @param {function} [options.callback.first] Callback when the first slide
     * @param {function} [options.animate.title] Animate title show slide
     * @param {object} [options.class] Used css class list
     * @param {string} [options.class.wrapper] Use class for element jis-wrapper
     * @param {string} [options.class.title] Use class for element jis-title
     * @param {string} [options.class.direction] Use class for element jis-direction
     * @param {string} [options.class.directionNext] Use class for element jis-direction-next
     * @param {string} [options.class.directionPrev] Use class for element jis-direction-prev
     * @param {string} [options.class.control] Use class for element jis-control
     * @param {string} [options.class.controlList] Use class for element jis-control-list
     * @param {string} [options.class.selected] Use class for element jis-selected
     * @param {string} [options.class.init] Use class for element jis-init
     * @param {string} [options.class.loading] Use class for element jis-loading
     * @param {string} [options.class.last] Use class for element jis-slide-last
     * @param {string} [options.class.first] Use class for element jis-slide-first
     * @param {string} [options.class.recursion] Use class for element jis-slide-recursion
     * @return {object} jis
     */
    $.fn.jis = function (options)
    {
        var obj = new $__construct(this, options);
        obj.init();
        return (obj);
    };

    /**
     * Constructor application.
     * Merge default setting.
     *
     * @param {object} el <ul> html element
     * @param {object} [options] Available options
     * @param {boolean} [options.title] Display title text
     * @param {string} [options.effect] Slides used effect
     * @param {int} [options.row] Count row in create table effect
     * @param {int} [options.cell] Count cell in create table effect
     * @param {boolean} [options.auto] Auto scrolling slideshow
     * @param {int} [options.speed] Speed scrolling slideshow
     * @param {int} [options.pause] Pause before scrolling slideshow
     * @param {boolean} [options.pauseHover] Stop scrolling slideshow in hover slide
     * @param {boolean} [options.recursion] Recursive scrolling slideshow
     * @param {int} [options.start] Start init slide
     * @param {boolean} [options.directionNav] Display navigation arrows
     * @param {boolean} [options.controlNav] Display navigation buttons
     * @param {boolean} [options.random] Start random init slide
     * @param {string} [options.nextText] Text navigation arrow next
     * @param {string} [options.prevText] Text navigation arrow prev
     * @param {string} [options.width] Set the width of the slider
     * @param {string} [options.height] Set the height of the slider
     * @param {object} [options.callback] Callback functions
     * @param {function} [options.callback.init] Callback init slider
     * @param {function} [options.callback.before] Callback for up to the next slide
     * @param {function} [options.callback.after] Callback for up to the prev slide
     * @param {function} [options.callback.last] Callback when the last slide
     * @param {function} [options.callback.first] Callback when the first slide
     * @param {function} [options.animate.title] Animate title show slide
     * @param {object} [options.class] Used css class list
     * @param {string} [options.class.wrapper] Use class for element jis-wrapper
     * @param {string} [options.class.title] Use class for element jis-title
     * @param {string} [options.class.direction] Use class for element jis-direction
     * @param {string} [options.class.directionNext] Use class for element jis-direction-next
     * @param {string} [options.class.directionPrev] Use class for element jis-direction-prev
     * @param {string} [options.class.control] Use class for element jis-control
     * @param {string} [options.class.controlList] Use class for element jis-control-list
     * @param {string} [options.class.selected] Use class for element jis-selected
     * @param {string} [options.class.init] Use class for element jis-init
     * @param {string} [options.class.loading] Use class for element jis-loading
     * @param {string} [options.class.last] Use class for element jis-slide-last
     * @param {string} [options.class.first] Use class for element jis-slide-first
     * @param {string} [options.class.recursion] Use class for element jis-slide-recursion
     * @private
     * @constructor
     * @return {object} this
     */
    var $__construct = function (el, options)
    {
        this.version = 1.0;
        this.options = $.extend(true, {
            'title'       : true,
            'effect'      : 'random',
            'row'         : 3,
            'cell'        : 20,
            'auto'        : true,
            'speed'       : 800,
            'pause'       : 3500,
            'pauseHover'  : true,
            'recursion'   : true,
            'start'       : 1,
            'directionNav': true,
            'controlNav'  : true,
            'random'      : false,
            'nextText'    : 'Next',
            'prevText'    : 'Prev',
            'width'       : false,
            'height'      : false,
            'callback'    : {
                'init'  : $.noop,
                'before': $.noop,
                'after' : $.noop,
                'last'  : $.noop,
                'first' : $.noop
            },
            'animate'     : {

                /**
                 * Animate title show slide.
                 *
                 * @param {string} title jQuery selector title
                 * @return {void}
                 */
                'title': function (title)
                {
                    var bottom = $(title).css('bottom');

                    $(title).css({
                        'opacity': 0,
                        'bottom' : 0
                    }).show().animate({
                        'opacity': 1,
                        'bottom' : bottom
                    }, this.getOption('speed'));
                }
            },
            'class'       : {
                'wrapper'      : 'jis-wrapper',
                'title'        : 'jis-title',
                'direction'    : 'jis-direction',
                'directionNext': 'jis-direction-next',
                'directionPrev': 'jis-direction-prev',
                'control'      : 'jis-control',
                'controlList'  : 'jis-control-list',
                'selected'     : 'jis-selected',
                'init'         : 'jis-init',
                'loading'      : 'jis-loading',
                'last'         : 'jis-slide-last',
                'first'        : 'jis-slide-first',
                'recursion'    : 'jis-slide-recursion',
                'grid'         : 'jis-grid',
                'gridRow'      : 'jis-grid-row',
                'gridCell'     : 'jis-grid-cell'
            }
        }, options);

        this.$el = $(el);
        return (this);
    };

    /**
     * Constructor application prototype.
     *
     * @private
     * @constructor
     */
    $__construct.prototype = {

        /**
         * Initialize in prototype.
         *
         * @return {void}
         */
        init: function ()
        {
            var $self = this;
            $.each(this.$el, function ()
            {
                // wrapper <ul> list
                $(this).wrap($('<div>').addClass($self.getClass('wrapper'))).show();

                var li = $(this).find('li'),

                    // count <li> element size in <ul> slide
                    count = li.size();

                $(this).data('slides', count);

                // random init start slide
                if ($self.options.random) {
                    $self.setOption('start', Math.floor(Math.random() * count));
                }

                var start = $self.getOption('start') - 1;

                // hide all slide and show first slide
                li.hide().filter(':eq(' + start + ')').addClass($self.getClass('selected'));

                // determining the size of the slider and animate loading slide
                li.find('img:eq(0)').load($.proxy(function ($self, li, start, event)
                {
                    li.filter(':eq(' + start + ')').show();
                    $(this).addClass($self.getClass('loading'));

                    var width = $self.getOption('width') ? $self.getOption('width') : $(event.currentTarget).width(),
                        height = $self.getOption('height')
                            ? $self.getOption('height') : $(event.currentTarget).height();

                    if (width && height) {
                        $(this).css({
                            'width' : width,
                            'height': height
                        });
                        $(this).parent().css({
                            'width' : width,
                            'height': height
                        });
                    }
                }, this, $self, li, start));

                $(this).data('slideStart', start)
                    .data('slideCurrent', start);

                // define index element
                var parent = $(this).parent();
                (start < 1) && parent.addClass($self.getClass('first'));
                (start >= (count - 1)) && parent.addClass($self.getClass('last'));
                $self.getOption('recursion') && parent.addClass($self.getClass('recursion'));

                // building elements
                $self.build(this);

                // initialize auto scrolling slideshow
                $self.getOption('auto') && $self.actionStart(this);

                $self.getCallback('init').call($self, this);
            });

        },

        /**
         * Building elements.
         *
         * @param {object} el jQuery element <ul>
         * @return {void}
         */
        build: function (el)
        {
            var trigger = {};

            // building title
            this.getOption('title') && (trigger.title = this.buildTitle(el));

            // building direction navigation
            this.getOption('directionNav') && this.buildDirection(el);

            // building control navigation
            this.getOption('controlNav') && (trigger.control = this.buildControl(el));

            $(el).data('slideTrigger', trigger).addClass(this.getClass('init'));

            // event pause hover slide
            if (this.getOption('pauseHover')) {
                $(el).hover($.proxy(function (slider)
                {
                    $(slider).data('slideHover', true);
                }, this, el), $.proxy(function (slider)
                {
                    $(slider).removeData('slideHover');
                }, this, el));
            }

            $(el).data('jisObject', this);
        },

        /**
         * Building title.
         *
         * @param {object} el jQuery element <ul>
         * @return {function} Event title slide
         */
        buildTitle: function (el)
        {
            var $self = this;
            $(el).find('li img').each(function ()
            {
                var title = $(this).attr('alt');
                if (title) {
                    $(this).closest('li').append($('<div>').addClass($self.getClass('title')).text(title).hide());
                }
            });

            var selector = ('li' + this.getClass('selected', true) + ' ' + this.getClass('title', true));
            $(el).find(selector).show();

            // event title slide
            return ($.proxy(function (slider, selector, parent, current, prev)
            {
                this.getAnimate('title').call(this, $(slider).find(selector));
                $(prev).find(this.getClass('title', true)).hide();
            }, this, el, selector));
        },

        /**
         * Building direction navigation.
         *
         * @param {object} el jQuery element <ul>
         * @return {void}
         */
        buildDirection: function (el)
        {
            var directionNav = this.getOption('directionNav');
            var direction = {};

            if (!$.isEmptyObject(directionNav)) {
                for (var nav in directionNav) {
                    if (directionNav.hasOwnProperty(nav)) {
                        direction[nav] = directionNav[nav].indexOf('#') !== -1
                            ? $(directionNav[nav]) : $(el).parent().find(directionNav[nav]);
                    }
                }
            }
            else {
                direction.next = $('<div>').addClass(this.getClass('directionNext')).text(this.getOption('nextText'));
                direction.prev = $('<div>').addClass(this.getClass('directionPrev')).text(this.getOption('prevText'));

                $(el).after($('<div>').addClass(this.getClass('direction'))
                    .append(direction.next)
                    .append(direction.prev));
            }

            direction.next.on('click.jisDirectionNext', $.proxy(this.slideNext, this, el));
            direction.prev.on('click.jisDirectionPrev', $.proxy(this.slidePrev, this, el));
            $(el).data('directionNav', direction);
        },

        /**
         * Building control navigation.
         *
         * @param {object} el jQuery element <ul>
         * @return {function} Event control slide
         */
        buildControl: function (el)
        {
            var control = $('<div>').addClass(this.getClass('controlList')),
                count = $(el).find('li').size();

            // event control slide
            var triggerControl = $.proxy(function (slider)
            {
                var index = this.getCurrentIndex(slider);
                $(slider).parent()
                    .find(this.getClass('control', true) + ' a').removeClass(this.getClass('selected'))
                    .filter('[rel="' + index + '"]').addClass(this.getClass('selected'));
            }, this, el);

            for (var i = 0; i < count; i++) {
                control.append($('<a>').attr('rel', i));
            }

            control.find('a').on('click.jisControl', $.proxy(this.slideControl, this, el, triggerControl))
                .filter(':eq(' + (this.getOption('start') - 1) + ')').addClass(this.getClass('selected'));

            $(el).after($('<div>').addClass(this.getClass('control')).append(control))
                .data('controlNav', control.find('a'));
            return (triggerControl);
        },

        /**
         * Get class name.
         *
         * @param {string} name Class id
         * @param {boolean} [selector] Use css selector
         * @return {string}
         */
        getClass: function (name, selector)
        {
            return ((selector ? '.' : '') + this.options['class'][name]);
        },

        /**
         * Get callback function.
         *
         * @param {string} name Callback id
         * @return {function}
         */
        getCallback: function (name)
        {
            return ($.isFunction(this.options.callback[name]) ? this.options.callback[name] : $.noop);
        },

        /**
         * Get option value.
         *
         * @param {string} name Option id
         * @return {*}
         */
        getOption: function (name)
        {
            return (this.options[name]);
        },

        /**
         * Change option.
         *
         * @param {string} name Option id
         * @param {*} value Option value
         * @return {void}
         */
        setOption: function (name, value)
        {
            this.options[name] = value;
        },

        /**
         * Get app version.
         *
         * @return {number}
         */
        getVersion: function ()
        {
            return (this.version);
        },

        /**
         * Get animate function.
         *
         * @param {string} name Animate id
         * @return {function}
         */
        getAnimate: function (name)
        {
            return ($.isFunction(this.options.animate[name]) ? this.options.animate[name] : $.noop);
        },

        /**
         * Time trigger called slide next.
         *
         * @param {object} slider jQuery element
         * @return {void}
         */
        actionStart: function (slider)
        {
            if (!$(slider).data('interval')) {
                $(slider).data('interval', setInterval($.proxy(function (slider)
                {
                    if (!$(slider).data('slideHover') && !$(slider).data('slideAnimate')) {
                        $(slider).parent().find(this.getClass('directionNext', true)).trigger('click.jisDirectionNext');
                    }

                }, this, slider), this.getOption('speed') + this.getOption('pause')));
            }
        },

        /**
         * Time stop trigger called slide next.
         *
         * @param {object} slider jQuery element
         * @return {void}
         */
        actionStop: function (slider)
        {
            $(slider).data('interval') && clearInterval($(slider).data('interval'));
        },

        /**
         * Next slide.
         *
         * @param {object} slider jQuery element
         * @param {function} trigger Callback function
         * @return {void}
         */
        slideNext: function (slider, trigger)
        {
            slider = this.getSliderLink(slider);

            var index = this.getCurrentIndex(slider),
                count = this.getSlideCount(slider) - 1,
                recursion = this.getOption('recursion');

            this.slideEq(slider, (index >= count ? (recursion ? 0 : index) : (index + 1)), trigger);
        },

        /**
         * Prev slide.
         *
         * @param {object} slider jQuery element
         * @param {function} trigger Callback function
         * @return {void}
         */
        slidePrev: function (slider, trigger)
        {
            slider = this.getSliderLink(slider);

            var index = this.getCurrentIndex(slider),
                count = this.getSlideCount(slider) - 1,
                recursion = this.getOption('recursion');

            this.slideEq(slider, (index < 1 ? (recursion ? count : index) : (index - 1)), trigger);
        },

        /**
         * Next control slide.
         *
         * @param {object} slider jQuery element
         * @param {function} trigger Callback function
         * @param {object} event Control element
         * @return {void}
         */
        slideControl: function (slider, trigger, event)
        {
            event.currentTarget && this.slideEq(slider, parseInt($(event.currentTarget).attr('rel')), trigger);
        },

        /**
         * Change index slide.
         *
         * @param {object} slider jQuery element
         * @param {int} index Index element
         * @param {function} trigger Callback function
         * @return {void}
         */
        slideEq: function (slider, index, trigger)
        {
            // slide object link
            slider = this.getSliderLink(slider);
            var currentIndex = this.getCurrentIndex(slider),

                // count slide
                count = $(slider).data('slides');

            if (index != currentIndex && !$(slider).data('slideAnimate')) {

                // current active slide
                var current = $(slider).find('li:eq(' + currentIndex + ')');

                // next active slide
                var next = $(slider).find('li:eq(' + index + ')');
                if (!$.isEmptyObject(current) && !$.isEmptyObject(next) && current.length && next.length) {

                    // current effect animate
                    var effect = this.getEffect();
                    if ($.isFunction(effect)) {
                        this.getCallback('before').call(this, slider, current, next, trigger);

                        // change name for index navigation
                        var sliderParent = $(slider).parent();
                        sliderParent.removeClass(this.getClass('first') + ' ' + this.getClass('last'));

                        (index < 1) && sliderParent.addClass(this.getClass('first'));
                        (index >= (count - 1)) && sliderParent.addClass(this.getClass('last'));

                        $(slider).data('slideAnimate', true);

                        // slide params called
                        var params = {
                            'speed'  : this.getOption('speed'),
                            'cell'   : this.getOption('cell'),
                            'row'    : this.getOption('row'),
                            'current': {
                                'width' : $(current).outerWidth(),
                                'height': $(current).height(),
                                'offset': $(current).outerHeight(),
                                'src'   : $(current).find('img').attr('src')
                            },
                            'next'   : {
                                'width' : $(next).outerWidth(),
                                'height': $(next).height(),
                                'offset': $(next).outerHeight(),
                                'src'   : $(next).find('img').attr('src')
                            }
                        };

                        effect.call(this, current, next, params);

                        // change slide without delay
                        setTimeout($.proxy(function (slider, prev, current, trigger)
                        {
                            var slideTrigger = $(slider).data('slideTrigger'),
                                index = $(slider).find('li').index(current),
                                count = $(slider).data('slides');

                            $(prev).removeClass(this.getClass('selected')).hide();
                            $(current).addClass(this.getClass('selected')).show();
                            $(slider).data('slideCurrent', index);

                            if (!$.isEmptyObject(slideTrigger)) {
                                for (var name in slideTrigger) {
                                    if (slideTrigger.hasOwnProperty(name) && $.isFunction(slideTrigger[name])) {
                                        slideTrigger[name].call(this, slider, current, prev);
                                    }
                                }
                            }

                            // called trigger function
                            $.isFunction(trigger) && trigger.call(this, slider, current, prev);
                            this.getCallback('after').call(this, slider, prev, current, trigger);

                            // first callback
                            (index < 1) && this.getCallback('first').call(this, slider, prev, current, trigger);

                            // last callback
                            (index >= (count - 1)) && this.getCallback('last')
                                .call(this, slider, prev, current, trigger);

                            $(slider).removeData('slideAnimate');

                            // reload auto change slide
                            this.actionStop(slider);
                            this.actionStart(slider);

                        }, this, slider, current, next, trigger), this.getOption('speed'));
                    }
                }
            }
        },

        /**
         * Get real slider link.
         *
         * @param {object} slider jQuery element
         * @return {object} jQuery element
         */
        getSliderLink: function (slider)
        {
            return (!slider ? this.$el : slider);
        },

        /**
         * Get current index active slide.
         *
         * @param {object} slider jQuery element
         * @return {int}
         */
        getCurrentIndex: function (slider)
        {
            return ($(slider).data('slideCurrent'));
        },

        /**
         * Get count slide.
         *
         * @param {object} slider jQuery element
         * @return {int}
         */
        getSlideCount: function (slider)
        {
            return ($(slider).data('slides'));
        },

        /**
         * Get effect animate slide.
         *
         * @return {function|string|boolean}
         */
        getEffect: function ()
        {
            var effect = this.getOption('effect');
            if (!$.isFunction(effect)) {
                var list = this.getEffectList();

                if ($.inArray(effect, list)) {
                    return (this.effect[effect]);
                }

                return (this.effect[list[0]]);
            }

            return (effect);
        },

        /**
         * Get effect list name.
         *
         * @return {Array}
         */
        getEffectList: function ()
        {
            var usedEffect = [],
                available = ['random', 'selectRandom', 'randomSlide', 'randomStrips', 'slideX', 'slideY', 'strips'];

            for (var name in this.effect) {
                if (this.effect.hasOwnProperty(name) && $.inArray(name, available) === -1) {
                    usedEffect.push(name);
                }
            }

            return (usedEffect);
        },

        /**
         * Save style slide.
         *
         * @param {object} el jQuery element
         * @param {Array} style Names styles
         * @return {void}
         */
        saveStyle: function (el, style)
        {
            if ($(el).length && !$.isEmptyObject(style)) {
                var save = {};

                for (var name in style) {
                    if (style.hasOwnProperty(name)) {
                        save[style[name]] = $(el).css(style[name]);
                    }
                }

                $(el).data('saveStyle', save);
            }
        },

        /**
         * Restore style slide.
         *
         * @param {object} el jQuery element
         * @return {void}
         */
        restoreStyle: function (el)
        {
            if ($(el).length && $(el).data('saveStyle')) {
                var restore = $(el).data('saveStyle');

                for (var name in restore) {
                    if (restore.hasOwnProperty(name)) {
                        $(el).css(name, restore[name]);
                    }
                }
            }
        },

        /**
         * Create grid table effect.
         *
         * @param {string} width Width grid
         * @param {string} height Height grid
         * @param {int} cellCount Count cell grid
         * @param {int} rowCount Count row grid
         * @param {string} imgSrc url Image url
         * @return {object} grid jQuery elements
         */
        createGrid: function (width, height, cellCount, rowCount, imgSrc)
        {
            var grid = $('<div>').addClass(this.getClass('grid')).css({
                    'position': 'absolute',
                    'left'    : 0,
                    'top'     : 0,
                    'right'   : 0,
                    'width'   : width,
                    'display' : 'table'
                }),
                rowWidth = 0,
                cellWidth = 0,
                i = 0,
                j = 0;

            do {

                // row grid object
                var row = $('<div>').addClass(this.getClass('gridRow')).css('display', 'table-row');
                do {

                    // cell grid object
                    var cell = $('<div>').addClass(this.getClass('gridCell'))
                        .width(width)
                        .height(height);

                    rowCount && $(cell).height(height / rowCount);
                    cellCount && $(cell).width(width / cellCount);

                    // image position grid block
                    imgSrc && $(cell).css({
                        'background-image'   : 'url(' + imgSrc + ')',
                        'background-position': (-cellWidth + 'px ') + (-rowWidth + 'px ')
                    });

                    $(cell).css({

                        // fix old browser
                        'display' : $.support.radioValue ? 'inline-block' : 'table-cell',
                        'position': 'relative'
                    });

                    row.append(cell);
                    cellWidth += cellCount ? (width / cellCount) : width;
                    j++;

                } while (j < cellCount);

                grid.append(row);
                rowWidth += rowCount ? (height / rowCount) : height;
                i++;
                j = 0;

            } while (i < rowCount);

            return (grid);
        },

        /**
         * Sorting multiples random effect list.
         *
         * @param {string} name Effect name
         * @return {Array} Names effects
         */
        sortRandom: function (name)
        {
            var usedEffect = [],
                effectList = this.getEffectList();

            for (var i = 0; i < effectList.length; i++) {
                if (effectList[i].indexOf(name) !== -1 && effectList[i] !== name) {
                    usedEffect.push(effectList[i]);
                }
            }

            // random index effect
            return (usedEffect[Math.floor(Math.random() * usedEffect.length)]);
        },

        /**
         * Effects object list.
         */
        effect: {

            /**
             * Random effect slide.
             *
             * @param {object} current jQuery current slide element
             * @param {object} next jQuery next slide element
             * @param {object} params Params slide called
             * @return {*} Called value
             */
            random: function (current, next, params)
            {
                var list = this.getEffectList();
                return (this.effect[list[Math.floor(Math.random() * list.length)]].call(this, current, next, params));
            },

            /**
             * Select use random list.
             *
             * @param {object} current jQuery current slide element
             * @param {object} next jQuery next slide element
             * @param {object} params Params slide called
             * @return {*} Called value
             */
            selectRandom: function (current, next, params)
            {
                var select = this.getOption('select');
                if (select) {

                    // select split separator list
                    select = select.split(',');
                    if (select.length) {
                        var effect = select[Math.floor(Math.random() * select.length)],
                            list = this.getEffectList();

                        // check presence effect
                        if ($.inArray(effect, list) !== -1) {
                            return (this.effect[effect].call(this, current, next, params));
                        }
                    }
                }

                // default random effect
                return (this.effect.random.call(this, current, next, params));
            },

            /**
             * Random multiples effect slide.
             *
             * @param {object} current jQuery current slide element
             * @param {object} next jQuery next slide element
             * @param {object} params Params slide called
             * @return {*} Called value
             */
            randomSlide: function (current, next, params)
            {
                return (this.effect[this.sortRandom('slide')].call(this, current, next, params));
            },

            /**
             * Random multiples effect strips
             *
             * @param {object} current jQuery current slide element
             * @param {object} next jQuery next slide element
             * @param {object} params Params slide called
             * @return {*} Called value
             */
            randomStrips: function (current, next, params)
            {
                return (this.effect[this.sortRandom('strips')].call(this, current, next, params));
            },

            /**
             * Fade effect.
             *
             * @param {object} current jQuery current slide element
             * @param {object} next jQuery next slide element
             * @param {object} params Params slide called
             * @return {void}
             */
            fade: function (current, next, params)
            {
                $(current).fadeOut(params.speed);
                this.saveStyle(next, ['position']);

                // start animate effect
                $(next).css('position', 'absolute').fadeIn(params.speed, $.proxy(function (current)
                {
                    this.restoreStyle(current);
                }, this, next));
            },

            /**
             * Slide navigation X effect.
             *
             * @private
             * @param {object} current jQuery current slide element
             * @param {object} next jQuery next slide element
             * @param {object} params Params slide called
             * @param {string} offsetX Offset x coordinate
             * @return {void}
             */
            slideX: function (current, next, params, offsetX)
            {
                this.saveStyle(next, ['position', 'top', 'z-index', 'height']);
                this.saveStyle(current, ['margin-left']);

                $(next).css({
                    'position': 'absolute',
                    'top'     : 0,
                    'height'  : params.current.offset,
                    'z-index' : (parseInt($(current).css('z-index')) - 1)
                }).show();

                // start animate effect
                $(current).stop().animate({
                    'margin-left': offsetX
                }, params.speed, $.proxy(function (prev, current)
                {
                    $(prev).hide();
                    this.restoreStyle(current);
                    this.restoreStyle(prev);
                }, this, current, next));
            },

            /**
             * Slide navigation Y effect.
             *
             * @private
             * @param {object} current jQuery current slide element
             * @param {object} next jQuery next slide element
             * @param {object} params Params slide called
             * @param {string} offsetY Offset y coordinate
             * @return {void}
             */
            slideY: function (current, next, params, offsetY)
            {
                this.saveStyle(next, ['position', offsetY, 'z-index', 'height']);

                var properties = {
                    'css'    : {
                        'position': 'absolute',
                        'height'  : params.current.offset,
                        'z-index' : (parseInt($(next).css('z-index')) + 1)
                    },
                    'animate': {}
                };

                properties.css[offsetY] = -params.current.height;
                properties.animate[offsetY] = params.current.height - params.current.offset;

                // start animate effect
                $(next).css(properties.css).show().animate(properties.animate,
                    params.speed,
                    $.proxy(function (prev, current)
                    {
                        $(prev).hide();
                        this.restoreStyle(current);
                    }, this, current, next));
            },

            /**
             * Slide Up effect.
             *
             * @param {object} current jQuery current slide element
             * @param {object} next jQuery next slide element
             * @param {object} params Params slide called
             * @return {void}
             */
            slideUp: function (current, next, params)
            {
                this.effect.slideY.call(this, current, next, params, 'bottom');
            },

            /**
             * Slide Down effect.
             *
             * @param {object} current jQuery current slide element
             * @param {object} next jQuery next slide element
             * @param {object} params Params slide called
             * @return {void}
             */
            slideDown: function (current, next, params)
            {
                this.effect.slideY.call(this, current, next, params, 'top');
            },

            /**
             * Slide Left effect.
             *
             * @param {object} current jQuery current slide element
             * @param {object} next jQuery next slide element
             * @param {object} params Params slide called
             * @return {void}
             */
            slideLeft: function (current, next, params)
            {
                this.effect.slideX.call(this, current, next, params, -params.current.width);
            },

            /**
             * Slide Right effect.
             *
             * @param {object} current jQuery current slide element
             * @param {object} next jQuery next slide element
             * @param {object} params Params slide called
             * @return {void}
             */
            slideRight: function (current, next, params)
            {
                this.effect.slideX.call(this, current, next, params, params.current.width);
            },

            /**
             * Strips effect.
             *
             * @private
             * @param {object} current jQuery current slide element
             * @param {object} next jQuery next slide element
             * @param {object} params Params slide called
             * @param {object} grid jQuery grid elements
             * @param {object} gridCell link in grid
             * @return {*} Called value
             */
            strips: function (current, next, params, grid, gridCell)
            {
                if (!$(current).find('img').length || !$(next).find('img').length) {
                    return (this.effect.random.call(this, current, next, params));
                }

                var zIndex = $(next).css('z-index');
                this.saveStyle(current, ['z-index']);

                $(current).find('img, div').hide().end().append(grid).css('z-index', parseInt(zIndex) + 2);
                this.saveStyle(next, ['position', 'z-index']);

                $(next).css({
                    'position': 'absolute',
                    'z-index' : parseInt(zIndex) + 1
                }).show();

                // start animate effect
                $(gridCell).each(function (i)
                {
                    $(this).delay(((params.speed / params.cell) * i) / 2).animate({
                        'opacity': 0
                    }, (params.speed / params.cell) * ((params.cell / 2)));
                });

                // set default slide params
                setTimeout($.proxy(function (prev, current, grid)
                {
                    grid.remove();
                    $(prev).find('img, div').show();

                    this.restoreStyle(prev);
                    this.restoreStyle(current);
                }, this, current, next, grid), params.speed);
            },

            /**
             * Strips Right effect.
             *
             * @param {object} current jQuery current slide element
             * @param {object} next jQuery next slide element
             * @param {object} params Params slide called
             * @return {void}
             */
            stripsRight: function (current, next, params)
            {
                var parent = params.current,
                    grid = this.createGrid(parent.width, parent.height, params.cell, 0, parent.src);

                this.effect.strips
                    .call(this, current, next, params, grid, $(grid).find(this.getClass('gridCell', true)));
            },

            /**
             * Strips Left effect.
             *
             * @param {object} current jQuery current slide element
             * @param {object} next jQuery next slide element
             * @param {object} params Params slide called
             * @return {void}
             */
            stripsLeft: function (current, next, params)
            {
                var parent = params.current,
                    grid = this.createGrid(parent.width, parent.height, params.cell, 0, parent.src),
                    reverse = $($(grid).find(this.getClass('gridCell', true)).toArray().reverse());

                this.effect.strips.call(this, current, next, params, grid, reverse);
            },

            /**
             * Eraser effect.
             *
             * @param {object} current jQuery current slide element
             * @param {object} next jQuery next slide element
             * @param {object} params Params slide called
             * @return {*} Called value
             */
            eraser: function (current, next, params)
            {
                if (!$(current).find('img').length || !$(next).find('img').length) {
                    return (this.effect.random.call(this, current, next, params));
                }

                this.setOption('speed', params.speed * ((params.cell / params.row) / 2));

                var speed = this.getOption('speed'),
                    parent = params.current,
                    grid = this.createGrid(parent.width, parent.height, params.cell, 0, parent.src),
                    zIndex = $(next).css('z-index');

                this.saveStyle(current, ['z-index']);
                $(current).find('img, div').hide().end().append(grid).css('z-index', parseInt(zIndex) + 2);
                this.saveStyle(next, ['position', 'z-index']);

                $(next).css({
                    'position': 'absolute',
                    'z-index' : parseInt(zIndex) + 1
                }).show();

                // start animate effect
                $(grid).find(this.getClass('gridCell', true)).each(function (i)
                {
                    var animate = {},
                        position = (i % 2) ? 'top' : 'bottom';

                    animate[position] = -parent.height;
                    $(this).delay(((speed / params.cell) * i) / 2)
                        .animate(animate, (speed / params.cell) * ((params.cell / 2)));
                });

                // set default slide params
                setTimeout($.proxy(function (prev, current, grid, params)
                {
                    grid.remove();
                    $(prev).css('z-index', 1).find('img, div').show();

                    this.restoreStyle(prev);
                    this.restoreStyle(current);
                    this.setOption('speed', params.speed);
                }, this, current, next, grid, params), speed);
            }
        }
    };

    /**
     * An anonymous call to the class .jis-trigger slide.
     */
    $(function ()
    {
        $('.jis-trigger').jis();
    });
})(jQuery);
