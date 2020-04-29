let StyleCode = `
/*
* Inspired by http://strml.net/
* Hello，我是QYW
* 接下来让我们动起来，dangdangdang！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}

/* 白色背景太单调了，我们来点背景 */
html {
  color: #657b83;
  background: #fdf6e3;
}

/* 文字离边框太近了 */
.styleReader {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw;
  height: 90vh;
}

/* 适配一下移动端 */
@media (max-width: 700px) {
  .styleReader {
    width: 90vw;
    height: 50vh;
  }
}

/* 代码高亮 */
.token.selector{ color: #2aa198; }
.token.property{ color: #268bd2; }
.token.punctuation{ color: #586e75; }
.token.function{ color: #b58900; }

/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleReader {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
  transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
.graph{
  margin-left: 50px;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
  width: 250px;
  height: 250px;
}

/* 八卦是阴阳形成的
 * 一黑一白
 **/
.graph{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 加两个神秘的小球 */
.graph::before{
  position: relative;
  display: block;
  content: '';
  width: 125px;
  height: 125px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

.graph::after{
  position: relative;
  display: block;
  content: '';
  width: 125px;
  height: 125px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`

export {
  StyleCode
}
