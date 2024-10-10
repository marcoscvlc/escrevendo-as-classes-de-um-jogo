//Creating a hero class
class hero{
  
    constructor(heroClass,age,name){
      this.heroClass = heroClass
      this.name = name
      this.age = age
    }
    
    attack(){
      if(this.heroClass === "warrior"){
        console.log(`The warrior attacks using sword ${randomNumber} times.`)
      }else if(this.heroClass === "wizard"){
        console.log(`The wizard attacks using magic ${randomNumber} times.`)
      }else if(this.heroClass === "monk"){
        console.log(`The monk attacks using martial arts ${randomNumber} times.`)
      }else if(this.heroClass === "ninja"){
        console.log(`The ninja attacks using shurikens ${randomNumber} times.`)
      }else{
        console.log(`Command invalid!`)
      }
    }
  }
  
  //Creating a method that randomize a number for each times that hero attacks;
  function randomizeNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomNumber = randomizeNumber(1, 10);
  
  //Create a new object naming heroClass as "Warrior", "wizard", "monk" or "Ninja".
  //Let's try the monk:
  let monk = new hero("monk",33,"Marcos")
  
  //Calling the action using a created class plus the method:
  monk.attack()
  