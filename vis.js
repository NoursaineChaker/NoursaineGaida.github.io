
//tunis chart

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=tunis&appid=ccdcde42aac18330ebc2ae7d06e30bf5').then(response =>

        response.json()

    ).then(response => {
        dates = response.list.map(list => {
            return list.dt_txt;
        });

        temps = response.list.map(list => {
            return list.main.temp;
        });


        var options = {
            series: [{
                name: 'Temp',
                data: temps,
            }],
            chart: {
                height: 350,
                type: 'area'
            },
            title: {
                text: "Temperature in Tunis for every 3 hours",
                align: 'center',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',
                    fontFamily:  undefined,
                    color:  '##263238'
                }
            },   
            dataLabels: {
                enabled: true,
                style: {
                    colors: ['#F44336', '#E91E63', '#9C27B0']
                  },
                markers: {
                   colors: ['#F44336', '#E91E63', '#9C27B0']
                }
            },
            stroke: {
                curve: 'smooth'
            },

            xaxis: {
                type: 'time',
                
                categories: dates,
                
                time: {
                    parser: 'MM/DD HH:mm',
                    tooltipFormat: 'HH:mm',
                    unit: 'hour',
                    unitStepSize: 3,
                    displayFormats: {
                        'hour': 'MM/DD hA'
                    }
                }
            },

        };

        var tunis = new ApexCharts(document.querySelector("#tunischart"), options);
        tunis.render();


    })





//Paris chart

fetch('https://api.openweathermap.org/data/2.5/forecast?q=paris&appid=fd3150a661c1ddc90d3aefdec0400de4').then(response =>


        response.json()

    ).then(response => {
        dates = response.list.map(list => {
            return list.dt_txt;
        });

        temps = response.list.map(list => {
            return list.main.temp;
        });


        var options = {
            series: [{
                name: 'Temp',
                data: temps,
            }],
            chart: {
                height: 350,
                type: 'area'
            },

            title: {
                text: "Temperature in Paris for every 3 hours",
                align: 'center',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',
                    fontFamily:  undefined,
                    color:  '##263238'
                }
            },   
            dataLabels: {
                enabled: true,
                style: {
                    colors: ['#F44336', '#E91E63', '#9C27B0']
                  },
                markers: {
                   colors: ['#F44336', '#E91E63', '#9C27B0']
                }
            },
            stroke: {
                curve: 'smooth'
            },

            xaxis: {
                type: 'time',
                
                categories: dates,
                
                time: {
                    parser: 'MM/DD HH:mm',
                    tooltipFormat: 'HH:mm',
                    unit: 'hour',
                    unitStepSize: 3,
                    displayFormats: {
                        'hour': 'MM/DD hA'
                    }
                }
            },


        };

        var paris= new ApexCharts(document.querySelector("#parischart"), options);
        paris.render();


    })
//New york Chart 

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=new york&appid=ccdcde42aac18330ebc2ae7d06e30bf5').then(response =>

        response.json()

    ).then(response => {
        dates = response.list.map(list => {
            return list.dt_txt;
        });

        temps = response.list.map(list => {
            return list.main.temp;
        });


        var options = {
            series: [{
                name: 'Temp',
                data: temps,
            }],
            chart: {
                height: 350,
                type: 'area'
            },
            title: {
                text: "Temperature in New york for every 3 hours",
                align: 'center',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',
                    fontFamily:  undefined,
                    color:  '##263238'
                }
            },   

            dataLabels: {
                enabled: true,
                style: {
                    colors: ['#F44336', '#E91E63', '#9C27B0']
                  },
                markers: {
                   colors: ['#F44336', '#E91E63', '#9C27B0']
                },

            },
            stroke: {
                curve: 'smooth'
            },

            xaxis: {
                type: 'time',
                
                categories: dates,
                
                time: {
                    parser: 'MM/DD HH:mm',
                    tooltipFormat: 'HH:mm',
                    unit: 'hour',
                    unitStepSize: 3,
                    displayFormats: {
                        'hour': 'MM/DD hA'
                    }
                }
            },

        };

        var newyork = new ApexCharts(document.querySelector("#newyorkchart"), options);
        newyork.render();


    })

    //Mumbai Chart

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=mumbai&appid=ccdcde42aac18330ebc2ae7d06e30bf5').then(response =>

        response.json()

    ).then(response => {
        dates = response.list.map(list => {
            return list.dt_txt;
        });

        temps = response.list.map(list => {
            return list.main.temp;
        });


        var options = {
            series: [{
                name: 'Temp',
                data: temps,
            }],
            chart: {
                height: 350,
                type: 'area'
            },
            title: {
                text: "Temperature in Mumbai for every 3 hours",
                align: 'center',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',
                    fontFamily:  undefined,
                    color:  '##263238'
                }
            },   
            dataLabels: {
                enabled: true,
                style: {
                    colors: ['#F44336', '#E91E63', '#9C27B0']
                  },
                markers: {
                   colors: ['#F44336', '#E91E63', '#9C27B0']
                }
            },
            stroke: {
                curve: 'smooth'
            },

            xaxis: {
                type: 'time',
                
                categories: dates,
                
                time: {
                    parser: 'MM/DD HH:mm',
                    tooltipFormat: 'HH:mm',
                    unit: 'hour',
                    unitStepSize: 3,
                    displayFormats: {
                        'hour': 'MM/DD hA'
                    }
                }
            },

        };

        var mumbai = new ApexCharts(document.querySelector("#mumbaichart"), options);
        mumbai.render();


    })

 //canberra Chart

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=canberra&appid=ccdcde42aac18330ebc2ae7d06e30bf5').then(response =>

        response.json()

    ).then(response => {
        dates = response.list.map(list => {
            return list.dt_txt;
        });

        temps = response.list.map(list => {
            return list.main.temp;
        });


        var options = {
            series: [{
                name: 'Temp',
                data: temps,
            }],
            chart: {
                height: 350,
                type: 'area'
            },
            title: {
                text: "Temperature in Canberra for every 3 hours",
                align: 'center',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',
                    fontFamily:  undefined,
                    color:  '##263238'
                }
            },   
            dataLabels: {
                enabled: true,
                style: {
                    colors: ['#F44336', '#E91E63', '#9C27B0']
                  },
                markers: {
                   colors: ['#F44336', '#E91E63', '#9C27B0']
                }
            },
            stroke: {
                curve: 'smooth'
            },

            xaxis: {
                type: 'time',
                
                categories: dates,
                
                time: {
                    parser: 'MM/DD HH:mm',
                    tooltipFormat: 'HH:mm',
                    unit: 'hour',
                    unitStepSize: 3,
                    displayFormats: {
                        'hour': 'MM/DD hA'
                    }
                }
            },

        };

        var canberra= new ApexCharts(document.querySelector("#canberrachart"), options);
        canberra.render();


    })

    