import { useState } from 'react';

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen bg-light-gray flex">
      {/* Left Side - Blue Section */}
      <div className="flex-1 tech-gradient p-12 flex flex-col justify-center text-white relative">
        <div className="max-w-md">
          <h1 className="text-2xl font-light tracking-wider mb-8">TECHAUTH</h1>
          
          <h2 className="text-3xl font-normal mb-6 leading-tight">
            We're here to help you level up.
          </h2>
          
          <p className="text-white/90 mb-8 leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">T</span>
              </div>
              <div>
                <div className="text-white font-medium">Timson K</div>
                <div className="text-white/70 text-sm">Freelancer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="flex-1 bg-white flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-primary mx-auto mb-4 rounded"></div>
            <span className="text-sm text-muted-foreground">BaseFund</span>
          </div>

          {!isSignUp ? (
            /* Sign In Form */
            <div>
              <h2 className="text-2xl font-medium text-center mb-8">Sign In</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="required-asterisk">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="form-field"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Password <span className="required-asterisk">*</span>
                  </label>
                  <input 
                    type="password" 
                    className="form-field"
                    placeholder="Enter your password"
                  />
                </div>
                
                <div className="text-left">
                  <a href="#" className="text-accent text-sm underline hover:text-accent/80">
                    Forgot password?
                  </a>
                </div>
                
                <button type="submit" className="btn-primary">
                  Sign In
                </button>
              </form>
              
              <div className="text-center mt-6">
                <button 
                  onClick={toggleForm}
                  className="text-accent text-sm underline hover:text-accent/80"
                >
                  Don't have an account? Click here to register.
                </button>
              </div>
            </div>
          ) : (
            /* Sign Up Form */
            <div>
              <h2 className="text-2xl font-medium text-center mb-8">Sign Up</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name <span className="required-asterisk">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="form-field"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name <span className="required-asterisk">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="form-field"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Organization Name <span className="required-asterisk">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="form-field"
                      placeholder="Organization name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Team Name (Not the same as your organization name) <span className="required-asterisk">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="form-field"
                      placeholder="Team name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      City <span className="required-asterisk">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="form-field"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      State <span className="required-asterisk">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="form-field"
                      placeholder="State"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="required-asterisk">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="form-field"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Password <span className="required-asterisk">*</span>
                  </label>
                  <input 
                    type="password" 
                    className="form-field"
                    placeholder="Create a password"
                  />
                </div>
                
                <div className="text-sm text-muted-foreground mt-4">
                  By signing up you agree to the{' '}
                  <a href="#" className="text-accent underline hover:text-accent/80">Privacy</a>
                  {' '}and{' '}
                  <a href="#" className="text-accent underline hover:text-accent/80">Terms</a>
                  {' '}policies.
                </div>
                
                <button type="submit" className="btn-primary mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
                  LET'S DO IT
                </button>
              </form>
              
              <div className="text-center mt-6">
                <button 
                  onClick={toggleForm}
                  className="text-accent text-sm underline hover:text-accent/80"
                >
                  Already have an account? Sign in here.
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;