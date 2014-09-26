/** This is the home page file **/

$(function(){

    //Default Content
    getHomeContent();
    
    /** This is the click on top menu items
     */
    $('#menuItems li').click(function(e){
        e.preventDefault();
        
        $(this).tab('show');
        
        var showContentNum = $(this).attr('rel');
        
        showContentFunction(showContentNum);
    });
    
    /** This function is to get the contents of menu items
     *
     * @param {Object} showContentNum is the order number
     */
    function showContentFunction(showContentNum){
        switch (showContentNum) {
            case "1":
                getHomeContent();
                break;
            case "2":
                getAboutUsContent();
                break;
            case "3":
                getWhatWeDoContent();
                break;
            case "4":
                getCareersContent();
                break;
            case "5":
                getContactUsContent();
                break;
        }
    }
    
    /** This function is to get the home content
     */
    function getHomeContent(){
        var homeContent = templateDashboard.renderHome();
        
        showContent(homeContent);
    }
    
    /** This function is to get the about us content
     */
    function getAboutUsContent(){
        var headers = ["Customer Oriented Company", "Technically Advanced", "No Hampered Communications", "Quality"];
        var contents = ["We help businesses harness the power of technology. Through our experience and know-how, we provide cutting edge solutions to our client’s challenges.\
							We fully understand your needs and fulfill them in the best way possible.\
							Stable, reliable, qualified, and expert team", "India has a lot of skilled human resources, scientific and engineering labs and institutions etc. We know the technologies and we will make it work for you.", "Strong relations and communication with our clients is our biggest strength.\
							Easy communication - which is what our customers and partners appreciate. Reaction time is at a minimum. You will like the speed and quality of our work. In addition, we try to 'predict' your desires and satisfy them.", "We know the technology and how to develop software. We use the best practices of worldwide software development technology.The quality is predictable and extremely reliable."];
        var requiredContent = "";
        
        for (var i = 0; i < headers.length; i++) {
            requiredContent += templateDashboard.renderAboutUs({
                header: headers[i],
                content: contents[i]
            });
            
        };
        
        showContent(requiredContent);
        
    }
    
    /** This function is to get the what we do content
     */
    function getWhatWeDoContent(){
        var doContent = "VCube provides several services to its customer base. VCube's innovative thoughts and enriched technology expertise enables it to cater the needs of its customers. VCube team closely works with its customers to fulfill their needs throughout the contractual lifecycle including development, deployment, training and maintenance. Below is a summary list of services that we offer. ";
        
        var listItems = ["User Interface Design & Development", "Testing & Automation", "Offshore Engineering Center", "e-Business", "Enterprise Applications Services"];
        
        for (var i = 0; i < listItems.length; i++) {
            doContent += templateDashboard.renderWhatWeDo({
                "contentItem": listItems[i]
            });
        };
        
        showContent(doContent);
    }
    
    /** This function is to get the careers content
     */
    function getCareersContent(){
        var careersContent = "The most valuable assets for us are our employees who come from diverse cultural, geographical and educational backgrounds and bring with them vast knowledge and experience. They are the true face of our company - and that is why we put all our efforts into our team to get the best output - which is translated into exceptional customer service for our clients.\
							We believe in an ethical corporate culture and thus provide equal opportunity, learning, and growth for all our employees to empower themselves and go that extra mile for us.\
							No wonder our attrition rates are the lowest in the industry and our employees grow form strength to strength!\
							We proactively capitalize on our human resources by giving training in a supportive work environment so that it enables higher levels of performance. The recruitment process we follow is stringent and includes aptitude tests, technical and personal interviews, mock call sessions and reference checks to ensure that we get the best talent in the industry.\
							Because we believe that our employees are the most important contributing factor to our success, our pay packages are a reflection of that. Our total benefits and compensation package is designed to attract, retain and reward the best people in the industry. The package we offer is regularly compared to our competitors to make sure we are meeting or exceeding employee expectation.\
							Thank you for considering VCube as an employer of choice. We welcome you to submit your resume and explore our current job openings at hr@vcubeinfo.com";
        
        showContent(careersContent);
    }
    
    /** This function is to get the home content
     */
    function getContactUsContent(){
        showContent(templateDashboard.renderContactUs());
        google.maps.event.addDomListener(window, 'load', loadOfficeMap());
    }
    
    /** This function will display all the content regarding particular menu item
     *
     */
    function showContent(content){
        $('.homePageContent').html(content);
    }
    
    /** It loads the map contents
     *
     */
    function loadOfficeMap(){
        var map_canvas = document.getElementById('map_canvas');
        var map_options = {
            center: new google.maps.LatLng(17.44887, 78.387533),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        
        var map = new google.maps.Map(map_canvas, map_options)
    }
})
