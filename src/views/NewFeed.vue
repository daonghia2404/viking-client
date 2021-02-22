<template>
  <AuthLayout>
    <div class="newfeed-page">
      <div class="new-feed-banner d-flex align-items-center mb-4">
        <img
          src="@/assets/images/newfeed-icon.png"
          alt=""
          class="new-feed-icon"
        />
        <img
          src="@/assets/images/newfeed-banner-bg.png"
          alt=""
          class="newfeed-bg"
        />
        <div class="banner-text">
          <div class="title font-rajdhani-bold">Bài viết</div>
          <p>Xem bạn bè của bạn đã làm gì vừa qua</p>
        </div>
      </div>

      <div class="newfeed-main d-flex">
        <div class="main-overview mr-4">
          <div class="card mb-4">
            <div class="title">Date</div>
            <date-pick v-model="date" :hasInputElement="false"></date-pick>
            <div
              class="title d-flex justify-content-between"
              style="margin-top: -20px;"
            >
              Time
              <span class="primary-color font-rajdhani-semibold">23:00</span>
            </div>
          </div>

          <div class="card mb-4">
            <div class="title">Reactions Received</div>
            <div class="reaction-overview row">
              <div class="col-6">
                <div class="react-item">
                  <img src="@/assets/images/react-like.png" alt="" />
                  <div class="number">12.642</div>
                  <p>Likes</p>
                </div>
              </div>
              <div class="col-6">
                <div class="react-item">
                  <img src="@/assets/images/react-love.png" alt="" />
                  <div class="number">8.232</div>
                  <p>Loves</p>
                </div>
              </div>
              <div class="col-6">
                <div class="react-item">
                  <img src="@/assets/images/react-haha.png" alt="" />
                  <div class="number">8.232</div>
                  <p>Haha</p>
                </div>
              </div>
              <div class="col-6">
                <div class="react-item">
                  <img src="@/assets/images/react-wow.png" alt="" />
                  <div class="number">8.232</div>
                  <p>Wow</p>
                </div>
              </div>
              <div class="col-6">
                <div class="react-item">
                  <img src="@/assets/images/react-sad.png" alt="" />
                  <div class="number">8.232</div>
                  <p>Sad</p>
                </div>
              </div>
              <div class="col-6">
                <div class="react-item">
                  <img src="@/assets/images/react-angry.png" alt="" />
                  <div class="number">8.232</div>
                  <p>Angry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-posts">
          <div class="card post-action">
            <div class="type-post d-flex align-items-center">
              <div class="col-4">
                <div
                  class="type-item status active d-flex align-items-center justify-content-center font-rajdhani-bold"
                >
                  <img src="@/assets/images/icon-post.png" alt="" />
                  Status
                </div>
              </div>
              <div class="col-4">
                <div
                  class="type-item blog d-flex align-items-center justify-content-center disabled font-rajdhani-bold"
                >
                  <img src="@/assets/images/icon-blog.png" alt="" />
                  Blog Post
                </div>
              </div>
              <div class="col-4">
                <div
                  class="type-item poll d-flex align-items-center justify-content-center disabled font-rajdhani-bold"
                >
                  <img src="@/assets/images/icon-poll.png" alt="" />
                  Poll
                </div>
              </div>
            </div>

            <div class="post-editable position-relative">
              <a-textarea placeholder="Hi Mrina! Share your post hehe..." />
              <div class="max-length">988 / 1000</div>
            </div>

            <div
              class="post-upload d-flex justify-content-between align-items-center"
            >
              <div class="upload-item media">
                <a-upload>
                  <a-button>
                    <img src="@/assets/icons/icon-camera.svg" alt="" />
                  </a-button>
                </a-upload>
              </div>
              <div class="upload-item">
                <a-button class="custom-button primary">Post</a-button>
              </div>
            </div>
          </div>

          <div class="newfeed-lists-wrapper">
            <NewfeedComponent />
          </div>
        </div>
      </div>
    </div>
  </AuthLayout>
</template>

<script>
import Vue from 'vue'
import { Button, Input, Upload } from 'ant-design-vue'
import DatePick from 'vue-date-pick'
import AuthLayout from '@/layouts/auth-layout/AuthLayout'
import NewfeedComponent from '@/components/newfeed/newfeed'

Vue.use(Button)
Vue.use(Input)
Vue.use(Upload)

export default {
  name: 'NewFeedPage',
  components: {
    AuthLayout,
    DatePick,
    NewfeedComponent
  },
  data: () => ({
    date: '2021-02-03'
  })
}
</script>

<style lang="scss">
.newfeed-page {
  .new-feed-banner {
    position: relative;
    .newfeed-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      object-position: center;
      z-index: -1;
      border-radius: 8px;
    }
    .new-feed-icon {
      transform: scale(1.1) translate(8px, -7px);
      margin-right: 40px;
    }
    .banner-text {
      .title,
      p {
        color: $white;
      }
      .title {
        font-size: 36px;
      }
      p {
        font-size: 16px;
      }
    }
  }
  .newfeed-main {
    .card {
      @include box-shadow;
      border: none;
      padding: 20px;
      border-radius: 15px;
      .title {
        font-size: 16px;
        color: $title;
        margin-bottom: 15px;
        font-family: 'Rajdhani-SemiBold';
      }
    }
    .main-overview {
      flex: 0 0 275px;
      max-width: 275px;
      .vdpComponent {
        transform: scale(0.85) translate(-22px, -25px);
      }
      .react-item {
        text-align: center;
        margin-bottom: 20px;
        .number {
          font-family: 'Rajdhani-Bold';
          font-size: 22px;
        }
        p {
          color: $gray;
          font-size: 12px;
          font-family: 'Rajdhani-SemiBold';
          text-transform: uppercase;
        }
      }
    }
    .main-posts {
      flex: 1;
    }
  }
}

.post-action {
  padding: 0 !important;
  .type-post {
    .col-4 {
      position: relative;
      padding: 20px 0;
      overflow: hidden;
    }
    .type-item {
      transition: 0.3s ease;
      opacity: 0.6;
      cursor: pointer;
      &:hover,
      &.active {
        opacity: 1;
        &:before {
          opacity: 1;
        }
      }
      &:before {
        position: absolute;
        transition: 0.3s ease;
        content: '';
        bottom: 0;
        opacity: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background: $lightblue;
      }
      &.disabled {
        cursor: not-allowed;
        opacity: 0.6 !important;
        &:before {
          opacity: 0 !important;
        }
      }
      &.blog {
        border-left: 1px solid $border;
        border-right: 1px solid $border;
      }
      img {
        width: 20px;
        margin-right: 15px;
      }
    }
  }

  .post-editable {
    border-top: 1px solid $border;
    border-bottom: 1px solid $border;
    textarea {
      border: none;
      border-radius: 0;
      min-height: 120px;
      box-shadow: none;
      padding: 25px 25px 0 25px;
      resize: none;
      &::placeholder {
        color: $gray;
      }
    }
    .max-length {
      text-align: right;
      font-size: 12px;
      padding: 15px 25px;
      color: $gray;
    }
  }

  .post-upload {
    padding: 15px 25px;
    .upload-item {
      &.media {
        .ant-btn {
          border: none;
          padding: 0 5px;
          box-shadow: none;
          img {
            width: 20px;
          }
        }
      }
    }
  }
}
</style>
