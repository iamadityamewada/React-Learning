const App = () => {
  return ( 
<div>
    {/* Nav Bar */}
    <div className="nav-bar">
      {/* logo */}
      <div className="logo">
        <div className="logo-image"></div>
        <div className="logo-text"><p>AdyReach</p></div>
      </div>
      {/* Nav-Services */}
      <div className="nav-services">
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Work</p>
        <p>Contact</p>
      </div>
    </div>
    {/* About US */}
    <div className="about">
      <div className="image-box"></div>
      <div className="about-text">
        <h2>About Us</h2>
        <h3>Freelance Agency</h3>
        <p>Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Consequatur cupiditate
           inventore iste tempora necessitatibus
            blanditiis nulla vero quibusdam, quam 
            expedita delectus dolore error cum dolor 
            nobis officiis deserunt voluptatibus 
            voluptas.</p>
      </div>
    </div>
    {/* Services */}
    <div className="services">
      <h2>Our Services</h2>
      <div className="web-dev">1. Web Development</div>
      <div className="meta-ads">2. FaceBook & Instagram Ads</div>
      <div className="graphic-design">3. Video Editing & Graphics Design</div>
    </div>
  {/*  Our Work */}
  <div className="work">
    <h2>Our Work</h2>
    <div className="web-work">
      <h3>Web Development Project</h3>
      <div>1</div>
      <div>2</div>
    </div>
    <div className="meta-work">
      <h3>Meta Ads Result</h3>
      <div>1</div>
      <div>2</div>
    </div>
    <div className="graphics-work">
      <h3>Graphics</h3>
      <div>1</div>
      <div>2</div>
    </div>
  </div>
</div>
)
}
export default App;