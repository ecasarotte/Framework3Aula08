import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LaboratorioService {

  public exibirMenu: boolean = true;
  public exibirAtendimento: boolean = false;
  public exibirSituacaoFila: boolean = false;

  public totalFilas: number = 0;
  public filaColeta: number = 0;
  public filaRetirada: number = 0;
  public filaPrioritario: number = 0;

  public tipoAtendimento: string = '';
  public posicaoAtual: number = 0;

  constructor() { }

  showMenu(): void{
    this.exibirMenu = true;
    this.exibirAtendimento = false;
    this.exibirSituacaoFila = false;
  }

  coletarExames(): void {
    this.exibirSituacaoFila = false;
    this.exibirMenu = false;
    this.exibirAtendimento = true;

    this.totalFilas++;
    this.filaColeta++;

    this.posicaoAtual = this.filaColeta;

    this.tipoAtendimento = 'Coleta de Exames';
  }

  retirarResultados(): void {
    this.exibirSituacaoFila = false;
    this.exibirMenu = false;
    this.exibirAtendimento = true;

    this.totalFilas++;
    this.filaRetirada++;

    this.posicaoAtual = this.filaRetirada;

    this.tipoAtendimento = 'Retirada de Resultados';
  }

  prioritario(): void {
    this.exibirSituacaoFila = false;
    this.exibirMenu = false;
    this.exibirAtendimento = true;

    this.totalFilas++;
    this.filaPrioritario++;

    this.posicaoAtual = this.filaPrioritario;

    this.tipoAtendimento = 'Fila prioritária';
  }

  situacaoDaFila(): number {
    this.exibirSituacaoFila = true;
    this.exibirMenu = false;
    this.exibirAtendimento = false;

    return this.totalFilas;
  }

  resetar(): void {
    this.filaColeta = 0;
    this.filaPrioritario = 0;
    this.filaRetirada = 0;
    this.totalFilas = 0;

    alert('Atenção!\nContagem das filas zerada!');
  }

  situacaoGeral(): Array<any> {
    this.exibirSituacaoFila = true;
    this.exibirMenu = false;
    this.exibirAtendimento = false;

    let situacaoGeral: Array<any> = [
      this.filaColeta,
      this.filaRetirada,
      this.filaPrioritario,
      this.totalFilas
    ];

    return situacaoGeral;
  }
}
