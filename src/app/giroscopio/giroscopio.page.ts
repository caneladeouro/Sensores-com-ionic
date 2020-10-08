import { Component, OnInit } from "@angular/core";
import { TatuService } from "../services/tatu.service";

@Component({
  selector: "app-giroscopio",
  templateUrl: "./giroscopio.page.html",
  styleUrls: ["./giroscopio.page.scss"],
})
export class GiroscopioPage implements OnInit {
  var1 = 0;
  acumulado: number;

  constructor(private tatu: TatuService) {}

  ngOnInit() {}

  usarService(var1: number) {
    this.tatu.atualiza(var1);
    this.acumulado = this.tatu.verNumero();
  }
}
