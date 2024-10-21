interface Car {
  goodOrNotRed: "good" | "not red";
  isItALowRider: boolean;
  owners: string[];
  yearButStartFrom2003ForNoReason: number;
  soundSystem?: SoundSystem;

  addNewOwner: (newOwner: string) => void;
  makeItRideLower: () => void;
  paintItRed: () => void;

  getCarInfoIfYouAreANerd: () => string;
}

interface SoundSystem {
  hasBass: boolean;
  isBassDeafening: boolean | "extremely";
  numberOfSpeakers: number;

  turnUpForWhat: () => void;
  seizeHearing: () => void;

  getSoundSystemInfoIfYouAreANerd: () => string;
}

interface ExtendableSwordsSystem {
  whereDoSwordsComeFrom: "wheels" | "lights" | "speakers";
  numberOfSwords: number;
  sharpnessOnScaleOfBoulderToKatana: "boulder" | "katana";

  sharpenUntilItBleeds: () => void;
  throwSword: () => void;

  getSwordsSystemInfoIfYouAreANerd: () => string;
}

interface CarWithSwords extends Car, ExtendableSwordsSystem {}

const car: CarWithSwords = {
  goodOrNotRed: "not red",
  isItALowRider: false,
  owners: ["John", "Jane"],
  yearButStartFrom2003ForNoReason: 3, // 2006

  addNewOwner(newOwner: string) {
    this.owners.push(newOwner);
    console.log(`New owner added: ${newOwner}`);
  },
  makeItRideLower() {
    this.isItALowRider = true;
    console.log("Riding low now");
  },
  paintItRed() {
    this.goodOrNotRed = "good";
    console.log("Painted red");
  },

  getCarInfoIfYouAreANerd() {
    return `Car is ${this.goodOrNotRed} and is ${
      this.isItALowRider ? "" : "not "
    }a low rider. It was made in ${
      this.yearButStartFrom2003ForNoReason + 2003
    } and has ${this.owners.length} owners.`;
  },

  whereDoSwordsComeFrom: "wheels",
  numberOfSwords: 4,
  sharpnessOnScaleOfBoulderToKatana: "boulder",

  sharpenUntilItBleeds() {
    this.sharpnessOnScaleOfBoulderToKatana = "katana";
    console.log("Sword is now sharp as katana");
  },
  throwSword() {
    this.numberOfSwords -= 1;
    console.log("Sword thrown");
  },

  getSwordsSystemInfoIfYouAreANerd() {
    return `Car has ${this.numberOfSwords} swords and they are ${this.sharpnessOnScaleOfBoulderToKatana}. Swords come from ${this.whereDoSwordsComeFrom}.`;
  },

  soundSystem: {
    hasBass: true,
    isBassDeafening: true,
    numberOfSpeakers: 6,

    turnUpForWhat() {
      this.numberOfSpeakers *= 2;
      console.log("Turned up for what");
    },
    seizeHearing() {
      this.isBassDeafening = "extremely";
      console.log("Hearing seized");
    },

    getSoundSystemInfoIfYouAreANerd() {
      return `Sound system has ${this.numberOfSpeakers} speakers and bass is ${this.isBassDeafening}.`;
    },
  },
};

console.log(car.getCarInfoIfYouAreANerd());
console.log(car.getSwordsSystemInfoIfYouAreANerd());
console.log(car.soundSystem?.getSoundSystemInfoIfYouAreANerd());

car.addNewOwner("JackTheSoundLover");
car.soundSystem?.turnUpForWhat();
car.soundSystem?.seizeHearing();

console.log(car.soundSystem?.getSoundSystemInfoIfYouAreANerd());

car.addNewOwner("MaryLovesFast");
car.makeItRideLower();
car.paintItRed();

console.log(car.getCarInfoIfYouAreANerd());

car.addNewOwner("BobbyTheSwordMaster");
car.sharpenUntilItBleeds();
car.throwSword();

console.log(car.getSwordsSystemInfoIfYouAreANerd());
