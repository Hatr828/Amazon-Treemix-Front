'use client';

import { useState } from 'react';
import '@/app/cart/css/login_signin.css';

type Props = {
    onNavigate: () => void;
}

export default function AuthForm({onNavigate}: Props) {
    const [mode, setMode] = useState('login');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-tabs">
          <span
              className={`login-tab ${mode === 'login' ? 'active' : ''}`}
              onClick={() => setMode('login')}
          >
            Log in
          </span>
                    <span
                        className={`login-tab ${mode === 'signup' ? 'active' : ''}`}
                        onClick={() => setMode('signup')}
                    >
            Sign up
          </span>
                </div>

                {mode === 'login' ? (
                    <form className="login-form">
                        <div className="login-input-group">
                            <input type="email" placeholder="E-mail" />
                        </div>

                        <div className="login-input-group login-password">
                            <input type={showPassword ? 'text' : 'password'} placeholder="Password" />
                            <span
                                className="login-eye"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                👁
                            </span>
                        </div>

                        <div className="login-forgot">
                            <a href="#">Forgot your password?</a>
                        </div>

                        <div className="login-checkbox">
                            <input type="checkbox" />
                            <label>
                                I agree with <a href="#">Terms and Service</a> and{' '}
                                <a href="#">Privacy Policy</a>
                            </label>
                        </div>

                        <button type="submit" className="login-button" onClick={onNavigate}> {/*TODO: login*/}
                            Log in
                        </button>
                    </form>
                ) : (
                    <form className="login-form">
                        <div className="login-input-group">
                            <input type="text" placeholder="First name"/>
                        </div>

                        <div className="login-input-group">
                            <input type="text" placeholder="Last name"/>
                        </div>

                        <div className="login-input-group">
                            <input type="email" placeholder="Email address"/>
                        </div>

                        <div className="login-input-group login-password">
                            <input type={showPassword ? 'text' : 'password'} placeholder="Password"/>
                            <span
                                className="login-eye"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                👁
              </span>
                        </div>

                        <div className="login-checkbox">
                            <input type="checkbox" />
                            <label>
                                I agree with <a href="#">Terms and Service</a> and{' '}
                                <a href="#">Privacy Policy</a>
                            </label>
                        </div>

                        <button type="submit" className="login-button">
                            Sign up
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}