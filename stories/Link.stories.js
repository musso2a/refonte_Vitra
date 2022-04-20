import { createLink } from './Link';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'Example/Link',
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {

        label: { control: 'text' },
        onClick: { action: 'onClick' },
        primary: { control: 'boolean' },
        size: {
            control: { type: 'select' },
           // options: ['small', 'medium', 'large'],
        },
    },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createLink({ label, ...args });
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
    primary: true,
    label: 'link',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'link',
};


