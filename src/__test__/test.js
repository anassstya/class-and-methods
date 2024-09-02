import Character, {Bowerman, Zombie, Undead, Swordsman, Magician, Daemon} from "../index";

test('check class Character', () => {
  const result = new Character('name', 'Bowerman', 10, 10);
  expect(result).toEqual({"attack": 10, "defence": 10, "health": 100, "level": 1, "name": "name", "type": "Bowerman"})
});

test('check Bowerman', () => {
  const result = new Bowerman('name');
  expect(result).toEqual({"attack": 25, "defence": 25, "health": 100, "level": 1, "name": "name", "type": "Bowerman"})
});

test('check Swordsman', () => {
  const result = new Swordsman('name');
  expect(result).toEqual({"attack": 40, "defence": 10, "health": 100, "level": 1, "name": "name", "type": "Swordsman"})
});

test('check Zombie', () => {
  const result = new Zombie('name');
  expect(result).toEqual({"attack": 40, "defence": 10, "health": 100, "level": 1, "name": "name", "type": "Zombie"})
});

test('check Magician', () => {
  const result = new Magician('name');
  expect(result).toEqual({"attack": 10, "defence": 40, "health": 100, "level": 1, "name": "name", "type": "Magician"})
});

test('check Daemon', () => {
  const result = new Daemon('name');
  expect(result).toEqual({"attack": 10, "defence": 40, "health": 100, "level": 1, "name": "name", "type": "Daemon"})
});

test('check Undead', () => {
  const result = new Undead('name');
  expect(result).toEqual({"attack": 25, "defence": 25, "health": 100, "level": 1, "name": "name", "type": "Undead"})
});

test('check Character method levelUp', () => {
  const result =  new Character('name', 'Bowerman', 10, 10);
  result.levelUp();
  expect(result).toEqual({"attack": 12, "defence": 12, "health": 100, "level": 2, "name": "name", "type": "Bowerman"})
});

test('check Character method damage', () => {
  const result =  new Character('name', 'Bowerman', 10, 10);
  result.health = 100;
  result.damage(10);
  expect(result).toEqual({"attack": 10, "defence": 10, "health": 91, "level": 1, "name": "name", "type": "Bowerman"})
});

test('check Character method damage with 0 health', () => {
  const result =  new Character('name', 'Bowerman', 10, 10);
  result.health = 5;
  result.damage(10);
  expect(result).toEqual({"attack": 10, "defence": 10, "health": 0, "level": 1, "name": "name", "type": "Bowerman"})
});

test('error', () => {
  expect(() => {
    new Character('n', 'Bowerman', 10, 10);
  }).toThrow('incorrect')
});

test('error 3', () => {
  const result = new Character('name', 'Bowerman', 10, 10);
  result.health = 0;
  expect(() => {
    result.levelUp()
  }).toThrow('нельзя повысить левел умершего')
})