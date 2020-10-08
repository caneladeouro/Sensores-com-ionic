import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TatuService {
  public number = 0;

  constructor() {}

  atualiza(n1: number): void {
    this.number += n1;
  }

  verNumero() {
    return this.number;
  }
}
