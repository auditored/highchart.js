const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Saray",
        "path": "M560,128,551,141,514,153,482,157,436,177,408,194,379,197,352,191,327,204,308,227,307,237,323,242,330,278,349,292,389,291,408,285,402,274,407,259,420,253,436,252,460,256,478,263,520,236,553,219,579,212,579,195,557,176,572,157z"
      },
      {
        "id": "id1",
        "name": "Çerkezköy",
        "path": "M578,211,554,218,518,236,477,263,464,257,439,251,424,252,409,257,401,273,407,284,421,305,441,321,469,334,513,340,545,359,559,306,567,285z"
      },
      {
        "id": "id2",
        "name": "Çorlu",
        "path": "M308,240,304,273,293,303,281,327,312,351,334,380,341,440,337,465,349,480,353,514,369,517,385,525,400,537,417,541,411,499,413,479,437,456,454,441,477,438,505,425,506,389,546,359,513,339,470,333,436,317,422,306,408,283,390,289,349,291,331,278,325,241,308,236z"
      },
      {
        "id": "id3",
        "name": "Marmaraereğlisi",
        "path": "M417,540,411,501,413,479,439,454,454,440,476,437,505,426,510,447,528,479,510,483,467,502,459,525,443,542z"
      },
      {
        "id": "id4",
        "name": "Muratlı",
        "path": "M280,328,253,365,234,380,208,378,195,363,172,373,130,376,128,379,143,393,218,434,239,434,264,423,268,433,280,452,302,462,338,466,342,440,335,380,313,350z"
      },
      {
        "id": "id5",
        "name": "Tekirdağ Merkez",
        "path": "M175,409,131,431,92,464,77,480,65,506,71,522,64,536,65,556,86,612,79,635,98,640,117,639,148,625,167,621,191,628,199,615,218,546,229,533,337,511,354,513,350,481,338,464,300,461,280,451,269,433,265,422,239,433,217,432z"
      },
      {
        "id": "id6",
        "name": "Şarköy",
        "path": "M80,634,95,639,118,639,146,624,166,620,192,628,126,713,65,763,42,773,-11,785,-11,750,-2,678,22,666,57,658,70,648z"
      },
      {
        "id": "id7",
        "name": "Malkara",
        "path": "M-1,677,22,667,57,658,72,647,81,634,87,612,67,556,64,535,71,522,65,505,37,513,28,526,22,526,13,519,11,485,-21,481,-44,473,-61,463,-81,432,-140,462,-152,481,-150,499,-134,510,-125,523,-129,540,-145,550,-153,581,-156,636,-152,656,-125,692,-90,688,-66,674,-39,653,-18,649,-7,655z"
      },
      {
        "id": "id8",
        "name": "Hayrabolu",
        "path": "M195,363,175,372,129,377,129,380,145,393,175,409,131,432,82,476,65,507,37,515,29,527,23,527,13,520,10,486,-19,482,-45,474,-62,464,-82,432,-75,426,-57,402,-56,362,-70,333,-75,303,-49,307,21,301,43,292,95,292,110,295,144,309,169,327,181,347z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 51224
      },
      {
        "id": "id1",
        "y": 213243
      },
      {
        "id": "id2",
        "y": 294020
      },
      {
        "id": "id3",
        "y": 21191
      },
      {
        "id": "id4",
        "y": 30411
      },
      {
        "id": "id5",
        "y": 142662
      },
      {
        "id": "id6",
        "y": 34047
      },
      {
        "id": "id7",
        "y": 51406
      },
      {
        "id": "id8",
        "y": 30930
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Tekirdağ İlçeleri Nüfus Bilgisi'
    },



    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },


    tooltip: {
        pointFormat: '{point.name}: <b>{point.y}</b>',

    },
    colorAxis: {
        min: 0,
        minColor: '#e0f3ff',
        maxColor: '#0052b4',
        visible: true
    },


    series: [{
        data: datalocal.data,
        mapData: datalocal.mapDatalocal,
        joinBy: 'id',
        name: 'Nüfus',
        
        states: {
            hover: {
                color: '#BADA55'
            }
        },

        dataLabels: {
            enabled: false,
            format: '{point.name}'
        },
        colorKey: 'y',
    }]
});