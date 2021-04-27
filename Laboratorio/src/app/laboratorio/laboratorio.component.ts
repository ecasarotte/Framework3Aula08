import { Component, OnInit } from '@angular/core';
import { LaboratorioService } from '../services/laboratorio.service';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {

  constructor(private laboratorioService: LaboratorioService) { }

  ngOnInit(): void {
  }

  //#region Controle de visão
  exibirMenu(): boolean {
    return this.laboratorioService.exibirMenu;
  }

  exibirAtendimento(): boolean {
    return this.laboratorioService.exibirAtendimento;
  }

  exibirSituacaoFila(): boolean {
    return this.laboratorioService.exibirSituacaoFila;
  }

  voltar(){
    this.laboratorioService.showMenu();
  }

  resetar(): void {
    this.laboratorioService.resetar();
  }

  //#endregion
  
  coletarExames(): void {
    this.laboratorioService.coletarExames();
  }

  retirarResultados(): void {
    this.laboratorioService.retirarResultados();
  }

  filaPrioritaria(): void {
    this.laboratorioService.prioritario();
  }

  administracao(): Array<any> {
    return this.laboratorioService.situacaoGeral();
  }

  exibirTipoDeAtendimento(): string {
    return this.laboratorioService.tipoAtendimento;
  }

  exibirPosicaoNaFila(): number {
    return this.laboratorioService.posicaoAtual;
  }

}
