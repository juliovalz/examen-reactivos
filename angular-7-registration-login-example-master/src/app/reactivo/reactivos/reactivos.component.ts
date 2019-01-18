import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { Reactivo } from 'app/_models/reactivos';

import { UserService, AuthenticationService } from '@/_services';
import { ReactivoService } from '../reactivo.service'


@Component({
  selector: 'app-reactivos',
  templateUrl: './reactivos.component.html',
  styleUrls: ['./reactivos.component.css']
})
export class ReactivosComponent implements OnInit {
currentUser: User;
currentUserSubscription: Subscription;
@Output() show_create_product_event=new EventEmitter();
@Output() show_read_one_product_event=new EventEmitter();
@Output() show_update_product_event=new EventEmitter();
@Output() show_delete_product_event=new EventEmitter();

reactivos: Reactivo[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private reactivoService: ReactivoService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    // when user clicks the 'create' button
    createProduct(){
    // tell the parent component (AppComponent)
    this.show_create_product_event.emit({
        title: "Create Product"
    });
  }
  
  readOneProduct(id){
    console.log('rp comp readOneProduct');
    console.log(id)
    // tell the parent component (AppComponent)
    this.show_read_one_product_event.emit({
        reactivo_id: id,
        title: "Read One Product"
    });
}

updateProduct(id){
    // tell the parent component (AppComponent)
    this.show_update_product_event.emit({
        reactivo_id: id,
        title: "Update Product"
    });
}

    ngOnInit() {
        this.leerReactivos();
    }

 /*   ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }
*/


    deleteUser(id: number) {
        this.reactivoService.borrar(id).pipe(first()).subscribe(() => {
            this.leerReactivos()
        });
    }

    private leerReactivos() {
          this.reactivoService.getAll().pipe(first()).subscribe(reactivos => {
            this.reactivos = reactivos;
        });
    }

      crearReactivo(reactivo:Reactivo) {
        this.reactivoService.create(reactivo).pipe(first()).subscribe(() => {
            this.leerReactivos()
        });
    }

    
}