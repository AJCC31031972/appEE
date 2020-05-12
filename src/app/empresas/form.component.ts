import { Component, OnInit } from '@angular/core';
import { Empresa } from './empresa';
import { EmpresaService } from './empresa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public empresa: Empresa = new Empresa();
  public titulo:string = 'Registrar Empresa';

  constructor(private empresaService: EmpresaService, private router: Router) { }

  ngOnInit(): void {
  }

  public create(): void {
    this.empresaService.create(this.empresa).subscribe(
      response => this.router.navigate(['/regempresas'])
    );
  }
}
