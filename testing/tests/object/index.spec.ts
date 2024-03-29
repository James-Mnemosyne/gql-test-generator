import { generateTypes } from '../../../src/generateTypes';
import * as fs from 'fs';

describe('Query', () => {
  it('with only basic object', async () => {
    fs.writeFileSync('./testing/results/object/index.spec.ts', '');

    const result = await generateTypes({
      resolverName: 'getSomething',
      schemaFilePath: './testing/fixtures/object/schema.graphql',
      resolverFilePath: './testing/results/object/index.ts',
      typeFilePath: './testing/fixtures/types.generated.ts',
    });

    expect(result).toMatchSnapshot();
  });
});
