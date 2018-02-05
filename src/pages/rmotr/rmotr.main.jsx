import "./rmotr.style.css";

export default class Rmotr extends React.Component{
    render(){
        return(
            <section className="rmotr-main-page">

                <div className="rmotr-nav bar">

                </div>

                <div className="landing-email">

                    <div className="landing-background gradient-background-1"></div>

                    <div className="landing-title">
                        Learn to code <br/> in an online classroom

                        <div className="landing-button-courses gradient-background-2">
                            View our courses
                        </div>

                    </div>

                    <div className="landing-email-subscription">

                        <div className="icon-email-subscription gradient-background-2">
                            <i className="fa fa-suitcase fa-2x"></i>
                        </div>

                        <div className="title-email-subscription">
                            Looking for the right career move?
                        </div>

                        <div className="text-email-subscription">
                            Answer a few questions and one of our education advisors will work with you 1-on-1 to find the right course for you.
                        </div>

                        <input type="text" className="input-email-subscription" placeholder="your_email@example.com"/>

                        <div className="button-email-subscription gradient-background-2">
                            Continue
                        </div>

                    </div>

                </div>

            </section>

        )
    }
}   