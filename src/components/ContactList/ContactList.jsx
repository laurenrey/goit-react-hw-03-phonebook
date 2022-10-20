import PropTypes from 'prop-types';

import { List, Button, ContactItem } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <p>
          {name}: {number}
        </p>
        <Button type="button" onClick={() => deleteContact(id)}>
          Delete
        </Button>
      </ContactItem>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func,
};
