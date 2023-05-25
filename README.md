# chart3d

- 折线图
- 柱状图
- 饼图
- 散点图
- 气泡图
- 柱状图

```
import Chart3d from 'chart3d';
// 创建一个div元素
const div = document.createElement('div');
// 设置div元素的宽高
div.style.width = '500px';
div.style.height = '500px';
// 将div元素添加到body中
document.body.appendChild(div);
// 创建一个3D图表
const chart = new Chart3d(div);
chart.initScene();
```