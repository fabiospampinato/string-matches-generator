# stringMatches (Generator)

Retrieves all the matches of a regex in a string, via a generator.

This works exactly like [string-match](https://www.npmjs.com/package/string-matches), but uses a generator.

## Install

```shell
$ npm install --save string-matches-generator
```

## Usage

```js
import stringMatches from 'string-matches–generator';

const str = 'A tidy tiger tied a tighter tie to tidy her tiny tail';
const regex = /tidy/g; // Don't forget the `g` flag, or it won't work

for ( const match of stringMatches ( str, regex ) ) {

  console.count ( 'match' ); // => 1 // => 2

}
```

## Related

- [string-replace-all](https://github.com/fabiospampinato/string-replace-all) - Replaces all the occurrences of a string into a string with another string.

## License

MIT © Fabio Spampinato
