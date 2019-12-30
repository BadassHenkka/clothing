import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
        // Name is either email or password
        // and then it points to the value that is being typed
        // and sets that in the state dynamically.
        // This way we handleChange can be used in both input field
        // onChange events.
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email' 
                        type="email" 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        // onChange is defined in the FormInput component
                        label='email'
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type="password" 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign in with Google{' '}
                        </CustomButton>
                        {/* isGoogleSignIn is simply for button styling */}
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;