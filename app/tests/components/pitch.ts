/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchComponent } from '../../components/pitch/pitch.component';

describe('PitchComponent', () => {
	let component: PitchComponent;
	let fixture: ComponentFixture<PitchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [

			],
			declarations: [
				PitchComponent
			],
			imports: [

			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PitchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
