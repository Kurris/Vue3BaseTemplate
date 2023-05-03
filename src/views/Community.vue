<template>
    <div class="community">
        <div class="container">
            <el-row justify="center">
                <el-col :span="10" :xs="15">
                    <el-card class="card">
                        <el-image src="https://www.vaporesso.com/hubfs/imgs/2022/index/pc/ourbrand.jpg"></el-image>
                        <div class="info">
                            <h4>OUR BRAND</h4>
                            <span>Read More ></span>
                        </div>
                    </el-card>

                </el-col>
                <el-col :span="10" :xs="15">
                    <el-card class="card">
                        <el-image src=" https://www.vaporesso.com/hubfs/imgs/2022/index/pc/powershop.jpg"></el-image>
                        <div class="info">
                            <h4>POWERSHOP</h4>
                            <span>Read More ></span>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="10" :xs="15">
                    <el-card class="card">
                        <el-image src="https://www.vaporesso.com/hubfs/imgs/2022/index/pc/blog.jpg"></el-image>
                        <div class="info">
                            <h4>BLOG</h4>
                            <span>Read More ></span>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="10" :xs="15">
                    <el-card class="card">
                        <el-image src="https://www.vaporesso.com/hubfs/imgs/2022/index/pc/innovations.jpg"></el-image>
                        <div class="info">
                            <h4>INNOVATIONS</h4>
                            <span>Read More ></span>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
<style scoped lang="scss">
.community {
    background-color: black;


    padding: {
        left: 200px;
        right: 200px;
        // top: 100px;
        bottom: 100px;
    }

    .container {
        padding: 20px;

        .card {
            border: 0px;
            background-color: #111111;
            border-radius: 1.56vw;
            margin: 18px;

            .el-image {
                cursor: pointer;
                transition-property: all;
                transition-timing-function: ease-in-out;
                transition-delay: 0;
                transition-duration: 0.5s;

                &:hover {
                    transform: scale(1.1);
                }
            }

            .info {
                color: white;
                padding: 25px;

                h4 {
                    cursor: pointer;
                }

                span {
                    font-size: 10px;

                    &:hover {
                        color: #04da04;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}

:deep(.el-card__body) {
    padding: 0px;
}
</style>