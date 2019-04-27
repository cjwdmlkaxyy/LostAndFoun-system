import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../service/http-request.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options: any;
  myecharts: any;
  dashboardDate = {
    todayActive: 0, // 今日活跃用户量 活跃用户--发布消息、留言、删除消息
    monthActive: 0, // 本月活跃用户量
    todayVisit: 0, // 今日访问量
    monthVisit: 0 //本月访问量
  }
  test111 = '今日访客量'

  constructor(private httpRequest: HttpRequestService) { }

  ngOnInit() {

    this.getDashboardData();
    this.getEcharts();
  }

  getDashboardData() {
    this.httpRequest.dashboard().subscribe((res: any) => {
      console.log(res);
      this.dashboardDate = {
        todayActive: res.data.activeCountMonth,
        monthActive: res.data.activeCountToday,
        todayVisit: res.data.loginCountToday,
        monthVisit: res.data.loginCountMonth
      }
    }, (err: any) => {
      console.log(err);
    })
  }

  getEcharts() {
    this.options = {
      title: {
        text: this.test111,
        textStyle: {
          color: '#00344a'
        }
      },
      color: ['#3398DB'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      toolbox: {
        show: true,
        showTitle: true,
        feature: {
          magicType: {type: ['line', 'bar']}
        },
        right: 20,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name: '直接访问',
          type: 'line',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    };
  }
}
