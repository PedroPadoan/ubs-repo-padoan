import { Component } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
  providers: [PacienteService]
})
export class ListaComponent {
  mensagem: String = "";
  pacientes: Paciente[] = [];
  public obj: Paciente = new Paciente();
 
 
constructor(private service: PacienteService){
  this.listarPacientes();
 
  }
 
  listarPacientes(){
    this.service.listar().subscribe({
      next: (data) =>{this.pacientes = data;},
      error: (msg) =>{this.mensagem = "ocorreu erro"}
    });
  }
  public excluir(){
    this.service.excluir(this.obj.id).subscribe({
      next:(data)=>{this.mensagem="paciente removido com sucesso!";},
      error:(msg)=>{this.mensagem="ocorreu erro tente mais tarde!";}
   });
  }

}
 
 