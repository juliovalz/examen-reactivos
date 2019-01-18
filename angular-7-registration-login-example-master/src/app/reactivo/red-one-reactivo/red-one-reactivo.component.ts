import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ReactivoService } from '../reactivo.service';
import { Observable} from 'rxjs';
import { Reactivo } from 'app/_models/reactivos';
import { first } from 'rxjs/operators';

 
@Component({
    selector: 'app-read-one-reactivo',
    templateUrl: './red-one-reactivo.component.html',
    styleUrls: ['./red-one-reactivo.component.css'],
    providers: [ReactivoService]
})
 
export class RedOneReactivoComponent implements OnChanges {
 
    /*
        @Output will tell the parent component (AppComponent)
        that an event has happened (via .emit(), see readProducts() method below)
    */
    @Output() show_read_products_event = new EventEmitter();
 
    // @Input means it will accept value from parent component (AppComponent)
    @Input() reactivo_id;
 
    reactivo: Reactivo;
 
    // initialize product service
    constructor(private reactivoService: ReactivoService){}
 
    // user clicks the 'read products' button
    readProducts(){
        this.show_read_products_event.emit({ title: "Read Products" });
    }
 
    // call the record when 'product_id' was changed
    ngOnChanges(){
        console.log("este es: "+this.reactivo_id)
        this.reactivoService.getById(this.reactivo_id).pipe(first()).subscribe(reactivo => {
            this.reactivo = reactivo;
        }); 
}

}