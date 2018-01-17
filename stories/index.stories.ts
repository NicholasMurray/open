import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { FormfieldComponent } from '../src/app/components/controls/formfield/formfield.component';
import { Welcome, Button } from '@storybook/angular/demo';

storiesOf('Open Form Field', module).add('Form Field', () => ({
  component: FormfieldComponent,
  props: {
    labelText: 'First Name',
    placeholderText: 'Enter your first name here',
  },
}));

storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji and action',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }))
  );
