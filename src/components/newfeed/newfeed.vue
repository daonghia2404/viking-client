<template>
  <div class="newfeed-component">
    <div
      class="newfeed-header d-flex align-items-center justify-content-between"
    >
      <div class="newfeed-header-item d-flex align-items-center">
        <Avatar />
        <div class="newfeed-header-info">
          <div class="newfeed-name font-rajdhani-bold">Bearded Wonder</div>
          <div class="newfeed-created-time font-rajdhani-semibold">
            39 minutes ago
          </div>
        </div>
      </div>
      <div class="newfeed-header-item">
        <a-dropdown :trigger="['click']">
          <div class="setting-newfeed">
            <img src="@/assets/icons/icon-dots-horizontal.svg" />
          </div>
          <div slot="overlay" class="setting-newfeed-dropdown">
            ABC
          </div>
        </a-dropdown>
      </div>
    </div>

    <div class="newfeed-caption">
      Sorry everyone, but from now on, I will only be able to edit and upload
      one design tutorial per month. This happens because I'm having a lot on my
      plate right now and recording and editing the tutorials requiere a lot of
      attention.
    </div>

    <div class="newfeed-media d-flex flex-wrap multiple">
      <div class="media-item">
        <img src="@/assets/images/image-default.jpeg" />
      </div>
      <div class="media-item">
        <img src="@/assets/images/image-default.jpeg" />
      </div>
      <div class="media-item">
        <img src="@/assets/images/image-default.jpeg" />
      </div>
      <div class="media-item">
        <img src="@/assets/images/image-default.jpeg" />
      </div>
    </div>

    <div style="padding: 0 30px"><div class="line"></div></div>

    <div class="newfeed-info d-flex align-items-center justify-content-between">
      <div class="newfeed-info-item d-flex align-items-center">
        <div class="reaction-item">
          <a-tooltip>
            <template slot="title">prompt text</template>
            <img class="reaction-icon" src="@/assets/images/react-like.png" />
          </a-tooltip>
        </div>
        <div class="reaction-item">
          <a-tooltip>
            <template slot="title">prompt text</template>
            <img class="reaction-icon" src="@/assets/images/react-love.png" />
          </a-tooltip>
        </div>
        <div class="reaction-number font-rajdhani-semibold">99</div>
      </div>

      <div class="newfeed-info-item d-flex">
        <div class="newfeed-comments font-rajdhani-semibold">15 Comments</div>
        <div class="newfeed-shares font-rajdhani-semibold">0 Shares</div>
      </div>
    </div>

    <div class="newfeed-options d-flex align-items-center">
      <a-popover overlayClassName="react-options-overlay">
        <template slot="content">
          <div class="d-flex">
            <div
              v-for="(item, index) in [
                'like',
                'love',
                'haha',
                'wow',
                'sad',
                'angry'
              ]"
              :key="index"
              class="react-btn"
            >
              <a-tooltip>
                <template slot="title">{{ autoCapitalize(item) }}</template>
                <img
                  :src="require(`@/assets/images/react-${item}.png`)"
                  alt=""
                />
              </a-tooltip>
            </div>
          </div>
        </template>
        <div
          class="options-item font-rajdhani-bold d-flex align-items-center justify-content-center"
        >
          <img src="@/assets/icons/icon-like.png" />
          React !
        </div>
      </a-popover>

      <div
        class="options-item font-rajdhani-bold d-flex align-items-center justify-content-center"
      >
        <img src="@/assets/icons/icon-comments.png" />
        Comment
      </div>

      <div
        class="options-item font-rajdhani-bold d-flex align-items-center justify-content-center"
      >
        <img src="@/assets/icons/icon-share.png" />
        Share
      </div>
    </div>

    <div class="line"></div>

    <div class="newfeed-comments-wrapper">
      <div class="comment-item comment-action d-flex align-items-center">
        <Avatar />
        <div class="comment-form d-flex align-items-center">
          <a-textarea placeholder="Viết bình luận" :auto-size="true" />
          <div class="upload-item media">
            <a-upload>
              <a-button>
                <img src="@/assets/icons/icon-camera.svg" alt="" />
              </a-button>
            </a-upload>
          </div>
        </div>
      </div>
      <div class="comment-item d-flex">
        <Avatar />
        <div class="comment-info">
          <div class="comment-name font-rajdhani-bold">Bearded Wonder</div>
          <div class="comment-caption font-rajdhani-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            doloribus ab saepe soluta tempore ducimus voluptas culpa. Debitis
            officia doloribus temporibus? Magnam possimus voluptatem doloribus
            explicabo, enim quis libero nam!
          </div>
          <div class="comment-media d-flex flex-wrap">
            <div class="media-item">
              <img src="@/assets/images/image-default.jpeg" alt="" />
              <a-button class="media-delete"
                ><img src="@/assets/icons/icon-close.svg" alt=""
              /></a-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Dropdown, Tooltip, Popover, Upload } from 'ant-design-vue'
