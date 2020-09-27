<template>
    <div>

        <div class="bd-book-content m-con">
            <header class="block bd-book-header">
                <h3 class="title">电立方有限公司验收报告</h3>
                <p class="m-date">2020/9/27</p>
            </header>
            <div class="pdf" v-show="fileType === 'pdf'">
                <pdf :src="src"  :page="currentPage"  @num-pages="pageCount=$event" 
                    @page-loaded="currentPage=$event"  @loaded="loadPdfHandler"> 
                </pdf>
                <p class="arrow">
                    <a href="javascript:;" @click="changePdfPage(0)" class="turn" :class="{grey: currentPage==1}">上一页</a>
                    {{currentPage}} / {{pageCount}}
                    <a href="javascript:;" @click="changePdfPage(1)" class="turn" :class="{grey: currentPage==pageCount}">下一页</a>
                </p>
            </div>
        </div>




    </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
    components:{ pdf },
    data () {
        return {
            currentPage: 0, // pdf文件页码
            pageCount: 0, // pdf文件总页数
            fileType: 'pdf', // 文件类型
　　　　　   src: '/ppp.pdf', // pdf文件地址
        }
    },
    created () {
　　　　// 有时PDF文件地址会出现跨域的情况,这里最好处理一下
　　　　this.src = pdf.createLoadingTask(this.src)
　　},
    methods: {
        // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
        changePdfPage (val) {
            if (val === 0 && this.currentPage > 1) {
                this.currentPage--
            }
            if (val === 1 && this.currentPage < this.pageCount) {
                this.currentPage++
            }
        },

        // pdf加载时
        loadPdfHandler (e) {
            this.currentPage = 1 // 加载的时候先加载第一页
        },
        
    }
}
</script>

<style lang="scss" scoped>
.arrow {
    width: 100%;
    text-align: center;
    padding: 20px 0;
}
.m-date {
    color: #d5d5d5;
}
.m-con {
    border-radius: 10px;
    padding: 50px 20px;
    margin-bottom: 20px;
    background-color: #f7f7f7;
}
</style>
