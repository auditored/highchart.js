const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Erbağ",
        "path": "M194,300,240,279,276,280,293,304,285,311,282,325,288,337,344,367,375,371,392,383,314,461,301,484,297,515,278,514,243,525,205,528,189,532,165,543,157,523,147,468,166,449,181,392,167,346,152,329,156,309,164,301z"
      },
      {
        "id": "id1",
        "name": "Niksar",
        "path": "M393,383,314,460,299,487,299,516,353,532,395,574,411,587,485,610,517,587,438,553,446,524,454,481,467,471,493,466,509,451,549,458,588,442,558,418,527,404,486,408,445,407,417,401,410,391z"
      },
      {
        "id": "id2",
        "name": "Başçiftlik",
        "path": "M492,467,467,471,455,480,451,506,439,553,518,586,527,579,529,563,520,546,498,542,483,534,482,516,523,515,539,509,539,498,518,488,508,486z"
      },
      {
        "id": "id3",
        "name": "Reşadiye",
        "path": "M586,441,549,456,511,451,492,467,509,487,526,491,538,498,535,509,521,513,482,513,484,537,500,543,519,546,528,562,528,580,515,587,484,612,485,648,499,654,532,651,568,670,639,688,650,694,695,662,695,635,706,629,706,579,734,555,722,496,711,486,648,486,627,476z"
      },
      {
        "id": "id4",
        "name": "Almus",
        "path": "M392,573,411,586,486,609,486,649,503,654,535,651,569,667,643,688,656,696,635,746,578,729,513,719,467,702,412,724,359,709,337,708,317,716,325,655,336,641,347,605,349,594,356,589,386,589z"
      },
      {
        "id": "id5",
        "name": "Turhal",
        "path": "M144,472,101,519,39,562,11,562,-27,553,-47,532,-104,525,-125,528,-146,580,-94,609,-79,614,-52,632,-17,633,-9,641,-4,656,-8,689,-2,717,8,724,28,723,24,698,31,687,53,674,73,670,97,674,105,678,139,659,134,641,143,611,148,587,164,561,167,538,158,521z"
      },
      {
        "id": "id6",
        "name": "Pazar",
        "path": "M138,659,104,676,80,670,55,671,32,684,22,700,28,726,54,726,75,731,94,734,115,736,148,715z"
      },
      {
        "id": "id7",
        "name": "Artova",
        "path": "M28,726,32,741,25,764,18,781,7,784,29,806,76,807,117,809,136,800,148,804,168,767,150,715,115,737,58,726z"
      },
      {
        "id": "id8",
        "name": "Yeşilyurt",
        "path": "M30,806,87,808,118,810,135,799,150,806,139,831,150,870,129,862,111,869,68,863,42,816z"
      },
      {
        "id": "id9",
        "name": "Sulusaray",
        "path": "M6,783,-11,791,-25,794,-65,825,-60,842,-45,878,-5,875,32,865,69,864,43,817z"
      },
      {
        "id": "id10",
        "name": "Tokat Merkez",
        "path": "M317,715,325,654,335,641,345,612,349,591,386,591,395,572,354,530,283,510,240,523,209,525,168,537,164,557,144,586,134,640,138,661,147,717,168,771,150,801,138,830,147,870,168,874,274,829,294,777,289,757,294,738,302,727z"
      },
      {
        "id": "id11",
        "name": "Zile",
        "path": "M-62,825,-23,797,19,782,33,748,30,722,11,723,-1,717,-7,690,-3,657,-15,631,-53,630,-76,614,-90,610,-147,577,-158,607,-189,645,-201,653,-231,661,-256,681,-269,694,-278,725,-266,732,-241,767,-219,787,-192,791,-165,784,-126,793,-76,786,-65,814z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 100323
      },
      {
        "id": "id1",
        "y": 62287
      },
      {
        "id": "id2",
        "y": 6216
      },
      {
        "id": "id3",
        "y": 36727
      },
      {
        "id": "id4",
        "y": 25116
      },
      {
        "id": "id5",
        "y": 78827
      },
      {
        "id": "id6",
        "y": 13419
      },
      {
        "id": "id7",
        "y": 7469
      },
      {
        "id": "id8",
        "y": 8356
      },
      {
        "id": "id9",
        "y": 6698
      },
      {
        "id": "id10",
        "y": 207741
      },
      {
        "id": "id11",
        "y": 53755
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Tokat İlçeleri Nüfus Bilgisi'
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