import React, { Component } from 'react'
import { ComponentCard, ComponentCardCommander, ComponentLatestTweet, ComponentNavbar } from '../../Components'

export default class Home extends Component {
    render() {
        return (
            <div className="container mx-auto">
                <ComponentNavbar />
                <div className="flex justify-between mx-24 my-8">
                    <p className="text-2xl font-bold">Command Center</p>
                    <p className="text-2xl font-bold">Profile</p>
                    <p className="text-2xl font-bold">Info Covid-19</p>
                    <p className="text-2xl font-bold">Bandung INTERNasional Program</p>
                    <p className="text-2xl font-bold">Kontak Kami</p>
                </div>
                <div className="grid lg:grid-cols-3 mx-auto lg:px-20 ">
                <ComponentCard imgSrc={'https://images.unsplash.com/photo-1611518021620-a3a2539eef85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} title={'lorem'} description={'ipsumipsum'} titleButton={'Buat Pengaduan'}/>
                <ComponentCard imgSrc={'https://images.unsplash.com/photo-1611518021620-a3a2539eef85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} title={'lorem'} description={'ipsumipsum'} titleButton={'Buat Panggilan'}/>
                <ComponentCard imgSrc={'https://images.unsplash.com/photo-1611518021620-a3a2539eef85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} title={'lorem'} description={'ipsumipsum'} titleButton={'Jelajahi Bandung'}/>
                </div>
                <div className="flex justify-between lg:mx-32 sm:mx-20 mt-20 mb-8">
                    <h6 className="text-2xl font-bold dark:text-white">Berita Dari Command Center</h6>
                    <h6 className="text-2xl dark:text-white">Selengkapnya</h6>
                </div>
                <div className="grid lg:grid-cols-4 mx-auto lg:px-20 ">
                <ComponentCard imgSrc={'https://images.unsplash.com/photo-1611517998564-1d2242bc860c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} titleButton={'Selengkapnya'} title={'BERITA 1'} description={'ipsumipsum'}/>
                <ComponentCard imgSrc={'https://images.unsplash.com/photo-1611517998564-1d2242bc860c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} titleButton={'Selengkapnya'} title={'BERITA 2'} description={'ipsumipsum'}/>
                <ComponentCard imgSrc={'https://images.unsplash.com/photo-1611517998564-1d2242bc860c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} titleButton={'Selengkapnya'} title={'BERITA 3'} description={'ipsumipsum'}/>
                <ComponentCard imgSrc={'https://images.unsplash.com/photo-1611517998564-1d2242bc860c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} titleButton={'Selengkapnya'} title={'BERITA 4'} description={'ipsumipsum'}/>
                </div>
                <ComponentCardCommander />
                <div className="grid lg:grid-cols-2 mx-auto my-8 lg:px-20 ">
                    <ComponentLatestTweet TitleTweet={'Latest Tweet'} iconTweet={'fa-twitter'}/>
                    <ComponentLatestTweet TitleTweet={'Latest Instagram'} iconTweet={'fa-instagram'}/>
                </div>
            </div>
        )
    }
}
