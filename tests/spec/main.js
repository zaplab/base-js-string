
import {
    capitalize as zapBaseStringCapitalize,
    capitalizeFirstLetter as zapBaseStringCapitalizeFirstLetter,
    camelize as zapBaseStringCamelize,
    dasherize as zapBaseStringDasherize,
} from 'zap-base-js-string';

describe('zap-base-js-string', () => {
    beforeEach(() => {});

    afterEach(() => {});

    describe('zap-base.string should have the following methods', () => {
        it('capitalize', () => {
            expect(zapBaseStringCapitalize).toEqual(jasmine.any(Function));
        });
        it('capitalizeFirstLetter', () => {
            expect(zapBaseStringCapitalizeFirstLetter).toEqual(jasmine.any(Function));
        });

        it('camelize', () => {
            expect(zapBaseStringCamelize).toEqual(jasmine.any(Function));
        });

        it('dasherize', () => {
            expect(zapBaseStringDasherize).toEqual(jasmine.any(Function));
        });
    });

    describe('capitalize', () => {
        it('capitalize("abc def ghi") should return "Abc Def Ghi"', () => {
            expect(zapBaseStringCapitalize('abc def ghi')).toEqual('Abc Def Ghi');
        });
    });

    describe('capitalizeFirstLetter', () => {
        it('capitalizeFirstLetter("abcdefghi") should return "Abcdefghi"', () => {
            expect(zapBaseStringCapitalizeFirstLetter('abcdefghi')).toEqual('Abcdefghi');
        });
    });

    describe('camelize', () => {
        it('camelize("abc-def-ghi") should return "abcDefGhi"', () => {
            expect(zapBaseStringCamelize('abc-def-ghi')).toEqual('abcDefGhi');
        });

        it('camelize("abcDefGhi") should return "abcDefGhi"', () => {
            expect(zapBaseStringCamelize('abcDefGhi')).toEqual('abcDefGhi');
        });
    });

    describe('dasherize', () => {
        it('dasherize("AbcDefGhi") should return "abc-def-ghi"', () => {
            expect(zapBaseStringDasherize('AbcDefGhi')).toEqual('abc-def-ghi');
        });

        it('dasherize("abc-def-ghi") should return "abc-def-ghi"', () => {
            expect(zapBaseStringDasherize('abc-def-ghi')).toEqual('abc-def-ghi');
        });
    });
});
