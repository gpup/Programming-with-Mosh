

//Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//       console.log('draw');
//   }
// }

// const circle = new Circle(10);

// circle.location = { x: 1 };

// const propertyName = 'location';

// circle[propertyName] = { x: 1 };







// Circle.call({}, 1)
// Circle.apply({}, 1)


// const another = new Circle(1);







// let x = { value: 10 };
// let y = x;

// x.value = 20;




// let obj = { value: 10 };

// function increase(obj) {
//     obj.value++;
// }
// increase(obj);
// console.log(obj);





function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if (running)
         throw new Error('Stopwatch has already started.');

        running = true;

        startTime = new Date();
    };

    this.stop = function(){
        if (!running)
         throw new Error('Stopwatch is not started.');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {return duration;}

    });
}