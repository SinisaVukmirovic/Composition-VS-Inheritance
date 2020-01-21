// code that would be inside of some video game, for example

// ============
// INHERITANCE
// ============
console.log('===== INHERITANCE =====');

class Monster {
    constructor(name) {
        this.name = name;
    }

    attact() {
        console.log(`${this.name} attacked!`);
    }

    walk() {
        console.log(`${this.name} walked!`);
    }
}

class FlyingMonster extends Monster {
    fly() {
        console.log(`${this.name} flew!`);
    }
}
class SwimmingMonster extends Monster {
    swim() {
        console.log(`${this.name} swam!`);
    }
}

const tiger = new Monster('Tiger');
tiger.walk();
tiger.attact();

console.log('--------------------');

const eagle = new FlyingMonster('Eagle');
eagle.fly();
eagle.attact();

console.log('--------------------');

const bear = new SwimmingMonster('Bear');
bear.swim();
bear.walk();
bear.attact();

// PROBLEM WITH USING INHERITANCE ARISES WHEN YOU GET THE NEED FOR A NEW TYPE OF MONSTER 
// THAT CAN BOTH SWIM AND FLY, WITHOUT DUPLICATING CODE

console.log('');
// ============
// COMPOSITION
// ============
console.log('===== COMPOSITION =====');

function swimmer({ name }) {
    return {
        swim: () => console.log(`${name} swem!`)
    }
}

function attackerAndWalker({ name }) {
    return {
        attack: () => console.log(`${name} attacked!`),
        walk: () => console.log(`${name} walked!`)
    }
}

function flyer({ name }) {
    return {
        fly: () => console.log(`${name} flew!`)
    }
}

function swimmingMonsterCreator(name) {
    const monster = { name: name};

    return {
        ...monster,
        ...attackerAndWalker(monster),
        ...swimmer(monster)
    }
}

function flyingSwimmingMonsterCreator(name) {
    const monster = { name: name};

    return {
        ...monster,
        ...attackerAndWalker(monster),
        ...swimmer(monster),
        ...flyer(monster)
    }
}

const monster = flyingSwimmingMonsterCreator('Monster');
monster.walk();
monster.attack();
monster.fly();
monster.swim();

// WITH USING COMPOSITION, WE CAN CREATE ANY COMBINATIONS AND TYPES OF MONSTERS