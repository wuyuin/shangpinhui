<template>
  <div class="floor">
    <div class="py-container">
      <div class="title clearfix">
        <h3 class="fl">{{list.name}}</h3>
        <div class="fr">
          <ul class="nav-tabs clearfix">
            <li class="active">
              <a
                href="#tab1"
                data-toggle="tab"
              >{{list.navList[0].text}}</a>
            </li>
            <li>
              <a
                href="#tab2"
                data-toggle="tab"
              >{{list.navList[1].text}}</a>
            </li>
            <li>
              <a
                href="#tab3"
                data-toggle="tab"
              >{{list.navList[2].text}}</a>
            </li>
            <li>
              <a
                href="#tab4"
                data-toggle="tab"
              >{{list.navList[3].text}}</a>
            </li>
            <li>
              <a
                href="#tab5"
                data-toggle="tab"
              >{{list.navList[4].text}}</a>
            </li>
            <li>
              <a
                href="#tab6"
                data-toggle="tab"
              >{{list.navList[5].text}}</a>
            </li>
            <li>
              <a
                href="#tab7"
                data-toggle="tab"
              >{{list.navList[6].text}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane">
          <div class="floor-1">
            <div class="blockgary">
              <ul class="jd-list">
                <li>{{list.keywords[0]}}</li>
                <li>{{list.keywords[1]}}</li>
                <li>{{list.keywords[2]}}</li>
                <li>{{list.keywords[3]}}</li>
                <li>{{list.keywords[4]}}</li>
                <li>{{list.keywords[5]}}</li>
              </ul>
              <img src=list.bigImg>
            </div>
            <div class="floorBanner">
              <div
                class="swiper-container"
                id="floor1Swiper"
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src=list.imgUrl>
                  </div>
                  <!--  <div class="swiper-slide">
                    <img src="./images/floor-1-b02.png">
                  </div>
                  <div class="swiper-slide">
                    <img src="./images/floor-1-b03.png">
                  </div> -->
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>

                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img src="./images/floor-1-2.png" />
              </div>
              <div class="floor-conver-pit">
                <img src="./images/floor-1-3.png" />
              </div>
            </div>
            <div class="split center">
              <img src="./images/floor-1-4.png" />
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img src="./images/floor-1-5.png" />
              </div>
              <div class="floor-conver-pit">
                <img src="./images/floor-1-6.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "FloorOne",
  // 子组件接受父组件传过来的数据
  props: ["list"],
  mounted () {
    //发请求

  },


}
</script>

<style scope lang="less">
.floor {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;

        .nav-tabs {
          margin: 10px 0 0;
          display: inline-block;

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              background-color: #fff;

              &::after {
                content: "|";
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: "";
                }
              }
            }

            &.active {
              a {
                color: #e1251b;
              }
            }
          }
        }
      }
    }

    .tab-content {
      border-top: 2px solid #c81623;
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          height: 360px;
          display: flex;

          .blockgary {
            width: 210px;
            height: 100%;
            background: #f7f7f7;

            .jd-list {
              padding: 15px 0;
              overflow: hidden;

              li {
                list-style-type: none;
                float: left;
                width: 40%;
                margin: 0 10px;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;
              }
            }

            img {
              width: 100%;
            }
          }

          .floorBanner {
            width: 330px;
            height: 100%;
          }

          .split {
            width: 220px;
            height: 100%;
            position: relative;

            .floor-x-line {
              position: absolute;
              background: #e4e4e4;
              width: 220px;
              height: 1px;
              top: 180px;
            }

            .floor-conver-pit {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 100%;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            border: 1px solid #e4e4e4;
          }
        }
      }
    }
  }
}
</style>