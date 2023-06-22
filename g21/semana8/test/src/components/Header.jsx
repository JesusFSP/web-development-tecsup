import jesussilva from '../assets/img/jesussilva.jpg';

const Header = ({ routeLinks, socialNetworks }) => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="container flexbox flexbox--header">
                    <img src={jesussilva} alt="" width={48} height={48} className="img img--logo" />
                    <div className='off-canvas'>
                        <ul className="list flexbox flexbox--responsive gap-4xs">
                            {routeLinks.map((element, index) => {
                                const { href, title, content } = element;
                                return (
                                    <li key={index}>
                                        <a href={href} title={title} className="link">{content}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <ul className="list flexbox flexbox--responsive gap-4xs">
                        {socialNetworks.map((element, index) => {
                            const { href, title, content } = element;
                            return (
                                <li key={index}>
                                    <a 
                                        href={href}
                                        title={title}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link"
                                        dangerouslySetInnerHTML={{__html: content }}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;