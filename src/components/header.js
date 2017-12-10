import React,{Component} from 'react';
import {Link} from 'react-router';
import '../styles/Com-header.css';

class Header extends Component{
  constructor(props){
    super(props)
  }
  render(){
    // const lis = [
    //   {titel:'最新活动',address:'NewActive'},
    //   {titel:'产品',address:'Product'},
    //   {titel:'解决方案',address:'Scheme'},
    //   {titel:'数据 · 智能',address:'Four'},
    //   {titel:'安全',address:'Five'},
    //   {titel:'云市场',address:'Six'},
    //   {titel:'支持',address:'Seven'},
    //   {titel:'合作伙伴',address:'Eight'}
    // ];
    return (
      <div className="headers">
        <div className="top">
          <div className="left">
            <img src="../images/1.png" alt=""/>
          </div>
          <div className="right">
            <div>
              <i></i>
            </div>
            <div>
              <img src="../images/2.png" alt=""/>
              中国站
              <i></i>
            </div>
            <ul>
              <li><a href="#">控制台</a></li>
              <li><a href="#">文档</a></li>
              <li><a href="#">备案</a></li>
              <li><a href="#">邮箱</a></li>
              <li><a href="#">登录</a></li>
            </ul>
          </div>
        </div>
        <div className="nav">
          <div className="lef">
            <div className="aln">
              <i>三</i>
              全部导航
              <div className="lef_nav">
                <ul>
                  <li>
                    <span>产品</span>
                    <i> > </i>
                  </li>
                  <li>
                    <span>解决方案</span>
                    <i> > </i>
                  </li>
                  <li>
                    <span>云市场</span>
                    <i> > </i>
                  </li>
                  <li>
                    <span>合作与生态</span>
                    <i> > </i>
                  </li>
                  <li>
                    <span>云栖社区</span>
                    <i> > </i>
                  </li>
                  <li>
                    <span>阿里云大学</span>
                    <i> > </i>
                  </li>
                </ul>
                <Link to="/About">阿里云</Link>
              </div>
            </div>
            <ul>
              {/*{ lis.map((item,index) => {*/}
                {/*return (*/}
                  {/*<li key={index}>*/}
                    {/*<Link to={item.address} >{ item.titel }</Link>*/}
                    {/*<div key={index}></div>*/}
                  {/*</li>*/}
              {/*);*/}
              {/*})}*/}
              <li className="li-one">
                <Link to="new">最新活动</Link>
              </li>
              <li>
                <a href="" className="li-a">产品</a>
                <div  className="d-big">
                  <div className="d-top">
                    <div className="t-lef">
                      <p>热门产品</p>
                      <a href="#">云服务器ECS</a>
                      <a href="#">对象存储OSS</a>
                      <a href="#">高防</a>
                      <a href="#">域名注册</a>
                      <a href="#">数据可视化</a>
                    </div>
                    <div className="t-rig">
                      <i>..</i>
                      <span>轻量级云服务器首发，1分钟快速搭建应用</span>
                    </div>
                  </div>
                  <div className="d-d">
                    <dl>
                      <dt>弹性计算</dt>
                    </dl>
                    <dl>
                      <dt>存储和CDN</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>数据库</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>网络</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>移动云</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <a href="" className="li-a">解决方案</a>
                <div className="d-big">
                  <div className="d-d">
                    <dl>
                      <dt>&nbsp;&nbsp;&nbsp;&nbsp;</dt>
                      <dd></dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                   </dl>
                    <dl>
                      <dt>通用解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>安全解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>大数据解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>DEV解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt></dt>
                      <dd></dd>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <a href="" className="li-a">数据 · 智能</a>
                <div className="d-big">
                  <div className="d-d">
                    <dl>
                      <dt>数据 · 智能</dt>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <a href="" className="li-a">安全</a>
                <div className="d-big">
                  <div className="d-d">
                    <dl>
                      <dt>安全</dt>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <a href="" className="li-a">云市场</a>
                <div className="d-big">
                  <div className="d-d">
                    <dl>
                      <dt>云市场</dt>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <a href="" className="li-a">支持</a>
                <div className="d-big">
                  <div className="d-d">
                    <dl>
                      <dt>支持</dt>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <a href="" className="li-a">合作伙伴</a>
                <div className="d-big">
                  <div className="d-d">
                    <dl>
                      <dt>合作伙伴</dt>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                    <dl>
                      <dt>行业解决方案</dt>
                      <dd>新零售解决方案</dd>
                    </dl>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/*<a href="#" className="rig">免费注册</a>*/}
          <div className="rig">
            <Link to="Regist">免费注册</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
