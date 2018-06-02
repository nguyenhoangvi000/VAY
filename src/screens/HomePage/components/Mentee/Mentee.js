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
import { StepSuccess } from './components/StepSuccess/index';

export default class Mentee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalMentee: false,
            mentee: {
                fullNamePresenter: "",
                phoneNumberPresenter: "",
                emailPresenter: "",
                facebookLinkPresenter: "",
                fullNameMentee: "",
                DOBMentee: "",
                homeTownMentee: "",
                schoolMentee: "",
                numberOfMoney: "",
                purposeUsingMoney: "",
                phoneNumberMentee: "",
                emailMentee: "",
                linkAvatarMentee: "",
                facebookLinkMentee: "",
                markResultMentee: "",
                linkImageMark: "",
                archivementMentee: "",
                linkCardMentee: "",
                wishMentee: "",
                dreamMentee: "",
                stuckMentee: "",
                planMentee: "",
                successorMentee: "",
                planGraduate: "",
                whyhelpMentee: "",
                ifnotMentee: "",
                donateMentee: "",
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

    prevousStepMentee = () => {
        if (this.state.step > 1)
            this.setState({
                step: this.state.step - 1
            })
    }

    toggleMentee = () => {
        this.setState({
            modalMentee: !this.state.modalMentee
        })
    }

    submit = () => {
        let that = this;
        this.setState({
            clicked: true,
            step: 12
        })
        var jqxhr = $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbyYQ1g2-trWKZAahLKRUe4EI1iPYQ8mup4H716ix--JElenmace/exec',
            method: "POST",
            dataType: "json",
            data: JSON.parse(JSON.stringify(this.state.mentee))
        }).then((res) => {
            if (res.result === "success") {
                this.toggleMentee();
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
            case "fullNamePresenter":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { fullNamePresenter: event.target.value })
                })
                break;
            case "phoneNumberPresenter":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { phoneNumberPresenter: event.target.value })
                })
                break;
            case "emailPresenter":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { emailPresenter: event.target.value })
                })
                break;
            case "facebookLinkPresenter":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { facebookLinkPresenter: event.target.value })
                })
                break;
            case "fullNameMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { fullNameMentee: event.target.value })
                })
                break;
            case "DOBMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { DOBMentee: event.target.value })
                })
                break;
            case "homeTownMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { homeTownMentee: event.target.value })
                })
                break;
            case "schoolMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { schoolMentee: event.target.value })
                })
                break;
            case "numberOfMoney":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { numberOfMoney: event.target.value })
                })
                break;
            case "purposeUsingMoney":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { purposeUsingMoney: event.target.value })
                })
                break;
            case "phoneNumberMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { phoneNumberMentee: event.target.value })
                })
                break;
            case "emailMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { emailMentee: event.target.value })
                })
                break;
            case "linkAvatarMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { linkAvatarMentee: event.target.value })
                })
                break;
            case "facebookLinkMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { facebookLinkMentee: event.target.value })
                })
                break;
            case "markResultMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { markResultMentee: event.target.value })
                })
                break;
            case "linkImageMark":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { linkImageMark: event.target.value })
                })
                break;
            case "archivementMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { archivementMentee: event.target.value })
                })
                break;
            case "linkIDMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { linkCardMentee: event.target.value })
                })
                break;
            case "wishMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { wishMentee: event.target.value })
                })
                break;
            case "dreamMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { dreamMentee: event.target.value })
                })
                break;
            case "stuckMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { stuckMentee: event.target.value })
                })
                break;
            case "planMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { planMentee: event.target.value })
                })
                break;
            case "successorMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { successorMentee: event.target.value })
                })
                break;
            case "planGraduate":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { planGraduate: event.target.value })
                })
                break;
            case "whyhelpMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { whyhelpMentee: event.target.value })
                })
                break;
            case "ifnotMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { ifnotMentee: event.target.value })
                })
                break;
            case "donateMentee":
                this.setState({
                    mentee: Object.assign({}, this.state.mentee, { donateMentee: event.target.value })
                })
                break;
            case "radioNotAgreeReturnMoney":
                this.setState({
                    step: -1
                })
                break;
            case "radioNotAgreeSendMoney":
                this.setState({
                    step: -1
                })
                break;
            case "radioNotAgreeMeetmentor":
                this.setState({
                    step: -1
                })
                break;
            case "radioNotAgreeUseMoneyOnPurpose":
                this.setState({
                    step: -1
                })
                break;
            case "radioNotAgreeTermOfService":
                this.setState({
                    step: -1
                })
                break;
            case "radioNotAgreeSendLinkToPresenter":
                this.setState({
                    step: -1
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
                stepComponent = <StepOne modal={this.state.modalMentee} toggle={this.toggleMentee} handleInputChange={this.handleInputChange} />
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
            case 7:
                stepComponent = <StepSeven modal={this.state.modalMentee} toggle={this.toggleMentee} handleInputChange={this.handleInputChange} />
                break;
            case 8:
                stepComponent = <StepEight modal={this.state.modalMentee} toggle={this.toggleMentee} handleInputChange={this.handleInputChange} />
                break;
            case 9:
                stepComponent = <StepNine modal={this.state.modalMentee} toggle={this.toggleMentee} handleInputChange={this.handleInputChange} />
                break;
            case 10:
                stepComponent = <StepTen modal={this.state.modalMentee} toggle={this.toggleMentee} handleInputChange={this.handleInputChange} />
                break;
            case 11:
                stepComponent = <StepEleven modal={this.state.modalMentee} toggle={this.toggleMentee} handleInputChange={this.handleInputChange} />
                break;
            case 12:
                stepComponent = <StepSuccess modal={this.state.modalMentee} toggle={this.toggleMentee} handleInputChange={this.handleInputChange} />
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
                            this.state.step != -1
                                ? this.state.step < 10
                                    ? (this.state.step > 1
                                        ? <div className="col-12 offset-md-5 col-md-7 no-padding uk-flex uk-flex-between">
                                            <button className="uk-button uk-float-right uk-button-default" onClick={this.prevousStepMentee}>Trở lại</button>
                                            <button className="uk-button uk-float-right uk-button-primary" onClick={this.nextStepMentee}>Tiếp tục</button>
                                        </div>
                                        : <button className="uk-button uk-float-right uk-button-primary" onClick={this.nextStepMentee}>Tiếp tục</button>)
                                    : <button className="uk-button uk-float-right uk-button-primary" disabled={this.state.clicked} onClick={this.submit}>Đăng kí</button>
                                : ''
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