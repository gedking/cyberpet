const ctnMain = document.getElementsById("ctnMain");
const ctnLeft = document.getElementById("ctnLeft");
const ctnCenter = document.getElementById("ctnCenter")
const ctnRight = document.getElementById("ctnRight")
const ctnButtons = document.getElementsById("ctnButtons");
const water = document.getElementById("water");
const feed = document.getElementById("feed")
const play = document.getElementById("play")
const wash = document.getElementById("wash")
const ctnInput = document.getElementById("ctnInput")
const ctnOther = document.getElementById("ctnOther")



// This is the CyberPET class that represents a virtual pet
class CyberPET {
    constructor(name, animal) {
    this.name = name;
    this.animal = animal;
    this.stats = {
        healthPoints: 1,
        happinessPoints: 1,
        cleanlinessPoints: 1,
    };
    }
}

button.addEventListener("click",() =>{
    if (cat.style.display=="block"){
        cat.style.display="none";
        
}
feed() {
    this.stats.healthPoints += 12;
    this.stats.cleanlinessPoints = Math.max(0, this.stats.cleanlinessPoints - 4);
    this.stats.happinessPoints += 12;
    };

play() {
    this.stats.happinessPoints += 20;
    his.stats.healthPoints -= 3;
    };

wash() {
    this.stats.cleanlinessPoints += 14;
    this.stats.happinessPoints = Math.min(100, this.stats.happinessPoints + 9);
    };

stats() {
      // Check if the healthPoints is less than 95
    if (this.stats.healthPoints < 95) {
        this.feed();
        console.log("\n[PET] EATING");
        console.log("> Health Increased");
        console.log("> Happiness Increased");
        console.log("> Cleanliness Decreased");
    } else {
        console.log(`\n[PET] Your ${this.animal} Doesn't Want to Eat!`);
    }

      // Display the cleanlinessPoints status if it is less than 100
    if (this.stats.cleanlinessPoints < 100) {
        this.wash();
        console.log("\n[PET] WASHING");
        console.log("> Cleanliness Increased");
        console.log("> Happiness Increased\n");
    } else {
        console.log(`[PET] Your ${this.animal} Doesn't Want To Clean!`);
    }

      // Display the cleanlinessPoints status if it is less than 100
    if (this.stats.happinessPoints < 100) {
        this.play();
        console.log("[PET] PLAYING");
        console.log("> Happiness Increased");
        console.log("> Health Decreased");
    }
    else {
        console.log(`[PET] Your ${this.animal} Doesn't Want To Play!`);
    } 
}  

// STATS
console.log(`\n[STATS] Health: ${Math.min(100, this.stats.healthPoints)}/100`);
console.log(`[STATS] Happiness: ${Math.min(100, this.stats.happinessPoints)}/100`);
console.log(`[STATS] Cleanliness: ${Math.min(100, this.stats.cleanlinessPoints)}/100`);

const myPet = new CyberPET("THE DOG", "Dog");

  // TERMINAL CODE
console.clear();
console.log(`[CY] Name: ${myPet.name}\n     Animal: ${myPet.animal}`);
console.log(`\n[STATS] Health: ${myPet.stats.healthPoints}/100\n        Happiness: ${myPet.stats.happinessPoints}/100\n        Cleanliness: ${myPet.stats.cleanlinessPoints}/100`);

  // PROGRAM START!
myPet.status();
