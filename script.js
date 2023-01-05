// day - 06 (OOPS TASK 01)
// question

// 1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments, and sets the 
// respective class properties to these values.

class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    getrating() {
      return "the rating is  " + this.rating;
    }
  }
  
  
  // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
   
  class Movie2 {
      constructor(title, studio, rating="PG") {

      
          this.title = title;
          this.studio = studio;
          this.rating =rating;
      }
  }

//   c)  Write a method getPG, which takes an array of base type Movie as its argument, 
// and returns a new array of only those movies in the input array with a rating of "PG".
//  You may assume the input array is full of Movie instances. The returned array need not be full.

        function getPG(mov)
         {
            return mov.filter(person=>person.rating== ("PG"))
            
        }
  
// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
//   the studio “Eon Productions”, and the rating “PG­13”
  
const CasinoRoyale = new Movie( "Casino Royal", "Eon Productions", "PG13");


//                  OOPS TASK 2 
class Circle {
    constructor(radius=1.0, color="red") {
      this.radius = radius;
      this.color = color;
    }
  
    getradius() {
      return this.radius;
    }
  
    setradius(value) {
      this.radius = value;

    }
    getcolor() {
        return this.color;
      }
    
      setcolor(value) {
        this.color = value;
  
      }
        tostring() {
            return "circle[radius=" + this.radius + ", color=" + this.color + "]";

        }
    getarea() {
        return Math.PI * this.radius * this.radius;

    }
    getcircumference() {

        return 2 * Math.PI * this.radius;

  }
}

// 3. Write a “person” class to hold all the details. 
 class person {
    constructor(){
        this.name = "Sharan";
        this.age = 23;
        this.qualification="PGDM";
        this.language=["English","Tamil"];
        this.mailid="sharan@7477gmail.com";
        this.phone= "9500554031";
        
    }
       

        }
 

// 4. write a class to calculate the uber price

class uber {
    constructor(priceperKm, dist) {
        this.priceperkm=priceperKm
        this.dist=dist
        this.uberprice=dist*priceperKm
        
    }
    getprice() {
        this.uberprice=dist*priceperKm
            return this.uber
        }
  }
  
