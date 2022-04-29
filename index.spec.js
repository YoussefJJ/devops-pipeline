const {helloWorld} = require('./index')
// hello world test
describe('hello world', function() {
    it('should return hello world', function() {
        expect(helloWorld()).toEqual('Hello World!');
    });
    }
);