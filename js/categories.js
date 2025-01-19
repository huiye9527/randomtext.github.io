document.addEventListener('DOMContentLoaded', () => {
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // 处理分类点击事件
            const categoryName = item.querySelector('span').textContent;
            console.log(`Selected category: ${categoryName}`);
            // 这里可以添加跳转或其他交互逻辑
        });
    });
}); 