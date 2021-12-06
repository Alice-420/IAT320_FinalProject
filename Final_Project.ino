#include <Servo.h> // Use Servo library, included with IDE

Servo myServo; // Create Servo object to control the servo
Servo myServo2;

int angle1 = 180;
int angle2 = 0;

int servo1 = 9;
int servo2 = 10;


void setup() {
  Serial.begin(9600);
  myServo.attach(servo1);
  myServo2.attach(servo2);
}

void loop() {

    myServo.write(180); // Rotate servo clockwise
    myServo2.write(0); // Rotate servo clockwise
    delay(300);
    myServo.write(90); // Rotate servo to center
    myServo2.write(90); // Rotate servo to center
    delay(300);
    myServo.write(45); // Rotate servo counter clockwise
    myServo2.write(180); // Rotate servo counter clockwise
    delay(300); // Wait 2 seconds
    myServo.write(90); // Rotate servo clockwise
    myServo2.write(90); // Rotate servo clockwise
    delay(300);
    myServo.write(180); // Rotate servo to center
    delay(300);

}
