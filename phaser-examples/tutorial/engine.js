var game = new Phaser.Game(800, 600, Phaser.AUTO, "",
  { preload: preload, create: create, update: update }
);

var platforms

function preload() {
  game.load.image('sky', 'assets/sky.png');
  game.load.image('ground', 'assets/platform.png');
  game.load.image('star', 'assets/star.png');
  game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

function create() {
  game.add.sprite(0, 0, 'star');

  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.add.sprite(0, 0, 'sky');

  platforms = game.add.group();

  platforms.enableBody = true;

  var ground = platforms.create(0, game.world.height - 80, 'ground');
  ground.scale.setTo(2, 2);
  ground.body.immovable = true;

  var ledge = platforms.create(400, 400, 'ground');
  ledge.body.immovable = true;

  ledge = platforms.create(-100, 200, 'ground');
  ledge.body.immovable = true;
}

function update() {

}