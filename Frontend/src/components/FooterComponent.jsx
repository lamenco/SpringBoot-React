import { Component } from "react";

class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
         
        }
    }



    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted"> All Rights Reserverd 2023</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent

