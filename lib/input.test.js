const { parse, isValid } = require('./input');

describe('input functions', () => {
    const commandLineArguments = ['node', 'index.js', '--add', 'I am a note'];
    const action = parse(commandLineArguments);

    expect(action).toEqual({
        type: 'add',
        payload: 'I am a note'
    });
});

it('can validate command line arguments with add', () => {
    const action = {
        type: 'add',
        payload: 'my note'
    };

    const valid = isValid(action);

    expect(valid).toBeTruthy();
});

it('can validate command line arguments with add', () => {
    const action = {
        type: 'badType',
        payload: 'my note'
    };

    const valid = isValid(action);

    expect(valid).toBeFalsy();
})