import { autoCapitalize } from '@/utils/utils-format'
import Avatar from '@/components/avatar/avatar'

Vue.use(Dropdown)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Upload)

export default {
  name: 'NewfeedComponent',
  components: {
    Avatar
  },
  methods: {
    autoCapitalize
  }
}
</script>

<style lang="scss">
.react-options-overlay {
  .ant-popover-inner {
    border-radius: 30px;
  }
  .react-btn {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 0 5px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      transform: translateY(-5px);
    }
    img {
      width: 100%;
      user-select: none;
    }
  }
}

.newfeed-component {
  @include box-shadow;
  margin: 20px 0;
  background: $white;
  border-radius: 15px;
  overflow: hidden;
  .newfeed-header {
    padding: 25px 30px 0;

    .newfeed-header-item {
      .avatar {
        margin-right: 15px;
      }
      .newfeed-header-info {
        .newfeed-name {
          color: $title;
          font-size: 16px;
          line-height: 1;
        }
        .newfeed-created-time {
          font-size: 12px;
        }
      }
      .setting-newfeed {
        padding: 10px 15px;
        cursor: pointer;
        transition: 0.3s ease;
        opacity: 0.5;

        &:hover {
          opacity: 1;
        }
        img {
          width: 25px;
          user-select: none;
        }
      }
    }
  }
  .newfeed-caption {
    font-size: 14px;
    line-height: 1.5;
    padding: 20px 30px;
  }

  .newfeed-media {
    padding: 0 30px 20px;
    &.single {
      .media-item {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
    &.multiple {
      justify-content: space-between;
      .media-item {
        flex: 0 0 49%;
        max-width: 49%;
        margin-bottom: 10px;

        &:last-of-type:after {
          background: rgba(0, 0, 0, 0.3);
          content: '18+';
          color: $white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          font-family: 'Rajdhani-Bold';
        }
      }
    }
    .media-item {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      &:hover {
        &::before {
          opacity: 1;
        }
      }
      &:after,
      &:before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      &:before {
        content: '';
        background: rgba(255, 255, 255, 0.2);
        pointer-events: none;
        transition: 0.3s ease;
        opacity: 0;
      }

      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .newfeed-info {
    padding: 15px 30px;
    .newfeed-info-item {
      .reaction-item {
        &:not(:first-of-type) {
          margin-left: -5px;
        }
        .reaction-icon {
          width: 20px;
        }
      }
      .reaction-number,
      .newfeed-comments,
      .newfeed-shares {
        font-size: 12px;
        margin-left: 10px;
      }
    }
  }
  .newfeed-options {
    border-top: 1px solid $border;
    padding: 5px 30px;
    background: $gray-light;
    .options-item {
      flex: 0 0 calc(100% / 3);
      max-width: calc(100% / 3);
      font-size: 12px;
      color: $black;
      transition: 0.3s ease;
      border-radius: 12px;
      cursor: pointer;
      user-select: none;
      padding: 15px;
      opacity: 0.5;
      &:hover {
        @include box-shadow;
        background: $white;
        opacity: 1;
      }
      img {
        user-select: none;
        width: 20px;
        margin-right: 10px;
      }
    }
  }
  .newfeed-comments-wrapper {
    padding: 15px 30px;
    background: $gray-light;
    .comment-item {
      &:not(:last-of-type) {
        margin-bottom: 15px;
      }
      .comment-form {
        flex: 1;
        background: $white;
        border-radius: 8px;
        padding: 5px;
        min-height: 40px;
        .ant-input {
          box-shadow: none;
          outline: none;
          width: 100%;
          background: none;
          border: none;
          border-radius: 5px;
          resize: none;
          font-family: 'Rajdhani-SemiBold';
        }
        .ant-btn {
          margin-left: 5px;
          border: none;
          padding: 0 5px;
          box-shadow: none;
          img {
            width: 20px;
          }
        }
      }

      .avatar {
        margin-right: 10px;
      }
      .comment-info {
        background: $white;
        padding: 8px;
        border-radius: 5px;
        .comment-name {
          transition: 0.3s ease;
          cursor: pointer;
          color: $title;
          &:hover {
            color: $lightblue;
          }
        }
      }
    }
    .comment-media {
      .media-item {
        width: 50%;
        margin: 10px 0;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
        }
        .media-delete {
          position: absolute;
          top: 5px;
          right: 5px;
          z-index: 3;
          width: 30px;
          height: 30px;
          padding: 10px;
          display: flex;
          border-radius: 50%;
          background: $white;
          border: none;
          opacity: 0.5;
          transition: 0.3s ease;
          &:hover {
            opacity: 1;
          }
          img {
            margin: auto;
          }
        }
      }
    }
  }
}
</style>
