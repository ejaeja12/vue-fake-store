<script setup>
import RegisterForm from './register-containers/RegisterForm.vue';
</script>

<template>
    <div class="w-full h-screen flex flex-row bg-linear-to-br from-third  to-first justify-center">

        <!-- form input -->
        <div class=" w-2/5  flex justify-center bg-white rounded-2xl">
            <div class="content-center p-3">
                <RegisterForm></RegisterForm>
            </div>
        </div>
        
    </div>

    
</template>