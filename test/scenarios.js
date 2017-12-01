const Scenarios = [{
        "name": "Scenario_01",
        "should": {
            "currentDay": 1, 
            "currentWeek": 2,
            "totalScore": 80
        },
        "currentDayIndex": 0,
        "currentWeekIndex": 1,
        "weekCount": 3,
        "weeks": [
            {
                "score": 60,
                "state": "failed",
                "days": [
                    {
                        "tasks": [
                            "done"
                        ],
                        "score": 20
                    },
                    {},
                    {
                        "tasks": [
                            "done"
                        ],
                        "score": 20
                    },
                    {
                        "tasks": [
                            "done"
                        ],
                        "score": 20
                    },
                    {},
                    {},
                    {}
                ]
            },
            {
                "score": 20,
                "state": "failed",
                "days": [
                    {
                        "tasks": [
                            "done"
                        ],
                        "score": 20
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ]
            }
        ]
        }, {
            "name": "Scenario_02",
            "should": {
                "currentDay": 2, 
                "currentWeek": 3,
                "totalScore": 100
            },
            "currentDayIndex": 1,
            "currentWeekIndex": 2,
            "weekCount": 3,
            "weeks": [
                {
                    "score": 80,
                    "state": "failed",
                    "days": [
                        {
                            "tasks": [
                                "done"
                            ],
                            "score": 20
                        },
                        {},
                        {
                            "tasks": [
                                "done"
                            ],
                            "score": 20
                        },
                        {
                            "tasks": [
                                "done"
                            ],
                            "score": 40
                        },
                        {},
                        {},
                        {}
                    ]
                },
                {
                    "score": 20,
                    "state": "failed",
                    "days": [
                        {
                            "tasks": [
                                "done"
                            ],
                            "score": 20
                        },
                        {},
                        {},
                        {},
                        {},
                        {},
                        {}
                    ]
                }
            ]
        }
    ];

export default Scenarios;