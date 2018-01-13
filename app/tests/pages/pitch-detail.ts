/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchDetailComponent } from '../../pages/pitch-detail/pitch-detail.component';

describe('PitchDetailComponent', () => {
	let component: PitchDetailComponent;
	let fixture: ComponentFixture<PitchDetailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [

			],
			declarations: [
				PitchDetailComponent
			],
			imports: [

			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PitchDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
