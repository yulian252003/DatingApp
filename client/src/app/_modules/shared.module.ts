import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),// Se incluyo a mano.
    TabsModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom.right'
    }),
    NgxSpinnerModule.forRoot({
      type: 'ball-atom'
    })
  ],
  exports:[
    BsDropdownModule,
    ToastrModule,
    TabsModule,
    NgxSpinnerModule
  ]
})
export class SharedModule { }
