import { Injectable } from '@angular/core';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private localStorageKey = 'notas_con_ats'

  constructor() { }

  getAll(): Note[] {
    const notesJson = localStorage.getItem(this.localStorageKey);
    return notesJson ? JSON.parse(notesJson) : [];
  }

  get(id: number): Note | any {
    const notesJson = localStorage.getItem(this.localStorageKey);
    const notes: Note[] = notesJson ? JSON.parse(notesJson) : [];
    console.log(id);
    console.log(notes);
    console.log(notes.find((n) => n.id == id));
    return notes.find((n) => n.id == id);
  }

  create(note: Note): Note {
    let notes: Note[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    note.id = this.generateId();
    notes.push(note);
    localStorage.setItem(this.localStorageKey, JSON.stringify(notes));
    return note;
  }

  update(note: Note): Note | undefined {
    let notes: Note[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    const index = notes.findIndex(n => n.id === note.id);
    if (index !== -1) {
      console.log("Testale");
      notes[index] = note;
      localStorage.setItem(this.localStorageKey, JSON.stringify(notes));
      return note;
    }
    return undefined;
  }

  delete(id: number): void {
    let notes: Note[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    const index = notes.findIndex(n => n.id === id);
    if (index !== -1) {
      notes.splice(index, 1);
      localStorage.setItem(this.localStorageKey, JSON.stringify(notes))
    }
  }

  private generateId(): number {
    const notes: Note[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    const ids = notes.map(note => note.id);
    const maxId = Math.max(...ids);
    return maxId >= 0 ? maxId + 1 : 0;
  }
}
