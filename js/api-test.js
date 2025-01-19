document.addEventListener('DOMContentLoaded', () => {
    const typeSelect = document.getElementById('typeSelect');
    const formatSelect = document.getElementById('formatSelect');
    const testButton = document.getElementById('testApi');
    const apiUrlElement = document.getElementById('apiUrl');
    const apiResultElement = document.getElementById('apiResult');
    const copyButton = document.getElementById('copyResult');

    // 更新 URL 显示
    function updateApiUrl() {
        const type = typeSelect.value;
        const format = formatSelect.value;
        const url = `https://api.ahfi.cn/api/randomText?type=${type}&format=${format}`;
        apiUrlElement.textContent = url;
        return url;
    }

    // 测试 API
    async function testApi() {
        const url = updateApiUrl();
        testButton.disabled = true;
        testButton.textContent = '请求中...';
        
        try {
            const response = await fetch(url);
            const data = formatSelect.value === 'json' ? await response.json() : await response.text();
            apiResultElement.textContent = formatSelect.value === 'json' 
                ? JSON.stringify(data, null, 4) 
                : data;
        } catch (error) {
            apiResultElement.textContent = `请求失败: ${error.message}`;
        } finally {
            testButton.disabled = false;
            testButton.textContent = '测试接口';
        }
    }

    // 复制结果
    function copyResult() {
        const text = apiResultElement.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = copyButton.textContent;
            copyButton.textContent = '已复制！';
            setTimeout(() => {
                copyButton.textContent = originalText;
            }, 2000);
        });
    }

    // 事件监听
    typeSelect.addEventListener('change', updateApiUrl);
    formatSelect.addEventListener('change', updateApiUrl);
    testButton.addEventListener('click', testApi);
    copyButton.addEventListener('click', copyResult);

    // 初始化 URL 显示
    updateApiUrl();
}); 