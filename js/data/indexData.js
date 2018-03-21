$(function(){
//===========【参数】================
    //表格数据：
  var data={
      "rfs": [
          {
              "id": 5933,
              "time": "00:00:14.608",
              "op_mode": "STANDALONE",
              "meas_bw": "mbw6 RBs",
              "cell_id": "21",
              "frequency": "2506",
              "inst_meas_rsrp": "-54 ",
              "srxlev": "-48 ",
              "test_id": "20180319173412346667"
          },
          {
              "id": 5934,
              "time": "00:00:15.008",
              "op_mode": "STANDALONE",
              "meas_bw": "mbw6 RBs",
              "cell_id": "21",
              "frequency": "2506",
              "inst_meas_rsrp": "-54 ",
              "srxlev": "-48 ",
              "test_id": "20180319173412346667"
          }
      ],
      "txReports": [
          {
              "id": 24024,
              "time": "00:00:18.260",
              "npusch_timing_sfn": "965",
              "npusch_timing_sub_fn": "5",
              "supersubfn": "9655",
              "npusch_format": "FORMAT 1",
              "is_msg3": "TRUE",
              "itbs": "0",
              "repetition_number": "1",
              "num_ru": "4",
              "rv_index": "0",
              "num_tone": "1",
              "start_tone": "1",
              "tx_power": "-9 ",

              "ack_nack": null,
              "npusch_format_1_tx_type": "NEW TRANSMISSION",
              "rflm": "1",
              "prach_collision_valid": "1",
              "test_id": "20180319173412346667"
          },
          {
              "id": 24025,
              "time": "00:00:18.260",
              "npusch_timing_sfn": "970",
              "npusch_timing_sub_fn": "6",
              "supersubfn": "9706",
              "npusch_format": "FORMAT 1",
              "is_msg3": "FALSE",
              "itbs": "5",
              "repetition_number": "1",
              "num_ru": "4",
              "rv_index": "0",
              "num_tone": "1",
              "start_tone": "1",
              "tx_power": "-13 ",
              "ack_nack": null,
              "npusch_format_1_tx_type": "NEW TRANSMISSION",
              "rflm": "1",
              "prach_collision_valid": "1",
              "test_id": "20180319173412346667"
          }
      ],
      "servicePatterns": [
          {
              "id": 391,
              "time": "00:00:17.475",
              "message": "LTE NAS EMM Security Protected Outgoing M",
              "length": "25",
              "test_id": "20180319173412346667",
              "timediffms": ""
          },
          {
              "id": 392,
              "time": "00:00:29.334",
              "message": "LTE NAS EMM Security Protected Outgoing M",
              "length": "90",
              "test_id": "20180319173412346667",
              "timediffms": "11859"
          },
          {
              "id": 393,
              "time": "00:00:30.296",
              "message": "LTE NAS EMM Security Protected Incoming M",
              "length": "13",
              "test_id": "20180319173412346667",
              "timediffms": "962"
          }
      ]
  }
  // alert(data.rfs.length);
  for(var i=0;i<data.rfs.length;i++){
      $(".conTable1 .table tbody").append("<tr>" +
          "<td>" +data.rfs[i].id+ "</td>" +
          "<td>" +data.rfs[i].time+ "</td>" +
          "<td class='hid'>" +data.rfs[i].op_mode+ "</td>" +
          "<td class='hid'>" +data.rfs[i].meas_bw+ "</td>" +
          "<td class='hid'>" +data.rfs[i].cell_id+ "</td>" +
          "<td class='hid'>" +data.rfs[i].frequency+ "</td>" +
          "<td class='hid'>" +data.rfs[i].inst_meas_rsrp+ "</td>" +
          "<td class='hid'>" +data.rfs[i].srxlev+ "</td>" +
          "<td class='hid'>" +data.rfs[i].test_id+ "</td>" +
          "</tr>"
      );
  }
  for(var i=0;i<data.servicePatterns.length;i++){
        $(".conTable2 .table tbody").append("<tr>" +
            "<td>" +data.servicePatterns[i].id+ "</td>" +
            "<td>" +data.servicePatterns[i].time+ "</td>" +
            "<td class='hid'>" +data.servicePatterns[i].message+ "</td>" +
            "<td class='hid'>" +data.servicePatterns[i].length+ "</td>" +
            "<td class='hid'>" +data.servicePatterns[i].test_id+ "</td>" +
            "<td class='hid'>" +data.servicePatterns[i].timediffms+ "</td>" +
            "</tr>"
        );
    }
  for(var i=0;i<data.txReports.length;i++){
        $(".conTable3 .table tbody").append("<tr>" +
            "<td>" +data.txReports[i].id+ "</td>" +
            "<td>" +data.txReports[i].time+ "</td>" +
            "<td class='hid'>" +data.txReports[i].npusch_timing_sfn+ "</td>" +
            "<td class='hid'>" +data.txReports[i].npusch_timing_sub_fn+ "</td>" +
            "<td class='hid'>" +data.txReports[i].supersubfn+ "</td>" +
            "<td class='hid'>" +data.txReports[i].npusch_format+ "</td>" +
            "<td class='hid'>" +data.txReports[i].is_msg3+ "</td>" +
            "<td class='hid'>" +data.txReports[i].itbs+ "</td>" +
            "<td class='hid'>" +data.txReports[i].repetition_number+ "</td>" +
            "<td class='hid'>" +data.txReports[i].num_ru+ "</td>" +
            "<td class='hid'>" +data.txReports[i].rv_index+ "</td>" +
            "<td class='hid'>" +data.txReports[i].num_tone+ "</td>" +
            "<td class='hid'>" +data.txReports[i].tx_power+ "</td>" +
            "<td class='hid'>" +data.txReports[i].ack_nack+ "</td>" +
            "<td class='hid'>" +data.txReports[i].npusch_format_1_tx_type+ "</td>" +
            "<td class='hid'>" +data.txReports[i].rflm+ "</td>" +
            "<td class='hid'>" +data.txReports[i].prach_collision_valid+ "</td>" +
            "<td class='hid'>" +data.txReports[i].test_id+ "</td>" +
            "</tr>"
        );
    }
});