import { storiesOf,moduleMetadata, Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import HeaderComponent from './header.component';


export default {
    title: 'Header',
    component: HeaderComponent,
    decorators: [
      moduleMetadata({
        declarations: [HeaderComponent],
        imports: [CommonModule]
      }),
    ],
  } as Meta;

  const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
    component: HeaderComponent,
    props: args,
  });
  
  export const NotLoggedIn = Template.bind({});
  NotLoggedIn.args = {
    isLoggin:false
  };

  export const LoggedIn = Template.bind({});
  LoggedIn.args = {
    isLoggin:true
  };
