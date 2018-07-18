import {observable} from 'mobx';
var validator = require('validator');
class store {
  @observable firstName='';
  @observable lastName='';
  @observable address='';
  @observable cc='';
  @observable exp='';
  @observable cvv='';
  @observable type='';
  @observable err='';
  @observable alertColor= 'danger';
  @observable isErrVisible= false;


  handleFirstNameChange = (arg) => {
    this.firstName = arg.target.value
  }
  handleLastNameChange = (arg) => {
    this.lastName = arg.target.value
  }
  handleAddressChange = (arg) => {
    this.address = arg.target.value
  }
  handleCardTypeChange = (arg) => {
    this.type = arg.target.value
  }
  handleCardNumberChange = (arg) => {
    this.cc = arg.target.value
  }
  handleCardExpiryChange = (arg) => {
    this.exp = arg.target.value
  }
  handleCardCVCChange = (arg) => {
    let parseint = parseInt(arg.target.value)
    this.cvv = parseint.toString()
  }
  onDismiss = () => {
    this.isErrVisible = false
  }
  submit = () => {

    if(validator.isEmpty(this.firstName)){
        this.err = 'Please enter a valied first name and try again.'
        this.alertColor = 'danger'
        this.isErrVisible = true 
    }else if(validator.isEmpty(this.lastName)){
        this.err= 'Please enter a valied last name and try again.'
        this.alertColor= 'danger'
        this.isErrVisible= true
    }else if(validator.isEmpty(this.address)){
        this.err= 'Please enter a valied address and try again.'
        this.alertColor= 'danger'
        this.isErrVisible= true 

    }else if(validator.isEmpty(this.type)){
        this.err= 'Please select a valied creditcard type and try again.'
        this.alertColor= 'danger'
        this.isErrVisible= true 
    }else if(validator.isEmpty(this.cc)){
        this.err= 'Please enter a valied creditcard and try again.'
        this.alertColor= 'danger'
        this.isErrVisible= true
    }else if(validator.isCreditCard(this.cc)){
        this.err= 'Please enter a valied creditcard and try again.'
        this.alertColor= 'danger'
        this.isErrVisible= true
    }else if(validator.isEmpty(this.exp)){
        this.err= 'Please enter a valied expiration date and try again.'
        this.alertColor= 'danger'
        this.isErrVisible= true
    }else if(validator.toDate(this.exp)){
        this.err= 'Please enter a valied expiration date and try again.'
        this.alertColor= 'danger'
        this.isErrVisible= true
    }else if(validator.isEmpty(this.cvv)){
        this.err= 'Please enter a valied cvv and try again.'
        this.alertColor= 'danger'
        this.isErrVisible= true
    }else if(validator.isLength(this.cvv, { min: 3, max: 4 })){
        this.err= 'Success'
        this.alertColor= 'success'
        this.isErrVisible= true
    }else{
        this.err= 'Please enter a valied cvv and try again.'
        this.alertColor= 'danger'
        this.isErrVisible= true 
    }
  }

}

export default new store();