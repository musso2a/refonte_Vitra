import './link.css';

export const createLink = ({
                                 primary = false,
                                 size = 'medium',
                                 backgroundColor,
                                 label,
                                 onClick,
                             }) => {
    const a = document.createElement('a');
    a.type = 'a';
    a.innerText = label;
    a.addEventListener('click', onClick);

    const mode = primary ? 'storybook-a--primary' : 'storybook-a--secondary';
    a.className = ['storybook-a', `storybook-a--${size}`, mode].join(' ');

    a.style.backgroundColor = backgroundColor;

    return a;
};
