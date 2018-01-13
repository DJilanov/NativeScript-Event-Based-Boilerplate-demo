/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from '../../components/search-form/search-form.component';

describe('SearchFormComponent', () => {
	let component: SearchFormComponent;
	let fixture: ComponentFixture<SearchFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [

			],
			declarations: [
				SearchFormComponent
			],
			imports: [

			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
