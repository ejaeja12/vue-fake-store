<script setup>
import RegularInput from '@/components/form-regular/RegularInput.vue';
import { Icon } from '@iconify/vue';
import RegularModal from '@/components/modal/RegularModal.vue';
import DirectorTextLink from '@/components/form-regular/DirectorTextLink.vue';
import { ref, reactive } from 'vue'

const showModal = ref(false)
const tesRefInput = reactive({
    email : '',
    password : '',
})

const buttonCloseModal = () => {
    tesRefInput.email = ''
    tesRefInput.password = ''
    showModal.value = false
}

</script>

<template>
    
    <div class="flex flex-col gap-9">
        <div class="flex justify-center">
            <h1 class="w-fit bg-linear-to-r from-first to-third font-bold text-3xl text-transparent bg-clip-text">LOGIN</h1>
        </div>
        
        <div class="flex flex-col gap-3">
            <div class="flex flex-col justify-around gap-4">
                <RegularInput v-model="tesRefInput.email" position="top-2.5 left-2" field-id="Email">
                    <Icon icon="mdi:email" :inline="true" color="#62748e" height="1.3rem"/>
                </RegularInput>

                <RegularInput type="password" v-model="tesRefInput.password" position="top-2.5 left-2" field-id="Password">
                    <Icon icon="material-symbols:lock" :inline="true" color="#62748e" height="1.3rem"/>
                </RegularInput>
            </div>
            <div class="w-full h-fit flex flex-row justify-between px-2">
                <div class="flex flex-row gap-1">
                    <input id="remember" type="checkbox" class="rounded-sm">
                    <label for="remember" class="text-slate-400 font-semibold text-xs">remember me</label>
                </div>
                <router-link class="text-slate-400 font-semibold text-xs">forgot password</router-link>
            </div>
        </div>
       
        
        <div class="flex flex-col gap-5 justify-center items-center">
            <button @click="showModal = true" class="w-fit font-semibold bg-linear-to-r from-forth to-first text-white text-lg px-8 h-10 rounded-3xl">
                LOGIN
            </button>
            <DirectorTextLink>
                <span>
                    Belum punya akun ?
                    <router-link to="/register">
                        <span class="text-third font-bold"> Daftar</span>
                    </router-link> 
                </span>
            </DirectorTextLink>
        </div>
        
    </div>

    <!-- Modal -->

    <RegularModal v-if="showModal" v-model="tesRefInput" @close="buttonCloseModal"></RegularModal>

    <!-- <h1>{{ tesRefInput }}</h1> -->
        
</template>