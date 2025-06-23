import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
  standalone: false
})
export class ApiExternaPage implements OnInit {
  posts: any[] = [];
  postIndividual: any = null;
  postId: number | null = null;
  errorMsg = '';

  nuevoTitulo = '';
  nuevoCuerpo = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.obtenerTodos();
  }

  obtenerTodos() {
    this.api.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.errorMsg = '';
      },
      error: () => {
        this.errorMsg = 'Error al cargar posts.';
      }
    });
  }

  buscarPorId() {
    if (this.postId) {
      this.api.getPostById(this.postId).subscribe({
        next: (data) => {
          this.postIndividual = data;
          this.errorMsg = '';
        },
        error: () => {
          this.postIndividual = null;
          this.errorMsg = 'Post no encontrado.';
        }
      });
    }
  }

  crearPost() {
    if (this.nuevoTitulo && this.nuevoCuerpo) {
      const nuevo = {
        title: this.nuevoTitulo,
        body: this.nuevoCuerpo,
        userId: 1
      };

      this.api.agregarPost(nuevo).subscribe({
        next: (res) => {
          alert('Post agregado con ID ' + res.id);
          this.nuevoTitulo = '';
          this.nuevoCuerpo = '';
          this.obtenerTodos();
        },
        error: () => {
          alert('Error al agregar post');
        }
      });
    } else {
      alert('Debes completar el título y contenido');
    }
  }

  eliminarPost(id: number) {
    this.api.eliminarPost(id).subscribe({
      next: () => {
        alert('Post eliminado');
        this.obtenerTodos();
      },
      error: () => {
        alert('Error al eliminar post');
      }
    });
  }
}
