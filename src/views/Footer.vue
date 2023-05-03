<template>
    <div class="footer">
        <div class="contract">
            <div style="width: 400px;">
                <p>
                    SUBSCRIBE
                </p>
                <span>
                    Get the latest product launches, promotions, and contests delivered straight to your inbox for free!
                </span>

                <div class="sign-btn">
                    <el-input v-model="email" placeholder="Please input your email address" type="email" />
                    <el-button class="sign-up" type="success">SIGN UP</el-button>
                </div>
            </div>
            <div>
                <p>
                    FOLLOW US
                </p>
                <span>
                    Are you social, releasing new products, or holding an event?
                    <br />
                    Follow us to find out more.
                </span>
                <div style="margin-top: 20px;">
                    <el-image style="width: 32px; height: 32px;"
                        src="https://www.vaporesso.com/hubfs/imgs/2022/com/icon-facebook.png"></el-image>
                    <el-image style="width: 32px; height: 32px; margin-left: 20px;"
                        src="https://www.vaporesso.com/hubfs/imgs/2022/com/icon-ins.png"></el-image>
                    <el-image style="width: 32px; height: 32px; margin-left: 20px;"
                        src="https://www.vaporesso.com/hubfs/imgs/2022/com/icon-youtube.png"></el-image>
                    <el-image style="width: 32px; height: 32px; margin-left: 20px;"
                        src="https://www.vaporesso.com/hubfs/imgs/2022/com/icon-twitter.png"></el-image>
                </div>
            </div>
        </div>

        <div class="menu-detail">
            <div class="detail">
                <div class="d">
                    PRODUCTS
                </div>
                <span>
                    POD
                </span>
                <span>
                    POD MOD
                </span>
                <span>
                    TANK MOD
                </span>
                <span>
                    PEN STYLE
                </span>
            </div>
            <div class="detail">
                <div class="d">
                    PLATFORM
                </div>
                <span>
                    ZERO POD
                </span>
                <span>
                    XROS POD
                </span>
                <span>
                    iTANK
                </span>
                <span>
                    COIL
                </span>
                <span>
                    OTHERS
                </span>
            </div>
            <div class="detail">
                <div class="d">
                    COMPLIANCE
                </div>
                <span>
                    POWER SHOP
                </span>
                <span>
                    Distributor
                </span>
                <span>
                    NEWS&Events
                </span>
                <span>
                    BLOG
                </span>
                <span>
                    STORE LOCATOR
                </span>
            </div>
            <div class="detail">
                <div class="d">
                    SUPPORT
                </div>
                <span>
                    WARRANTY
                </span>
                <span>
                    CONTACT US
                </span>
                <span>
                    MANUALS&FIRMWARES
                </span>
                <span>
                    PRODUCTS VERIFICATION
                </span>
                <span>
                    FAQ
                </span>
            </div>
            <div class="detail">
                <div class="d">
                    CONTACT US
                </div>

                <span>
                    <div style="display: flex;align-items: center;">
                        <el-icon>
                            <Message />
                        </el-icon>
                        <span style="margin-left: 10px;color: white;">
                            media@vaporesso.com
                        </span>
                    </div>
                </span>
                <span>
                    <div style="display: flex;align-items: center;">
                        <el-icon>
                            <Message />
                        </el-icon>
                        <span style="margin-left: 10px;color: white;">
                            support@vaporesso.com
                        </span>
                    </div>
                </span>
                <span>
                    <div style="display: flex;align-items: center;">
                        <el-icon>
                            <Message />
                        </el-icon>
                        <span style="margin-left: 10px;color: white;">
                            anticf@smoorecig.com
                        </span>
                    </div>
                </span>
                <span>
                    <div style="display: flex;align-items: center;">
                        <el-icon>
                            <PhoneFilled />
                        </el-icon>
                        <span style="margin-left: 10px;color: white;">
                            +86 18925236359
                        </span>
                    </div>
                </span>
            </div>
        </div>

        <div style="margin-top: 50px;">
            <span>
                Vaporesso e-cigarette devices are intended for use with e-liquids, which may contain nicotine. Nicotine is
                an
                addictive chemical. Do not use with any other substances. Do not get on skin or in eyes. Do not drink. Store
                in
                original container and keep away from children and pets. In case of accidental ingestion, call the Poison
                Control
                Center at 1-800-222-1222.
                <br />
                This product is intended for adult users of nicotine-containing products, particularly current smokers or
                vapers.
                Underage sale is prohibited. Do not use this product if you:
                <br />
                • Are under the legal age of purchase
                <br />
                • Are pregnant or breastfeeding
                <br />
                • Have heart disease, stomach or duodenal ulcers, liver or kidney problems, throat disease, or difficulty
                breathing
                due to bronchitis, emphysema, or asthma
                <br />
                • Have an overactive thyroid or pheochromocytoma (a tumor of the adrenal gland that can affect blood
                pressure)
                <br />
                • Are taking certain medications, such as theophylline, ropinirole, or clozapine
                <br />
                <br />
                CALIFORNIA PROPOSITION 65 - Warning: This product can expose you to chemicals including formaldehyde and
                acetaldehyde which known to the State of California to cause cancer, and Nicotine, which is known to the
                State
                of
                California to cause birth defects or other reproductive harm. For more information go to
                <el-link type="success" href="https://www.p65warnings.ca.gov/"
                    target="_blank">www.P65Warnings.ca.gov</el-link>
                <br />
            </span>
            <br />
            <span>
                Copyright © 2022 Vaporesso. All rights reserved.
                <el-link type="success">Privacy</el-link> |
                <el-link type="success">Terms & Conditions</el-link> |
                <el-link type="success">Cookies policy</el-link>
            </span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const email = ref('')

</script>
<style lang="scss" scoped>
$gray :#7a7a7a;

.footer {
    background-color: #111111;
    height: calc(100vh - 64px);

    padding: {
        left: 150px;
        right: 150px;
    }

    .contract {
        display: flex;
        justify-content: space-evenly;
    }
}

p {
    color: white;
    font-size: 18px;
    margin-top: 50px;
}

.menu-detail {
    display: flex;
    flex-direction: row;
    margin-top: 60px;

    .detail+.detail {
        margin-left: 180px;
    }
}

.detail {
    color: white;
    display: flex;
    flex-direction: column;


    div {
        font-size: 20px;
    }

    div+span {
        margin-top: 15px;
    }

    span+span {
        margin-top: 10px;
    }
}

span {
    color: $gray;
    font-size: 15px;
    line-height: 25px;
}

:deep(.el-input__wrapper) {
    width: 280px;
    height: 38px;
    background-color: #333333;
    box-shadow: none;
    // border-radius: 1.56vw;


    &:hover {
        box-shadow: 0 0 0 1px #7a7a7a inset;
    }

    &.is-focus {
        box-shadow: 0 0 0 1px #7a7a7a inset;
    }
}

.sign-btn {
    display: flex;
    align-items: center;
    width: 280px;
    margin-top: 20px;

    .sign-up {
        width: 120px;
        height: 36px;
    }
}
</style>