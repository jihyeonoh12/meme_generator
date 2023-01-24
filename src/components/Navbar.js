import logo from '../meme_generator_icon.svg'


export default function Navbar(props) {

    const modeName = props.darkMode === true ? 'light' : 'dark'

    return (
        <section className={'navbar ' + modeName}>
            <img src={logo} className="logo" alt="logo" />
            <h1 className='navbar--title'>Meme Generator</h1>

            <label class="switch" >
            <input type="checkbox" onClick={props.toggle}/>
            <span class="slider round"></span>
            </label>
          
        </section>
    )
}