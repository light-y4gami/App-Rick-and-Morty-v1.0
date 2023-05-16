import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  listCharacters: any[] = [];
  searchInformation: string = '';
  resultsSearch: any[] = [];
  displayCharacters: any[] = [];

  constructor(private service: CharactersService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((response: any) => {
      const characters = response.results.map(this.mapCharacter);
      this.listCharacters = characters;
      this.displayCharacters = characters;
    });
  }

  mapCharacter(result: any) {
    return {
      name: result.name,
      image: result.image,
      specie: result.species,
      status: result.status,
      gender: result.gender,
      origin: result.origin.name,
      location: result.location.name,
      created: result.created,
    };
  }

  performSearch(event: any) {
    event.preventDefault(); // to avoid the default behavior of the form

    this.resultsSearch = []; // to delete previous results

    // If there is no search, the default characters are displayed
    if (this.searchInformation === '') {
      this.displayCharacters = this.listCharacters;
      return;
    }

    // Characters are filtered by matches with the search
    this.displayCharacters = this.listCharacters.filter((elem) =>
      elem.name.toLowerCase().includes(this.searchInformation.toLowerCase())
    );

    // If there are no results, the template is displayed #noResults
    if (this.displayCharacters.length === 0) {
      const noResults = document.getElementById('noResults');
      if (noResults) {
        noResults.style.display = 'block';
      }
    } else {
      const noResults = document.getElementById('noResults');
      if (noResults) {
        noResults.style.display = 'none';
      }
    }
  }
}
