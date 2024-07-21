import React, {useState, Fragment, useEffect} from 'react';
import '../../styles/notes.scss'
import {push as Menu} from 'react-burger-menu'
import { Columns } from 'react-bulma-components';
import NotesService from '../../services/notes';
import ListNotes from './list/index';
import Editor from './editor/index';
import Search from './search/index';



const Notes = (props) => {
    const [notes, setNotes] = useState([])
    const [current_note, setCurrentNote] = useState({title: "", body: "", id: ""});

    useEffect(() => {
        fetchNotes();
      }, []);
    
      async function fetchNotes() {
        try {
          const response = await NotesService.index();
          if (response.data.length >= 1) {
            setNotes(response.data.reverse());
            setCurrentNote(response.data[0]);
          } else {
            setNotes([]);
          }
        } catch (error) {
          console.error('Erro ao obter notas:', error);
          // Trate o erro, exiba uma mensagem para o usuário, etc.
        }
      }

      const createNote = async () => {
        await NotesService.create();
        fetchNotes()
      }

      
      const deleteNote = async (note) => {
        await NotesService.delete(note._id);
        fetchNotes();
      };

      const updateNote = async (oldNote, params) => {
        try {
            const updatedNote = await NotesService.update(oldNote._id, params);
            const index = notes.indexOf(oldNote);
            const newNotes = notes;
            newNotes[index] = updatedNote.data;
            setNotes(newNotes);
            setCurrentNote(updatedNote.data);
        } catch (error) {
            console.error('Erro ao atualizar nota:', error);
        }
    }
      const searchNotes = async (query) => {
        const response = await NotesService.search(query);
        setNotes(response.data);
      };


      const selectNote = (id) => {
        const note = notes.find((note) => {
          return note._id === id;
        });
        setCurrentNote(note);
      };
    

    return(
        <Fragment>
        <div className="notes" id="notes">
            <Menu
            className="Notes-menu"
            pageWrapId={"notes-editor"}
            isOpen={props.isOpen}
            onStateChange={(state) => {
            props.setIsOpen(state.isOpen);
            }}
            disableAutoFocus
            outerContainerId={"notes"}
            customBurgerIcon={false}
            customCrossIcon={false}
        >
                    <Columns>
                        <Columns.Column size={10} offset={1}>
                        <Search searchNotes={searchNotes} fetchNotes={fetchNotes} />
                        </Columns.Column>
                    </Columns>
                    <ListNotes
                        notes={notes}
                        selectNote={selectNote}
                        current_note={current_note}
                        createNote={createNote}
                        deleteNote={deleteNote}
                    />
                </Menu>

                <Columns.Column size={12} className="notes-editor" id="notes-editor">
                <Editor note={current_note} updateNote={updateNote} />
                </Columns.Column>
        </div>
    </Fragment>
    )
}

export default Notes;