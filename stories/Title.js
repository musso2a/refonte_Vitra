import './title.css';

export const createTitle = ({
                                 primary = false,
                                 size = 'medium',
                                 backgroundColor,
                                 label,
                                 onClick,
                             }) => {
    const title = document.createElement('h1');
  //  title.type = 'button';
    title.innerText = label;
//    title.addEventListener('click', onClick);

    const mode = primary ? 'storybook-title--primary' : 'storybook-title--secondary';
    title.className = ['storybook-title', `storybook-title--${size}`, mode].join(' ');

    title.style.backgroundColor = backgroundColor;

    return title;
};
