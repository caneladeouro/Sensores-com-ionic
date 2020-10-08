import { Component, OnInit } from "@angular/core";
import { TatuService } from "../services/tatu.service";

@Component({
  selector: "app-gps",
  templateUrl: "./gps.page.html",
  styleUrls: ["./gps.page.scss"],
})
export class GpsPage implements OnInit {
  var1 = 0;
  acumulado: number;

  constructor(private tatu: TatuService) {}

  ngOnInit() {}

  usarService(var1: number) {
    this.tatu.atualiza(var1);
    this.acumulado = this.tatu.verNumero();
  }
}
