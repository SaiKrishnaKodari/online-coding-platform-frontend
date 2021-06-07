import { React, useState } from "react";

function Login(){
    const [username,setusername]=useState('')
    return (
            <div class="col-md-4 max-width form">
				<form method="post" action="dologin.php" class="form-stacked">
                <input type="hidden" name="token" value="08fbef06817f24d4cc869df02cc21e12a22f1fb3"/>
				<div class="form-segment">
				    <strong>Sign in with your e-mail</strong>
				    <div class="control-group">
					    <div class="controls">
						    <input class="input-xlarge" placeholder="Email Address" name="username" id="username" type="text" />
					    </div>
				    </div>
				<div class="control-group">
					<div class="controls">
						<input name="password" placeholder="Password" id="password" type="password" />
					</div>
				</div>
				<input type="submit" class="largeBtn primaryColor pullRight" value="Login"/>
		        <div class="rememberMe">
		            <input type="checkbox" id="rememberMe" name="rememberme"/> <label for="rememberMe">Remember Me</label>
				</div>
                <span class="passwordReset"><a href="pwreset.php"> Request a Password Reset</a></span>
                </div>
                <div class="form-segment fb">
                    <div class="socialLogin">
                        <strong>Use social sign in</strong>
                        <div class="g-signin2" data-onsuccess="onSignIn" data-prompt="select_account" data-gapiscan="true" data-onload="true">
                        <div style={{height:'36px',width:'120px'}} class="abcRioButton abcRioButtonLightBlue">
                                            <div class="abcRioButtonContentWrapper"><div class="abcRioButtonIcon" style={{padding:"8px"}}>
                                                <div style={{width:'18px',height:'18px'}} class="abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18">
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" class="abcRioButtonSvg"><g>
                                                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg></div></div><span style={{fontsize:"13px",lineheight:"34px"}} class="abcRioButtonContents"><span id="not_signed_in5daevdebmv">Sign in</span><span id="connected5daevdebmv" style={{display:'none'}}>Signed in</span></span></div></div></div>

						            <div class="fb-login-button fb_iframe_widget" data-width="320" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" onlogin="checkLoginState();" data-use-continue-as="false" login_text="" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=140235673279940&amp;auto_logout_link=false&amp;button_type=continue_with&amp;container_width=320&amp;locale=en_US&amp;login_text=&amp;max_rows=1&amp;sdk=joey&amp;show_faces=false&amp;size=large&amp;use_continue_as=false&amp;width=320"><span style={{verticalalign: 'bottom', width: '320px', height:'40px'}}>
                                        <iframe name="f19b4fa5f383754" width="320px" height="1000px" data-testid="fb:login_button Facebook Social Plugin" title="fb:login_button Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.10/plugins/login_button.php?app_id=140235673279940&amp;auto_logout_link=false&amp;button_type=continue_with&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3e31b3387c585e%26domain%3Dmy.freenom.com%26origin%3Dhttps%253A%252F%252Fmy.freenom.com%252Ff21f5875f556c8a%26relation%3Dparent.parent&amp;container_width=320&amp;locale=en_US&amp;login_text=&amp;max_rows=1&amp;sdk=joey&amp;show_faces=false&amp;size=large&amp;use_continue_as=false&amp;width=320" class="" style={{border: 'none', visibility: 'visible', width: '320px', height: '40px'}}></iframe></span></div>

								</div>
						</div>
				</form>
                <form id="gl" action="/sociallogin.php" method="POST">
                    <input type="hidden" name="token" value="08fbef06817f24d4cc869df02cc21e12a22f1fb3"/>
                    <input type="hidden" name="token_id" id="token_id"/>
                </form>
                <form id="fl" action="/sociallogin.php" method="POST">
                    <input type="hidden" name="token" value="08fbef06817f24d4cc869df02cc21e12a22f1fb3"/>
                    <input type="hidden" name="access_token" id="access_token"/>
                </form>
            </div>
    
    )
}
export default Login;