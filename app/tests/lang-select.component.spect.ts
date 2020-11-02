import {
    nsTestBedAfterEach,
    nsTestBedBeforeEach,
    nsTestBedRender,
    nsTestBedInit
} from 'nativescript-angular/testing';
import { LangSelectComponent } from '~/lang-select/lang-select.component';

describe('Lang Select Component Test', () => {

    beforeEach(nsTestBedBeforeEach([LangSelectComponent]));
    afterEach(nsTestBedAfterEach(false));

    it('should be defined', () => {

        return nsTestBedRender(LangSelectComponent).then((fixture) => {
            fixture.detectChanges();
            const component = fixture.componentInstance;
            expect(component).toBeDefined();
        });
    });
});
