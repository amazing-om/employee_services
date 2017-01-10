export let  FormConfig ={
	 "name": {
        "label": "Employee Name",
        "type": "SmartInput",
        "mandatory": true,
        "value": "",
        "placeholder":"Type Employee Name"
    },
    "designation": {
        "label": "Employee Designation",
        "type": "SmartInput",
        "value": "",
        "placeholder":"Type Employee Designation"

    },
    "company": {
        "label": "Employee Company",
        "type": "SmartInput",
        "value": "",
        "placeholder":"Type Employee Company"
    },
    "state": {
        "label": "Employee State",
        "type": "SmartReactSelect",
        "options": ["Kashmir","Punjab","Rajsthan","Maharastra","Karnataka","Kerala","Tamilnadu","Andhra Pradesh","Odisha", "West Bengal", "Bihar", "UP","UK"]
        
    },
    "city": {
        "label": "City",
        "type": "SmartInput",
        "value": "",
        "placeholder":"Type City"
    },
    "dob": {
        "label": "Date of Birth",
        "type": "SmartInput",
        "value": "",
        "placeholder":"Type Date of Birth"
    },
    "submit": {
        "label": "Submit",
        "type": "SmartButton",
        "buttonType": "submit"
        
    }
}

export let stateVal = [
                        {
                            id:1,
                            value:"Kashmir"
                        },
                        {
                            id:2,
                            value:"Punjab"
                        },
                        {
                            id:3,
                            value:"Rajsthan"
                        }

                    ];

export let cityVal = [
                    {
                        stateName:"Kashmir",
                        cities:["Srinagar", "Leh", "Ladakh"]
                    },
                    {
                        stateName:"Punjab",
                        cities:["Chandigarh", "Amritsar", "Bhatinda"]
                    },
                    {
                        stateName:"Rajsthan",
                        cities:["Jaipur", "Ajmair", "Udaipur"]
                    }

    ]





