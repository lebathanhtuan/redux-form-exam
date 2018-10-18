import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignUp extends Component {
    constructor() {
        super();
        this.renderField = this.renderField.bind(this);
        this.onSubmitSignUp = this.onSubmitSignUp.bind(this);
    }
    renderField = (field) => {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <div>
                    <input {...field.input} placeholder={field.label} type={field.type} className="form-control"/>
                </div>
                {field.meta.touched ? <span className="text-danger">{field.meta.error}</span> : ''}
            </div>
        )
    }
    onSubmitSignUp(values) {
    }
    render() {
        const { handleSubmit, reset, pristine } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmitSignUp)}>
                <Field
                    label="Họ và tên"
                    name="fullName"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Tên đăng nhập"
                    name="userName"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Tuổi"
                    name="age"
                    type="text"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-outline-success">Submit</button>
                <button className="btn btn-outline-dark ml-2" disabled={pristine} onClick={reset}>Reset</button>
            </form>
        );
    }
}
const validate = values => {
    const errors = {}
    if (!values.fullName) {
        errors.fullName = 'Bạn chưa nhập họ và tên'
    }
    if (!values.userName) {
        errors.userName = 'Bạn chưa nhập tên đăng nhập'
    }
    if (!values.age) {
        errors.age = 'Bạn chưa nhập tuổi'
    }
    return errors
}

export default reduxForm({
    validate,
    form: 'signUp'
})(SignUp);
