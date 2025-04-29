<template>
  <div class="flex flex-col items-center mt-20">
    <h1 class="text-2xl mb-4">로그인</h1>
    <input v-model="userId" placeholder="User ID" class="mb-2 p-2 border" />
    <input v-model="password" type="password" placeholder="Password" class="mb-2 p-2 border" />
    <button @click="signin" class="bg-blue-500 text-white px-4 py-2">로그인</button>
    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from '@/util/axios';
// import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';

const userId = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();
// const authStore = useAuthStore();

// 로그인 함수
// const signin = async () => {
//   try {
//     const res = await axios.post('/public/auth/signin', { userId: userId.value, password: password.value });
//     authStore.signin(res.data.accessToken); // accessToken 저장
//     router.push('/main'); // 메인 화면으로 이동
//   } catch (e) {
//     error.value = '로그인 실패: ' + (e.response?.data?.message || '서버 오류');
//   }
// };
</script>
