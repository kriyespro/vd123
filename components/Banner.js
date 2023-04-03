
const Banner = () => {
  return (
    <>
    <div className="banner" id="banner">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner banner-slider-inner text-center">
            <div className="carousel-item banner-max-height active item-bg">
                <img classNameName="d-block w-100 h-100" src="img/car-1.jpg" alt="banner" />
                <div className="carousel-content container banner-info-2 bi-2 text-left">
                    <h3>Explore Properties</h3>
                    <h5>Allow us to guide you through the innovative stress
                        free approach in finding your dream car</h5>
                    <a href="services.html" className="btn btn-lg btn-theme">Read more</a>
                </div>
            </div>
            <div className="carousel-item banner-max-height item-bg">
                <img className="d-block w-100 h-100" src="img/car-2.jpg" alt="banner"/>
                <div className="carousel-content container banner-info-2 bi-2 text-left">
                    <h3>Explore Properties</h3>
                    <h5>Allow us to guide you through the innovative stress
                        free approach in finding your dream car.</h5>
                    <a href="#" className="btn btn-lg btn-theme">Read more</a>
                </div>
            </div>
            <div className="carousel-item banner-max-height item-bg">
                <img className="d-block w-100 h-100" src="img/car-3.jpg" alt="banner"/>
                <div className="carousel-content container banner-info-2 bi-2 text-left">
                    <h3>Explore Properties</h3>
                    <h5>Allow us to guide you through the innovative stress

                        free approach in finding your dream car.</h5>
                    <a href="#" className="btn btn-lg btn-theme">Read more</a>
                </div>
            </div>
        </div>
        
        <div className="search-box-4 sb-8">
            <form action="#" method="">
                <div className="form-group">
                    <input type="text" name="keyword" placeholder="Search by name" className="form-control"/>
                </div>
                <div className="form-group">
                    <select className="form-control search-fields" name="select-brand">
                        <option selected="true" disabled="disabled">Property Type</option>
                        <option>Flat</option>
                        <option>House</option>
                        <option>Office</option>
                        <option>Plot</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="form-control search-fields" name="select-make">
                        <option selected="true" disabled="disabled">Location</option>
                        <option>Adajan</option>
                        <option>Vesu</option>
                        <option>Vip Road</option>
                        <option>City Light</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="form-control search-fields" name="select-location">
                        <option selected="true" disabled="disabled">Space</option>
                        <option>1 Bhk</option>
                        <option>2 Bhk</option>
                        <option>3 Bhk</option>
                        <option>4 Bhk</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="form-control search-fields" name="select-year">
                        <option selected="true" disabled="disabled">Year</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="form-control search-fields" name="select-type">
                        <option selected="true" disabled="disabled">Select Type</option>
                        <option>For Rent</option>
                        <option>For Sale</option>
                        
                    </select>
                </div>
                <div className="range-slider clearfix">
                                <label>Price</label>
                                <div data-min="0" data-max="100000000"

                                data-min-name="min_price" data-max-name="max_price" data-unit="INR" className="range-slider-ui ui-slider" aria-disabled="false"></div>
                                <div className="clearfix"></div>
                            </div>
                <div className="form-group">
                    <button className="btn btn-block button-theme btn-md">
                        <i className="fa fa-search"></i> Search
                    </button>
                </div>
            </form>
        </div>
        
        <a className="carousel-control-prev none-580" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="slider-mover-left" aria-hidden="true">
                <i className="fa fa-angle-left"></i>
            </span>
        </a>
        <a className="carousel-control-next none-580" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="slider-mover-right" aria-hidden="true">
                <i className="fa fa-angle-right"></i>
            </span>
        </a>
    </div>
</div>

    </>
  )
}

export default Banner