const AboutThisApp = () => {

    return (
        <>
            <h3>About this page</h3>
            <p>This is a simple javascript app that uses a CI/CD pipeline through github, deployed on two EC2 instances in AWS.  The first instance hosts the React frontend.  The second instance runs an Express server that simply has a single API called from the React frontend. Any changes committed to this github repository auto updates this app.</p>
            <p/>
            <a target="_blank" href="https://github.com/lukaneek/clientServer">Link To This Applications Repository</a>
        </>
    );
}

export default AboutThisApp;