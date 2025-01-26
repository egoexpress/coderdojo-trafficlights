function Autoampel_Rot_nach_Gruen () {
    Fussgaenger_Gruen_nach_Rot()
    basic.pause(1000)
    basic.setLedColors(0xff0000, 0xffff00, 0x000000)
    basic.pause(1000)
    basic.setLedColors(0x000000, 0x000000, 0x00ff00)
}
function Autoampel_Gruen_nach_Rot () {
    basic.pause(1000)
    basic.setLedColors(0x000000, 0xffff00, 0x000000)
    basic.pause(1000)
    basic.setLedColors(0xff0000, 0x000000, 0x000000)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Autoampel_Rot_nach_Gruen()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Fussgaenger_Rot_nach_Gruen()
})
function Fussgaenger_Gruen_nach_Rot () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
}
function Fussgaenger_Rot_nach_Gruen () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    Autoampel_Gruen_nach_Rot()
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
basic.setLedColors(0xff0000, 0x000000, 0x000000)
pins.digitalWritePin(DigitalPin.P1, 1)
