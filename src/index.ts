
/* MAIN */

function* stringMatches ( str: string, regex: RegExp, maxMatches = Infinity ): Generator<RegExpExecArray, void, void> {

  if ( regex.global ) {

    regex.lastIndex = 0;

    let matchesNr = 0;

    while ( matchesNr < maxMatches ) {

      const match = regex.exec ( str );

      if ( !match ) break;

      matchesNr++;

      yield match;

    }

  } else {

    const match = regex.exec ( str );

    if ( match ) yield match;

  }

}

/* EXPORT */

export default stringMatches;
