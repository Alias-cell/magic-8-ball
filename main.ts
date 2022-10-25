let Random = 0
input.onButtonPressed(Button.A, function () {
    Random = randint(0, 3)
    if (Random == 1) {
        basic.showString("NO")
    } else if (Random) {
        Random = 2
        basic.showString("YES")
    } else {
        Random = 3
        basic.showString("Maybe")
    }
})
