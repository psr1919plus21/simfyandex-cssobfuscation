import {expect} from 'chai';
import obfuscation from '../src/static/js/obfuscation';
import getclasses from '../src/static/js/getclasses';

describe('Css classes obfuscation module', () => {
  it('shoud return simple classes obfuscation', () => {
    const data = ['one', 'two', 'three'];
    let obfuscationResult = obfuscation(data);
    const expectedResult = {
      'one': 'a',
      'two': 'b',
      'three': 'c'
    }
    expect(obfuscationResult).to.deep.equal(expectedResult);
  });

  it('shoud skip dublicate classes while obfuscation', () => {
    const data = ['one', 'two', 'three', 'two', 'three', 'three', 'one'];
    let obfuscationResult = obfuscation(data);
    const expectedResult = {
      'one': 'a',
      'two': 'b',
      'three': 'c'
    }
    expect(obfuscationResult).to.deep.equal(expectedResult);
  });

  // it('shoud return classes obfuscation', () => {
  //   let urlClasses = 'https://raw.githubusercontent.com/FrontendSimf20016/obfuscator/master/data.json';
  //   getclasses(urlClasses).then(getClassesSuccess, getClassesError);

  //   function getClassesSuccess (data) {
  //     console.log('resolve');
  //     let obfuscationResult = obfuscation(data);
  //     expect("test").to.equal("test");
  //   }

  //   function getClassesError (err) {
  //   }
  // });

  it('shoud be error if classes request is wrong', () => {
    let urlClasses = 'bad url';
    getclasses(urlClasses).then(getClassesSuccess, getClassesError);

    function getClassesSuccess (data) {

    }

    function getClassesError (err) {
      expect(err).to.equal('error');
    }
  });
});
