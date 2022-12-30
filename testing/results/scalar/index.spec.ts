
import { GraphQLResolveInfo } from 'graphql';
import { getSomething } from './testing/results/scalar/index.ts'; // TODO: resolverPath

// We never actually use the info object.
export const mockGraphQLResolveInfo = {
  fieldName: '',
  fieldNodes: [],
  returnType: undefined,
  parentType: undefined,
  path: undefined,
  schema: undefined,
  fragments: undefined,
  rootValue: undefined,
  operation: undefined,
  variableValues: {},
  cacheControl: undefined,
} as unknown as GraphQLResolveInfo;

describe('getSomething smoke tests', () => {
  beforeAll(() => {
    // Do something here.
  });

  beforeEach(() => {
    // Do something here.
  });

    
  it('case0', async () => {
    const params = {"str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case1', async () => {
    const params = {"str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case2', async () => {
    const params = {"str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case3', async () => {
    const params = {"str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case4', async () => {
    const params = {"str":"","addressEmail":"","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case5', async () => {
    const params = {"str":"","addressEmail":"","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case6', async () => {
    const params = {"str":"","addressEmail":"","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case7', async () => {
    const params = {"str":"","addressEmail":"","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case8', async () => {
    const params = {"str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case9', async () => {
    const params = {"str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case10', async () => {
    const params = {"str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case11', async () => {
    const params = {"str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case12', async () => {
    const params = {"str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case13', async () => {
    const params = {"str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case14', async () => {
    const params = {"str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case15', async () => {
    const params = {"str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case16', async () => {
    const params = {"str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case17', async () => {
    const params = {"str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case18', async () => {
    const params = {"str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case19', async () => {
    const params = {"str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case20', async () => {
    const params = {"str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case21', async () => {
    const params = {"str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case22', async () => {
    const params = {"str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case23', async () => {
    const params = {"str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case24', async () => {
    const params = {"str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case25', async () => {
    const params = {"str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case26', async () => {
    const params = {"str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case27', async () => {
    const params = {"str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case28', async () => {
    const params = {"str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case29', async () => {
    const params = {"str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case30', async () => {
    const params = {"str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case31', async () => {
    const params = {"str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case32', async () => {
    const params = {"str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case33', async () => {
    const params = {"str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case34', async () => {
    const params = {"str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case35', async () => {
    const params = {"str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case36', async () => {
    const params = {"str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case37', async () => {
    const params = {"str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case38', async () => {
    const params = {"str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case39', async () => {
    const params = {"str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case40', async () => {
    const params = {"str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case41', async () => {
    const params = {"str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case42', async () => {
    const params = {"str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case43', async () => {
    const params = {"str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case44', async () => {
    const params = {"str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case45', async () => {
    const params = {"str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case46', async () => {
    const params = {"str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case47', async () => {
    const params = {"str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case48', async () => {
    const params = {"str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case49', async () => {
    const params = {"str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case50', async () => {
    const params = {"str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case51', async () => {
    const params = {"str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case52', async () => {
    const params = {"str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case53', async () => {
    const params = {"str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case54', async () => {
    const params = {"str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case55', async () => {
    const params = {"str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case56', async () => {
    const params = {"str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case57', async () => {
    const params = {"str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case58', async () => {
    const params = {"str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case59', async () => {
    const params = {"str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case60', async () => {
    const params = {"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case61', async () => {
    const params = {"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case62', async () => {
    const params = {"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case63', async () => {
    const params = {"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case64', async () => {
    const params = {"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case65', async () => {
    const params = {"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case66', async () => {
    const params = {"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case67', async () => {
    const params = {"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case68', async () => {
    const params = {"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case69', async () => {
    const params = {"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case70', async () => {
    const params = {"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case71', async () => {
    const params = {"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case72', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case73', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case74', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case75', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case76', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case77', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case78', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case79', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case80', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case81', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case82', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case83', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case84', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case85', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case86', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case87', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case88', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case89', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case90', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case91', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case92', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case93', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case94', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case95', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case96', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case97', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case98', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case99', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case100', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case101', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case102', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case103', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case104', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case105', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case106', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case107', async () => {
    const params = {"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case108', async () => {
    const params = {"str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case109', async () => {
    const params = {"str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case110', async () => {
    const params = {"str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case111', async () => {
    const params = {"str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case112', async () => {
    const params = {"str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case113', async () => {
    const params = {"str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case114', async () => {
    const params = {"str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case115', async () => {
    const params = {"str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case116', async () => {
    const params = {"str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case117', async () => {
    const params = {"str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case118', async () => {
    const params = {"str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case119', async () => {
    const params = {"str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case120', async () => {
    const params = {"str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case121', async () => {
    const params = {"str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case122', async () => {
    const params = {"str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case123', async () => {
    const params = {"str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case124', async () => {
    const params = {"str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case125', async () => {
    const params = {"str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case126', async () => {
    const params = {"str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case127', async () => {
    const params = {"str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case128', async () => {
    const params = {"str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case129', async () => {
    const params = {"str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case130', async () => {
    const params = {"str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case131', async () => {
    const params = {"str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case132', async () => {
    const params = {"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case133', async () => {
    const params = {"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case134', async () => {
    const params = {"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case135', async () => {
    const params = {"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case136', async () => {
    const params = {"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case137', async () => {
    const params = {"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case138', async () => {
    const params = {"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case139', async () => {
    const params = {"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case140', async () => {
    const params = {"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case141', async () => {
    const params = {"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case142', async () => {
    const params = {"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case143', async () => {
    const params = {"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case144', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case145', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case146', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case147', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case148', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case149', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case150', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case151', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case152', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case153', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case154', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case155', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case156', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case157', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case158', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case159', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case160', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case161', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case162', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case163', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case164', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case165', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case166', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case167', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case168', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case169', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case170', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case171', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case172', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case173', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case174', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case175', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case176', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case177', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case178', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case179', async () => {
    const params = {"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case180', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case181', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case182', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case183', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case184', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case185', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case186', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case187', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case188', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case189', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case190', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case191', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case192', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case193', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case194', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case195', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case196', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case197', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case198', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case199', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case200', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case201', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case202', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case203', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case204', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case205', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case206', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case207', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case208', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case209', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case210', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case211', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case212', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case213', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case214', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case215', async () => {
    const params = {"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case216', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case217', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case218', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case219', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case220', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case221', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case222', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case223', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case224', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case225', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case226', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case227', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case228', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case229', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case230', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case231', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case232', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case233', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case234', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case235', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case236', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case237', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case238', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case239', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case240', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case241', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case242', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case243', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case244', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case245', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case246', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case247', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case248', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case249', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case250', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case251', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case252', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case253', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case254', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case255', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case256', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case257', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case258', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case259', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case260', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case261', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case262', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case263', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case264', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case265', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case266', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case267', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case268', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case269', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case270', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case271', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case272', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case273', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case274', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case275', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case276', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case277', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case278', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case279', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case280', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case281', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case282', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case283', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case284', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case285', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case286', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case287', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case288', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case289', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case290', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case291', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case292', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case293', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case294', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case295', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case296', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case297', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case298', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case299', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case300', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case301', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case302', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case303', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case304', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case305', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case306', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case307', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case308', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case309', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case310', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case311', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case312', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case313', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case314', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case315', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case316', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case317', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case318', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case319', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case320', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case321', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case322', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case323', async () => {
    const params = {"optStr":null,"str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case324', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case325', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case326', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case327', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case328', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case329', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case330', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case331', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case332', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case333', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case334', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case335', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case336', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case337', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case338', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case339', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case340', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case341', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case342', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case343', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case344', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case345', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case346', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case347', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case348', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case349', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case350', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case351', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case352', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case353', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case354', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case355', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case356', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case357', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case358', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case359', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case360', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case361', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case362', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case363', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case364', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case365', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case366', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case367', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case368', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case369', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case370', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case371', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case372', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case373', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case374', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case375', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case376', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case377', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case378', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case379', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case380', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case381', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case382', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case383', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case384', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case385', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case386', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case387', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case388', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case389', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case390', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case391', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case392', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case393', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case394', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case395', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case396', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case397', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case398', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case399', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case400', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case401', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case402', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case403', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case404', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case405', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case406', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case407', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case408', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case409', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case410', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case411', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case412', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case413', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case414', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case415', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case416', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case417', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case418', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case419', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case420', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case421', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case422', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case423', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case424', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case425', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case426', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case427', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case428', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case429', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case430', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case431', async () => {
    const params = {"optStr":null,"str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case432', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case433', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case434', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case435', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case436', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case437', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case438', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case439', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case440', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case441', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case442', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case443', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case444', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case445', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case446', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case447', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case448', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case449', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case450', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case451', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case452', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case453', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case454', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case455', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case456', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case457', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case458', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case459', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case460', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case461', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case462', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case463', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case464', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case465', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case466', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case467', async () => {
    const params = {"optStr":"","str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case468', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case469', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case470', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case471', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case472', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case473', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case474', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case475', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case476', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case477', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case478', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case479', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case480', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case481', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case482', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case483', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case484', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case485', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case486', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case487', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case488', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case489', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case490', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case491', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case492', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case493', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case494', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case495', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case496', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case497', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case498', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case499', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case500', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case501', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case502', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case503', async () => {
    const params = {"optStr":"","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case504', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case505', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case506', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case507', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case508', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case509', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case510', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case511', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case512', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case513', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case514', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case515', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case516', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case517', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case518', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case519', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case520', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case521', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case522', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case523', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case524', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case525', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case526', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case527', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case528', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case529', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case530', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case531', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case532', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case533', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case534', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case535', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case536', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case537', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case538', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case539', async () => {
    const params = {"optStr":"","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case540', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case541', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case542', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case543', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case544', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case545', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case546', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case547', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case548', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case549', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case550', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case551', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case552', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case553', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case554', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case555', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case556', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case557', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case558', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case559', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case560', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case561', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case562', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case563', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case564', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case565', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case566', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case567', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case568', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case569', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case570', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case571', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case572', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case573', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case574', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case575', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case576', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case577', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case578', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case579', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case580', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case581', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case582', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case583', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case584', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case585', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case586', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case587', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case588', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case589', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case590', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case591', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case592', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case593', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case594', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case595', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case596', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case597', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case598', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case599', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case600', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case601', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case602', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case603', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case604', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case605', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case606', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case607', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case608', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case609', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case610', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case611', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case612', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case613', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case614', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case615', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case616', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case617', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case618', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case619', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case620', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case621', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case622', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case623', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case624', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case625', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case626', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case627', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case628', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case629', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case630', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case631', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case632', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case633', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case634', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case635', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case636', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case637', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case638', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case639', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case640', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case641', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case642', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case643', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case644', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case645', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case646', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case647', async () => {
    const params = {"optStr":"","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case648', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case649', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case650', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case651', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case652', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case653', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case654', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case655', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case656', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case657', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case658', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case659', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case660', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case661', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case662', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case663', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case664', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case665', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case666', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case667', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case668', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case669', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case670', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case671', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case672', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case673', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case674', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case675', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case676', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case677', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case678', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case679', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case680', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case681', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case682', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case683', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case684', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case685', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case686', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case687', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case688', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case689', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case690', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case691', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case692', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case693', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case694', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case695', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case696', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case697', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case698', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case699', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case700', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case701', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case702', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case703', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case704', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case705', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case706', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case707', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case708', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case709', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case710', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case711', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case712', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case713', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case714', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case715', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case716', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case717', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case718', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case719', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case720', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case721', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case722', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case723', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case724', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case725', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case726', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case727', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case728', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case729', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case730', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case731', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case732', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case733', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case734', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case735', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case736', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case737', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case738', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case739', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case740', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case741', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case742', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case743', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case744', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case745', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case746', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case747', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case748', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case749', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case750', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case751', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case752', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case753', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case754', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case755', async () => {
    const params = {"optStr":"random string","str":"","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case756', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case757', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case758', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case759', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case760', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case761', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case762', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case763', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case764', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case765', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case766', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case767', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case768', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case769', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case770', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case771', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case772', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case773', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case774', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case775', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case776', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case777', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case778', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case779', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case780', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case781', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case782', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case783', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case784', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case785', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case786', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case787', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case788', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case789', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case790', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case791', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case792', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case793', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case794', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case795', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case796', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case797', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case798', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case799', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case800', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case801', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case802', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case803', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case804', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case805', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case806', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case807', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case808', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case809', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case810', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case811', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case812', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case813', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case814', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case815', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case816', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case817', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case818', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case819', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case820', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case821', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case822', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case823', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case824', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case825', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case826', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case827', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"random string","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case828', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case829', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case830', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case831', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case832', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case833', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case834', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case835', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case836', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case837', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case838', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case839', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case840', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case841', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case842', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case843', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case844', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case845', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case846', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case847', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case848', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case849', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case850', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case851', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"random string","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case852', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case853', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case854', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case855', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":-1000.5,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case856', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case857', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case858', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case859', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":0,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case860', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":-1000};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case861', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":0};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case862', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":1};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  


  it('case863', async () => {
    const params = {"optStr":"random string","str":"random string","addressEmail":"james@bob.edu","url":"http://www.google.com","numFloat":2000345.7898,"numInt":2004560};
    const result = await getSomething({}, params, undefined, mockGraphQLResolveInfo)
    expect(result).toMatchSnapshot();
  });
  

});