const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const Note = require('./Note');

const mongodb = new MongoMemoryServer();

describe('Note model - execute', () => {
    beforeAll(() => {
        return mongodb.getUri()
            .then(uri => mongoose.connect(uri, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }));
    });

    beforeEach(() => {
        return mongoose.connection.dropDatabase();
    });

    afterAll(() => {
        return mongoose.connection.close()
            .then(() => mongodb.stop());
    });

    it('can add notes', () => {
        const action = {
            type: 'add',
            payload: 'my note',
        }
        return Note.execute(action)
            .then(newNote => {
                expect(newNote.toJSON()).toEqual({
                    _id: expect.anything(),
                    text: 'my note',
                    __v: 0
                });
            })
    })

    it('can show a list', async () => {
        const action = {
            type: 'add',
            payload: 'my note',
        }

        const listAction = {
            type: 'list'
        }
        await Note.execute(action)

        return Note.execute(listAction)
            .then(listNotes => {
                expect(listNotes.map(note => note.toJSON())).toEqual([{
                    _id: expect.anything(),
                    text: 'my note',
                    __v: 0
                }
                ]);
            });
    });

    it('can delete note', async() => {
        const action = {
            type: 'add',
            payload: 'this note will be deleted'  
        }
        
        const {_id} = await Note.execute(action)

        const deleteAction = {
            type: 'delete',
            payload: _id  
        }

        return Note.execute(deleteAction)
        .then(deletedNote => {
            expect(deletedNote.toJSON()).toEqual({
                _id: _id,
                text: 'this note will be deleted',
                __v: 0
            });
        })
    })



})