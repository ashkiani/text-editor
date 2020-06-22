import React, { Component } from 'react'
import AppNavBar from "../AppNavBar"
import OpenFiles from "../OpenFiles"

export default class index extends Component {
    constructor() {
        super();
        this.state = { openFilesData: [], openFiles: [] };
    }

    closeFileFunction = async (file) => {
        let arr = this.state.openFilesData;
        let includes = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id == file.id) {
                includes = true;
                break;
            }
        }
        if (includes) {
            const newFilesData = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id !== file.id) {
                    newFilesData.push(arr[i]);
                }
            }
            if (newFilesData.length === 0) {
                this.setState({
                    openFilesData: [],
                    openFiles: []
                });
            } else {
                this.setState({
                    openFilesData: newFilesData,
                    openFiles: <OpenFiles filesData={newFilesData} closeFileFunction={this.closeFileFunction} />
                });
            }
        }
    }
    openFileFunction = (file) => {
        console.log("Opening File");
        console.log(file);
        let arr = this.state.openFilesData;
        let includes = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id == file.id) {
                includes = true;
                break;
            }
        }

        if (!includes) {
            arr.push(file);
            this.setState({
                openFilesData: arr,
                openFiles: <OpenFiles filesData={arr} closeFileFunction={this.closeFileFunction} />
            });
        }
    };
    render() {
        return (
            <div>
                <AppNavBar openFunction={this.openFileFunction} />
                <div>
                    {this.state.openFiles}
                </div>
            </div>
        )
    }
}
