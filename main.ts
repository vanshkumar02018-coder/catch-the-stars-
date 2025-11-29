sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(assets.image`ninjaImage`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(60)
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(assets.image`starImage`, SpriteKind.Food)
    mySprite2.setPosition(randint(0, 160), randint(0, 120))
})
