const flightsData =[
    // {
    //   source: "San Fransisco",
    //   destination: "New York",
    //   arrivalDateTime: "Wed Nov 17 2021 20:15:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 17 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: '3h',
    //   miles: 600,
    //   basePrice: 500,
    //   startTime: '8.15PM',
    //   endTime: '11.15PM',
      
    // },
    // {
    //   source: "New York",
    //   destination: "Chicago",
    //   arrivalDateTime: "Wed Nov 18 2021 20:16:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 19 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: '3h',
    //   miles: 600,
    //   basePrice: 500,
    //   startTime: '8.16PM',
    //   endTime: '11.15PM',
    // },
    // {
    //   source: "Kansas",
    //   destination: "San Fransisco",
    //   arrivalDateTime: "Wed Nov 19 2021 21:15:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 20 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: '2h',
    //   miles: 600,
    //   basePrice: 700,
    //   startTime: '9.15PM',
    //   endTime: '11.15PM',
    // },
    // {
    //   source: "San Jose",
    //   destination: "New York",
    //   arrivalDateTime: "Wed Nov 21 2021 05:00:00 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 22 2021 13:15:00 GMT-0800 (Pacific Standard Time)",
    //   duration: '8h 15m',
    //   startTime: '5.00AM',
    //   endTime: '1.15PM',
    //   miles: 700,
    //   basePrice: 600,
    // },
    // =============
    {
        source: "San Jose",
        destination: "Phoenix",
        arrivalDateTime: "Wed Dec 4 2021 04:00:00 GMT-0800 (Pacific Standard Time)",
        deptartureDateTime: "Wed Dec 4 2021 14:00:00 GMT-0800 (Pacific Standard Time)",
        duration: '10h',
        startTime: '4.00AM',
        endTime: '2.00PM',
        miles: 700,
        basePrice: 600,
    },
    {
      source: "San Jose",
      destination: "Phoenix",
      arrivalDateTime: "Wed Dec 4 2021 08:00:00 GMT-0800 (Pacific Standard Time)",
      deptartureDateTime: "Wed Dec 4 2021 16:00:00 GMT-0800 (Pacific Standard Time)",
      duration: '8h',
      startTime: '8.00AM',
      endTime: '4.00PM',
      miles: 700,
      basePrice: 600,
  },
    // {
    //     source: "San Francisco",
    //     destination: "Birmingham",
    //     arrivalDateTime: "Wed Dec 5 2021 06:00:00 GMT-0800 (Pacific Standard Time)",
    //     deptartureDateTime: "Wed Dec 6 2021 13:15:00 GMT-0800 (Pacific Standard Time)",
    //     duration: '7h 15m',
    //     startTime: '6.00AM',
    //     endTime: '1.15PM',
    //     miles: 700,
    //     basePrice: 400,
    //   },
    //   {
    //     source: "Colorado Springs",
    //     destination: "New Haven",
    //     arrivalDateTime: "Wed Dec 5 2021 05:00:00 GMT-0800 (Pacific Standard Time)",
    //     deptartureDateTime: "Wed Dec 5 2021 13:15:00 GMT-0800 (Pacific Standard Time)",
    //     duration: '8h 15m',
    //     startTime: '5.00AM',
    //     endTime: '1.15PM',
    //     miles: 700,
    //     basePrice: 800,
    //   },
    //   {
    //     source: "San Jose",
    //     destination: "Indianapolis",
    //     arrivalDateTime: "Wed Dec 5 2021 05:00:00 GMT-0800 (Pacific Standard Time)",
    //     deptartureDateTime: "Wed Dec 5 2021 14:15:00 GMT-0800 (Pacific Standard Time)",
    //     duration: '9h 15m',
    //     startTime: '5.00AM',
    //     endTime: '2.15PM',
    //     miles: 800,
    //     basePrice: 500,
    //   },
    //   {
    //     source: "San Jose",
    //     destination: "New Haven",
    //     arrivalDateTime: "Wed Dec 6 2021 05:00:00 GMT-0800 (Pacific Standard Time)",
    //     deptartureDateTime: "Wed Dec 6 2021 14:15:00 GMT-0800 (Pacific Standard Time)",
    //     duration: '9h 15m',
    //     startTime: '5.00AM',
    //     endTime: '2.15PM',
    //     miles: 800,
    //     basePrice: 500,
    //   },
    //   {
    //     source: "Tallahasse",
    //     destination: "Savannah",
    //     arrivalDateTime: "Wed Dec 6 2021 02:00:00 GMT-0800 (Pacific Standard Time)",
    //     deptartureDateTime: "Wed Dec 6 2021 10:00:00 GMT-0800 (Pacific Standard Time)",
    //     duration: '8h',
    //     startTime: '2.00AM',
    //     endTime: '10PM',
    //     miles: 800,
    //     basePrice: 500,
    //   },
    //   {
    //     source: "Honolulu",
    //     destination: "Indianapolis",
    //     arrivalDateTime: "Wed Dec 6 2021 02:00:00 GMT-0800 (Pacific Standard Time)",
    //     deptartureDateTime: "Wed Dec 6 2021 10:00:00 GMT-0800 (Pacific Standard Time)",
    //     duration: '8h',
    //     startTime: '2.00AM',
    //     endTime: '10PM',
    //     miles: 800,
    //     basePrice: 500,
    //   },
    //   {
    //     source: "San Jose",
    //     destination: "San Fransisco",
    //     arrivalDateTime: "Wed Dec 6 2021 07:00:00 GMT-0800 (Pacific Standard Time)",
    //     deptartureDateTime: "Wed Dec 6 2021 8:00:00 GMT-0800 (Pacific Standard Time)",
    //     duration: '1h',
    //     startTime: '7.00AM',
    //     endTime: '8AM',
    //     miles: 100,
    //     basePrice: 200,
    //   },
    // {
    //   source: "Arizona",
    //   destination: "San Jose",
    //   arrivalDateTime: "Wed Nov 22 2021 20:16:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 22 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: 180,
    //   miles: 750,
    //   basePrice: 170,
    // },
    // {
    //   source: "San Fransisco",
    //   destination: "Florida",
    //   arrivalDateTime: "Wed Nov 18 2021 20:16:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 18 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: 900,
    //   miles: 790,
    //   basePrice: 250,
      
    // },
    // {
    //   source: "Florida",
    //   destination: "Arizona",
    //   arrivalDateTime: "Wed Nov 19 2021 20:16:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 20 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: 120,
    //   miles: 270,
    //   basePrice: 450,
      
    // },
    // {
    //   source: "Texas",
    //   destination: "New York",
    //   arrivalDateTime: "Wed Nov 20 2021 20:16:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 21 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: 340,
    //   miles: 500,
    //   basePrice: 230,
      
    // },
    // {
    //   source: "San Fransisco",
    //   destination: "Texas",
    //   arrivalDateTime: "Wed Nov 19 2021 20:16:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 20 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: 280,
    //   miles: 400,
    //   basePrice: 450,
      
    // },
    // {
    //   source: "Kansas",
    //   destination: "San Fransisco",
    //   arrivalDateTime: "Wed Nov 22 2021 20:16:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 23 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: 180,
    //   miles: 600,
    //   basePrice: 500,
      
    // },
    // {
    //   source: "San Jose",
    //   destination: "New York",
    //   arrivalDateTime: "Wed Nov 19 2021 20:16:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 20 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: 110,
    //   miles: 700,
    //   basePrice: 300,
      
    // },
    // {
    //   source: "San Jose",
    //   destination: "Arizona",
    //   arrivalDateTime: "Wed Nov 20 2021 20:16:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 21 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: 180,
    //   miles: 630,
    //   basePrice: 510,
      
    // },
    // {
    //   source: "San Fransisco",
    //   destination: "New York",
    //   arrivalDateTime: "Wed Nov 17 2021 20:16:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 17 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: 180,
    //   miles: 600,
    //   basePrice: 500,
      
    // },
    // {
    //   source: "San Fransisco",
    //   destination: "New York",
    //   arrivalDateTime: "Wed Nov 17 2021 20:16:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 17 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: 180,
    //   miles: 600,
    //   basePrice: 500,
      
    // },
    // {
    //   source: "New York",
    //   destination: "Florida",
    //   arrivalDateTime: "Wed Nov 19 2021 20:16:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 20 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: 190,
    //   miles: 610,
    //   basePrice: 420,
      
    // },
    // {
    //   source: "Arizona",
    //   destination: "Florida",
    //   arrivalDateTime: "Wed Nov 20 2021 20:15:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 21 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: 180,
    //   miles: 600,
    //   basePrice: 500,
      
    // },
    // {
    //   source: "San Jose",
    //   destination: "Florida",
    //   arrivalDateTime: "Wed Nov 23 2021 20:16:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 24 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: 190,
    //   miles: 620,
    //   basePrice: 250,
      
    // },
    // {
    //   source: "Florida",
    //   destination: "New York",
    //   arrivalDateTime: "Wed Nov 18 2021 20:16:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 19 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: 200,
    //   miles: 610,
    //   basePrice: 500,
      
    // },
    // {
    //   source: "Arizona",
    //   destination: "New York",
    //   arrivalDateTime: "Wed Nov 19 2021 20:16:45 GMT-0800 (Pacific Standard Time)",
    //   deptartureDateTime: "Wed Nov 20 2021 23:15:25 GMT-0800 (Pacific Standard Time)",
    //   duration: 200,
    //   miles: 430,
    //   basePrice: 430,
      
    // }
  ]

export default flightsData;