import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messageBox: [
                "RKはカスです"
            ]
        }
    }

    onClick(event) {
        process.nextTick(() => {
            let text = document.getElementById("message").value;
            this.setState({
                messageBox: (this.state.messageBox.join(" ") + ` ${text}`).split(" ")
            });
        });
    }

    render() {
        return (
            <div>
                <h1>RKの悪口を書くアプリ</h1>
                <input type="text" id="message" />
                <input type="submit" value="ファンレターを送信" onClick = { this.onClick.bind(this) } />
                <ul>
                    {
                        this.state.messageBox.map(message => {
                            return <li>{message}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

}

render(<App/>, document.getElementById("app"));