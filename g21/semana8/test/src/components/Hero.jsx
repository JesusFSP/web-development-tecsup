
const Hero = () => {
    return (
        <article className="hero">
            <img src="https://i.postimg.cc/x9MyhM3D/react-system.webp" alt="Fondo de portada" className="img img--background" />
            <div className="container g-layout g-layout--center md:g-layout--1-1 gap-md">
                <div className="card" style={{ position: 'relative' }}>
                    <div className="card__body">
                        <h1 className="card__title">Jesus Silva</h1>
                        <h2 className="card__subtitle">Junior Frontend development y trabajador en Mis Costillitas</h2>
                        <p className="card__text">Desarrollador Web Frontend con React y Next.js. Docente de especialización en Desarrollo Web Frontend. Apasionado del autoaprendizaje y del código limpio.</p>
                        <div className="d-flex gap-2xs">
                            <button className="button button--outline-primary">Descargar CV</button>
                            <button className="button button--primary">contactenos</button>
                        </div>
                    </div>
                </div>
                <div className="hero__images">
                    <img src="https://i.postimg.cc/3wC5jmcp/Anonimousmask.png" alt="Imagen de portada" width={256} height={256} className="img img--hero" />
                    <div className="hero__technologies">
                        <img src="https://www.svgrepo.com/show/353884/html-5.svg" alt="HTML" width={64} height={64} className="hero__technology" />
                        <img src="https://www.svgrepo.com/show/353623/css-3.svg" alt="CSS" width={64} height={64} className="hero__technology" />
                        <img src="https://www.svgrepo.com/show/353925/javascript.svg" alt="JavaScript" width={64} height={64} className="hero__technology" />
                        <img src="https://www.svgrepo.com/show/452092/react.svg" alt="React" width={64} height={64} className="hero__technology" />
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Hero;