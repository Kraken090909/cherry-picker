sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let cherry : Sprite = null
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`
    level1
`)
scene.setBackgroundImage(assets.image`
    Thing
`)
let dude = sprites.create(sprites.castle.heroFrontAttack1, SpriteKind.Player)
controller.moveSprite(dude, 150, 150)
scene.cameraFollowSprite(dude)
info.startCountdown(60)
info.setScore(0)
game.onUpdateInterval(500, function on_update_interval() {
    
    cherry = sprites.create(sprites.food.smallCherries, SpriteKind.Food)
    cherry.setPosition(randint(0, 160), randint(0, 120))
})
