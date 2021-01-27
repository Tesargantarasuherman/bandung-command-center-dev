import React, { Component } from 'react'
import Logo from '../../Assets/img/logo.svg'
export default class ComponentNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme:'' 
        }
    }
    selectTheme = (value) => {
        localStorage.setItem('theme', value)
        const html = document.querySelector('html')
        html.classList.add(localStorage.getItem('theme'))
        if(value == 'dark'){
            html.classList.remove('light') 
        }
        else{
            html.classList.remove('dark') 
        }
        this.setState({
            theme : localStorage.getItem('theme')
        })
    }
    componentDidMount(){
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
        this.setState({
            theme : localStorage.getItem('theme')
        })
    }
    render() {
        return (
            <header className="w-full px-8 text-gray-700 bg-white dark:bg-gray-900">
                <div className="flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div className="relative flex flex-col md:flex-row">
                        <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                            <img src={Logo} alt="" srcset="" className="w-24 dark:bg-gray-900" />
                        </a>
                    </div>
                    <div className=" flex items-center justify-between ">
                        <form class="m-4 flex">
                            <input class="rounded-l-lg p-2 px-18  border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Cari Informasi" />
                            <button class="px-4 rounded-r-lg bg-blue-500 p2 text-white font-bold  uppercase bg-blue-500 border-t border-b border-r">Cari</button>
                        </form>
                        <div className=" flex items-center justify-between ">
                            <button onClick={() => this.selectTheme('dark')} className={`focus:outline-none rounded-full bg-gray-600 w-10 h-10  mx-2${this.state.theme =='dark' ? 'py-3 px-8':''}`} ></button>
                            <button onClick={() => this.selectTheme('light')} className={`focus:outline-none rounded-full bg-gray-100 w-10 h-10  mx-2${this.state.theme =='light' ? 'py-3 px-8':''}`} ></button>
                        </div>
                    </div>
                </div>
            </header>

        )
    }

}
