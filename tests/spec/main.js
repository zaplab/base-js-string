
import {
    capitalize as zapBaseStringCapitalize,
    capitalizeFirstLetter as zapBaseStringCapitalizeFirstLetter,
    camelize as zapBaseStringCamelize,
    dasherize as zapBaseStringDasherize,
    slugify as zapBaseStringSlugify,
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

    describe('slugify', () => {
        it('slugify(" 12345@# tRaLala _*( ) ") should return "12345-tralala"', () => {
            expect(zapBaseStringSlugify(' 12345@# tRaLala _*( ) ')).toEqual('12345-tralala');
            expect(zapBaseStringSlugify(' 1-2345@# tRaLala _*( ) ')).toEqual('1-2345-tralala');
            expect(zapBaseStringSlugify(' 1_2345@# tRaLala _*( ) ')).toEqual('1_2345-tralala');
        });

        it('slugify(" 12345@# tRaLala _*( ) ", "_") should return "12345_tralala"', () => {
            expect(zapBaseStringSlugify(' 12345@# tRaLala _*( ) ', '_')).toEqual('12345_tralala');
            expect(zapBaseStringSlugify(' 1-2345@# tRaLala _*( ) ', '_')).toEqual('1-2345_tralala');
            expect(zapBaseStringSlugify(' 1_2345@# tRaLala _*( ) ', '_')).toEqual('1_2345_tralala');
        });
    });
});
