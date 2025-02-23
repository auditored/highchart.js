const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Çerkeş",
        "path": "M69,500,-27,528,-110,538,-193,620,-186,645,-200,711,-182,708,-151,710,-20,762,-2,729,46,700,85,694,59,629,68,589,95,557,104,515,97,501z"
      },
      {
        "id": "id1",
        "name": "Orta",
        "path": "M-20,763,-2,729,47,698,84,692,133,703,177,714,208,734,201,760,206,776,164,797,107,797,93,807,104,829,104,843,88,857,32,791z"
      },
      {
        "id": "id2",
        "name": "Şabanözü",
        "path": "M87,857,104,842,103,826,92,807,107,796,165,796L206,775,224,793,244,803,260,813,266,826,270,840,262,884,252,904,232,926L225,940,222,963,168,957L157,943,148,915,145,904z"
      },
      {
        "id": "id3",
        "name": "Eldivan",
        "path": "M242,801,277,771,296,759,323,760,334,766,349,785,351,798,360,814,373,824,370,847,361,867,312,915,284,936,252,920,234,924,251,904,261,885,269,841,267,829,258,812z"
      },
      {
        "id": "id4",
        "name": "Korgun",
        "path": "M206,733,219,711,219,693,218,685,211,677,222,664,250,662,268,657,301,634,319,620,358,617,364,621,371,633,383,641,401,658,404,669,393,710,333,767,322,761,296,759,281,769,241,803,224,794,206,777,200,761z"
      },
      {
        "id": "id5",
        "name": "Kursunlu",
        "path": "M276,535,329,513,327,526,322,538,305,564,294,586,319,622,270,657,248,663,222,665,211,677,219,683,220,710,206,734,177,714,131,703,133,686,161,646,171,623,172,605,167,594,168,572,222,566,263,559,274,547z"
      },
      {
        "id": "id6",
        "name": "Bayramören",
        "path": "M275,536,274,545,263,559,168,572,179,545,175,540L155,541,144,537,116,514,103,515,97,501,69,500,88,451L131,456,206,500,231,532,239,540,254,544z"
      },
      {
        "id": "id7",
        "name": "Atkaracalar",
        "path": "M132,702,133,686,161,648,171,625,174,606,169,595,169,571,180,544,175,540L155,539L144,536,116,513,102,515,94,559,68,587,58,629,83,692z"
      },
      {
        "id": "id8",
        "name": "Ilgaz",
        "path": "M330,513,473,444L483,457,485,476,456,510,450,520,449,547,460,563,515,594,496,613,471,627,451,636,419,642,383,642,370,633L365,621L358,618,318,621,293,586,304,565,320,540,325,527z"
      },
      {
        "id": "id9",
        "name": "Yapraklı",
        "path": "M453,635,475,623L498,611,515,594,529,603,574,609,585,635,582,682,579,725,599,809L565,827L554,826,546,814,541,799,525,785,521,771,519,760,521,747,511,737,496,734,481,727,466,718,456,701,453,679,461,662,461,648z"
      },
      {
        "id": "id10",
        "name": "Kızılırmak",
        "path": "M429,996,448,970,470,956L493,950,499,946,511,919,514,905,536,884,563,869L575,862L579,856,589,851,610,857,618,850,628,868,639,908,613,964,538,1008,509,1007,486,1002z"
      },
      {
        "id": "id11",
        "name": "Çankırı Merkez",
        "path": "M599,810,618,850,611,857,589,851,578,857,575,863L538,885,514,906,500,946L493,951,470,957,449,970,429,997,413,1002,354,959,284,936,307,919,360,866,368,848,372,825,359,816,351,802,349,785,333,767,393,708,402,669,400,659,382,642,419,640,453,633,462,648,462,661,454,680,457,700,466,717,498,733,510,735,521,746,520,761,525,785,540,796,547,812,554,825,564,826z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 16909
      },
      {
        "id": "id1",
        "y": 16921
      },
      {
        "id": "id2",
        "y": 13192
      },
      {
        "id": "id3",
        "y": 7331
      },
      {
        "id": "id4",
        "y": 4226
      },
      {
        "id": "id5",
        "y": 9947
      },
      {
        "id": "id6",
        "y": 2740
      },
      {
        "id": "id7",
        "y": 5079
      },
      {
        "id": "id8",
        "y": 14271
      },
      {
        "id": "id9",
        "y": 8608
      },
      {
        "id": "id10",
        "y": 7703
      },
      {
        "id": "id11",
        "y": 98574
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Çankırı İlçeleri Nüfus Bilgisi'
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