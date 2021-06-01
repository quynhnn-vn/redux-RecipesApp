console.log = function() {};
const { expect } = require('chai');
const rewire = require('rewire');
const fs = require('fs');

describe('', function() {
  it('', function() {
    const code = fs.readFileSync('./src/app/store.js');
    
    const combineReducersRegex = /combineReducers\s*\(.*\)/;
    const combineReducersWithReducersRegex = /combineReducers\s*\(\s*reducers\s*\)/;
    const createStoreRegex = /createStore\s*\(.*\)/;
    const nestedFunctions = /createStore\s*\(\s*combineReducers\s*\(\s*reducers\s*\)\s*\)/;
    
    expect(combineReducersRegex.test(code), 'Did you call `combineReducers()`?').to.be.true;
    expect(combineReducersWithReducersRegex.test(code), 'Did you call `combineReducers()` with `reducers` as an argument?').to.be.true;
    expect(createStoreRegex.test(code), 'Did you call `createStore()`?').to.be.true;
    expect(nestedFunctions.test(code), 'Did you call `createStore()` with `combineReducers(reducers)` as an argument?').to.be.true;

    let appModule;
    try {
        appModule = rewire('../src/app/store.js');
    } catch (e) {
        expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
    }
    let store
    try {
        store = appModule.__get__('store');
    } catch (e) {
        expect(true, `Did you declare a \`store\` variable?`).to.equal(false);
    }
  
    expect(store.getState, 'Did you assign the value returned by `createStore()` to `store`?').to.be.a('function');
    expect(store.dispatch, 'Did you assign the value returned by `createStore()` to `store`?').to.be.a('function');
    expect(store.subscribe, 'Did you assign the value returned by `createStore()` to `store`?').to.be.a('function');
    

    
  });
});