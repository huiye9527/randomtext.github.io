function scrollToSection(sectionId) {
    const section = document.querySelector(`.${sectionId}`);
    if (section) {
        // 获取目标位置
        const targetPosition = section.offsetTop;
        
        // 平滑滚动
        window.scrollTo({
            top: targetPosition - 20, // 留出一点空间
            behavior: 'smooth'
        });
    }
} 