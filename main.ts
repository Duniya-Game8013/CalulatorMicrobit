input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        _1 += 1
        basic.showNumber(_1)
    }
    if (_switch == 1) {
        _2 += 1
        basic.showNumber(_2)
    }
})
input.onButtonPressed(Button.AB, function () {
    Operator += 1
    if (Operator == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (Operator == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            if (Operator == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
                if (Operator == 4) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    _switch += 1
    if (_switch == 2) {
        if (Operator == 1) {
            basic.showNumber(_1 + _2)
        } else {
            if (Operator == 2) {
                basic.showNumber(_1 - _2)
            } else {
                if (Operator == 3) {
                    basic.showNumber(_1 * _2)
                } else {
                    if (Operator == 4) {
                        basic.showNumber(_1 / _2)
                    }
                }
            }
        }
    }
})
let Operator = 0
let _switch = 0
let _2 = 0
let _1 = 0
_1 = 0
_2 = 0
_switch = 0
Operator = 0
