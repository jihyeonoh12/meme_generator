import logo from '../meme_generator_icon.png'


export default function Navbar() {
    return (
        <section className='navbar'>
            <img src={logo} className="logo" alt="logo" />
            <h1 className='navbar--title'>Meme Generator</h1>
          
        </section>
    )
}