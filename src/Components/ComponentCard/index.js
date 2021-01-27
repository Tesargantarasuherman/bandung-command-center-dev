import React, { Component } from 'react'

export default class ComponentCard extends Component {
    render() {
        return (
            <div className="px-5 pb-4">
                <div className="  dark:bg-gray-50 rounded overflow-hidden shadow-lg">
                    <img className="w-full h-48" src={this.props.imgSrc} alt={this.props.title} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{this.props.title}</div>
                        <p className="text-gray-700 text-base">
                        {this.props.description}
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <button className="rounded-full py-2 px-6 mb-2 bg-blue-400 hover:bg-gray-200 text-xl font-bold text-white hover:text-blue-500 ">{this.props.titleButton}</button>
                    </div>
                </div>
            </div>
        )
    }
}
