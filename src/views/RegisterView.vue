}<template>
  <PageWrapper>
    <div class="register-view">
      <RegisterComponent />
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import RegisterComponent from '@/components/forms/RegisterForm.vue';
import PageWrapper from '@/components/layout/PageWrapper.vue'
</script>

<style scoped>
.register-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 10rem);
}
</style>
