import React, { Fragment } from "react";
import { Button, Columns, Tag, Heading, Menu } from 'react-bulma-components';
import Moment from "moment";
import "../../../styles/notes.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListNotes(props) {
  return (
    <Fragment>
      <Columns breakpoint="mobile">
        <Columns.Column size={6} offset={1}>
          <Heading size={6}>{props.notes.length} Notes</Heading>
          <Columns.Column size={2} className="space_between_button"></Columns.Column>
          <Button
            className="button_More"
            state="active"
            color="custom-purple"
            outlined
            size="small"
            onClick={() => props.createNote()}
          >
            Notes +
          </Button>
        </Columns.Column>
      </Columns>
      <Menu>
        <Menu.List className="notes-list">
          {props.notes.map((item, key) => (
            <Menu.List.Item
              className="list-item"
              key={key}
              onClick={() => props.selectNote(item._id)}
              active={item === props.current_note}
            >
              <Heading size={6}>
                {item.title ? item.title.replace(/(<([^>]+)>)/gi, "").substring(0, 15) : 'Sem título'}
              </Heading>
              <Heading size={6} subtitle spaced={false}>
                {item.body ? item.body.replace(/(<([^>]+)>)/gi, "").substring(0, 30) : 'Sem conteúdo'}
              </Heading>
              <Columns breakpoint="mobile">
                <Columns.Column size={10}>
                  <Tag color="dark">
                    {Moment(item.created_at).format("DD/MM")}
                  </Tag>
                </Columns.Column>
                <Columns.Column size={2}>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => props.deleteNote(item)}
                    color="grey"
                  />
                </Columns.Column>
              </Columns>
            </Menu.List.Item>
          ))}
        </Menu.List>
      </Menu>
    </Fragment>
  );
}

export default ListNotes;
