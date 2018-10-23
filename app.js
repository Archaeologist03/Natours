// const OPTS = {
//   fill:           'none',
//   radius:         5,
//   strokeWidth:    { 50 : 0 },
//   scale:          { .1: 1 },
//   angle:          { 'rand(35, 70)': 55 },
//   duration:       666,
//   left: 0,        top: -1,
//   easing: 'cubic.out'
// };

// const circle1 = new mojs.Shape({
//   ...OPTS,
//   stroke:         'rgba(222, 111, 255, .8)',
// });

// const circle2 = new mojs.Shape({
//   ...OPTS,
//   radius:         { 1 : 25 },
//   strokeWidth:    { 25 : 0 },
//   stroke:         'rgba(111, 222, 255, .7)',
//   delay:          'rand(75, 150)'
// });

// document.addEventListener( 'click', function (e) {
  
//    circle1
//     .tune({ x: e.pageX, y: e.pageY  })
//     .replay();
  
//   circle2
//     .tune({ x: e.pageX, y: e.pageY  })
//     .replay();
  
// });














// const burst = new mojs.Burst({
//   left: 0, top: 0,
//   degree:   180,
//   angle:    90,
//   radius:   { 10: 25 },
//   count:   5,
//   children: {
//     shape:        'line',
//     radius:       7,
//     radiusY:      0,
//     scale:        1,
//     strokeDasharray: '100%',
//     strokeDashoffset: { '-100%' : '100%' },
//     stroke:       '#F9DD5E' ,
//     easing:       'linear.none',
//     duration:     600
//   }
// });

// document.addEventListener( 'click', function (e) {
//   burst
//     .tune({ x: e.pageX, y: e.pageY })
//     .replay();
// } );

// // new MojsPlayer({ add: burst, isPlaying: true, isRepeat: true });














// const meteors = new mojs.Burst({
//   left: 0, top: 0,
//   count:    3,
//   radius:   { 0: 155 },

//   children: {
//     shape:        'line',
//     stroke:       ['#F9DD5E', '#FC2D79', '#11CDC5'],
//     duration:     400,
//     radius:       33,
//     strokeWidth:  8,
//     isForce3d:    true
//   }
// });

// document.addEventListener( 'click', function (e) {
//   meteors
//     .tune({ x: e.pageX, y: e.pageY })
//     .replay();
// } );

// // new MojsPlayer({ add: burst, isPlaying: true, isRepeat: true });


















const COLORS = {
  RED:      '#FD5061',
  YELLOW:   '#FFCEA5',
  BLACK:    '#29363B',
  WHITE:    'white',
  VINOUS:   '#A50710'
}

const burst1 = new mojs.Burst({
  left: 0, top: 0,
  count:          8,
  radius:         { 50: 150 },
  children: {
    shape:        'line',
    stroke:       [ 'white', '#FFE217', '#FC46AD', '#D0D202', '#B8E986', '#D0D202' ],
    scale:        1,
    scaleX:       { 1 : 0 },
    // pathScale:    'rand(.5, 1.25)',
    degreeShift:  'rand(-90, 90)',
    radius:       'rand(20, 40)',
    // duration:     200,
    delay:        'rand(0, 150)',
    isForce3d:    true
  }
});

const largeBurst = new mojs.Burst({
  left: 0, top: 0,
  count:          4,
  radius:         0,
  angle:         45,
  radius:        { 0: 450  },
  children: {
    shape:        'line',
    stroke:       '#4ACAD9',
    scale:        1,
    scaleX:       { 1 : 0 },
    radius:       100,
    duration:     450,
    isForce3d:    true,
    easing:       'cubic.inout'
  }
});

const CIRCLE_OPTS = {
  left: 0, top: 0,
  scale:      { 0: 1 },
}

const largeCircle = new mojs.Shape({
  ...CIRCLE_OPTS,
  fill:       'none',
  stroke:     'white',
  strokeWidth: 4,
  opacity:    { .25 : 0 },
  radius:     250,
  duration:   600,
});

const smallCircle = new mojs.Shape({
  ...CIRCLE_OPTS,
  fill:       'white',
  opacity:    { .5 : 0 },
  radius:     30,
});
  
document.addEventListener( 'click', function (e) {
  
  burst1
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  
  largeBurst
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
  
  largeCircle
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
  
  smallCircle
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
  
});