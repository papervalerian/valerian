import { Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { BudgetRoughComponent } from './budget-rough/budget-rough.component';

new HomepageComponent();

export const routes: Routes = [
    {
        path: '',    
        component: HomepageComponent,    
        title: HomepageComponent.title
    },
    {
        path: 'rough-budget',
        component: BudgetRoughComponent,
        title: BudgetRoughComponent.title
    }
];

