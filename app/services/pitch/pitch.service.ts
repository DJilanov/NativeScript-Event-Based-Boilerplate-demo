import { Injectable } from "@angular/core";

import { Pitch } from "./pitch";

@Injectable()
export class PitchService {
    private pitches = new Array<Pitch>();

    setPitches(pitches) {
        this.pitches = pitches;
    }

    getPitches(): Pitch[] {
        return this.pitches;
    }

    getPitch(id: string): Pitch {
        return this.pitches.filter(pitch => pitch.id === id)[0];
    }
}
