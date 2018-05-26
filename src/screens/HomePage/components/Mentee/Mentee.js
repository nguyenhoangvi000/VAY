import $ from 'jquery'
import React, { Component } from 'react';

import UIkit from 'uikit'

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import { StepOne } from './components/StepOne/index';
import { StepTwo } from './components/StepTwo/index';
import { StepThree } from './components/StepThree/index';
import { StepFour } from './components/StepFour/index';
import { StepFive } from './components/StepFive/index';
import { StepSix } from './components/StepSix/index';
import { StepSeven } from './components/StepSeven/index';
import { StepEight } from './components/StepEight/index';
import { StepNine } from './components/StepNine/index';
import { StepTen } from './components/StepTen/index';
import { StepEleven } from './components/StepEleven/index';
import { StepSorry } from './components/StepSorry/index';

export default class Mentee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalMentee: false,
            mentee: {
                fullName: '',
                phoneNumber: '',
                email: '',
                job: '',
                experience: '',
                facebookLink: '',
                moreHelp: '',
                agree: 'Yes'
            },
            clicked: false,
            step: 1
        }
    }

    nextStepMentee = () => {
        this.setState({
            step: this.state.step + 1
        })
    }

    toggleMentee = () => {
        console.log('OK');
        this.setState({
            modalMentee: !this.state.modalMentee
        })
    }

    submit = () => {
        let that = this;
        this.setState({
            clicked: true
        })
        var jqxhr = $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbxniJlti2YnjQcAeo43pzh27ThI6pgzdmzaRxYekgfv-KqttH8v/exec',
            method: "POST",
            dataType: "json",
            data: JSON.parse(JSON.stringify(this.state.mentee))
        }).then((res) => {
            if (res.result === "success") {
                that.togglementee();
                this.setState({
                    clicked: false
                })
                this.setState({
                    step: 1
                })
                UIkit.notification({
                    message: '<p class="uk-form-label">Bạn đã đăng kí thành công</p>',
                    status: 'success',
                    pos: 'top-center',
                    timeout: 5000
                });

            }
        })
    }

    handleInputChange = (event) => {
        switch (event.target.id) {
            case "fullName":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { fullName: event.target.value })
                })
                break;
            case "phoneNumber":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { phoneNumber: event.target.value })
                })
                break;
            case "email":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { email: event.target.value })
                })
                break;
            case "job":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { job: event.target.value })
                })
                break;
            case "experience":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { experience: event.target.value })

                })
                break;
            case "facebookLink":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { facebookLink: event.target.value })

                })
                break;
            case "moreHelp":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { moreHelp: event.target.value })

                })
                break;
            case "radioNotAgree":
                console.log(event.target.value);
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { agree: event.target.value })
                })
                break;
            default:
                break;
        }
    }

    render() {
        let stepComponent = null;
        switch (this.state.step) {
            case 1:
                stepComponent = <StepNine modal={this.state.modalMentee} toggle={this.toggleMentee} handleInputChange={this.handleInputChange} />
                break;
            case 2:
                stepComponent = <StepTwo modal={this.state.modalMentee} toggle={this.toggleMentee} handleInputChange={this.handleInputChange} />
                break;
            case 3:
                stepComponent = <StepThree modal={this.state.modalMentee} toggle={this.toggleMentee} handleInputChange={this.handleInputChange} />
                break;
            case 4:
                stepComponent = <StepFour modal={this.state.modalMentee} toggle={this.toggleMentee} handleInputChange={this.handleInputChange} />
                break;
            case 5:
                stepComponent = <StepFive modal={this.state.modalMentee} toggle={this.toggleMentee} handleInputChange={this.handleInputChange} />
                break;
            case 6:
                stepComponent = <StepSix modal={this.state.modalMentee} toggle={this.toggleMentee} handleInputChange={this.handleInputChange} />
                break;
            default:
                stepComponent = <StepSorry modal={this.state.modalMentee} toggle={this.toggleMentee} handleInputChange={this.handleInputChange} />
                break;
        }
        return (
            <Modal isOpen={this.state.modalMentee} toggle={this.toggleMentee}>
                <ModalHeader toggle={this.toggleMentee}>Đăng kí</ModalHeader>
                <ModalBody>
                    {stepComponent}
                    <div className="uk-margin">
                        {
                            this.state.step < 7 ? <button className="uk-button uk-float-right uk-button-primary" onClick={this.nextStepMentee}>Tiếp tục</button> : <button className="uk-button uk-float-right uk-button-primary" onClick={this.submit}>Đăng kí</button>
                        }
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="uk-button uk-button-default" onClick={this.toggleMentee}>Huỷ</button>
                </ModalFooter>
            </Modal>
        )
    }
}