var _a, _b, _c, _d;
var car = {
    goodOrNotRed: "not red",
    isItALowRider: false,
    owners: ["John", "Jane"],
    yearButStartFrom2003ForNoReason: 3, // 2006
    addNewOwner: function (newOwner) {
        this.owners.push(newOwner);
        console.log("New owner added: ".concat(newOwner));
    },
    makeItRideLower: function () {
        this.isItALowRider = true;
        console.log("Riding low now");
    },
    paintItRed: function () {
        this.goodOrNotRed = "good";
        console.log("Painted red");
    },
    getCarInfoIfYouAreANerd: function () {
        return "Car is ".concat(this.goodOrNotRed, " and is ").concat(this.isItALowRider ? "" : "not ", "a low rider. It was made in ").concat(this.yearButStartFrom2003ForNoReason + 2003, " and has ").concat(this.owners.length, " owners.");
    },
    whereDoSwordsComeFrom: "wheels",
    numberOfSwords: 4,
    sharpnessOnScaleOfBoulderToKatana: "boulder",
    sharpenUntilItBleeds: function () {
        this.sharpnessOnScaleOfBoulderToKatana = "katana";
        console.log("Sword is now sharp as katana");
    },
    throwSword: function () {
        this.numberOfSwords -= 1;
        console.log("Sword thrown");
    },
    getSwordsSystemInfoIfYouAreANerd: function () {
        return "Car has ".concat(this.numberOfSwords, " swords and they are ").concat(this.sharpnessOnScaleOfBoulderToKatana, ". Swords come from ").concat(this.whereDoSwordsComeFrom, ".");
    },
    soundSystem: {
        hasBass: true,
        isBassDeafening: true,
        numberOfSpeakers: 6,
        turnUpForWhat: function () {
            this.numberOfSpeakers *= 2;
            console.log("Turned up for what");
        },
        seizeHearing: function () {
            this.isBassDeafening = "extremely";
            console.log("Hearing seized");
        },
        getSoundSystemInfoIfYouAreANerd: function () {
            return "Sound system has ".concat(this.numberOfSpeakers, " speakers and bass is ").concat(this.isBassDeafening, ".");
        },
    },
};
console.log(car.getCarInfoIfYouAreANerd());
console.log(car.getSwordsSystemInfoIfYouAreANerd());
console.log((_a = car.soundSystem) === null || _a === void 0 ? void 0 : _a.getSoundSystemInfoIfYouAreANerd());
car.addNewOwner("JackTheSoundLover");
(_b = car.soundSystem) === null || _b === void 0 ? void 0 : _b.turnUpForWhat();
(_c = car.soundSystem) === null || _c === void 0 ? void 0 : _c.seizeHearing();
console.log((_d = car.soundSystem) === null || _d === void 0 ? void 0 : _d.getSoundSystemInfoIfYouAreANerd());
car.addNewOwner("MaryLovesFast");
car.makeItRideLower();
car.paintItRed();
console.log(car.getCarInfoIfYouAreANerd());
car.addNewOwner("BobbyTheSwordMaster");
car.sharpenUntilItBleeds();
car.throwSword();
console.log(car.getSwordsSystemInfoIfYouAreANerd());
