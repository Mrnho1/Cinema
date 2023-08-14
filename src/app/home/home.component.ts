import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogDataComponent } from '../dialog-data/dialog-data.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private router: Router, public dialog: MatDialog){}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDataComponent, {
     width:'550px' 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  toogleFavorito(index: number): void {
    this.filmes[index].favorito = !this.filmes[index].favorito;
  }

  filmes: Array<any> = [
    {
      id : 1,
      titulo : "Orgulho e Preconceito",
      foto : 'https://i.ibb.co/wcgFYMB/Orgulho-Preconceito.jpg',
      duracao : "2h 9min",
      genero : "Drama, Romance",
      indicacao: "12 anos",
      preco: 30,
      favorito : true
    },
    {
      id: 2,
      titulo: 'How To Lose A Guy IN 10 Days',
      foto: 'https://i.ibb.co/fxk4SWH/how-to-lose-in-10-days.jpg',
      duracao: "1h 56min",
      genero: "Comédia, Romance",
      indicacao: "12 anos",
      preco: 30,
      favorito: false
    },
    {
      id: 3,
      titulo: 'Magnatas do Crime',
      foto: 'https://i.ibb.co/MNVQSPm/magnatas-do-crime.jpg',
      duracao: "1h 53min",
      genero: "Ação, Crime",
      indicacao: "16 anos",
      preco: 30,
      favorito: false
    },
    {
      id: 4,
      titulo: 'Alice no Pais das Maravilhas',
      foto: 'https://i.ibb.co/7y7rc3r/alice-in-boderland.jpg',
      duracao: "1h 49min",
      genero: "Aventura, Fantasia",
      indicacao: "10 anos",
      preco: 30,
      favorito: false
    },
    {
      id: 5,
      titulo: 'Emma',
      foto: 'https://i.ibb.co/VDxsND8/emma.jpg',
      duracao: "2h 4min",
      genero: "Comédia, Drama",
      indicacao: "10 anos",
      preco: 30,
      favorito: true
    },
{
      id: 6,
      titulo: 'Coraline',
      foto: 'https://i.ibb.co/0yvVFTF/coraline.jpg',
      duracao: "1h 40min",
      genero: "Animação, Fantasia",
      indicacao: "10 anos",
      preco: 30,
      favorito: false
    },
    {
      id: 7,
      titulo: 'Maze Runner',
      foto: 'https://i.ibb.co/HTJtcVW/maze.jpg',
      duracao: "1h 40min",
      genero: "Animação, Fantasia",
      indicacao: "10 anos",
      preco: 30,
      favorito: false
    },
    {
      id: 8,
      titulo: 'Jogos Vorazes',
      foto: 'https://i.ibb.co/hRqQ9RC/vorazes.jpg',
      quartos: "1h 40min",
      banheiros: "Animação, Fantasia",
      area: "10 anos",
      preco: 30,
      favorito: false
    }
  ]
}
