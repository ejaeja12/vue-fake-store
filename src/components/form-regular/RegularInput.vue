<script setup>
const inputModel = defineModel()
const { position = 'top-2 left-2', type = 'text' } = defineProps(['position', 'type','fieldId'])
</script>

<template>
    <div class="w-fit h-fit ">
        <div>
            <div class="px-2 pb-1">
                <label class="text-forth font-bold text-sm" :for="fieldId">{{ fieldId }}</label>
            </div>
            <div class="h-full pl-1 relative">
                <div class="h-3 absolute pl-1" :class="position">
                    <slot></slot>
                </div>
            </div>
            <input :id="fieldId" v-model="inputModel" :type="type" class="w-72 h-10 indent-9 bg-slate-50 border border-third focus:outline-second rounded-3xl">
        </div>
    </div>

</template>