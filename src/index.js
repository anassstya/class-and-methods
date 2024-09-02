export default class Character {
  constructor(name, type, attack, defence){ 
    let types = ['Bowerman', 'Swordsman', 'Daemon', 'Zombie', 'Undead', 'Magician'];
    if(name.length > 1 && name.length < 11 && typeof type === 'string' && types.includes(type)){
      this.name = name;
      this.type = type;
      this.attack = attack;
      this.defence = defence;
      this.level = 1;
      this.health = 100;
    }
    else{
      throw new Error('incorrect')
    };
  };

  levelUp(){
    if(this.health !== 0){
      this.level += 1;
      this.attack += (this.attack * 0.20);
      this.defence += (this.defence * 0.20);
      this.health = 100
    }
    else{
      throw new Error('нельзя повысить левел умершего')
    };
  }
  damage(points){
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
  };
};

export class Bowerman extends Character{
  constructor(name){
    super(name, 'Bowerman', 25, 25);
  };
};

export class Swordsman extends Character{
  constructor(name){
    super(name, 'Swordsman', 40, 10);
  };
};

export class Magician extends Character{
  constructor(name){
    super(name, 'Magician', 10, 40);
  };
};

export class Undead extends Character{
  constructor(name){
    super(name, 'Undead', 25, 25);
  };
};

export class Zombie extends Character{
  constructor(name){
    super(name, 'Zombie', 40, 10);
  };
};

export class Daemon extends Character{
  constructor(name){
    super(name, 'Daemon', 10, 40);
  };
};

