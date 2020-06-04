const { Input } = require('./Input');

describe('Input class', () => {
    let input;
    beforeEach(() => {
        const commandLineArguments = ['node', 'index.js', '--add', 'I am a note'];
        input = new Input(commandLineArguments)
        
    });

    it('can parse', () => {
    
        expect(input.type).toEqual('add')
        expect(input.payload).toEqual('I am a note')

    });

    it('can validate correct input in the command line', () => {

        expect(input.isValid()).toBeTruthy();

    });

    it('can validate incorrect input in the command line', () => {
    
        input = new Input(['--badType', 'my bad note'])

        expect(input.isValid()).toBeFalsy();
    })
})