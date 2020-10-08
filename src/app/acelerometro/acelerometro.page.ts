import { Component, OnInit } from "@angular/core";
import { TatuService } from "../services/tatu.service";
import {
  DeviceMotion,
  DeviceMotionAccelerometerOptions,
  DeviceMotionAccelerationData,
} from "@ionic-native/device-motion/ngx";

@Component({
  selector: "app-acelerometro",
  templateUrl: "./acelerometro.page.html",
  styleUrls: ["./acelerometro.page.scss"],
})
export class AcelerometroPage implements OnInit {
  var1 = 0;
  acumulado: number;

  x: string;
  y: string;
  z: string;
  id: any;

  constructor(private tatu: TatuService, private deviceMotion: DeviceMotion) {
    this.x = "";
    this.y = "";
    this.z = "";
  }

  ngOnInit() {}

  start() {
    try {
      var option: DeviceMotionAccelerometerOptions = {
        frequency: 250,
      };

      this.id = this.deviceMotion
        .watchAcceleration(option)
        .subscribe((acc: DeviceMotionAccelerationData) => {
          this.x = "" + acc.x;
          this.x = "" + acc.y;
          this.x = "" + acc.z;
        });
    } catch (error) {
      alert("Ouve um erro no sensor");
      console.log("Ouve um erro no sensor");
    }
  }

  stop() {
    this.id.unsubscribe();
  }

  usarService(var1: number) {
    this.tatu.atualiza(var1);
    this.acumulado = this.tatu.verNumero();
  }
}
