function Autoampel_Rot_nach_Gruen () {
    Autoampel_schaltet = 1
    Fussgaenger_Gruen_nach_Rot()
    basic.pause(1000)
    basic.setLedColors(0xff0000, 0xffff00, 0x000000)
    basic.pause(1000)
    basic.setLedColors(0x000000, 0x000000, 0x00ff00)
    Autoampel = 1
    basic.pause(2000)
    Autoampel_schaltet = 0
}
function Autoampel_Gruen_nach_Rot () {
    Autoampel_schaltet = 1
    basic.pause(1000)
    basic.setLedColors(0x000000, 0xffff00, 0x000000)
    basic.pause(1000)
    basic.setLedColors(0xff0000, 0x000000, 0x000000)
    Autoampel = 0
    Autoampel_schaltet = 0
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Autoampel == 0) {
        Autoampel_Rot_nach_Gruen()
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Fussgaengerampel == 0) {
        if (Autoampel_schaltet == 0) {
            Fussgaenger_Rot_nach_Gruen()
        }
    }
})
function Fussgaenger_Gruen_nach_Rot () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
    Fussgaengerampel = 0
}
function Fussgaenger_Rot_nach_Gruen () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    Autoampel_Gruen_nach_Rot()
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    Fussgaengerampel = 1
}
let Autoampel_schaltet = 0
let Autoampel = 0
let Fussgaengerampel = 0
basic.setLedColors(0xff0000, 0x000000, 0x000000)
pins.digitalWritePin(DigitalPin.P1, 1)
Fussgaengerampel = 1
Autoampel = 0
Autoampel_schaltet = 0
