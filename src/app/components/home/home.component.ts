import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;

  formatDate(dataString: string) {
    // convert date to readable format
    const date = new Date(dataString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${day}/${month}/${year}`;
  }

  charactersDefault: any = [
    {
      name: '',
      specie: '',
      status: '',
      gender: '',
      image: '',
      origin: '',
      location: '',
      created: '',
      characterization:
        'He is an old scientist who used to speak in a vulgar and belching manner, and most of the time he has a trace of saliva in his mouth.',
    },
    {
      name: '',
      specie: '',
      status: '',
      gender: '',
      image: '',
      origin: '',
      location: '',
      created: '',
      characterization:
        "He is a 14-year-old boy, Rick's grandson, who uses it frequently on his adventures. He has low intelligence, is short for his age, and has a crush on a schoolmate named Jessica.",
    },
    {
      name: '',
      specie: '',
      status: '',
      gender: '',
      image: '',
      origin: '',
      location: '',
      created: '',
      characterization:
        "She is Morty's 17-year-old older sister, a typical teenager who is usually superficial and obsessed with improving her image in front of her friends.",
    },
    {
      name: '',
      specie: '',
      status: '',
      gender: '',
      image: '',
      origin: '',
      location: '',
      created: '',
      characterization:
        'She is the daughter of Rick and at the same time the mother of Morty and Summer. Like her father, she drinks a lot, but unlike him, she is very serious in situations and at the same time is very carefree at times.',
    },
  ];

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((response: any) => {
      this.data = response;

      if (this.data.results && this.data.results.length >= 4) {
        for (let i = 0; i < 4; i++) {
          const character = this.data.results[i];

          const characterDefault = {
            // default objects
            name: character.name,
            specie: character.species,
            status: character.status,
            gender: character.gender,
            image: character.image,
            origin: character.origin.name,
            location: character.location.name,
            created: character.created,
            characterization: this.charactersDefault[i].characterization,
          };
          this.charactersDefault[i] = characterDefault;
        }
      }
    });
  }
}
