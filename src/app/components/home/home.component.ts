import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Note } from '../../model/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  note: Note[] = [];

  constructor(private noteService: NoteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.note = this.noteService.getAll()
  }
  deleteNote(noteId: number): void {
    if (confirm("Delete?")) {
      this.noteService.delete(noteId);
      window.location.reload();
    } else {
      return;
    }
  }


  getBgColor(x: string ): string {
    console.log(x);
    if (x) {
      return `background-color:${x}`
    } else {
      return `background-color: black`
    }
  }
}
