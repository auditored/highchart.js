const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Ovacık",
        "path": "M-296,684,-344,679,-362,664,-349,637,-317,621,-258,590,-204,546,-161,525,-70,515,23,527,39,532L84,522,90,550L126,548,126,575,134,581,131,590,141,622,125,627,111,636,106,650,106,685,96,690,86,687,64,681,22,712,9,696,-33,697,-51,705,-48,724,-126,718,-144,725,-159,722,-156,697L-140,674,-151,665,-160,681,-176,694,-205,705,-231,704,-260,702Z"
      },
      {
        "id": "id1",
        "name": "Hozat",
        "path": "M-295,683,-257,703,-207,706,-174,691,-160,678,-151,665,-139,675,-147,687,-154,697,-158,720,-144,725,-126,717,-48,723,-51,705,-34,697,12,695,23,715,21,729,13,738,12,775,-27,785,-29,827,-45,847,-65,845,-97,864,-113,882,-127,885,-137,883L-170,862L-195,819,-222,767,-249,756,-257,725,-266,714L-290,697Z"
      },
      {
        "id": "id2",
        "name": "Pertek",
        "path": "M-196,819,-210,832L-216,878,-221,891,-236,902,-234,917,-240,942,-215,946,-104,981,-84,992,3,1034,27,1034,106,1004,115,935,109,922,104,912L63,880,30,884,-1,882,-16,869L-24,854,-44,845,-66,845,-96,863,-112,881,-126,885,-134,883,-169,862z"
      },
      {
        "id": "id3",
        "name": "Çemişgezek",
        "path": "M-241,942,-234,920,-236,902,-221,892,-215,881,-212,858,-209,832,-193,818L-220,766,-249,754,-255,723L-265,713,-291,695,-294,708,-344,730,-357,728,-375,734,-375,753,-390,760,-403,785,-391,796,-386,837,-386,842,-371,865,-364,888,-370,906,-374,930,-362,950,-349,957,-306,950,-257,939z"
      },
      {
        "id": "id4",
        "name": "Mazgirt",
        "path": "M105,1004,114,936,103,913,61,881,54,871,54,855,83,823,94,820,152,827,184,825,222,800,243,817,234,822,228,840,244,860,240,901,231,930,176,995,139,1004z"
      },
      {
        "id": "id5",
        "name": "Nazımiye",
        "path": "M243,815,220,801,179,757L171,737,201,738,202,711,214,671,196,651,178,640,164,611,181,602,193,602,209,609,219,617,236,632,241,645,268,637,291,647,299,647,306,633,331,634,347,646L335,682L316,723,322,760,308,800,259,802z"
      },
      {
        "id": "id6",
        "name": "Pülümür",
        "path": "M124,548,127,576,134,582L130,590,142,624,180,605L195,604,220,617,241,645,249,645,269,637,291,648,301,648,307,635,330,634,346,647,401,659,417,652,421,645,476,622,511,587,497,577,473,569L590,501L605,480,542,480,373,468,309,491,290,491,271,492,246,475L190,487Z"
      },
      {
        "id": "id7",
        "name": "Tunceli Merkez",
        "path": "M63,880,56,870,55,857,82,825,95,821L154,830,186,826,223,800,181,756,172,738,204,738,204,711,215,671,196,648,178,639L165,611L115,631,110,638,106,651,104,684,97,688,64,680,21,712,19,730,13,737,11,772,-29,784,-31,827,-46,845,-24,854,-14,872,-1,883,31,885z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 7173
      },
      {
        "id": "id1",
        "y": 5952
      },
      {
        "id": "id2",
        "y": 11463
      },
      {
        "id": "id3",
        "y": 8066
      },
      {
        "id": "id4",
        "y": 7827
      },
      {
        "id": "id5",
        "y": 3437
      },
      {
        "id": "id6",
        "y": 4010
      },
      {
        "id": "id7",
        "y": 41389
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Tunceli İlçeleri Nüfus Bilgisi'
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