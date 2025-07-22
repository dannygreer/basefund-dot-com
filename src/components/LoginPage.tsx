import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    // Reset passwords when switching forms
    setEmail('');
    setPassword('');
    setSignUpPassword('');
  };
  const isSignInComplete = email.trim() !== '' && password.trim() !== '';
  const isSignUpPasswordStarted = signUpPassword.trim() !== '';
  return <TooltipProvider>
    <div className="min-h-screen bg-light-gray flex flex-col md:flex-row">
      {/* Left Side - Blue Section */}
      <div className="md:flex-1 py-16 px-6 md:p-12 flex flex-col justify-center text-white relative order-1 md:order-none h-45 md:h-auto" style={{
        background: 'linear-gradient(180deg, #145DD0 0%, #145DD0 70%, #28A4DD 100%)'
      }}>
        <div className="max-w-md mx-auto md:my-0 flex flex-col justify-center items-center md:items-start h-full">
          <img src="/lovable-uploads/0df6207d-c067-4c95-b089-f3b6b2bb1c42.png" alt="BaseFund" className="h-6 md:h-8 mb-8 mx-auto md:mx-0 mt-5 md:mt-0" />
          
          <h2 className="text-[26px] md:text-[32px] lg:text-[42px] font-black mb-6 leading-tight text-center md:text-left">
            <span className="md:hidden">Secure and insure<br />your money in motion.</span>
            <span className="hidden md:inline">Secure and insure your money in motion.</span>
          </h2>
          
          
          <p className="text-white/90 mb-8 leading-relaxed font-bold hidden md:block">Secure your transactions through robust identity verification, bank account validation, and insurance protection.</p>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm mt-12 hidden md:block">
            <h3 className="text-xl font-bold text-white mb-4 leading-tight">
              Trusted by thousands of financial leaders and the world's leading banks.
            </h3>
            
            <p className="text-white/90 leading-relaxed">
              Basefund is managing over $200 billion in payments and securely closing billions each month.
            </p>
            
            <a 
              href="https://basefund.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-white/90 rounded-lg font-medium transition-colors hover:bg-white" 
              style={{ color: '#145DD0' }}
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="flex-1 bg-white flex items-center justify-center p-6 md:p-12 order-2 md:order-none">
        <div className="w-full max-w-md">

          {!isSignUp ? (/* Sign In Form */
          <div>
              <h2 className="text-2xl font-medium text-center mb-8">Sign In</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="required-asterisk">*</span>
                  </label>
                  <input type="email" className="form-field" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Password <span className="required-asterisk">*</span>
                  </label>
                  <input type="password" className="form-field" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                
                <div className="text-left">
                  <a href="#" className="text-sm underline" style={{ color: '#145DD0' }}>
                    Forgot password?
                  </a>
                </div>
                
                <button type="submit" className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${isSignInComplete ? 'text-white' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`} style={isSignInComplete ? {
                backgroundColor: '#145DD0'
              } : {}}>
                  Sign In
                </button>
              </form>
              
              <div className="text-center mt-6">
                <button onClick={toggleForm} className="text-sm underline" style={{ color: '#145DD0' }}>
                  Don't have an account? Click here to register.
                </button>
              </div>
            </div>) : (/* Sign Up Form */
          <div>
              <h2 className="text-2xl font-medium text-center mb-8">Sign Up</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name <span className="required-asterisk">*</span>
                    </label>
                    <input type="text" className="form-field" placeholder="First name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name <span className="required-asterisk">*</span>
                    </label>
                    <input type="text" className="form-field" placeholder="Last name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Organization Name <span className="required-asterisk">*</span>
                    </label>
                    <input type="text" className="form-field" placeholder="Organization name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      Team Name <span className="required-asterisk">*</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="w-4 h-4 rounded-full bg-muted text-muted-foreground text-xs flex items-center justify-center cursor-help">?</span>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p style={{ color: '#145DD0' }}>Your team name should be unique from your organization name. As an example, this may be your location or the name of a working group.</p>
                        </TooltipContent>
                      </Tooltip>
                    </label>
                    <input type="text" className="form-field" placeholder="Team name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      City <span className="required-asterisk">*</span>
                    </label>
                    <input type="text" className="form-field" placeholder="City" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      State <span className="required-asterisk">*</span>
                    </label>
                    <select className="form-field" defaultValue="">
                      <option value="" disabled>Select state</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                      <option value="DC">District of Columbia</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="required-asterisk">*</span>
                  </label>
                  <input type="email" className="form-field" placeholder="Enter your email" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Password <span className="required-asterisk">*</span>
                  </label>
                  <input type="password" className="form-field" placeholder="Create a password" value={signUpPassword} onChange={e => setSignUpPassword(e.target.value)} />
                </div>
                
                <div className="text-sm text-muted-foreground mt-4">
                  By signing up you agree to the{' '}
                  <a href="#" className="underline" style={{ color: '#145DD0' }}>Privacy</a>
                  {' '}and{' '}
                  <a href="#" className="underline" style={{ color: '#145DD0' }}>Terms</a>
                  {' '}policies.
                </div>
                
                <button type="submit" className={`w-full py-3 px-4 rounded-lg font-medium transition-colors mt-6 ${isSignUpPasswordStarted ? 'text-white' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`} style={isSignUpPasswordStarted ? {
                backgroundColor: '#145DD0'
              } : {}}>
                  LET'S DO IT
                </button>
              </form>
              
              <div className="text-center mt-6">
                <button onClick={toggleForm} className="text-sm underline" style={{ color: '#145DD0' }}>
                  Already have an account? Sign in here.
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </div>
    </TooltipProvider>;
};
export default LoginPage;