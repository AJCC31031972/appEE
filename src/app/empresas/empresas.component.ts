import { Component, OnInit } from '@angular/core';
import { EmpresaService } from './empresa.service';
import { Empresa } from './empresa';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  empresas: Empresa[];

  constructor( private empresaService: EmpresaService) { }

  ngOnInit() {

    this.empresaService.getEmpresas().subscribe(
      //empresas => this.empresas = empresas
      empresas => {
        this.empresas = empresas;
        console.log('empresas : ', this.empresas);
      }
    );
  }

}
