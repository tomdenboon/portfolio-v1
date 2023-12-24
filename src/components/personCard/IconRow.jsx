import { FiGithub, FiMail } from 'react-icons/fi';

function IconRow() {
  const links = [
    {
      icon: <FiGithub />,
      href: 'https://github.com/tomdenboon',
    },
    {
      icon: <FiMail />,
      href: 'mailto:tomdenboon@hotmail.com?subject=Your inquiry',
    },
  ];

  return (
    <div className="flex mt-5 text-xl text-text-dark">
      {links.map((link) => (
        <div key={link.href} className="hover:text-text-base m-2">
          <a href={link.href} target="_blank" rel="noreferrer">
            {link.icon}
          </a>
        </div>
      ))}
    </div>
  );
}

export default IconRow;
