import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../../model/note';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  newNote: Note = {
    id: 0,
    title: '',
    description: '',
    date: new Date(),
    color: ''
  }

  componentCreated = false;
  constructor(private noteServices: NoteService, private activated: ActivatedRoute, private router: Router) { }

  createNew(): void {
    console.log(this.newNote);
    this.noteServices.create(this.newNote);
    console.log(this.newNote);
    alert("Nota creada correctamente!");
    this.newNote = {
      id: 0,
      title: '',
      description: '',
      date: new Date(),
      color: ''
    }
  }
  goBack(){
    this.router.navigate(['']);
  }
}
