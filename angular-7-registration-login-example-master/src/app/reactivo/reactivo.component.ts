import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';



@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {
currentUser: User;
currentUserSubscription: Subscription;
title="Read Products";
reactivo_id;

show_read_products_html=true;
show_create_product_html=false;
show_read_one_product_html=false;
show_update_product_html=false;
show_delete_product_html=false;
    constructor(
        private authenticationService: AuthenticationService,
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() { 
        
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }


    // show the 'create product form'
showCreateProduct($event){

    // set title
    this.title=$event.title;
 
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_create_product_html=true;
}
 
// show products list
showReadProducts($event){
    // set title
    this.title=$event.title;
 
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_products_html=true;
}

showReadOneProduct($event){
 
    // set title and product ID
    this.title=$event.title;
    this.reactivo_id=$event.reactivo_id;
 
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_one_product_html=true;
}

showUpdateProduct($event){
 
    // set title and product ID
    this.title=$event.title;
    this.reactivo_id=$event.reactivo_id;
 
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_update_product_html=true;
}


 
// hide all html views
hideAll_Html(){
    this.show_read_products_html=false;
    this.show_read_one_product_html=false;
    this.show_create_product_html=false;
    this.show_update_product_html=false;
    this.show_delete_product_html=false;
}
}