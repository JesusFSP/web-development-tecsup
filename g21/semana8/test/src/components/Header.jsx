import { useRef } from 'react';
import jesussilva from '../assets/img/jesussilva.jpg';

const Header = ({ routeLinks, socialNetworks }) => {
    const offCanvas = useRef();
    const openMenu = () => {
        offCanvas.current.classList.add('off-canvas--show')
    }
    return (
        <header className="header">
            <nav className="nav">
                <div className="container flexbox flexbox--header">
                    <a href="#hero">
                    <img src={jesussilva} alt="" width={48} height={48} className="img img--logo" />
                    </a>
                    <div ref={offCanvas} className='off-canvas off-canvas--right '>
                        <div className="off-canvas__child">
                        <ul className="list flexbox flexbox--center flexbox--responsive h-100 gap-4xs">
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
                        <button onClick={openMenu}>
                            <i class="bi bi-list"></i>
                        </button>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;