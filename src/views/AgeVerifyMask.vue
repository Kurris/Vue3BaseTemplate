<template>
    <teleport to='body'>
        <transition name="fade">
            <div class="mask" v-if="showDialog">
                <div class="dialog">
                    <template v-if="!notReached">
                        <div class="dialogTitle">
                            <h1 style="color: white;">
                                AGE VERIFICATION &nbsp;&nbsp;
                            </h1>
                        </div>
                        <p> To use the Vaporesso website you must be aged 21 years or over. Please verify
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            your age beforee ntering the site.
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;We use cookies to improve our website and
                            your experience browsing it.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;By continuing to browse
                            our website you accept our
                            <el-link type="success">Cookie Policy</el-link>
                        </p>


                        <div class="btn-container">
                            <el-button class="btn" @click="closeDialog(false)" color='white'>under 21</el-button>
                            <el-button class="btn" @click="closeDialog(true)" type="success" plain>21+</el-button>
                        </div>

                        <br />
                        <span style="color: #04da04 ;">
                            WARNING: This product contains nicotine. Nicotine is an addictive chemical.
                        </span>
                    </template>
                    <template v-else>
                        SORRY, BUT YOU HAVE NOT REACHED THE LEGAL AGE OF VAPING
                    </template>
                </div>
            </div>
        </transition>
    </teleport>
</template>
<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import { useCookies } from 'vue3-cookies'

const { cookies } = useCookies()

const showDialog = ref(true)
const notReached = ref(false)


const closeDialog = (state: boolean) => {
    if (state) {
        showDialog.value = false
        cookies.set('ageVerified', 'true')
    } else {
        notReached.value = true
        setTimeout(() => {
            location.href = 'https://www.google.com/'
        }, 3500)
    }
}
// 
onBeforeMount(() => {
    const value = cookies.get('ageVerified')
    showDialog.value = !(value == 'true')
})

</script>
<style lang="scss" scoped>
.mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: var(--backFilter);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;

    // p {
    //     color: #a9a9a9;
    // }

    line-height: 25px;
    font-weight: bold;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: 0.3s;
    -moz-transition: 0.3s;
    -webkit-transition: 0.3s;
}

.dialog {
    color: white;
    width: 650px;
    height: 307px;
    // box-shadow: 0px 0px 1px 2px var(--mainColor);
}

.dialogTitle {
    // display: flex;
    // justify-content: center;
    text-align: center;
}

.btn-container {
    display: flex;
    justify-content: space-evenly;
}

.btn {
    width: 120px;
    height: 36px;
    font-size: 15px;
    border-radius: 1.56vw;
}
</style>