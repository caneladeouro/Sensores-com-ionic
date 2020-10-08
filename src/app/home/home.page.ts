import { Component } from "@angular/core";
import { TatuService } from "../services/tatu.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  var1 = 0;
  acumulado: number;

  constructor(private tatu: TatuService) {}

  usarService(var1: number) {
    this.tatu.atualiza(var1);
    this.acumulado = this.tatu.verNumero();
  }
}
