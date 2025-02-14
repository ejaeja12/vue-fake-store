<script setup>
// const props = defineProps({
//     show : Boolean,
// })
const modalModel = defineModel()
</script>

<template>
    <teleport to='body'>
        <div class="w-full h-screen absolute top-0 content-center flex flex-row justify-center items-center">
            <div class="w-3/5 h-3/5  bg-slate-50 flex flex-row justify-center border-2 rounded-2xl relative p-10">
                <p class=" w-full">
                    {{ modalModel }}
                </p>
                <button @click="$emit('close')" class="px-5 py-2 absolute bottom-10 right-15 rounded-2xl bg-blue-950 active:bg-blue-700 text-white ">
                    close
                </button>
                
            </div>
        </div>
    </teleport>
</template>