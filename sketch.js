// array to hold our events
let events = [];

function setup() {
  createCanvas(800, 600);
  
  // define some events
  events.push(new Event("Event 1", "Description of event 1", 2000));
  events.push(new Event("Event 2", "Description of event 2", 2010));
  events.push(new Event("Event 3", "Description of event 3", 2020));
  
  // calculate positions for events based on their year
  for(let i = 0; i < events.length; i++) {
    events[i].calculatePosition();
  }
}

function draw() {
  background(220);
  
  // draw timeline
  line(50, height / 2, width - 50, height / 2);
  
  // draw events
  for(let i = 0; i < events.length; i++) {
    events[i].display();
  }
}

class Event {
  constructor(name, description, year) {
    this.name = name;
    this.description = description;
    this.year = year;
    this.x = 0;
  }
  
  calculatePosition() {
    // simple linear mapping from year to x position
    this.x = map(this.year, 2000, 2020, 50, width - 50);
  }
  
  display() {
    // draw the event
    ellipse(this.x, height / 2, 20);
    
    // if mouse is over this event, display the description
    if(dist(mouseX, mouseY, this.x, height / 2) < 10) {
      text(this.name + ": " + this.description, mouseX, mouseY - 20);
    }
  }
}

