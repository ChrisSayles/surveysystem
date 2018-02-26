var surveyJSON = {
    pages: [
        {
        name: "page1",
        elements: [
        {
        type: "text",
        name: "Customer Name"
        },
        {
        type: "html",
        name: "question2",
        // html: "Click <a href="http://www.yahoo.com">here</a> to go to yahoo."
        },
        {
        type: "checkbox",
        name: "Which Oracle Cloud Services?",
        choices: [
        "Oracle SaaS",
        "PaaS/IaaS Service Consoles",
        "Oracle PaaS",
        "Oracle IaaS"
        ]
        },
        {
        type: "html",
        name: "question1",
        // html: "Click <a href="http://www.yahoo.com">here</a> to go to yahoo."
        },
        {
        type: "panel",
        name: "Which Third Party Clouds?",
        elements: [
        {
        type: "checkbox",
        name: "Which 3rd Party Clouds",
        choices: [
        "AWS",
        "Office 365",
        "Azure",
        "Salesforce",
        "Oracle",
        "IBM",
        "Box"
        ]
        },
        {
        type: "checkbox",
        name: "Federated?",
        hasOther: true,
        choices: [
        "SAML",
        "Oauth"
        ]
        }
        ],
        title: "Which Third Party Clouds?"
        },
        {
        type: "checkbox",
        name: "Which on Premises Applications?",
        indent: -28,
        choices: [
        "EBS",
        "PeopleSoft",
        "Siebel",
        "Other"
        ]
        },
        {
        type: "checkbox",
        name: "Will IDCS be used by consumers or enterprise users?",
        choices: [
        "Consumers",
        "Enterprise Users"
        ]
        },
        {
        type: "checkbox",
        name: "Which Enterprise Services will you use?",
        visible: false,
        visibleIf: "{question6} = 'Enterprise Users'",
        choices: [
        "Foundation",
        "Basic ",
        "Standard"
        ]
        },
        {
        type: "panel",
        name: "panel1",
        elements: [
        {
        type: "checkbox",
        name: "Will more than one password be needed?",
        choices: [
        "Yes ",
        "No"
        ]
        },
        {
        type: "checkbox",
        name: "question3",
        title: "Do you need more than just a password?",
        choices: [
        "Yes ",
        "No"
        ]
        },
        {
        type: "checkbox",
        name: "Will IDCS Use a Local Password",
        choices: [
        "Yes",
        "No"
        ]
        },
        {
        type: "checkbox",
        name: "question4",
        title: "Different than your on prem password?",
        choices: [
        "Yes ",
        "No"
        ]
        }
        ],
        title: "How will user authenticate?"
        },
        {
        type: "checkbox",
        name: "How will users/groups be created?",
        choices: [
        "Manually",
        "CSV Import",
        "Active Directory Bridge",
        "IDCS Connector",
        "REST API's",
        "SCIM",
        "Self Registration"
        ]
        },
        {
        type: "checkbox",
        name: "Will you allow users to change their forgotten password recovery eMail? ",
        choices: [
        "Yes",
        "No"
        ]
        },
        {
        type: "checkbox",
        name: "Will you be signing into social media?",
        choices: [
        "Yes",
        "No"
        ]
        },
        {
        type: "checkbox",
        name: "Will Multi-Factor Authentication be used?",
        choices: [
        "Yes",
        "No"
        ]
        },
        {
        type: "checkbox",
        name: "Will Multi-Factor Authentication be used?",
        visible: false,
        visibleIf: "{question12} = 'Yes'",
        choices: [
        "Security Questions",
        "Mobile Application OTP",
        "Text Messages",
        "Bypass Code",
        "Trusted Computer"
        ]
        },
        {
        type: "radiogroup",
        name: "User Type?",
        description: "Are they your employees",
        isRequired: true,
        choices: [
        "Employee/Partner",
        "Consumer"
        ]
        },
        {
        type: "radiogroup",
        name: "Manuel Or Automated Provisioning",
        visible: false,
        visibleIf: "{User Type?} = 'Employee/Partner'",
        choices: [
        "Manuel",
        "Automated",
        "Automated Via OIM IDC or Custom REST API"
        ]
        },
        {
        type: "boolean",
        name: "Only in Oracle Cloud?",
        visible: false,
        visibleIf: "{Manuel Or Automated Provisioning} = 'Manuel'"
        },
        {
        type: "checkbox",
        name: "Login to IDCS via:",
        visible: false,
        visibleIf: "{Only in Oracle Cloud?} = true",
        choices: [
        "Multi-Factor Authentication ( Y / N )",
        "Social Authentication ( Y / N )",
        "Multiple Identity Providers ( Y / N)"
        ]
        },
        {
        type: "boolean",
        name: "Users In Active Directory or Self Registered?",
        visible: false,
        visibleIf: "{Manuel Or Automated Provisioning} = 'Automated'"
        }
        ]
        }
        ]
        }

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(s.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});