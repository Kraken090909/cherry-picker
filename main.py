def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    otherSprite.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

cherry: Sprite = None
game.splash("Cherry Pickr")
tiles.set_tilemap(tilemap("""
    level1
"""))
scene.set_background_image(assets.image("""
    Thing
"""))
dude = sprites.create(sprites.castle.hero_front_attack1, SpriteKind.player)
controller.move_sprite(dude, 150, 150)
scene.camera_follow_sprite(dude)
info.start_countdown(60)
info.set_score(0)

def on_update_interval():
    global cherry
    cherry = sprites.create(sprites.food.small_cherries, SpriteKind.food)
    cherry.set_position(randint(0, 160), randint(0, 120))
game.on_update_interval(500, on_update_interval)
