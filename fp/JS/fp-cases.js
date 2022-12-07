const cases = {
    "Tay-Bot": {
        "title": "Microsoft Tay Bot",
        "imageFile": "tay-bot.jpeg",
        "year": "2016",
        "sector": "Private",
        "domain": "Social Media / Chatbot",
        "description": "MSR Tech Research designed the algorithm to mimic the language patterns of a young American girl and to learn from interacting with human users of Twitter. However, Taybot began to post inflammatory and offensive tweets and racist, white supremacy replies. Microsoft abolished the algorithm 16 hours after it was released, but commented that is helped navigate an AI approach."
    },

    "Twitter": {
        "title": "Twitter's Image Cropping Algorithm",
        "imageFile": "twitter.jpg",
        "year": "2018",
        "sector": "Private",
        "domain": "Image / Video",
        "description": "Twitter's image cropping algorithm was implemented in order to crop user's images to minimize the usage of space on the platform's main feed and allow to multiple pictures to be shown at once. This was done to improve consistency in the size of photos on timeline and to allow users to see more Tweets at a glance. However, Twitter users started noticing that the algorithm was biased towards white faces and did not crop images that were of people with darker skin tones. The algorithm was in use on the platform for three years, until its abolishment in 2021. "
    },

    "Zoom": {
        "title": "Zoom Virtual Background",
        "imageFile": "zoom.jpg",
        "year": "2020",
        "sector": "Private",
        "domain": "Image / Video",
        "description": "Zoom's feature to change user's virtual background during video calls received backlash in 2020 after people started noticing that the feature did not work on people with darker skin. However, Zoom has not released any statements about internal efforts to edit its algorithm to be more inclusive."
    },

    "Amazon": {
        "title": "Amazon's AI Recruiting Tool",
        "imageFile": "amazon.jpg",
        "year": "2014",
        "sector": "Private",
        "domain": "Hiring + Recruiting Services",
        "description": "Amazon's AI Recruiting Tool was an experimental hiring tool that used artificial intelligence to give job candidates scores ranging from one to five stars. The motivation for the algorithm's implementation was to decrease the company's hiring process costs. However, the algorithm's gender bias downgraded résumés containing the word 'women' and filtered out candidates who had attended women-only colleges. Reuters publicly reported history of algorithm's creation and development and Amazon engineers on the research team noticed faults in their algorithm 1 year after its deployment. Amazon released a statement in 2018 that they were abolishing the updates to their hiring algorithm."
    },
    
    "Microsoft-Zo": {
        "title": "Microsoft Zo",
        "imageFile": "zo.jpg",
        "year": "2016",
        "sector": "Private",
        "domain": "Social Media / Chatbot",
        "description": "Zo was Microsoft's follow-up to Taybot, another AI social chatboat which was also released in 2016. In this version, Microsoft's AI research team attempted at a more 'politically correct' english-language chatbot. Zo was built based on more successful Microsoft AI chatbots that had been released in China and Japan. The chatbot received criticism for the biases it introduced in an effort to avoid potentially offensive subjects. Zo was programmed to avoid discussing politics and religion but the chatbot continued to weigh-in on those topics. Journalistic criticism and media reporting of problems followed its release, and were instrumental in efforts that evetually led to its abolishment on all platforms in 2019."
    },

    "San-Diego-Police": {
        "title": "San Diego County Facial Recognition Tools (TACIDS)",
        "imageFile": "sandiego.jpg",
        "year": "2012",
        "sector": "Public",
        "domain": "Facial Recognition + Surveillance",
        "description": "San Diego County police used facial recognition software (TACIDS) to identify people that officers felt were not being truthful about their identity and to help obtain a person's criminal history in efforts to increase public safety. Backlash about privacy concerns led to a 3-year ban in 2019 on the use of this technology. Currently, it is still under investigation whether the facial recognition tool will be reinstated."
    },

    "San-Francisco-Police": {
        "title": "San Francisco Facial Recognition",
        "imageFile": "sanfrancisco.jpg",
        "year": "2019",
        "sector": "Public",
        "domain": "Facial Recognition + Surveillance",
        "description": "The city of San Francisco had been contemplating the use of facial recognition software by their police officers in efforts to increase public safety. In 2019, facial recognition software was not put into use in the city, but it was implemented in areas not falling under the legislation, such as international airports and ports. This was largely due to public fears of California becoming an overly surveillanced state."
    },
    
    "Project-Greenlight": {
        "title": "Project Greenlight Detroit",
        "imageFile": "projectgreenlight.jpg",
        "year": "2016",
        "sector": "Public",
        "domain": "Facial Recognition + Surveillance",
        "description": "Project Greenlight is an initiative in the city of Detroit to use real-time camera monitoring in locations throughout the city to increase public safety. Since its implementation in 2016, there has been considerable pushback from the public, saying that the cameras have been used to detect illegal immigrants and to arrest protesters who were not social distancing during the pandemic protests."
    },

    "Pittsburgh-Predictive-Policing": {
        "title": "Pittsburgh Predictive Policing",
        "imageFile": "pghpolice.jpg",
        "year": "2019",
        "sector": "Public",
        "domain": "Predictive Policing",
        "description": "Facial recognition software was deployed to be used by the Pittsburgh Police Department for predictive policing in efforts to reduce crime. However, it was found to disproportionately target people of color and was abolished in 2020 after public protests."
    },

    "Chicago-Police": {
        "title": "Chicago Predictive Policing",
        "imageFile": "chicagopolice.jpg",
        "year": "2012",
        "sector": "Public",
        "domain": "Predictive Policing",
        "description": "The Chicago Police Department used algorithmic decision-making to predict the likelihood of a person becoming a Party to Violence (PTV) or be involved as either a victim or offender of a violent crime. Its use was kept secret from the public and was finally abolished in 2019."
    },

    "Pittsburgh-Screening-Tool": {
        "title": "Pittsburgh Alleghenu County Family Screening Tool (AFST)",
        "imageFile": "pghafst.jpg",
        "year": "2016",
        "sector": "Public",
        "domain": "Child / Family Welfare",
        "description": "A predictive risk modeling tool was used by the Allegheny County Department of Human Services (DHS) to help decide which families should be investigated by social workers. Families whose children were determined by the algorithm to be at high risk were investigated. The algorithm was implemented to help make more accurate predictions of a child's welfare and safety and reduce human workload and variabilty in making decisions. Although there has been much backlash due to the algorithm's biases against people of color, the algorithm is still in use today."
    }
};