/*

const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    const getName = () => name;

  };
  
  const jeff = personFactory('jeff', 27);
  
  console.log(jeff.name); // 'jeff'



*/


  
  const Player = (name, level) => {
    let health = level * 2;
    let number3 = 3;

    const get3 = () => number3;
    const getLevel = () => level;
    const getName  = () => name;
    const die = () => {
      // uh oh
    };
    const damage = x => {
      health -= x;
      if (health <= 0) {
        die();
      }
    };
    const attack = enemy => {
      if (level < enemy.getLevel()) {
        damage(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (level >= enemy.getLevel()) {
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
      }
    };
    return {attack, damage, getLevel, getName}
  };
  
  const jimmie = Player('jim', 10);
  const badGuy = Player('jeff', 5);
  jimmie.attack(badGuy);
  
  