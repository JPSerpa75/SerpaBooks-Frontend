import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoLivroStore } from '../../../../stores/info-livro-store';
import { InfoLivroGridModel } from '../../../../models/info-livro-grid-model';
import { FilterOptionsModel } from '../../../../models/filter.options-model';
import { filterOptionsService } from '../../../../shared/services/filter-options.service';
import { AutorStore } from '../../../../stores/autor-store';
import { EditoraStore } from '../../../../stores/editora-store';
import { AutorModel } from '../../../../models/autor-model';
import { EditoraModel } from '../../../../models/editora-model';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.scss'
})
export class GridListComponent implements OnInit {

  autoresIdsSelected = [] as string[]
  editorasIdsSelected = [] as string[]

  currentPage = 0
  total = 0
  pageSize = 10

  autores!: AutorModel[]

  editoras!: EditoraModel[]

  filterOptions = {} as FilterOptionsModel
  infoLivroGridList = [{}] as InfoLivroGridModel[]

  constructor(private router: Router,
    private infoLivroStore: InfoLivroStore,
    private filterOptionsService: filterOptionsService,
    private autorStore: AutorStore,
    private editoraStore: EditoraStore
    ) { }

  ngOnInit(): void {
    this._loadSelects()
    this.filterOptionsService.getFilterOptions().subscribe(filterOptions => {
      this.filterOptions.textoChave = filterOptions.textoChave;
      this._initOptions()
      this.search()
    });

  }
  private _loadSelects() {
    this.autorStore.getAll().subscribe({
      next: (data) => {
        this.autores = data
      }
    })
    this.editoraStore.getAll().subscribe({
      next: (data) => {
        this.editoras = data
      }
    })

  }

  changePage(page: number) {
    this.currentPage = page
    this.search()
  }

  private _initOptions(){
    this.currentPage = 0
    this.total = 0
    this.pageSize = 10
  }

  search() {
    this.filterOptions.pageNumber = this.currentPage
    this.filterOptions.pageSize = this.pageSize
    this.infoLivroStore.search(this.filterOptions).subscribe({
      next: (data: any) => {
        this.total = data.totalElements
        this.infoLivroGridList = data.content
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }


  handleAutor(autores: any){
    this.filterOptions.idsAutores = autores.map((autor: AutorModel) => autor.id)
    this._initOptions()
    this.search()
  }

  handleEditora(editoras: any){
    this.filterOptions.idsEditoras = editoras.map((editora: EditoraModel) => editora.id)
    this._initOptions()
    this.search()
  }

  navigateToDeatils() {
    this.router.navigate(['/details'])
  }

}
