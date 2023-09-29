radio.onReceivedNumberDeprecated(function (receivedNumber) {
    let item = 0
    if (item == 0) {
        pins.servoWritePin(AnalogPin.P8, 90)
        pins.servoWritePin(AnalogPin.P12, 90)
    }
    if (item == 1) {
        pins.servoWritePin(AnalogPin.P8, 0)
        pins.servoWritePin(AnalogPin.P12, 0)
    }
    if (item == 2) {
        pins.servoWritePin(AnalogPin.P8, 180)
        pins.servoWritePin(AnalogPin.P12, 180)
    }
    if (item == 3) {
        pins.servoWritePin(AnalogPin.P8, 90)
        pins.servoWritePin(AnalogPin.P12, 0)
    }
    if (item == 4) {
        pins.servoWritePin(AnalogPin.P8, 0)
        pins.servoWritePin(AnalogPin.P12, 90)
    }
})
radio.setGroup(1)
