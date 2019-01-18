import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReactivoService } from '../reactivo.service';
import { Observable} from 'rxjs';
import { Reactivo } from 'app/_models/reactivos';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-crear-reactivo',
  templateUrl: './crear-reactivo.component.html',
  styleUrls: ['./crear-reactivo.component.css']
})
export class CrearReactivoComponent implements OnInit {

   // our angular form
    create_product_form: FormGroup;
 
    // @Output will tell the parent component (AppComponent) that an event happened in this component
    @Output() show_read_products_event = new EventEmitter();
 
    // list of categories
 
 
    // initialize 'product service', 'category service' and 'form builder'
    constructor(
        private reactivoService: ReactivoService,
        formBuilder: FormBuilder
    ){
        // based on our html form, build our angular form
        this.create_product_form = formBuilder.group({
            area: ["", Validators.required],
            nivel_educativo: ["", Validators.required],
            eje_tematico: ["", Validators.required],
            tema: ["", Validators.required],
            subtema: ["", Validators.required]
        });
    }
 
    // user clicks 'create' button
    createProduct(){
 
        // send data to server
      
        this.reactivoService.create(this.create_product_form.value).pipe(first()).subscribe(() => {
          
        });
    }

 
    // user clicks the 'read products' button
    readProducts(){
        this.show_read_products_event.emit({ title: "Read Products" });
    }
 
    // what to do when this component were initialized
    ngOnInit(){
        // read categories from database
  //      this.categoryService.readCategories()
    //        .subscribe(categories => this.categories=categories['records']);
    }

}



 

 
