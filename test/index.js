
/* IMPORT */

import {describe} from 'ava-spec';
import stringMatches from '../dist';

/* STRING MATCHES */

describe ( 'stringMatches', it => {

  it ( 'Retrieves all the matches', t => {

    const test = 'A tidy tiger tied a tighter tie to tidy her tiny tail',
          indexes = [];

    for ( const match of stringMatches ( test, /tidy/g ) ) {

      indexes.push ( match.index );

    }

    t.deepEqual ( indexes, [2, 35] );

  });

  it ( 'Work with non-global regexes too', t => {

    const test = 'A tidy tiger tied a tighter tie to tidy her tiny tail',
          indexes = [];

    for ( const match of stringMatches ( test, /tidy/ ) ) {

      indexes.push ( match.index );

    }

    t.is ( indexes.length, 1 );

  });

  it ( 'Can limit the number of matches', t => {

    const test = 'A tidy tiger tied a tighter tie to tidy her tiny tail',
          indexes = [];

    for ( const match of stringMatches ( test, /ti/g, 2 ) ) {

      indexes.push ( match.index );

    }

    t.is ( indexes.length, 2 );

  });

});
