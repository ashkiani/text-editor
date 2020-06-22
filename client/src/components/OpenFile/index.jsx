import React, { Component } from 'react'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialContent: "",
            currentContent: ""
        };
        this.handleChange = this.handleChange.bind(this)
    }
 
    handleChange = (event) => {
        const { value } = event.target;
        this.setState({
            initialContent: this.state.initialContent,
            currentContent: value
        });
    }

    saveClick = () => {
        fetch("/api/files/content", {
            method: "PUT",
            body: JSON.stringify({ fileId: this.props.file.id, content: this.state.currentContent }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async res => {
            if (res.status === 200) {
                this.setState({
                    initialContent: this.state.currentContent,
                    currentContent: this.state.currentContent
                });
                // setContent({ initialContent: content.currentContent, currentContent: content.currentContent });
            } else {
                res.text().then(text => { alert("Error please try again -" + text) });
            }
        })
            .catch(err => {
                console.log(err);
                alert("Error deleting file please try again");
            });
    }
  
    componentDidMount() {
        fetch("/api/files/content", {
            method: "POST",
            body: JSON.stringify({ fileId: this.props.file.id }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async res => {
            if (res.status === 200) {
                let data = await res.json();
                console.log(data);
                this.setState({
                    initialContent: data.content,
                    currentContent: data.content
                });
            } else {
                res.text().then(text => { alert("Error please try again -" + text) });
            }
        })
            .catch(err => {
                console.log(err);
                alert("Error deleting file please try again");
            });
    }
    render() {
        if (this.state.currentContent === this.state.initialContent) {
            return (
                <div>
                    <div className="border" style={{ height: '250px', backgroundColor: 'yellow' }}>This is the opened file! {this.props.file.id}
                        <button key={this.props.id} className="float-right" onClick={() => this.props.closeFileFunction(this.props.file)}>Close</button>
                        <div>
                            <textarea name="content" className="w-100" value={this.state.currentContent} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>

            )
        }
        else {
            return (
                <div>
                    <div className="border" style={{ height: '250px', backgroundColor: 'yellow' }}>This is the opened file! {this.props.file.id}
                        <button key={this.props.id} className="float-right" onClick={() => this.props.closeFileFunction(this.props.file)}>Close</button>
                        <div>
                            <textarea name="content" className="w-100" value={this.state.currentContent} onChange={this.handleChange} />
                        </div>
                        <div>
                            <button onClick={this.saveClick}>Save</button>
                        </div>
                    </div>
                </div>

            )
        }
    }
}