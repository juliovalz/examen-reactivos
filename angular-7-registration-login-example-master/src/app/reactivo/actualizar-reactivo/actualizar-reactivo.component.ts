import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReactivoService } from '../reactivo.service';
import { Observable} from 'rxjs';
import { first } from 'rxjs/operators';
import { Reactivo } from 'app/_models/reactivos'


@Component({
  selector: 'app-actualizar-reactivo',
  templateUrl: './actualizar-reactivo.component.html',
  styleUrls: ['./actualizar-reactivo.component.css']
})
export class ActualizarReactivoComponent implements OnChanges {
 
    // our angular form
    update_product_form: FormGroup;
 
    @Output() show_read_products_event = new EventEmitter();
    @Input() reactivo_id;
    reactivo : Reactivo

 
    // initialize product & category services
    constructor(
        private reactivoService: ReactivoService,
        private formBuilder: FormBuilder
    ){
 
        // build angular form
        this.update_product_form = this.formBuilder.group({
            area: ["", Validators.required],
            nivel_educativo: ["", Validators.required],
            eje_tematico: ["", Validators.required],
            tema: ["", Validators.required],
            subtema: ["", Validators.required]
        
        });
    }
 
    // user clicks 'create' button
    updateProduct(){
        this.reactivo = this.update_product_form.value
        // add product_id in the object so it can be updated
        this.update_product_form.value.id = this.reactivo_id;

        console.log(this.reactivo_id)
        console.log(this.reactivo)
        // send data to server
        this.reactivoService.update(this.reactivo_id,this.reactivo).pipe(first()).subscribe(() => {
            
          });
    }
 
    // user clicks the 'read products' button
    readProducts(){
        this.show_read_products_event.emit({ title: "Read Products" });
    }
 
    // call the record when 'product_id' was changed
    ngOnChanges(){
 
        // read one product record
        this.reactivoService.getById(this.reactivo_id).pipe(first()).subscribe(reactivo => {
          this.reactivo = reactivo
                // put values in the form
                this.update_product_form.patchValue({
                    area: this.reactivo.area,
                    nivel_educativo: this.reactivo.nivel_educativo,
                    eje_tematico: this.reactivo.eje_tematico,
                    tema: this.reactivo.tema,
                    subtema: this.reactivo.subtema
                });
            });
    }
 
    // read categories from database
    ngOnInit(){
       
    }
} 
