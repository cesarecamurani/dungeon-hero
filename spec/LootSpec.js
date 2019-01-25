describe('Loot', function() {

  var Loot = require('../src/Loot');
  var sinon = require('sinon');

  var loot;
  var stub


  beforeEach(function() {
    function PlayerStub() {}
    PlayerStub.prototype = {
      equipLoot() {}
    };

    player = new PlayerStub()
    stub = sinon.stub(Math, 'floor')
    loot = new Loot(player);

    rarityCalculator = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3]
    table = [
        {name: 'dagger', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'sword', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'longsword', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'claymore', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'battle axe', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'hatchet', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'mace', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'hammer', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'cloth', type: 'armor', armor: 1, rarity: 1},
        {name: 'leather', type: 'armor', armor: 1, rarity: 1},
        {name: 'chainmail', type: 'armor', armor: 1, rarity: 1},
        {name: 'plate', type: 'armor', armor: 1, rarity: 1},
        {name: 'health', type: 'potion', rarity: 1},
        {name: 'dexterity', type: 'potion', rarity: 1},
        {name: 'strength', type: 'potion', rarity: 1}
      ]
  });

  afterEach(function () {
    stub.restore()
  });

  describe('#lootFinder', function() {
    it("finds loot based on rarity", function(){
      stub.returns(7)
      expect(loot.lootFinder()).toEqual({name: 'hammer', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1})
    })
    it("doesnt return loot", function(){
      stub.returns(0)
      expect(loot.lootFinder()).toEqual(0)
    })
  })

  describe('#returnFoundItem', function() {
    it('returns the most recently found item', function() {
      stub.returns(8)
      loot.lootFinder()
      expect(loot.returnFoundItem()).toEqual({name: 'cloth', type: 'armor', armor: 1, rarity: 1})
    })
  })

  describe('#equipLoot', function() {
    it('calls on the player to equip the loot', function() {
      spyOn(player, "equipLoot").and.returnValue("equipped")
      expect(loot.equipLoot()).toEqual("equipped")
    })
  })


})
