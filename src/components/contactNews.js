export default function ContactNews(){
    return(
        <>
           <section className="contact-section">
        <div className="outer-box">
          <div className="bg bg-pattern-6"></div>
          <div className="auto-container">
            <div className="row">
             
              <div className="title-column col-lg-7 col-md-12 wow fadeInLRight">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">contact with us</span>
                    <h2>Book your <span className="color3">consultation</span></h2>
                    <div className="text">There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum leo massa mollis.</div>
                  </div>
    
                  <ul className="list-style-two">
                    <li><i className="fa fa-check-circle"></i> Making this the first true generator on the Internet</li>
                    <li><i className="fa fa-check-circle"></i> Lorem Ipsum is not simply random text</li>
                    <li><i className="fa fa-check-circle"></i> If you are going to use a passage</li>
                  </ul>
                  
                  <div className="ceo-info">
                    <figure className="thumb"><img src="%PUBLIC_URL%/site_kit/images/resource/ceo-thumb.jpg" alt=""/></figure>
                    <h6 className="name">Aleesha Brown</h6>
                    <div className="designation">CEO & CO Founder</div>
                  </div>
                </div>
              </div>
    
              <div className="form-column col-lg-5 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="form-outer">
    
                    
                    <div className="contact-form wow fadeInLeft">
                     
                      <form method="post" action="get" id="contact-form">
                        <div className="form-group">
                          <input type="text" name="full_name" placeholder="Your Name" required/>
                        </div>
                  
                        <div className="form-group">
                          <input type="text" name="Email" placeholder="Email Address" required/>
                        </div>
    
                        <div className="form-group">
                          <textarea name="message" placeholder="Write a Message" required></textarea>
                        </div>
                
                        <div className="form-group">
                          <button className="theme-btn btn-style-three" type="submit" name="submit-form"><span className="btn-title">Send a Message</span></button>
                        </div>
                      </form>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">News & Updates</span>
            <h2>Latest news directly <br/> from the <span className="color3">blog</span></h2>
          </div>
      
          <div className="row">
            
            <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><a href="news-details.html"><img src="%PUBLIC_URL%/site_kit/images/resource/news-1.jpg" alt=""/></a></figure>
                  <span className="date">30 <span className="month">March</span></span>
                </div>
                <div className="lower-content">
                  <ul className="post-info">
                    <li><i className="fa fa-user-circle"></i>Admin</li>
                    <li><i className="fa fa-comments"></i> 2 Comments</li>
                  </ul>
                  <h4 className="title"><a href="news-details.html">Top 9 most demand jobs in canada</a></h4>
                  <div className="text">There are not many of passages of lorem ipsum available alteration in some form.</div>
                </div>
              </div>
            </div>
    
    
            
            <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><a href="news-details.html"><img src="%PUBLIC_URL%/site_kit/images/resource/news-2.jpg" alt=""/></a></figure>
                  <span className="date">30 <span className="month">March</span></span>
                </div>
                <div className="lower-content">
                  <ul className="post-info">
                    <li><i className="fa fa-user-circle"></i>Admin</li>
                    <li><i className="fa fa-comments"></i> 2 Comments</li>
                  </ul>
                  <h4 className="title"><a href="news-details.html">Top 9 most demand jobs in canada</a></h4>
                  <div className="text">There are not many of passages of lorem ipsum available alteration in some form.</div>
                </div>
              </div>
            </div>
      
            
            <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><a href="news-details.html"><img src="%PUBLIC_URL%/site_kit/images/resource/news-3.jpg" alt=""/></a></figure>
                  <span className="date">30 <span className="month">March</span></span>
                </div>
                <div className="lower-content">
                  <ul className="post-info">
                    <li><i className="fa fa-user-circle"></i>Admin</li>
                    <li><i className="fa fa-comments"></i> 2 Comments</li>
                  </ul>
                  <h4 className="title"><a href="news-details.html">Top 9 most demand jobs in canada</a></h4>
                  <div className="text">There are not many of passages of lorem ipsum available alteration in some form.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}