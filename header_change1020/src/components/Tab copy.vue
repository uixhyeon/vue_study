<template>
  <div class="home">
    <div class="container">
      <!-- 탭 메뉴 -->
      <div class="tabs">
        <button :class="{ active: activeTab === 'detail' }" @click="activeTab = 'detail'">🛍️ 상세정보</button>
        <button :class="{ active: activeTab === 'review' }" @click="activeTab = 'review'">⭐ 리뷰</button>
      </div>

      <!-- 상세정보 -->
      <div class="content" v-if="activeTab === 'detail'">
        <img src="https://via.placeholder.com/500x300" alt="상품이미지" class="product-img" />
        <h2>🍰 딸기 케이크</h2>
        <p>신선한 딸기와 부드러운 크림이 가득한 인기 케이크입니다.</p>
        <p class="price">가격: <strong>25,000원</strong></p>
        <button class="buy-btn">🛒 장바구니 담기</button>
      </div>

      <!-- 리뷰 -->
      <div class="content review" v-if="activeTab === 'review'">
        <h3>고객 리뷰</h3>

        <div class="review-card" v-for="(r, i) in reviews" :key="i">
          <div class="review-header">
            <span class="name">{{ r.name }}</span>
            <span class="stars">{{ "⭐".repeat(r.rating) }}</span>
          </div>
          <p class="text">{{ r.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 현재 선택된 탭
const activeTab = ref("detail");

// 리뷰 데이터 (실무에서는 API로 받아옴)
const reviews = ref([
  { name: "민지", rating: 5, text: "너무 맛있어요! 생크림이 부드러워요 🍓" },
  { name: "현우", rating: 4, text: "배송도 빠르고 포장도 깔끔했어요." },
  { name: "유나", rating: 5, text: "사진보다 실제가 더 예뻐요!" },
]);
</script>

<style lang="scss" scoped>
.container {
  max-width: 600px;
  margin: 50px auto;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;

  .tabs {
    display: flex;
    border-bottom: 2px solid #ddd;

    button {
      flex: 1;
      padding: 12px;
      border: none;
      background: #f3f3f3;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      transition: 0.3s;
      border-radius: 10px 10px 0 0;

      &:hover {
        background: #eaeaea;
      }

      &.active {
        background: #ff9a9e;
        color: white;
      }
    }
  }

  .content {
    padding: 20px;
    text-align: center;

    .product-img {
      width: 100%;
      border-radius: 10px;
      margin-bottom: 15px;
    }

    .price {
      font-size: 18px;
      color: #555;
      margin-top: 10px;
    }

    .buy-btn {
      margin-top: 10px;
      padding: 10px 20px;
      border: none;
      background: #ff9a9e;
      color: white;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        background: #ff7a85;
      }
    }

    &.review {
      text-align: left;

      .review-card {
        background: #f9f9f9;
        border-radius: 10px;
        padding: 15px;
        margin-bottom: 10px;

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;

          .name {
            font-weight: bold;
          }

          .stars {
            color: #ffcc00;
          }
        }

        .text {
          color: #555;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>
