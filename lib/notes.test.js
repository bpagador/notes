const { add, execute } = require('./notes');

describe('note functions', () => {
    it('can add notes', () => {
        const action = {
            type: 'add',
            payload: 'my note'
        };
        const note = add(action);
        expect(note).toEqual({
            id: 1, 
            text: 'my note'
        });
    });

    it('can execute action', () => {
        const action = {
            type: 'add',
            payload: 'my note'
        };
        
        const errorAction = {
            type: 'nonsense',
            payload: 'meaningless'
        };

        const note = execute(action);
        const errorNote = execute(errorAction);

        expect(note).toEqual({
            id: 1, 
            text: 'my note'
        });

        expect(errorNote).toEqual({
            error: 'try again'
        });

    });
});
