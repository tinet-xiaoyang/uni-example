<template>
  <view class="qiun-charts">
    <block v-for="(item, index) in arr" :key="index">
			<view class="qiun-columns" style="background-color: #FFFFFF;">
				<a-charts :canvas-id="item.id" :chartType="item.chartType" :cWidth="cWidth" :cHeight="cHeight" :opts="item.opts" :ref="item.id"/>
			</view>
		</block>
  </view>
</template>

<script>
import data from "../../mock/data";
import aCharts from '../../components/u-charts/component'
var _self;
export default {
  components: {
    aCharts
  },
  data() {
    return {
      textarea: '',
      cWidth:'',
      cHeight:'',
      arr: []
    }
  },
  onLoad() {
    _self = this;
    this.cWidth=uni.upx2px(750);
    this.cHeight=uni.upx2px(500);
    this.getServerData();
  },
  methods: {
    getServerData() {
      let LineA = {
        categories: [],
        series: [],
      };
      LineA.categories = data.LineA.categories;
      LineA.series = data.LineA.series;

      let Column = {
        categories: [],
        series: [],
      };
      Column.categories = data.ColumnB.categories;
      Column.series = data.ColumnB.series;

      _self.textarea = JSON.stringify(data.LineA);

      let serverData = [
        {
          opts: LineA,
          chartType: "line",
          id: "abcc",
        },
        {
          opts: Column,
          chartType: "column",
          id: "bcdd",
        },
      ];

      _self.arr = serverData;
    },
  },
};
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
	}
</style>