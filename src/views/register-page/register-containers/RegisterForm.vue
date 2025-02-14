<script setup>
import RegularInput from '@/components/form-regular/RegularInput.vue';
import { Icon } from '@iconify/vue';
import RegularModal from '@/components/modal/RegularModal.vue';
import DirectorTextLink from '@/components/form-regular/DirectorTextLink.vue';
import { ref, reactive } from 'vue'

const showModal = ref(false)
const tesRefInput = reactive({
    email : '',
    nama : '',
    password : '',
    ulangiPassword : '',
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
            <h1 class="w-fit bg-linear-to-r from-first to-third font-bold text-3xl text-transparent bg-clip-text">
                REGISTER
            </h1>
        </div>
        
        
        <div class="flex flex-col justify-around gap-4">
            <RegularInput v-model="tesRefInput.email" position="top-2.5 left-2" field-id="Email">
                <Icon icon="mdi:email" :inline="true" color="#62748e" height="1.3rem"/>
            </RegularInput>

            <RegularInput type="text" v-model="tesRefInput.nama" position="top-2.5 left-2" field-id="Nama">
                <Icon icon="solar:user-bold" :inline="true" color="#62748e" height="1.3rem"/>
            </RegularInput>

            <RegularInput type="password" v-model="tesRefInput.password" position="top-2.5 left-2" field-id="Password">
                <Icon icon="material-symbols:lock" :inline="true" color="#62748e" height="1.3rem"/>
            </RegularInput>

            <RegularInput type="password" v-model="tesRefInput.ulangiPassword" position="top-2.5 left-2" field-id="Ulangi Password">
                <Icon icon="material-symbols:lock" :inline="true" color="#62748e" height="1.3rem"/>
            </RegularInput>
        </div>
        
       
        
        <div class="flex flex-col gap-5 justify-center items-center">
            <button @click="showModal = true" class="w-fit font-semibold bg-linear-to-r from-forth to-first text-white text-lg px-8 h-10 rounded-3xl">
                DAFTAR
            </button>
            <DirectorTextLink>
                <span>
                    Sudah punya akun?
                    <router-link to="/login">
                        <span class="text-third font-bold"> Masuk</span>
                    </router-link> 
                </span>
            </DirectorTextLink>
        </div>
        
    </div>

    <!-- Modal -->

    <RegularModal v-if="showModal" v-model="tesRefInput" @close="buttonCloseModal"></RegularModal>

    <!-- <h1>{{ tesRefInput }}</h1> -->
        
</template>