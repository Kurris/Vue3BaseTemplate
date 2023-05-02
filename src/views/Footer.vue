<template>
    <div class="footer">
        <div class="contract">
            <div style="width: 400px;">
                <p>
                    SUBSCRIBE
                    Get the latest product launches, promotions, and contests delivered straight to your inbox for free!
                </p>
                <el-input></el-input>
                <el-button>SIGN UP</el-button>
            </div>
            <div>
                <p>
                    FOLLOW US
                    Are you social, releasing new products, or holding an event?
                    Follow us to find out more.
                </p>
            </div>
        </div>

        <div class="menu-detail">
            <template v-for="item in 4" :key="item">
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
            </template>
        </div>

        <p>
            Vaporesso e-cigarette devices are intended for use with e-liquids, which may contain nicotine. Nicotine is an
            addictive chemical. Do not use with any other substances. Do not get on skin or in eyes. Do not drink. Store in
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
            • Have an overactive thyroid or pheochromocytoma (a tumor of the adrenal gland that can affect blood pressure)
            <br />
            • Are taking certain medications, such as theophylline, ropinirole, or clozapine
            <br />
            <br />
            <br />
            CALIFORNIA PROPOSITION 65 - Warning: This product can expose you to chemicals including formaldehyde and
            acetaldehyde which known to the State of California to cause cancer, and Nicotine, which is known to the State
            of
            California to cause birth defects or other reproductive harm. For more information go to www.P65Warnings.ca.gov
            <br />

            Copyright © 2022 Vaporesso. All rights reserved. Privacy | Terms & Conditions | Cookies policy
        </p>
    </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.footer {
    background-color: #111111;
    height: calc(100vh - 64px);

    padding: {
        left: 100px;
        right: 100px;
    }

    .contract {
        display: flex;
        justify-content: space-between;
    }
}

p {
    color: white;
    font-size: 18px;
    margin-top: 100px;
}

.menu-detail {
    display: flex;
    flex-direction: row;
    margin-top: 100px;

    .detail+.detail {
        margin-left: 250px;
    }
}

.detail {
    color: white;
    display: flex;
    flex-direction: column;


    div {
        font-size: 20px;
    }

    span {
        color: #7a7a7a;
    }

    div+span {
        margin-top: 15px;
    }

    span+span {
        margin-top: 10px;
    }
}
</style>