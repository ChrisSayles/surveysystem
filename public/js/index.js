var json = {
    pages: [
     {
      name: "page1",
      elements: [
       {
        type: "text",
        name: "Customer Name"
       },
       {
        type: "radiogroup",
        name: "User Type?",
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
       }]
     }],


    focusFirstQuestionAutomatic: false,
    completedHtml: "<p><h4>Thank you for the sharing information wiht us!</h4></p><p>Your satisfaction level is: <b>{satisfaction}</b></p>"
  }
  
  Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  Survey.Survey.cssType = "bootstrap";
  
  var survey = new Survey.Model(json);
  
  survey.onComplete.add(function(result) {
    document.querySelector('#result').innerHTML = "result: " + JSON.stringify(result.data);
  });
  
  var data = {satisfaction:"3"};
  
  $("#surveyElement").Survey({
    model: survey,
    data: data
  });
  