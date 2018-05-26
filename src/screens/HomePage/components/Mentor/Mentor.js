import $ from 'jquery';
import React, { Component } from 'react';

import UIkit from 'uikit';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import { StepOne } from './components/stepOne/index';
import { StepTwo } from './components/stepTwo/index';
import { StepThree } from './components/stepThree/index';

export default class Mentor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalMentor: false,
            mentor: {
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

    nextStepMentor = () => {
        this.setState({
            step: this.state.step + 1
        })
    }
    prevousStepMentor = () => {
        if (this.state.step > 1)
            this.setState({
                step: this.state.step - 1
            })
    }

    toggleMentor = () => {
        console.log('OK');
        this.setState({
            modalMentor: !this.state.modalMentor
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
            data: JSON.parse(JSON.stringify(this.state.mentor))
        }).then((res) => {
            if (res.result === "success") {
                that.toggleMentor();
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
                    mentor: Object.assign({}, this.state.mentor, { fullName: event.target.value })
                })
                break;
            case "phoneNumber":
                this.setState({
                    mentor: Object.assign({}, this.state.mentor, { phoneNumber: event.target.value })
                })
                break;
            case "email":
                this.setState({
                    mentor: Object.assign({}, this.state.mentor, { email: event.target.value })
                })
                break;
            case "job":
                this.setState({
                    mentor: Object.assign({}, this.state.mentor, { job: event.target.value })
                })
                break;
            case "experience":
                this.setState({
                    mentor: Object.assign({}, this.state.mentor, { experience: event.target.value })

                })
                break;
            case "facebookLink":
                this.setState({
                    mentor: Object.assign({}, this.state.mentor, { facebookLink: event.target.value })

                })
                break;
            case "moreHelp":
                this.setState({
                    mentor: Object.assign({}, this.state.mentor, { moreHelp: event.target.value })

                })
                break;
            case "radioNotAgree":
                console.log(event.target.value);
                this.setState({
                    mentor: Object.assign({}, this.state.mentor, { agree: event.target.value })
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
                stepComponent = <StepOne modal={this.state.modalMentor} toggle={this.toggleMentor} handleInputChange={this.handleInputChange} />
                break;
            case 2:
                stepComponent = <StepTwo modal={this.state.modalMentor} toggle={this.toggleMentor} handleInputChange={this.handleInputChange} />
                break;
            case 3:
                stepComponent = <StepThree modal={this.state.modalMentor} toggle={this.toggleMentor} handleInputChange={this.handleInputChange} />
                break;

            default:
                break;
        }
        return (
            <Modal isOpen={this.state.modalMentor} toggle={this.toggleMentor}>
                <ModalHeader toggle={this.toggleMentor}>Đăng kí</ModalHeader>
                <ModalBody>
                    {stepComponent}
                    <div className="uk-margin">
                        {
                            this.state.step < 3 
                            ? (this.state.step > 1
                                ? <div className="col-12 offset-md-5 col-md-7 no-padding uk-flex uk-flex-between">
                                    <button className="uk-button uk-float-right uk-button-default" onClick={this.prevousStepMentor}>Trở lại</button>
                                    <button className="uk-button uk-float-right uk-button-primary" onClick={this.nextStepMentor}>Tiếp tục</button>
                                </div>
                                : <button className="uk-button uk-float-right uk-button-primary" onClick={this.nextStepMentor}>Tiếp tục</button>)
                            : <button className="uk-button uk-float-right uk-button-primary" disabled={this.state.clicked} onClick={this.submit}>Đăng kí</button>
                        }
                    </div>
                </ModalBody>
                <ModalFooter>
                    {/* <button className="uk-button uk-button-primary" onClick={props.toggle}>Đăng kí</button>{' '} */}
                    <button className="uk-button uk-button-default" onClick={this.toggleMentor}>Huỷ</button>
                </ModalFooter>
            </Modal>
        )
    }
}