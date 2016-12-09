<template>
<div>
    <h1>传输任务</h1>
    <!-- Upload tasks -->
    <h2>正在上传</h2>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th width="40%">文件</th>
                <th width="10%">类型</th>
                <th width="30%">上传进度</th>
                <th width="20%"></th>
            </tr>
            <tr>
                <td>abcde</td>
                <td>论文</td>
                <td>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width:50%;">70%</div>
                    </div>
                </td>
                <td>70% (7MB / 10MB)</td>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    <!-- Download tasks -->
    <h2>正在下载</h2>
    <hr />
</div>
</template>
<script>
export default {

};
</script>
<style>
</style>
