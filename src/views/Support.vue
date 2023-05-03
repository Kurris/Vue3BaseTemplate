<template>
    <el-card class="box">
        <div class="container">
            <div class="content">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-headset"
                    viewBox="0 0 16 16">
                    <path
                        d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                </svg>
                <div>
                    <div class="title">
                        AFTER SALES
                    </div>
                    <p class="description">
                        For Warranty policy and customer service
                    </p>
                    <p class="learn">
                        Learn More >
                    </p>
                </div>
            </div>
            <div class="content">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                    class="bi bi-shield-check" viewBox="0 0 16 16">
                    <path
                        d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                    <path
                        d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                </svg>
                <div>
                    <div class="title">
                        PRODUCT AUTHENTICATION
                    </div>
                    <p class="description">
                        To verify your products are authentic or not
                    </p>
                    <p class="learn">
                        Learn More >
                    </p>
                </div>
            </div>
            <div class="content">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-download"
                    viewBox="0 0 16 16">
                    <path
                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path
                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
                <div>
                    <div class="title">
                        MANUALS & FIRMWARES
                    </div>
                    <p class="description">
                        To download the products information you need
                    </p>
                    <p class="learn">
                        Learn More >
                    </p>
                </div>
            </div>
        </div>
    </el-card>
</template>
 
<script setup lang="ts">
</script>
<style scoped lang="scss">
.box {
    background-color: black;
    border: 0px;
    border-radius: unset;

    padding: {
        left: 200px;
        right: 200px;
        // top: 100px;
        bottom: 100px;
    }

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #111111;
        padding: 50px;
        border-radius: 1.56vw;


        .content {
            display: flex;
            width: 400px;
        }
    }
}



.title {
    color: white;
    font-weight: bold;
    font-size: 18px;
}

svg {
    color: white;
    margin-right: 20px;
}


.description {
    color: #AAAAAA;
}

.learn {
    color: white;

    &:hover {
        color: #04da04;
        cursor: pointer;
    }
}
</style>