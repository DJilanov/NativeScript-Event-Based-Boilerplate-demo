/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFootersComponent } from '../../components/table-footers/table-footers.component';

describe('TableFootersComponent', () => {
	let component: TableFootersComponent;
	let fixture: ComponentFixture<TableFootersComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [

			],
			declarations: [
				TableFootersComponent
			],
			imports: [

			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TableFootersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
