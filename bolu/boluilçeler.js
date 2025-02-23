const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Göynük",
        "path": "M-140,670,-94,747,-109,784,-71,890,-26,952,66,964,109,901,183,858L200,832L186,744,206,701,201,680,167,654,159,611,119,591,110,591,96,574,33,595,-74,595z"
      },
      {
        "id": "id1",
        "name": "Mudurnu",
        "path": "M206,701,264,712,356,765,513,787,493,741,497,720,483,700L500,644L507,577,526,544,476,504,446,500,433,481,440,465,429,454,349,464,313,430,173,460,123,437L120,550,96,575,111,590,163,612,170,657Z"
      },
      {
        "id": "id2",
        "name": "Seben",
        "path": "M509,785,569,802,590,800,623,791,663,770,731,775,719,724,721,694L684,642,680,597L669,565,643,535,554,550,524,545,506,584,481,701,499,722,494,744z"
      },
      {
        "id": "id3",
        "name": "Kıbrıscık",
        "path": "M731,774,762,775,878,749,966,719L1020,682,1034,681,1020,654,955,592L915,604,866,604,821,575,798,571L765,522,746,517,727,519,700,531L645,536,675,575,687,643,721,695,720,730z"
      },
      {
        "id": "id4",
        "name": "Bolu Merkez",
        "path": "M824,573,841,527,856,515,874,439,889,425,882,406,859,385,852,358,846,296,794,295,779,264,679,207,621,233,516,251,478,315,486,420,433,455,440,465,434,483,446,500,476,504,526,545,554,549,643,534,700,530,724,519,769,522,799,569z"
      },
      {
        "id": "id5",
        "name": "Dörtdivan",
        "path": "M824,573,864,602,908,602,954,592L970,562L970,547,1006,504,1008,462,962,423,954,345,889,365,885,370,854,367,858,383,882,406,889,425,872,440,857,516,841,527z"
      },
      {
        "id": "id6",
        "name": "Yeniçağ",
        "path": "M848,295,858,277L880,266L909,262,934,240,964,252,944,272,944,294,952,343,889,367,882,370,854,366z"
      },
      {
        "id": "id7",
        "name": "Mengen",
        "path": "M846,295,856,278L880,266L911,262,934,237,964,252,1025,259,1059,240,1096,204,1121,173,1121,117L983,103,842,96,719,78,725,122,722,171,685,190L679,207,779,262,794,294z"
      },
      {
        "id": "id8",
        "name": "Gerede",
        "path": "M956,591,1020,651,1036,681,1164,697,1190,691,1264,581,1230,485,1227,461,1236,438,1285,412,1304,305,1297,268,1227,232,1122,174,1057,244,1029,257,963,253L945,272L964,422,1007,462,1006,505,971,550,971,562z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 14711
      },
      {
        "id": "id1",
        "y": 18576
      },
      {
        "id": "id2",
        "y": 4807
      },
      {
        "id": "id3",
        "y": 2980
      },
      {
        "id": "id4",
        "y": 219913
      },
      {
        "id": "id5",
        "y": 6703
      },
      {
        "id": "id6",
        "y": 6809
      },
      {
        "id": "id7",
        "y": 14113
      },
      {
        "id": "id8",
        "y": 36177
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Bolu İlçeleri Nüfus Bilgisi'
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