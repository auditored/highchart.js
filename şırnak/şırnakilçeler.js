const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "İdil",
        "path": "M-129,707,22,686,35,659,30,624,18,609,19,593,40,593,37,571,25,547,33,504,1,485,-20,483,-53,493,-72,481,-90,443,-117,467,-164,472,-206,481,-204,570,-184,606,-142,590,-125,621,-123,658z"
      },
      {
        "id": "id1",
        "name": "Cizre",
        "path": "M23,685,87,660,126,597,180,620,194,574,208,546,212,526,163,524,131,532,76,525,34,504,24,549,35,567,39,591,18,593,17,609,30,625,34,660z"
      },
      {
        "id": "id2",
        "name": "Silopi",
        "path": "M213,527,209,544,194,573,179,620,218,733,328,712,368,593,389,580,372,537,358,518,331,540,308,551,279,549,261,546,231,532z"
      },
      {
        "id": "id3",
        "name": "Uludere",
        "path": "M344,439,340,455,344,492,358,518,372,538,389,580,424,564,463,577,527,614,588,569,717,635,751,644,737,629,714,605,694,575,692,559,610,525,569,513,512,506,490,501,446,474,424,454,405,444,370,441,365,445z"
      },
      {
        "id": "id4",
        "name": "Betüşşebap",
        "path": "M436,259,427,296,415,334,393,379,367,401,354,418,343,439,366,447,372,442,406,445,425,457,444,474,489,501,549,512,577,517,619,529,694,560,692,470,692,449,704,408,706,363,718,346,727,316,650,314,579,305,550,295,527,292,513,289,486,292,456,269z"
      },
      {
        "id": "id5",
        "name": "Güçlükonak",
        "path": "M-127,307,-82,377,-97,396,-89,445,-72,482,-53,495,-19,484,1,486,34,504,40,484,10,400,18,374,30,357,24,340,9,342,-14,337,-43,342,-79,336z"
      },
      {
        "id": "id6",
        "name": "Şırnak Merkez",
        "path": "M25,340,30,358,18,374,9,399,40,485,34,505,70,523,131,533,165,525,212,527,240,537,261,549,308,552,333,541,359,517,344,490,342,457,355,420,394,381,416,334,438,259,427,250,384,242,334,240,294,214,253,217,233,226,199,244,171,273,153,297,136,314,104,339,35,337z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 77159
      },
      {
        "id": "id1",
        "y": 161135
      },
      {
        "id": "id2",
        "y": 148126
      },
      {
        "id": "id3",
        "y": 46740
      },
      {
        "id": "id4",
        "y": 16056
      },
      {
        "id": "id5",
        "y": 12830
      },
      {
        "id": "id6",
        "y": 108699
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Şırnak İlçeleri Nüfus Bilgisi'
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