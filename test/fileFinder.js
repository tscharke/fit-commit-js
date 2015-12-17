const assert = require( 'assert' );
const fileFinder = require( '../lib/fileFinder' );
const path = require( 'path' );

suite( 'fileFinder | ', () => {
  const fixturesPath = path.resolve( __dirname, 'fixtures/fileFinder/' );
  const subdir = path.join( fixturesPath, '/subdir/subdir' );


  test( 'should find the a config file in the directory structure', () => {
    const foundPath = fileFinder.findFileInDirectory( subdir );
    const expectedPath = path.join( fixturesPath, 'fitcommitjsrc.json' );
    assert.equal( foundPath, expectedPath );
  } );
} );
