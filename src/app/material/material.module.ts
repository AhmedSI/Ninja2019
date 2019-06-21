import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule, MatTabsModule, MatFormFieldModule, MatTooltipModule, MatListModule, MatExpansionModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, MatStepperModule} from '@angular/material';


@NgModule({
  imports: [MatAutocompleteModule,MatTabsModule, MatFormFieldModule, MatTooltipModule, MatListModule, MatExpansionModule, MatSidenavModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, MatStepperModule],
  exports: [MatAutocompleteModule,MatTabsModule, MatFormFieldModule, MatTooltipModule, MatListModule, MatExpansionModule, MatSidenavModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, MatStepperModule]  
})
export class MaterialModule { }
