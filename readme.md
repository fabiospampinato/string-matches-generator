# stringMatches (Generator)

Retrieves all the matches of a regex in a string, via a generator.

This works exactly like [string-match](https://www.npmjs.com/package/string-matches), but uses a generator.

## Install

```shell
npm install string-matches-generator
```

## Usage

```js
import stringMatches from 'string-matches–generator';

// Let's get all the matches of a regex in a string, via a generator

const str = 'A tidy tiger tied a tighter tie to tidy her tiny tail';
const regex = /tidy/g; // Don't forget the `g` flag, or it won't work
const matches = [...stringMatches ( str, regex )];

console.log ( matches.length ); // => 2
```

## License

MIT © Fabio Spampinato
