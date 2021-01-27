import React, { Component } from 'react'

export default class ComponentCommanderProfile extends Component {
    render() {
        return (
            <div class="grid grid-cols-2 gap-2 mx-16">
                <img src="https://www.gstatic.com/images/branding/product/2x/avatar_square_blue_120dp.png" className="h-24 w-24 rounded-full" alt="" />
                <div className="flex items-center ">
                    <div class="text-sm">
                        <p class="text-black leading-none font-bold dark:text-white">{this.props.nameCommander}</p>
                        <p class="text-grey-dark dark:text-white">{this.props.positionCommander}</p>
                    </div>
                </div>
            </div>
        )
    }
}
